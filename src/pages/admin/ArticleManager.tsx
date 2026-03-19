import { useState, useEffect } from "react";
import { Pencil, Trash2, Plus, X, Check } from "lucide-react";

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  readTime: string;
  externalUrl: string | null;
  isPublished: boolean;
  publishedAt: string;
}

const CATEGORIES = ["Sports", "Wellness", "Lifestyle"];

const empty = (): Omit<Article, "id" | "publishedAt"> => ({
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "Lifestyle",
  imageUrl: "",
  readTime: "3 min",
  externalUrl: "",
  isPublished: true,
});

export default function ArticleManager() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Article | null>(null);
  const [form, setForm] = useState(empty());
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/articles", { credentials: "include" });
      const data = await res.json() as Article[];
      setArticles(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  function openNew() {
    setEditing(null);
    setForm(empty());
    setError("");
    setShowForm(true);
  }

  function openEdit(a: Article) {
    setEditing(a);
    setForm({
      title: a.title,
      slug: a.slug,
      excerpt: a.excerpt,
      content: a.content ?? "",
      category: a.category,
      imageUrl: a.imageUrl,
      readTime: a.readTime,
      externalUrl: a.externalUrl ?? "",
      isPublished: a.isPublished,
    });
    setError("");
    setShowForm(true);
  }

  function autoSlug(title: string) {
    return title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  }

  async function save() {
    if (!form.title || !form.excerpt || !form.imageUrl) {
      setError("Title, excerpt, and image URL are required.");
      return;
    }
    setSaving(true);
    setError("");
    try {
      const payload = { ...form, slug: form.slug || autoSlug(form.title) };
      const url = editing ? `/api/admin/articles/${editing.id}` : "/api/admin/articles";
      const method = editing ? "PUT" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const d = await res.json() as { error: string };
        setError(d.error ?? "Save failed");
        return;
      }
      setShowForm(false);
      load();
    } finally {
      setSaving(false);
    }
  }

  async function remove(id: number) {
    if (!confirm("Delete this article?")) return;
    await fetch(`/api/admin/articles/${id}`, { method: "DELETE", credentials: "include" });
    load();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl text-foreground">Articles</h2>
        <button
          onClick={openNew}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest font-sans hover:bg-primary/90 transition-colors"
        >
          <Plus size={14} /> Add Article
        </button>
      </div>

      {/* Form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-sm shadow-xl w-full max-w-2xl my-8">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <h3 className="font-serif text-xl">{editing ? "Edit Article" : "New Article"}</h3>
              <button onClick={() => setShowForm(false)} className="text-foreground/40 hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">Title *</label>
                  <input
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value, slug: autoSlug(e.target.value) })}
                    className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    placeholder="Article title"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white"
                  >
                    {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">Excerpt *</label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                  rows={2}
                  className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
                  placeholder="Short description shown on the blog page"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">Full Article Content</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={6}
                  className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary resize-y"
                  placeholder="Full article text (leave blank if linking to an external article)"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">Cover Image URL *</label>
                <input
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary"
                  placeholder="https://example.com/photo.jpg"
                />
                {form.imageUrl && (
                  <img src={form.imageUrl} alt="Preview" className="mt-2 h-24 w-full object-cover rounded-sm opacity-80" />
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">Read Time</label>
                  <input
                    value={form.readTime}
                    onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                    className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    placeholder="4 min"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2">External Link (optional)</label>
                  <input
                    value={form.externalUrl ?? ""}
                    onChange={(e) => setForm({ ...form, externalUrl: e.target.value })}
                    className="w-full border border-border rounded-sm px-3 py-2 text-sm focus:outline-none focus:border-primary"
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={form.isPublished}
                  onChange={(e) => setForm({ ...form, isPublished: e.target.checked })}
                  className="accent-primary"
                />
                <label htmlFor="published" className="text-sm text-foreground/70">Published (visible on site)</label>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <div className="flex gap-3 pt-2">
                <button
                  onClick={save}
                  disabled={saving}
                  className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest font-sans hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Check size={14} /> {saving ? "Saving…" : "Save Article"}
                </button>
                <button onClick={() => setShowForm(false)} className="px-6 py-2.5 text-xs uppercase tracking-widest font-sans text-foreground/50 hover:text-foreground transition-colors">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* List */}
      {loading ? (
        <p className="text-foreground/40 text-sm">Loading…</p>
      ) : articles.length === 0 ? (
        <div className="text-center py-20 border border-dashed border-border rounded-sm">
          <p className="text-foreground/40 text-sm mb-4">No articles yet.</p>
          <button onClick={openNew} className="text-primary text-xs uppercase tracking-widest hover:underline">Add your first article</button>
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((a) => (
            <div key={a.id} className="flex items-start gap-4 bg-white border border-border rounded-sm p-4">
              {a.imageUrl && (
                <img src={a.imageUrl} alt={a.title} className="w-20 h-14 object-cover rounded-sm flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-widest text-primary font-sans">{a.category}</span>
                  {!a.isPublished && <span className="text-xs bg-foreground/10 text-foreground/50 px-2 py-0.5 rounded-full font-sans">Draft</span>}
                </div>
                <h3 className="font-serif text-lg text-foreground leading-tight truncate">{a.title}</h3>
                <p className="text-sm text-foreground/50 mt-1 line-clamp-1">{a.excerpt}</p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => openEdit(a)} className="p-2 text-foreground/40 hover:text-primary transition-colors">
                  <Pencil size={15} />
                </button>
                <button onClick={() => remove(a.id)} className="p-2 text-foreground/40 hover:text-red-500 transition-colors">
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
