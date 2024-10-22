import Image from "next/image";
import ajpg from "@/public/a.jpg";
export default function Home() {
  return (
    <div className="h-screen relative">
      <div className="h-full w-full">
        <Image
          src={ajpg}
          fill
          style={{
            objectFit: "cover",
          }}
          alt="Your Image Alt Text"
        />
      </div>
    </div>
  );
}
