import Image from "next/image";
import { Image as ImageType } from "@/types/Project";

interface ImagesProps {
  images: ImageType[];
}

export default function Carousel({ images }: ImagesProps) {
  return (
    <div>
      <div className='carousel rounded-box  h-[600px] w-full'>
        {images.map((image, idx) => {
          return (
            <Image
              id={`item${idx}`}
              src={image.url}
              key={image.alt}
              alt={image.alt}
              width={1920}
              height={1080}
              className='carousel-item w-full h-auto object-cover'
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
