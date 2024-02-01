import "../style/globals.css";
import "../style/home.css";

export const metadata = {
  title: "MonoFusion",
  description: "Everything you need to maintain NFT's.",
};

/**
 * The root element.
 * @param {JSX.Element} children - Elements, which shall be added to the Root
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
