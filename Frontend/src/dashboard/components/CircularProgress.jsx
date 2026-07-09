const CircularProgress = ({ value }) => {
  const radius = 53;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width="120" height="120">
      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#333"
        strokeWidth="8"
        fill="none"
      />

      <circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#B8B5FF"
        strokeWidth="8"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform="rotate(-90 60 60)"
      />

      <text
        x="60"
        y="56"
        textAnchor="middle"
        fill="white"
        fontSize="24"
        fontWeight="700"
      >
        {value}
      </text>

      <text
        x="60"
        y="76"
        textAnchor="middle"
        fill="#999"
        fontSize="12"
      >
        /100
      </text>
    </svg>
  );
};

export default CircularProgress;