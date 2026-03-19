import { useState } from "react";
import { useLocation } from "wouter";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = await res.json() as { error: string };
        setError(data.error ?? "Login failed");
      } else {
        setLocation("/admin/dashboard");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl text-foreground mb-2">
            Jada <em className="text-primary">Lee</em>
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-sans">Site Manager</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2 font-sans">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-border rounded-sm px-4 py-3 bg-white text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="jadarlee932@icloud.com"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-foreground/50 mb-2 font-sans">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-border rounded-sm px-4 py-3 bg-white text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-sm text-xs uppercase tracking-widest font-sans font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p className="text-center mt-8 text-xs text-foreground/30">
          <a href="/" className="hover:text-primary transition-colors">← Back to site</a>
        </p>
      </div>
    </div>
  );
}
