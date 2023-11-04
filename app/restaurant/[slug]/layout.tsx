import Header from "./components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seacrh - OpenTable",
  description: "Serach for your favourite restaurants",
};

export default function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <main>
      <Header title={params.slug} />
      <div className="w-full md:w-2/3 m-auto flex flex-col md:flex-row justify-between items-center md:items-start  -mt-11 ">
        {children}
      </div>
    </main>
  );
}
