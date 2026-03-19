import { useState, useEffect } from "react";
import { Trash2, Plus, X, Check } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  caption: string | null;
  alt: string;
  sortOrder: number;
}

export default function GalleryManager() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ url: "", caption: "", alt: "Gallery photo" });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/gallery", { credentials: "include" });
      const data = await res.json() as GalleryImage[];
      setImages(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function add() {
    if (!form.url) { setError("Image URL is required."); return; }
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ url: form.url, caption: form.caption, alt: form.alt || "Gallery photo" }),
      });
      if (!res.ok) {
        const d = await res.json() as { error: string };
        setError(d.error ?? "Add failed");
        return;
      }
      setForm({ url: "", caption: "", alt: "Gallery photo" });
      setShowForm(false);
      load();
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: number) {
    if (!confirm("Remove this photo?")) return;
    await fetch(`/api/admin/gallery/${id}`, { method: "DELETE", credentials: "include" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl text-foreground">Gallery</h2>
        <button
          onClick={() => { setShowForm(true); setError(""); }}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest font-sans hover:bg-primary/90 transition-colors"
        >
          <Plus size={14} /> Add Photo
        </button>
      </div>

      {/* Add form */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-sm shadow-xl w-full max-w-md">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="font-serif text-xl">Add Photo</h3>
              <button onClick={() => setShowForm(false)} className="text-foreground/40 hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">Image URL *</label>
                <input
                  value={form.url}
                  onChange={(e) => setForm({ ...form, url: e.target.value })}
                  className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary"
                  placeholder="https://example.com/photo.jpg"
                />
                {form.url && (
                  <img src={form.url} alt="Preview" className="mt-2 h-40 w-full object-cover rounded-sm opacity-80" />
                )}
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">Caption (optional)</label>
                <input
                  value={form.caption}
                  onChange={(e) => setForm({ ...form, caption: e.target.value })}
                  className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary"
                  placeholder="Describe the photo"
                />
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex gap-3">
                <button
                  onClick={add}
                  disabled={saving}
                  className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest font-sans hover:bg-primary/90 disabled:opacity-50 transition-colors"
                >
                  <Check size={14} /> {saving ? "Adding…" : "Add Photo"}
                </button>
                <button onClick={() => setShowForm(false)} className="px-6 py-2.5 text-xs uppercase tracking-widest font-sans text-foreground/50 hover:text-foreground transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <p className="text-foreground/40 text-sm">Loading…</p>
      ) : images.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-border rounded-sm">
          <p className="text-foreground/40 text-sm mb-4">No photos yet.</p>
          <button onClick={() => setShowForm(true)} className="text-primary text-xs uppercase tracking-widest hover:underline">Add your first photo</button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img) => (
            <div key={img.id} className="group relative aspect-square bg-border/30 rounded-sm overflow-hidden">
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
                  <p className="text-white text-xs truncate">{img.caption}</p>
                </div>
              )}
              <button
                onClick={() => remove(img.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
