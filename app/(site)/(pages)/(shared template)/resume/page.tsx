import Layout from "../../layout";
import Button from "@/app/components/button";

export default async function Page() {
  return (
    <Layout
      title='resume'
      phrase="You're welcome to view or download my resume. Or both">
      <section>
        <div className='mb-10 align-end'>
          <Button
            route='/Vadym_Popov_Frontend Developer.pdf'
            download={true}
            target='_blank'>
            Download
          </Button>
        </div>
        <div>
          <p className='text-primary text-2xl'>Preview:</p>
          <iframe
            title='Resume Preview'
            src='/Vadym_Popov_Frontend Developer.pdf'
            width='100%'
            height='600px'></iframe>
        </div>
      </section>
    </Layout>
  );
}
