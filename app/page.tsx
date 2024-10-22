import ajpg from "@/public/a.jpg";
import Hero from "./components/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return <Hero src={ajpg} alt="Home" content="汤帅" />;
}
