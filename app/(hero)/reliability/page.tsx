import cjpg from "@/public/c.jpg";
import Hero from "../../components/hero";

export const metadata = {
  title: "Reliability",
};
export default function Reliability() {
  return <Hero src={cjpg} alt="Reliability" content="高" sub="gao" />;
}
