import djpg from "@/public/d.jpg";
import Hero from "../components/hero";

export const metadata = {
  title: "Scale",
};
export default function Scale() {
  return <Hero src={djpg} alt="Scale" content="富帅" />;
}
