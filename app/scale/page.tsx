import Image from "next/image";
import djpg from "@/public/d.jpg";
export default function Scale() {
  return (
    <div className="h-screen">
      <Image
        src={djpg}
        fill
        style={{
          objectFit: "cover",
        }}
        alt="Your Image Alt Text"
      />
    </div>
  );
}
