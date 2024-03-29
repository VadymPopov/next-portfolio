import Image from "next/image";
import { Image as ImageType } from "@/types/Project";

interface ImagesProps {
  images: ImageType[];
}

export default function Carousel({ images }: ImagesProps) {
  return (
    <div className=''>
      <div className='carousel rounded-box w-full h-[450px]'>
        {images.map((image, idx) => {
          return (
            <Image
              id={`item${idx}`}
              src={image.url}
              key={image.alt}
              alt={image.alt}
              width={1920}
              height={1080}
              className='carousel-item w-full object-cover'
            />
          );
        })}
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        {images.map((image, idx) => {
          return (
            <a
              href={`#item${idx}`}
              key={`#item${idx}`}
              className='btn btn-xs glass bg-gray-950 text-zinc-50'>
              {idx + 1}
            </a>
          );
        })}
      </div>
    </div>
  );
}
