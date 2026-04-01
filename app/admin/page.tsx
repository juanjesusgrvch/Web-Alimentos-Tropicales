"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  collection,
  getDocs,
  setDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage, auth } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Trash2,
  Plus,
  LogOut,
  Save,
  Eye,
  Image as ImageIcon,
  Pencil,
  Upload,
  Truck,
  FileText,
  ChevronDown,
  ChevronUp,
  MapPin,
  Printer,
} from "lucide-react";

const MAX_FILE_SIZE = 30 * 1024 * 1024;

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  content: string;
}

interface OrdenLogistica {
  idDoc: string;
  id_orden: string;
  fecha_emision: string;
  fecha_carga: string;
  producto: string;
  kilos_total: string;
  destino: string;
  destinatario: string;
  remitente: string;
  cantidad_camiones: number;
  camiones?: any[];
  observaciones?: string;
  pdfUrl?: string;
  timestamp_sistema?: {
    seconds?: number;
    nanoseconds?: number;
    toDate?: () => Date;
  } | null;
}

function parseCalendarDate(value?: string) {
  if (!value) return null;

  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    const [day, month, year] = value.split("/").map(Number);
    return new Date(year, month - 1, day);
  }

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function getOrdenSortTime(orden: OrdenLogistica) {
  if (orden.timestamp_sistema?.toDate) {
    return orden.timestamp_sistema.toDate().getTime();
  }

  if (typeof orden.timestamp_sistema?.seconds === "number") {
    return orden.timestamp_sistema.seconds * 1000;
  }

  return (
    parseCalendarDate(orden.fecha_carga)?.getTime() ??
    parseCalendarDate(orden.fecha_emision)?.getTime() ??
    (parseInt(orden.id_orden) || 0)
  );
}

function formatFechaCarga(value?: string) {
  const parsed = parseCalendarDate(value);

  if (!parsed) {
    return "No informada";
  }

  return parsed.toLocaleDateString("es-AR");
}

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"noticias" | "logistica">(
    "logistica",
  );

  // Estados de Noticias
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [extraImg1, setExtraImg1] = useState("");
  const [extraImg2, setExtraImg2] = useState("");
  const [newPost, setNewPost] = useState<Partial<BlogPost>>({
    title: "",
    subtitle: "",
    category: "General",
    imageUrl: "",
    excerpt: "",
    content: "",
  });

  // Estados de Logística
  const [ordenes, setOrdenes] = useState<OrdenLogistica[]>([]);
  const [expandedOrder, setExpandedOrder] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"desc" | "asc">("desc");
  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsSnap = await getDocs(collection(db, "posts"));
        const fetchedPosts = postsSnap.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id }) as BlogPost,
        );
        fetchedPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        );
        setPosts(fetchedPosts);

        const ordenesSnap = await getDocs(collection(db, "ordenes_logistica"));
        const fetchedOrdenes = ordenesSnap.docs.map(
          (doc) => ({ ...doc.data(), idDoc: doc.id }) as OrdenLogistica,
        );
        fetchedOrdenes.sort((a, b) => getOrdenSortTime(b) - getOrdenSortTime(a));
        setOrdenes(fetchedOrdenes);
      } catch (error) {
        console.error("Error cargando datos:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        // Solo descargamos los datos si el usuario tiene las llaves
        fetchData();
      } else {
        setIsAuthenticated(false);
        setPosts([]);
        setOrdenes([]);
      }
      setIsCheckingAuth(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      setError("Credenciales incorrectas o usuario no encontrado.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  // --- FUNCIONES DE LOGÍSTICA ---
  const handleDeleteOrden = async (idDoc: string) => {
    if (
      confirm(
        "⚠️ ¿Estás seguro de eliminar esta orden? Esta acción no se puede deshacer.",
      )
    ) {
      try {
        await deleteDoc(doc(db, "ordenes_logistica", idDoc));
        setOrdenes(ordenes.filter((o) => o.idDoc !== idDoc));
      } catch (error) {
        alert("Error al eliminar la orden.");
      }
    }
  };
  // --- FUNCIONES DE NOTICIAS ---
  const handleDelete = async (id: string) => {
    if (confirm("¿Está seguro de que desea eliminar este post?")) {
      try {
        await deleteDoc(doc(db, "posts", id));
        setPosts(posts.filter((p) => p.id !== id));
      } catch (error) {
        alert("Hubo un error al eliminar la noticia.");
      }
    }
  };

  const handleEdit = (post: BlogPost) => {
    setNewPost(post);
    setEditingId(post.id);
    setIsCreating(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const postId = editingId || Date.now().toString();
    const postToSave = {
      id: postId,
      title: newPost.title || "Sin Título",
      subtitle: newPost.subtitle || "",
      category: newPost.category || "General",
      date: editingId
        ? posts.find((p) => p.id === editingId)?.date ||
          new Date().toISOString().split("T")[0]
        : new Date().toISOString().split("T")[0],
      imageUrl: newPost.imageUrl || "/placeholder.svg",
      excerpt: newPost.excerpt || "",
      content: newPost.content || "",
    };
    try {
      await setDoc(doc(db, "posts", postId), postToSave);
      let updatedPosts = editingId
        ? posts.map((p) => (p.id === editingId ? (postToSave as BlogPost) : p))
        : [postToSave as BlogPost, ...posts];
      setPosts(updatedPosts);
      setIsCreating(false);
      setEditingId(null);
      setNewPost({
        title: "",
        subtitle: "",
        category: "General",
        imageUrl: "",
        excerpt: "",
        content: "",
      });
      setExtraImg1("");
      setExtraImg2("");
    } catch (error) {
      alert("Hubo un error al guardar la noticia.");
    }
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (url: string) => void,
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_FILE_SIZE) {
      alert(
        `El archivo pesa ${(file.size / 1024 / 1024).toFixed(2)}MB. El límite máximo es de 30MB.`,
      );
      e.target.value = "";
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    const fileName = `blog-images/${Date.now()}-${Math.random().toString(36).substring(7)}.${file.name.split(".").pop()}`;
    const uploadTask = uploadBytesResumable(ref(storage, fileName), file);

    uploadTask.on(
      "state_changed",
      (snapshot) =>
        setUploadProgress(
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100),
        ),
      (error) => {
        alert("Hubo un error al subir la imagen.");
        setIsUploading(false);
        setUploadProgress(null);
        e.target.value = "";
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setter(downloadURL);
        setIsUploading(false);
        setUploadProgress(null);
        e.target.value = "";
      },
    );
  };

  const insertImageToContent = (url: string, imgNumber: number) => {
    if (!url) {
      alert("Primero pega una URL o sube una imagen");
      return;
    }
    setNewPost((prev) => ({
      ...prev,
      content:
        (prev.content || "") +
        `\n\n![Imagen insertada ${imgNumber}](${url})\n\n`,
    }));
  };

  // --- RENDERIZADOS ---
  if (isCheckingAuth) return null;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/20">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Acceso Administrativo</CardTitle>
            <CardDescription>
              Ingrese sus credenciales de seguridad para continuar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="admin-email"
                  className="text-sm font-medium leading-none"
                >
                  Correo electrÃ³nico
                </label>
                <Input
                  id="admin-email"
                  name="email"
                  type="email"
                  placeholder="Correo Electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="username"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "admin-login-error" : undefined}
                  required
                />
                <label
                  htmlFor="admin-password"
                  className="text-sm font-medium leading-none"
                >
                  Contrasena
                </label>
                <Input
                  id="admin-password"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "admin-login-error" : undefined}
                  required
                />
                {error && (
                  <p
                    id="admin-login-error"
                    className="text-sm text-destructive"
                  >
                    {error}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                Ingresar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/20 p-4 md:p-8 pt-24">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* CABECERA PRINCIPAL Y PESTAÑAS */}
        <div className="bg-card p-6 rounded-lg shadow-sm border space-y-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                Panel de Control ALTA
              </h1>
              <p className="text-muted-foreground">
                Administración centralizada del sitio.
              </p>
            </div>
            <Button onClick={handleLogout} variant="destructive" size="sm">
              <LogOut className="h-4 w-4 mr-2" /> Cerrar Sesión
            </Button>
          </div>

          <div className="flex gap-2 border-b pb-4">
            <Button
              variant={activeTab === "logistica" ? "default" : "outline"}
              onClick={() => setActiveTab("logistica")}
              className="flex-1 md:flex-none"
            >
              <Truck className="w-4 h-4 mr-2" /> Auditoría Logística
            </Button>
            <Button
              variant={activeTab === "noticias" ? "default" : "outline"}
              onClick={() => setActiveTab("noticias")}
              className="flex-1 md:flex-none"
            >
              <FileText className="w-4 h-4 mr-2" /> Blog y Noticias
            </Button>
          </div>
        </div>

        {/* VISTA 1: LOGÍSTICA */}
        {activeTab === "logistica" &&
          (() => {
            // Sistema de Filtros y Ordenamiento Dinámico
            let filteredOrdenes = [...ordenes];

            if (selectedMonth) {
              const [year, month] = selectedMonth.split("-");
              filteredOrdenes = filteredOrdenes.filter((o) => {
                if (!o.fecha_emision) return false;
                const [, m, y] = o.fecha_emision.split("/");
                return m === month && y === year;
              });
            }

            filteredOrdenes.sort((a, b) => {
              const timeA = getOrdenSortTime(a);
              const timeB = getOrdenSortTime(b);
              return sortOrder === "desc" ? timeB - timeA : timeA - timeB;
            });

            return (
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-bold text-slate-800">
                      Registro de Órdenes
                    </h2>
                    <Badge variant="secondary">
                      {filteredOrdenes.length} encontradas
                    </Badge>
                  </div>

                  {/* CONTROLES DE FILTRO (Calendario y Orden) */}
                  <div className="flex gap-2 items-center">
                    <Input
                      type="month"
                      id="logistica-month-filter"
                      name="selectedMonth"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="w-auto h-9"
                      aria-label="Filtrar ordenes por mes"
                      title="Filtrar por mes"
                    />
                    {selectedMonth && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedMonth("")}
                        className="h-9 px-2 text-xs"
                      >
                        Limpiar
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9"
                      onClick={() =>
                        setSortOrder((prev) =>
                          prev === "asc" ? "desc" : "asc",
                        )
                      }
                    >
                      {sortOrder === "desc"
                        ? "Mostrando: Más Recientes"
                        : "Mostrando: Más Antiguas"}
                    </Button>
                  </div>
                </div>

                {filteredOrdenes.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground bg-white/50 rounded-lg border border-dashed">
                    No hay órdenes que coincidan con los filtros.
                  </div>
                ) : (
                  filteredOrdenes.map((orden) => (
                    <Card
                      key={orden.idDoc}
                      className="overflow-hidden border-l-4 border-l-primary shadow-sm hover:shadow-md transition-all"
                    >
                      <div
                        className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer bg-white hover:bg-slate-50"
                        onClick={() =>
                          setExpandedOrder(
                            expandedOrder === orden.idDoc ? null : orden.idDoc,
                          )
                        }
                      >
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 text-primary font-bold px-3 py-2 rounded-md text-center min-w-[80px]">
                            <div className="text-xs uppercase opacity-70">
                              ORDEN
                            </div>
                            <div className="text-lg">#{orden.id_orden}</div>
                          </div>
                          <div>
                            <h3 className="font-bold text-lg text-slate-800">
                              {orden.producto}{" "}
                              <span className="text-slate-500 font-normal">
                                |{" "}
                                {parseFloat(orden.kilos_total).toLocaleString(
                                  "es-AR",
                                )}{" "}
                                kg
                              </span>
                            </h3>
                            <p className="text-sm text-slate-500 flex items-center mt-1">
                              <Truck className="w-3 h-3 mr-1" /> Remitente:{" "}
                              {orden.remitente}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-6">
                          <div className="text-right hidden md:block">
                            <p className="text-sm font-bold">
                              {orden.fecha_emision}
                            </p>
                            <p className="text-xs text-slate-500">
                              {orden.cantidad_camiones} Unidad(es)
                            </p>
                          </div>
                          <Button variant="ghost" size="icon">
                            {expandedOrder === orden.idDoc ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </Button>
                        </div>
                      </div>

                      {/* DETALLE EXPANDIDO */}
                      {expandedOrder === orden.idDoc && (
                        <div className="bg-slate-50 p-5 border-t border-slate-100 animate-in slide-in-from-top-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-sm">
                            <div className="space-y-2">
                              <p className="text-sm text-slate-500 flex items-center mt-1">
                                <MapPin className="w-3 h-3 mr-1" /> Destino:{" "}
                                {orden.destino}
                              </p>
                              <p>
                                <span className="font-bold text-slate-700">
                                  Destinatario:
                                </span>{" "}
                                {orden.destinatario}
                              </p>
                              <p>
                                <span className="font-bold text-slate-700">
                                  Fecha de Carga:
                                </span>{" "}
                                {formatFechaCarga(orden.fecha_carga)}
                              </p>
                            </div>
                            <div className="space-y-2">
                              {orden.observaciones &&
                                orden.observaciones !== "-" && (
                                  <div className="bg-amber-50 p-3 rounded border border-amber-200 text-amber-800">
                                    <strong>Observaciones:</strong>{" "}
                                    {orden.observaciones}
                                  </div>
                                )}
                            </div>
                          </div>

                          {orden.camiones && orden.camiones.length > 0 && (
                            <div className="mt-4">
                              <h4 className="font-bold text-slate-700 mb-3 border-b pb-2">
                                Detalle de Unidades
                              </h4>
                              <div className="grid grid-cols-1 gap-3">
                                {orden.camiones.map((camion, i) => {
                                  const pesoEnvaseMatch = camion.peso_envase
                                    ? camion.peso_envase.match(/\d+/)
                                    : null;

                                  const pesoNumerico = pesoEnvaseMatch
                                    ? parseInt(pesoEnvaseMatch[0], 10)
                                    : 0;

                                  const cantidadBolsas =
                                    pesoNumerico > 0
                                      ? Math.round(
                                          camion.kilos_unidad / pesoNumerico,
                                        )
                                      : 0;

                                  return (
                                    <div
                                      key={i}
                                      className="bg-white p-3 rounded border shadow-sm flex flex-col md:flex-row justify-between text-sm"
                                    >
                                      <div>
                                        <p className="font-bold text-primary">
                                          Unidad {i + 1} - {camion.kilos_unidad}{" "}
                                          kg
                                        </p>
                                        <p className="text-slate-600">
                                          Chofer: {camion.chofer_n} | Transp:{" "}
                                          {camion.trans_n}
                                        </p>
                                      </div>
                                      <div className="md:text-right mt-2 md:mt-0">
                                        <p className="font-mono bg-slate-100 px-2 py-1 rounded inline-block text-xs border">
                                          {camion.chasis} / {camion.acoplado}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-1">
                                          {camion.peso_envase} | Cantidad{" "}
                                          {cantidadBolsas}
                                        </p>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                          <div className="flex flex-wrap items-center justify-end gap-3 mt-2 mb-4 pt-4 border-t border-slate-100">
                            {orden.pdfUrl && (
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-white border-slate-200 text-slate-700 hover:bg-primary/5 hover:text-primary hover:border-primary/30 shadow-sm transition-all"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(orden.pdfUrl, "_blank");
                                }}
                                title="Ver PDF original"
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                <span>Descargar PDF</span>
                              </Button>
                            )}

                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 shadow-sm transition-all"
                              onClick={() => handleDeleteOrden(orden.idDoc)}
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              <span className="hidden sm:inline">Eliminar</span>
                            </Button>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))
                )}
              </div>
            );
          })()}

        {/* VISTA 2: NOTICIAS */}
        {activeTab === "noticias" && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-slate-800">
                Gestor de Contenido
              </h2>
              <Button
                onClick={() => {
                  setIsCreating(!isCreating);
                  setEditingId(null);
                  setNewPost({
                    title: "",
                    subtitle: "",
                    category: "General",
                    imageUrl: "",
                    excerpt: "",
                    content: "",
                  });
                }}
              >
                <Plus className="mr-2 h-4 w-4" /> Nuevo Post
              </Button>
            </div>

            {/* --- FORMULARIO DE CREAR NOTICIA --- */}
            {isCreating && (
              <Card className="border-primary/20 shadow-lg relative overflow-hidden">
                {isUploading && uploadProgress !== null && (
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-muted z-50">
                    <div
                      className="h-full bg-primary transition-all duration-300 ease-out"
                      style={{ width: `${uploadProgress}%` }}
                    />
                    <div className="absolute top-3 right-6 text-xs font-bold text-primary flex items-center gap-2">
                      <span className="animate-pulse">Subiendo...</span>{" "}
                      {uploadProgress}%
                    </div>
                  </div>
                )}
                <CardHeader className="bg-primary/5 border-b pt-8">
                  <CardTitle>
                    {editingId ? "Editar Noticia" : "Redactar Nueva Noticia"}
                  </CardTitle>
                  <CardDescription>
                    Usa formato Markdown en el cuerpo del texto.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSave} className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="post-title"
                          className="text-sm font-medium"
                        >
                          Título Principal
                        </label>
                        <Input
                          id="post-title"
                          name="title"
                          value={newPost.title}
                          onChange={(e) =>
                            setNewPost({ ...newPost, title: e.target.value })
                          }
                          autoComplete="off"
                          required
                          disabled={isUploading}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Categoría</label>
                        <label htmlFor="post-category" className="sr-only">
                          Categoria
                        </label>
                        <Input
                          id="post-category"
                          name="category"
                          value={newPost.category}
                          onChange={(e) =>
                            setNewPost({ ...newPost, category: e.target.value })
                          }
                          autoComplete="off"
                          required
                          disabled={isUploading}
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">Subtítulo</label>
                        <label htmlFor="post-subtitle" className="sr-only">
                          Subtitulo
                        </label>
                        <Input
                          id="post-subtitle"
                          name="subtitle"
                          value={newPost.subtitle}
                          onChange={(e) =>
                            setNewPost({ ...newPost, subtitle: e.target.value })
                          }
                          autoComplete="off"
                          placeholder="Un texto de apoyo debajo del título..."
                          disabled={isUploading}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="post-image-url"
                          className="text-sm font-medium"
                        >
                          Imagen Principal (Portada)
                        </label>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Input
                            id="post-image-url"
                            name="imageUrl"
                            type="url"
                            placeholder="URL de la imagen..."
                            value={newPost.imageUrl}
                            onChange={(e) =>
                              setNewPost({
                                ...newPost,
                                imageUrl: e.target.value,
                              })
                            }
                            autoComplete="off"
                            required
                            className="flex-1"
                            disabled={isUploading}
                          />
                          <div className="relative shrink-0 sm:w-28 h-10">
                            <Input
                              id="post-image-upload"
                              name="imageUpload"
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 opacity-0 cursor-pointer w-full z-10"
                              aria-label="Subir imagen principal"
                              onChange={(e) =>
                                handleImageUpload(e, (url) =>
                                  setNewPost({ ...newPost, imageUrl: url }),
                                )
                              }
                              disabled={isUploading}
                            />
                            <Button
                              type="button"
                              variant="secondary"
                              disabled={isUploading}
                              className="w-full h-full absolute top-0 left-0 pointer-events-none"
                            >
                              <Upload className="w-4 h-4 mr-2" /> Subir
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="post-excerpt"
                          className="text-sm font-medium"
                        >
                          Extracto
                        </label>
                        <Textarea
                          id="post-excerpt"
                          name="excerpt"
                          value={newPost.excerpt}
                          onChange={(e) =>
                            setNewPost({ ...newPost, excerpt: e.target.value })
                          }
                          autoComplete="off"
                          required
                          className="h-10"
                          disabled={isUploading}
                        />
                      </div>
                    </div>
                    <div className="border-t pt-6">
                      <label
                        htmlFor="post-content"
                        className="text-sm font-bold text-primary mb-2 block"
                      >
                        Cuerpo de la Noticia (Markdown)
                      </label>
                      <div className="bg-muted/50 p-5 rounded-lg mb-4 space-y-4 border">
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                          Herramienta: Insertar imágenes en el texto
                        </p>
                        <div className="flex flex-col md:flex-row gap-3">
                          <label
                            htmlFor="post-inline-image-url"
                            className="sr-only"
                          >
                            URL de imagen para insertar en el contenido
                          </label>
                          <Input
                            id="post-inline-image-url"
                            name="inlineImageUrl"
                            type="url"
                            placeholder="URL Imagen 1..."
                            value={extraImg1}
                            onChange={(e) => setExtraImg1(e.target.value)}
                            autoComplete="off"
                            className="h-10 flex-1"
                            disabled={isUploading}
                          />
                          <div className="flex gap-2 shrink-0">
                            <div className="relative h-10 w-28">
                              <Input
                                id="post-inline-image-upload"
                                name="inlineImageUpload"
                                type="file"
                                accept="image/*"
                                className="absolute inset-0 opacity-0 z-10"
                                aria-label="Subir imagen para insertar en el contenido"
                                onChange={(e) =>
                                  handleImageUpload(e, setExtraImg1)
                                }
                                disabled={isUploading}
                              />
                              <Button
                                type="button"
                                size="sm"
                                variant="outline"
                                className="w-full h-full absolute top-0 left-0 pointer-events-none"
                              >
                                <Upload className="w-4 h-4 mr-1" /> Subir
                              </Button>
                            </div>
                            <Button
                              type="button"
                              size="sm"
                              variant="secondary"
                              className="h-10"
                              onClick={() => insertImageToContent(extraImg1, 1)}
                              disabled={isUploading}
                            >
                              <ImageIcon className="w-4 h-4 mr-1" /> Insertar
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Textarea
                        id="post-content"
                        name="content"
                        value={newPost.content}
                        onChange={(e) =>
                          setNewPost({ ...newPost, content: e.target.value })
                        }
                        autoComplete="off"
                        required
                        placeholder="Escribe aquí tu noticia..."
                        className="min-h-[400px] font-mono text-sm"
                        disabled={isUploading}
                      />
                    </div>
                    <div className="flex justify-end gap-2 border-t pt-4">
                      <Button
                        type="button"
                        variant="ghost"
                        onClick={() => {
                          setIsCreating(false);
                          setEditingId(null);
                        }}
                        disabled={isUploading}
                      >
                        Cancelar
                      </Button>
                      <Button type="submit" size="lg" disabled={isUploading}>
                        <Save className="mr-2 h-5 w-5" />{" "}
                        {editingId ? "Guardar Cambios" : "Publicar Noticia"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="flex flex-col overflow-hidden">
                  <div className="aspect-video w-full bg-muted overflow-hidden relative">
                    <img
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 right-2">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-1">{post.title}</CardTitle>
                    <CardDescription>{post.date}</CardDescription>
                  </CardHeader>
                  <CardFooter className="justify-between mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(`/blog/${post.id}`, "_blank")}
                    >
                      <Eye className="h-4 w-4 mr-2" /> Ver
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleEdit(post)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
