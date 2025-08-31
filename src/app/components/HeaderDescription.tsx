export default function HeaderDescription({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='mb-8'>
      <h1 className='text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2'>
        {title}
      </h1>
      <p className='text-neutral-600 dark:text-neutral-400'>{description}</p>
    </div>
  );
}
