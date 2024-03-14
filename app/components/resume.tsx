"use client";

export default function Resume() {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Vadym_Popov_Frontend Developer.pdf";
    link.download = "Vadym_Popov_Frontend Developer.pdf";
    link.click();
  };

  return (
    <div>
      <button onClick={downloadResume}>Download Resume</button>
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
