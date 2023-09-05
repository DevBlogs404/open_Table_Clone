export default function Title({ name }: { name: string }) {
  return (
    <div className="border-b pb-6 mt-4">
      <h1 className="text-6xl font-bold">{name}</h1>
    </div>
  );
}
