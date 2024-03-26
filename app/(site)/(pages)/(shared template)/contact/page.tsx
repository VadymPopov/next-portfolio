import Layout from "../../layout";
import { SiGmail } from "react-icons/si";
import { FaMobileButton, FaLocationDot } from "react-icons/fa6";

export default async function Page() {
  return (
    <Layout title='contact' phrase='I am open to collaboration!'>
      <section className='py-12'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='lg:grid grid-cols-1 md:grid-cols-3 gap-10'>
            <div className=' mb-5 md:mb-10'>
              <a
                className='flex items-center  gap-4 mb-5'
                href='mailto:vadympopov.dev@gmail.com'>
                <SiGmail size='36px' />
                <h3 className='text-xl font-semibold mb-2'>Email</h3>
              </a>
              <span className='text-primary'>vadympopov.dev@gmail.com</span>
            </div>
            <div className=' mb-5 md:mb-10'>
              <a
                href='tel:+14372581793'
                className='flex items-center  gap-4 mb-5'>
                <FaMobileButton size='36px' />
                <h3 className='text-xl font-semibold mb-2'>Phone</h3>
              </a>
              <span className='text-primary'>+1 (437) 258-1793</span>
            </div>
            <div className=''>
              <div className='flex items-center  gap-4 mb-5'>
                <FaLocationDot size='36px' />
                <h3 className='text-xl font-semibold mb-2'>Location</h3>
              </div>
              <span className='text-primary'>Toronto, Canada</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
