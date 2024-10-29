import Image from "next/image";
import localFont from "next/font/local";
import Layout from "@/components/layout/Layout";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
//  <main className="min-h-screen min-w-screen relative bg-[#0a0a0a] flex justify-center items-start flex-col overflow-hidden">
  <Layout>
  <div className="max-w-7xl w-full">
    <h1 className="text-white">Hero</h1>
  </div>
  </Layout>
  //{/* <NavBar/>
  //<BackgroundBeams/>
//</main> */}
  );
}