"use client";

import Image from "next/image";

export default function Images({ images }: { images: string[] }) {
  return (
    <div>
      <h1 className="mt-10 mb-7 font-bold  text-3xl border-b pb-5">
        {images.length}
        {images.length > 1 ? " photos" : " photo"}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image) => {
          return (
            <Image
              key={image}
              src={image}
              alt="random"
              width={150}
              height={150}
              className="w-56 h-44 mr-1 mb-1"
            />
          );
        })}
        {/* <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" /> */}
      </div>
    </div>
  );
}
