import { Upload, FileText, X } from "lucide-react";
import { useRef, useState } from "react";
import { useInterview } from "../../report/hooks/useInterview";
import { useNavigate } from "react-router";

const ResumeUploadForm = ({ resume, setResume }) => {
  const { generateReport } = useInterview()
  const [jobDescription, setJobDescription] = useState("")
  const [selfDescription, setSelfDescription] = useState("")
  
  const navigate = useNavigate()

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Maximum file size is 2 MB.");
      return;
    }

    setResume(file);
  };

  const removeFile = () => {
    setResume(null);
    fileInputRef.current.value = "";
  };

  const handleGenerateInterviewReport = async () => {
    const resumeFile = fileInputRef.current.files[0]
    const data = await generateReport({resumeFile, selfDescription, jobDescription})
    if (data && data._id) navigate(`/reports/${data._id}`)
  }


  return (
    <div className="bg-[#181818] rounded-xl border border-zinc-800 p-8">
      {/* Upload Box */}
      <div
        onClick={() => fileInputRef.current.click()}
        className="border-2 border-dashed border-zinc-700 hover:border-green-500 transition rounded-xl p-4 h-40 cursor-pointer"
      >
        {!resume ? (
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-[#232323] flex items-center justify-center mx-auto">
              <Upload size={22} className="text-green-500" />
            </div>

            <h3 className="mt-5 text-md font-semibold">
              Click or Drag PDF to Upload
            </h3>

            <p className="text-zinc-500 text-xs mt-2">
              PDF files only • Maximum size 2 MB
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-between bg-[#111] rounded-lg border border-zinc-700 px-5 py-4 mt-5.5">
            <div className="flex items-center gap-4">
              <FileText className="text-blue-500" size={28} />

              <div>
                <p className="font-medium truncate max-w-60">{resume.name}</p>

                <p className="text-xs text-zinc-500">
                  {(resume.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                removeFile();
              }}
              className="p-2 rounded-full hover:bg-red-500/20 transition"
            >
              <X className="text-red-500" size={18} />
            </button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          hidden
          onChange={handleFileChange}
        />
      </div>

      {/* Self Description */}
      <div className="mt-8">
        <label className="block text-sm font-medium text-zinc-400 mb-2">
          Self Description
        </label>

        <textarea
          onChange={(e) => { setSelfDescription(e.target.value) }}
          name="selfDescription"
          id="selfDescription"
          rows={5}
          placeholder="Briefly describe yourself, your skills and career goals..."
          className="w-full rounded-lg bg-[#111] border border-zinc-700 p-4 outline-none focus:border-indigo-500 transition resize-none"
        />
      </div>

      {/* Job Description */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-zinc-400 mb-2">
          Target Job Description
        </label>

        <textarea
          onChange={(e) => { setJobDescription(e.target.value) }}
          name="jobDescription"
          id="jobDescription"
          rows={5}
          placeholder="Paste the complete job description here..."
          className="w-full rounded-lg bg-[#111] border border-zinc-700 p-4 outline-none focus:border-indigo-500 transition resize-none"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleGenerateInterviewReport}
        className="w-full mt-8 bg-indigo-600 hover:bg-indigo-800 transition py-3 rounded-lg font-semibold">
        Analyze Resume
      </button>
    </div>
  );
};

export default ResumeUploadForm;
