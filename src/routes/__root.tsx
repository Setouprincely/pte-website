import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "EliteScore PTE — Score High in PTE with Expert Guidance" },
      { name: "description", content: "Premium PTE preparation with expert coaches, real past questions and personalized study plans. Chat on WhatsApp to start." },
      { property: "og:title", content: "EliteScore PTE — Score High in PTE with Expert Guidance" },
      { name: "twitter:title", content: "EliteScore PTE — Score High in PTE with Expert Guidance" },
      { property: "og:description", content: "Premium PTE preparation with expert coaches, real past questions and personalized study plans. Chat on WhatsApp to start." },
      { name: "twitter:description", content: "Premium PTE preparation with expert coaches, real past questions and personalized study plans. Chat on WhatsApp to start." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/003e8c65-77b3-49b1-b163-43b3480094ba/id-preview-ff624c73--0de463e2-4c6b-4395-a772-ce260b41c089.lovable.app-1776964184658.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/003e8c65-77b3-49b1-b163-43b3480094ba/id-preview-ff624c73--0de463e2-4c6b-4395-a772-ce260b41c089.lovable.app-1776964184658.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
