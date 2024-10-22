import Image from "next/image";
import cjpg from "@/public/c.jpg";
export default function Reliability() {
  return (
    <div className="h-screen">
      <Image
        src={cjpg}
        fill
        style={{
          objectFit: "cover",
        }}
        alt="Your Image Alt Text"
      />
    </div>
  );
}
