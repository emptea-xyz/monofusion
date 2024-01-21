
import "../style/globals.css";
import "../style/home.css";

export const metadata = {
  title: "MonoFusion",
  description: "Everything you need to maintain NFT's.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
