import { Item } from "@prisma/client";
import React from "react";

export default function MenuCard({ item }: { item: Item }) {
  return (
    <div className="p-3 border rounded w-[49%] mb-3">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="font-light mt-1 text-sm">{item.description}</p>
      <p className="mt-7">{item.price}</p>
    </div>
  );
}
