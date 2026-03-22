import type { Metadata } from "next";
import "../styles/index.css";
import { LoadingProvider } from "../context/LoadingContext";
import ClientLayout from "../components/ClientLayout";

export const metadata: Metadata = {
  title: "Bhanuka Gihan | Full Stack Software Engineer ",
  description: "Bhanuka Gihan is a results-driven Software Engineer specializing in architecting scalable digital solutions, full-stack development, and enterprise SaaS architectures.",
  keywords: [
    "Software Engineer", 
    "Web Developer", 
    "Bhanuka Gihan",
    "Bhanuka99x",
    "bhanuka99x",
    "bhanuka",
    "gihan", 
    "Portfolio", 
    "Full Stack Developer", 
    "React Developer", 
    "Node.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "UI/UX Designer",
    "Frontend Engineer",
    "Backend Developer",
    "SaaS Architecture",
    "Sri Lanka",
    "Colombo",
    "Kegalle",
    "Oxymai",
    "Software Engineering Portfolio",
    "Modern Web Applications",
    "Performance Optimization",
    "Cloud Architecture"
  ],
  authors: [{ name: "Bhanuka Gihan" }],
  creator: "Bhanuka Gihan",
  publisher: "Bhanuka Gihan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Bhanuka Gihan | Integrated Software Engineer",
    description: "Explore the portfolio of Bhanuka Gihan, a Software Engineer focused on building modern, high-performance web applications.",
    url: "https://bhanuka99x.com", // Replace with actual domain if different
    siteName: "Bhanuka Gihan Portfolio",
    images: [
      {
        url: "/images/about.jpg",
        width: 1200,
        height: 630,
        alt: "Bhanuka Gihan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhanuka Gihan | Portfolio",
    description: "Software Engineer specializing in scalable digital solutions.",
    creator: "@bhanuka99x",
    images: ["/images/about.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Bhanuka Gihan",
    "jobTitle": "Integrated Software Engineer",
    "url": "https://bhanuka99x.com",
    "sameAs": [
      "https://github.com/bhanuka99x",
      "https://linkedin.com/in/bhanuka99x",
      "https://twitter.com/bhanuka99x"
    ],
    "description": "Bhanuka Gihan is a Software Engineer specializing in React, Node.js, and building scalable enterprise solutions.",
    "knowsAbout": ["Web Development", "Software Engineering", "React", "Next.js", "Node.js", "Cloud Architecture"]
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="">
        <LoadingProvider>
          <ClientLayout>{children}</ClientLayout>
        </LoadingProvider>
      </body>
    </html>
  );
}
