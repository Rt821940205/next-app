import ajpg from "@/public/a.jpg";
import Hero from "../components/hero";
import { Metadata } from "next";
import { Button } from "antd";

export const metadata: Metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <>
      <Button className="!absolute" type="primary">
        Button
      </Button>
      <Hero src={ajpg} alt="Home" content="汤神" sub="tang" />
    </>
  );
}
