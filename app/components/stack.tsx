import { getStack } from "@/sanity/sanity-utils";

export default async function Stack() {
  const stack = await getStack();

  return (
    <div className='logos flex flex-nowrap'>
      <ul className='logos-slide flex items-center justify-center'>
        {stack.map((item) => {
          return (
            <li key={item._id} className='group mx-8 '>
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center justify-center '>
                <i
                  className={`transition delay-400 group-hover:text-accent text-[48px] ${item.icon}`}></i>
                <span className='opacity-0 group-hover:opacity-100 text-accent transition delay-400'>
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <ul className='logos-slide flex items-center justify-center'>
        {stack.map((item) => {
          return (
            <li key={item._id} className='group mx-8 '>
              <a
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                className='flex flex-col items-center justify-center '>
                <i
                  className={`transition delay-400 group-hover:text-accent text-[48px] ${item.icon}`}></i>
                <span className='opacity-0 group-hover:opacity-100 text-accent transition delay-400'>
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
