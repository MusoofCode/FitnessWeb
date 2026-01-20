import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="rounded-2xl border border-border bg-card/60 p-8 text-center shadow-soft">
        <h1 className="font-display text-6xl tracking-wide">404</h1>
        <p className="mt-2 text-sm text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="mt-5 inline-flex text-sm text-primary underline underline-offset-4 hover:brightness-95">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
