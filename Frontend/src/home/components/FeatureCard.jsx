import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const FeatureCard = ({
  icon,
  title,
  description,
  buttonText,
  accent = "green",
}) => {
  const accentClasses = {
    green: {
      bg: "bg-green-500/10",
      text: "text-green-400",
      button: "text-green-400",
    },
    indigo: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-300",
      button: "text-indigo-300",
    },
  };

    const colors = accentClasses[accent];
    
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate('/register')
    }

  return (
    <div className="h-full flex flex-col bg-[#181818] border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
      <div
        className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center`}
      >
        <div className={colors.text}>{icon}</div>
      </div>

      <h3 className="mt-6 text-2xl font-bold leading-snug">{title}</h3>

      <p className="mt-4 text-sm leading-7 text-zinc-400 flex-1">
        {description}
      </p>

      <button onClick={handleButtonClick}
        className={`mt-8 flex items-center gap-2 text-sm uppercase tracking-wide font-semibold ${colors.button} hover:gap-3 transition-all`}
      >
        {buttonText}
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default FeatureCard;
