"use client";
import Button from "./button";

export default function Resume() {
  return (
    <div>
      <Button
        route='/Vadym_Popov_Frontend Developer.pdf'
        download={true}
        target='_blank'>
        Download
      </Button>
      <div style={{ marginTop: "20px" }}>
        <h2>Preview:</h2>
        <iframe
          title='Resume Preview'
          src='/Vadym_Popov_Frontend Developer.pdf'
          width='100%'
          height='700px'></iframe>
      </div>
    </div>
  );
}
