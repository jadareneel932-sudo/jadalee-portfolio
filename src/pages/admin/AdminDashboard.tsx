import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import ArticleManager from "./ArticleManager";
import GalleryManager from "./GalleryManager";

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [tab, setTab] = useState<"articles" | "gallery">("articles");
  const [username, setUsername] = useState("");
  const [checking, setChecking] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/me", { credentials: "include" });
      if (!res.ok) { setLocation("/admin/login"); return; }
      const data = await res.json() as { username: string };
      setUsername(data.username);
    } catch {
      setLocation("/admin/login");
    } finally {
      setChecking(false);
    }
  }, [setLocation]);

  useEffect(() => { checkAuth(); }, [checkAuth]);

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST", credentials: "include" });
    setLocation("/admin/login");
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground/40 font-sans text-sm">Loading…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="font-serif text-2xl text-foreground">
            Jada <em className="text-primary">Lee</em>
          </h1>
          <span className="text-xs uppercase tracking-widest text-foreground/30 font-sans hidden sm:block">Site Manager</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-foreground/40 font-sans hidden sm:block">{username}</span>
          <a href="/" className="text-xs uppercase tracking-widest text-foreground/40 hover:text-primary font-sans transition-colors">View Site</a>
          <button
            onClick={logout}
            className="text-xs uppercase tracking-widest text-foreground/40 hover:text-red-500 font-sans transition-colors"
          >
            Sign Out
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-border bg-white px-6">
        <div className="flex gap-8">
          {(["articles", "gallery"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`py-4 text-xs uppercase tracking-widest font-sans border-b-2 transition-colors ${
                tab === t
                  ? "border-primary text-primary"
                  : "border-transparent text-foreground/40 hover:text-foreground"
              }`}
            >
              {t === "articles" ? "Articles" : "Gallery"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        {tab === "articles" ? <ArticleManager /> : <GalleryManager />}
      </main>
    </div>
  );
}
