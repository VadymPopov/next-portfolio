"use client";
import Button from "./button";

export default function Resume() {
  return (
    <div>
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
    </div>
  );
}
