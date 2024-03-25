export default async function Layout({
  title,
  phrase,
  children,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  phrase: string;
}>) {
  return (
    <div>
      <h1 className='text-end bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-4xl drop-shadow font-semibold mb-10 md:p-2 pt-10 uppercase'>
        {title}
      </h1>
      <p className='text-lg text-secondary text-justify mb-5'>{phrase}</p>
      <div>{children}</div>
    </div>
  );
}
