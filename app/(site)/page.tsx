import Button from "@/app/components/button";

export default function Home() {
  return (
    <div className='grid grid-cols-3 gap-2 items-end'>
      <div className='pt-36 pl-28  col-span-2'>
        <span className='uppercase tracking-[0.3rem] font-semibold mb-2 text-primary'>
          Vadym Popov
        </span>
        <h1 className='text-8xl font-semibold flex flex-wrap  text-secondary'>
          <span>Frontend</span>
          <span>Developer</span>
        </h1>

        <p className='mt-3 text-xl bg-gradient-to-t from-yellow-400 to-blue-500 bg-clip-text text-transparent'>
          Добрий день everybody!
        </p>
      </div>
      <div>
        <Button route='/projects'>View Projects</Button>
      </div>
    </div>
  );
}
