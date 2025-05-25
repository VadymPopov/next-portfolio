import Stack from "@/app/components/stack";
import Image from "next/image";
import Button from "@/app/components/button";

export default async function Page() {
  return (
    <>
      <h1 className='text-end bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-4xl drop-shadow font-semibold mb-10 md:p-2 pt-10 uppercase'>
        about
      </h1>
      <div>
        <div className='grid md:gap-10 md:grid-cols-2 xl:grid-cols-3 lg:gap-20 mb-10'>
          <div className='text-justify text-lg text-secondary mb-5 col-span-1 xl:col-span-2'>
            <p className='mb-5'>
              Vadym on the mic, a proud Ukrainian living his dream in Toronto!
              As a freelance developer, I&apos;m always on the lookout for new
              opportunities and actively learning technologies like Next.js —
              this very website was crafted with it!
            </p>
            <p className='mb-5'>
              I love building user-friendly, responsive interfaces and solving
              real-world problems with clean, efficient code. I believe in
              continuous learning, collaborating with great teams, and
              delivering high-quality digital experiences.
            </p>
            <p className='mb-5'>
              When I was a child, I was obsessed with LEGO, and now coding feels
              like a grown-up version of that. I really enjoy watching how
              pieces of code and components come together to create a whole
              infrastructure. And the best feeling in the world? Seeing people
              use the websites I&apos;ve built and knowing they&apos;re helping
              make their lives easier and more enjoyable.
            </p>
            <p className='mb-5'>
              During my downtime, I&apos;m deeply passionate about sports.
              Officiating basketball games helps me improve my stress
              resistance, and I&apos;m an active player myself, enjoying both
              basketball and tennis. Yoga is also a regular part of my routine,
              helping me stay centered and focused.
            </p>
            <p className='mb-20'>
              I&apos;m constantly honing my Spanish skills with a cheerful
              &quot;¡Hola amigos!&quot; and enjoy exploring Toronto&apos;s
              vibrant coffee scene when I&apos;m not coding or on the court.
              Stay tuned!
            </p>
            <div>
              <Button route='/contact'>Contact me</Button>
            </div>
          </div>

          <Image
            src={"/Vadym.jpg"}
            alt='vadym_photo'
            width={326}
            height={398}
            className='max-w-full rounded-lg shadow-2xl  col-span-1'
          />
        </div>
        <Stack />
      </div>
    </>
  );
}
