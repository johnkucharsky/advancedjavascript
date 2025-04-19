/* eslint-env node */
import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./global.css";

export const metadata = {
  metadataBase: new URL("https://www.advancedjavascript.org"),
  title: {
    template: "%s - Advanced JavaScript.",
  },
  description:
    "Master advanced JavaScript with practical examples, real-world techniques, and in-depth explanations.",
  applicationName: "Advanced JavaScript",
  generator: "Next.js",
  appleWebApp: {
    title: "Advanced JavaScript",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://www.advancedjavascript.org",
  },
  openGraph: {
    title: "Advanced JavaScript",
    description:
      "Master advanced JavaScript with practical examples, real-world techniques, and in-depth explanations.",
    url: "https://www.advancedjavascript.org",
    siteName: "Advanced JavaScript",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Advanced JavaScript Logo",
      },
    ],
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <div>Advanced JavaScript</div>{" "}
          <div style={{ opacity: "60%", fontSize: "13px" }}>
            Real-world knowledge
          </div>
        </div>
      }
      projectLink={"https://github.com/JohnKucharsky/advancedjavascript"}
    />
  );

  const pageMap = await getPageMap();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          navbar={navbar}
          docsRepositoryBase="https://github.com/JohnKucharsky/advancedjavascript/src"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink={null}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
