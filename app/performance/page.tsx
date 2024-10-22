import Image from "next/image";
import bjpg from "@/public/b.jpg";
export default function Performance() {
  return (
    <div className="h-screen">
      <Image
        src={bjpg}
        fill
        style={{
          objectFit: "cover",
        }}
        alt="Your Image Alt Text"
      />
    </div>
  );
}
