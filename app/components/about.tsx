import Stack from "./stack";
import Image from "next/image";
import Button from "./button";

export default function About() {
  return (
    <div>
      <div className='grid grid-cols-3 gap-20 mb-10'>
        <div className='text-justify text-lg text-secondary mb-5 col-span-2'>
          <p className='mb-5'>
            Vadym on the mic, a proud Ukrainian living his dream in Toronto! As
            a freelance developer, I&apos;m always on the lookout for new
            opportunities and actively learning technologies like Next.js—this
            very website was crafted with it!
          </p>
          <p className='mb-20'>
            During my downtime, I&apos;m deeply passionate about sports.
            Officiating basketball games helps me improve my stress resistance,
            and I&apos;m an active player myself, enjoying both basketball and
            tennis. Yoga is also a regular part of my routine, and I&apos;m
            constantly honing my Spanish skills with a cheerful &quot;¡Hola
            amigos!&quot;
          </p>
          <div className=''>
            <Button route='/contact'>Contact me</Button>
          </div>
        </div>
        <Image
          src={"/photo_vadym.jpg"}
          alt='vadym_photo'
          width={326}
          height={398}
          className='max-w-md  rounded-lg shadow-2xl    col-span-1'
        />
      </div>
      <Stack />
    </div>
  );
}
