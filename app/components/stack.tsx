import { getStack } from "@/sanity/sanity-utils";

export default async function Stack() {
  const stack = await getStack();

  return (
    <ul className='flex items-center justify-center gap-6'>
      {stack.map((item) => {
        return (
          <li key={item._id} className='group'>
            <a
              href={item.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex flex-col items-center justify-center'>
              <i
                className={item.icon}
                style={{ fontSize: "36px", color: "black" }}></i>
              <span className='opacity-0 group-hover:opacity-100 text-gray-500'>
                {item.name}
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
