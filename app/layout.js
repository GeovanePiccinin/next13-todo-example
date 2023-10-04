import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next13 Todo Test",
  description: "Test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h2>Conteúdo da página</h2>
        {children}
        <footer>
          <h3>Rodapé da página</h3>
        </footer>
      </body>
    </html>
  );
}
