import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-serif font-bold text-primary mb-6">404</h1>
        <h2 className="text-3xl font-serif mb-4">Page Not Found</h2>
        <p className="mt-2 text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
