export default function HeaderDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
