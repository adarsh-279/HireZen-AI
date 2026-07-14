import { FileText } from "lucide-react";

const ResumePreview = ({ resume }) => {
  return (
    <div className="bg-[#181818] rounded-xl border border-zinc-800 p-8">
      <h2 className="text-xl font-semibold mb-6">Resume Preview</h2>

      <div className="h-150 border border-dashed border-zinc-700 rounded-lg overflow-hidden">
        {!resume ? (
          <div className="flex flex-col items-center justify-center h-full">
            <FileText size={60} className="text-zinc-600" />

            <p className="mt-4 text-zinc-500">
              Upload a PDF to preview it here.
            </p>
          </div>
        ) : (
          <iframe
            title="Resume Preview"
            src={URL.createObjectURL(resume)}
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
