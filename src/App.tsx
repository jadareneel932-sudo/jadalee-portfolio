import { useEffect } from "react";
import { Switch, Route, Router as WouterRouter, Redirect, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/lib/theme";
import { LanguageProvider } from "@/lib/i18n";
import { CustomCursor } from "@/components/CustomCursor";
import { BackToTop } from "@/components/BackToTop";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import About from "@/pages/About";
import Photography from "@/pages/Photography";
import EventPlanning from "@/pages/EventPlanning";
import Interviews from "@/pages/Interviews";
import NotFound from "@/pages/not-found";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin/AdminDashboard";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

const queryClient = new QueryClient();

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <BackToTop />
      <Navbar />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin">
        <Redirect to="/admin/login" />
      </Route>
      <Route>
        <PublicLayout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/photography" component={Photography} />
            <Route path="/event-planning" component={EventPlanning} />
            <Route path="/interviews" component={Interviews} />
            <Route component={NotFound} />
          </Switch>
        </PublicLayout>
      </Route>
    </Switch>
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
