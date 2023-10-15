"use client";

import FullStar from "../../public/full-star.png";
import HalfStar from "../../public/half-star.png";
import EmptyStar from "../../public/empty-star.png";
import { Review } from "@prisma/client";
import { generateReviewRating } from "@/utils/generateReviewRating";
import Image from "next/image";

export default function Star({
  reviews,
  rating,
}: {
  reviews: Review[];
  rating?: number;
}) {
  const reviewRating = rating || generateReviewRating(reviews);

  const renderStars = () => {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((reviewRating - i).toFixed(1));
      if (difference >= 1) stars.push(FullStar);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(EmptyStar);
        else if (difference > 0.2 && difference <= 0.6) stars.push(HalfStar);
        else stars.push(FullStar);
      } else stars.push(EmptyStar);
    }

    return stars.map((star) => {
      return (
        <Image src={star} alt="" key={Math.random()} className="w-4 h-4 mr-1" />
      );
    });
  };

  return <div className="flex items-center">{renderStars()}</div>;
}
