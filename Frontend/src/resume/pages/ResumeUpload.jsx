import { useState } from "react";

import Navbar from "../../ui/components/Navbar";
import Footer from "../../ui/components/Footer";

import ResumeHero from "../components/ResumeHero";
import ResumeUploadForm from "../components/ResumeUploadForm";
import ResumePreview from "../components/ResumePreview";

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white flex flex-col">
      <Navbar />

      <main className="flex-1 px-6 py-10 pt-30">
        <div className="max-w-6xl mx-auto">
          <ResumeHero />

          <div className="mt-10 grid lg:grid-cols-2 gap-8">
            <ResumeUploadForm resume={resume} setResume={setResume} />

            <ResumePreview resume={resume} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumeUpload;
