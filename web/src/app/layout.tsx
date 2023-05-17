import "./globals.css";
import { Roboto_Flex, Bai_Jamjuree } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const jamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-jamjuree",
});

export const metadata = {
  title: "Capsula do Tempo",
  description: "Escreva suas memórias e guarde para o futuro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${jamjuree.variable} bg-gray-900 font-roboto text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
