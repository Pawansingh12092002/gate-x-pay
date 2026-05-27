import "../css/index.css";
import "../css/App.css";
import Footer from "../component/Footer/Footer";

export const metadata = {
  title: "Gate X Pay - Secure Payment Solutions",
  description: "Whether you're looking for secure tokenization services, scalable payment infrastructure, merchant onboarding, or fintech integrations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body>
        <div id="root">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
