import Image, { StaticImageData } from "next/image";

interface IProps {
  src: StaticImageData;
  alt: string;
  content: string;
  sub: string;
}
export default function hero(props: IProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.src}
          fill
          style={{
            objectFit: "cover",
          }}
          alt={props.alt}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950"></div>
      </div>
      <div className="flex justify-center pt-48">
        <h2 className="text-white text-6xl">{props.sub}</h2>
        <h1 className="text-white text-6xl">{props.content}</h1>
      </div>
    </div>
  );
}
