import bjpg from "@/public/b.jpg";
import Hero from "../../components/hero";

export const metadata = {
  title: "Performance",
};
export default function Performance() {
  return <Hero src={bjpg} alt="Performance" content="是个" />;
}
