import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div>
      <h1 className="mt-10 mb-7 font-bold  text-3xl border-b pb-5">
        what {reviews.length} {reviews.length > 1 ? "people" : "person"} are
        saying
      </h1>

      <div>
        {/* review card */}
        {reviews.map((review) => {
          return <ReviewCard review={review} key={review.id} />;
        })}
        {/* review card */}
      </div>
    </div>
  );
}
