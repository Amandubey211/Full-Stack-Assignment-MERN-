import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string; // Make description optional
  keywords?: string; // Make keywords optional
  author?: string; // Make author optional
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
  keywords,
  author,
}: LayoutProps) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {author && <meta name="author" content={author} />}
        <title>{title}</title>
      </Helmet>
      <main style={{ minHeight: "100vh" }}>
        <Toaster />
        {children}
      </main>
    </div>
  );
};

export default Layout;
