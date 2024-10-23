"use client";
import Image from "next/image";
import { photos } from "@/app/data";

interface IProps {
  params: {
    id: string;
  };
}
export default function Page({ params }: IProps) {
  const photo = photos.find((item) => item.id === +params.id)!;
  return (
    <div className="container amx-auto pt-8 mx-auto">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={400}
        height={400}
        className="rounded-lg block"
      />
      <div className="border-2 border-dashed border-gray-500 rounded-lg p-3 mt-6 leading-6">
        <p>
          <strong>Title:</strong>
          {photo.price}
        </p>
        <p>
          <strong>Price:</strong>
          {photo.price}
        </p>
      </div>
    </div>
  );
}
