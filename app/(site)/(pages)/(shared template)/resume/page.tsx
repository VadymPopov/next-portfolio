import Button from "@/app/components/button";

export default async function Page() {
  return (
    <>
      <h1 className='text-end bg-gradient-to-r from-orange-400 via-red-500 to-purple-500 bg-clip-text text-transparent text-3xl md:text-4xl drop-shadow font-semibold mb-10 md:p-2 pt-10 uppercase'>
        resume
      </h1>
      <p className='text-lg text-secondary text-justify mb-5'>
        You&apos;re welcome to view or download my resume. Or both
      </p>
      <section>
        <div className='mb-10 align-end'>
          <Button
            route='/Vadym Popov - Frontend Developer.pdf'
            download={true}
            target='_blank'>
            Download
          </Button>
        </div>
        <div className='w-full h-screen'>
          <p className='text-primary text-2xl'>Preview:</p>
          <iframe
            title='Resume Preview'
            src='/Vadym Popov - Frontend Developer.pdf'
            className='w-full max-h-full h-[600px] md:h-screen'
          />
        </div>
      </section>
    </>
  );
}
