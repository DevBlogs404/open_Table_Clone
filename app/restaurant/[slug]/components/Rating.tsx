import Star from "@/app/components/Star";
import { generateReviewRating } from "@/utils/generateReviewRating";
import { Review } from "@prisma/client";

export default function Rating({ reviews }: { reviews: Review[] }) {
  const countRating = generateReviewRating(reviews);

  return (
    <div className="flex items-center">
      <div className="flex items-center my-2 ratings">
        <Star reviews={reviews} />
        <p className="ml-3 text-sm">{countRating.toFixed(1)}</p>
      </div>
      <div>
        <p className="text-sm ml-4">
          {reviews.length}
          {reviews.length > 1 ? " reviews" : " review"}
        </p>
      </div>
    </div>
  );
}
