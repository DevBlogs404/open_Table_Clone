import Image from "next/image";

export default function Images() {
  return (
    <div>
      <h1 className="mt-10 mb-7 font-bold  text-3xl border-b pb-5">7 photos</h1>
      <div className="flex flex-wrap">
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
        <Image src="" alt="" className="w-56 h-44 mr-1 mb-1" />
      </div>
    </div>
  );
}
