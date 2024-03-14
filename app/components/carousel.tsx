import Image from "next/image";
import { Image as ImageType } from "@/types/Project";

interface ImagesProps {
  images: ImageType[];
}

export default function Carousel({ images }: ImagesProps) {
  return (
    <div className='w-64 carousel rounded-box cursor-move'>
      {images.map((image) => {
        return (
          <div className='carousel-item w-full' key={image.alt}>
            <Image
              src={image.url}
              alt={image.alt}
              width={1920}
              height={1080}
              className='w-full border-[1px] border-gray-700 object-cover rounded-xl'
            />
          </div>
        );
      })}
    </div>
  );
}
