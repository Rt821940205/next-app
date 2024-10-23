"use client";
import React from "react";
import { photos } from "@/app/data";
import Image from "next/image";
//报错：https://nextjs.org/docs/messages/next-router-not-mounted   next/router  next/navigation
import { useRouter } from "next/navigation";

interface IProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: IProps) {
  const photo = photos.find((item) => item.id === +params.id)!;
  const router = useRouter();
  return (
    <div
      className="flex justify-center items-center fixed inset-0 bg-gray-500/[.8]"
      onClick={router.back}
    >
      <Image
        onClick={(e) => e.stopPropagation()}
        src={photo.src}
        alt={photo.alt}
        width={400}
        height={400}
        className="rounded-lg"
      />
    </div>
  );
}
