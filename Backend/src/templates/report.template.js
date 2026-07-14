export function generateReportHTML(report) {

  const formattedDate = new Date(report.createdAt).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Map skill gaps utilizing severity tags instead of missing reason fields
  const skillGapsHTML = report.skillGaps
    .map((skill) => {
      const severityColor =
        skill.severity === "high"
          ? "#EF4444"
          : skill.severity === "medium"
            ? "#F59E0B"
            : "#10B981";
      return `
        <li>
          <strong>${skill.skill}</strong> 
          <span style="background: ${severityColor}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin-left: 8px; text-transform: uppercase;">
            ${skill.severity} Priority
          </span>
        </li>`;
    })
    .join("\n");

  // Map technical questions
  const techQuestionsHTML = report.technicalQuestions
    .map(
      (q) => `
      <div class="question">
        <h3>Q: ${q.question}</h3>
        <p style="color: #666; font-style: italic; font-size: 14px; margin-top: 2px;">Intention: ${q.intention}</p>
        <p style="margin-top: 8px;"><strong>Ideal Answer:</strong></p>
        <p>${q.answer}</p>
      </div>
    `,
    )
    .join("\n");

  // Map behavioral questions
  const behavioralQuestionsHTML = report.behavioralQuestions
    .map(
      (q) => `
      <div class="question">
        <h3>Q: ${q.question}</h3>
        <p style="color: #666; font-style: italic; font-size: 14px; margin-top: 2px;">Intention: ${q.intention}</p>
        <p style="margin-top: 8px;"><strong>Ideal Answer:</strong></p>
        <p>${q.answer}</p>
      </div>
    `,
    )
    .join("\n");

  // Map roadmap tasks array correctly into a sub-list
  const preparationPlanHTML = report.preparationPlan
    .map(
      (day) => `
      <li style="margin-bottom: 20px;">
        <strong style="color: #4338CA; font-size: 16px;">Day ${day.day}: ${day.focus}</strong>
        <ul style="padding-left: 20px; margin-top: 8px; list-style-type: circle;">
          ${day.tasks.map((task) => `<li>${task}</li>`).join("")}
        </ul>
      </li>
    `,
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HireZen AI Interview Report - ${report.title}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }
    body {
      background: #f5f5f5;
      color: #222;
      padding: 40px;
    }
    .container {
      max-width: 900px;
      margin: auto;
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 5px 20px rgba(0,0,0,.08);
    }
    .header {
      background: #4338CA;
      color: white;
      padding: 35px;
    }
    .header h1 {
      font-size: 34px;
    }
    .header p {
      margin-top: 10px;
      opacity: .9;
    }
    .section {
      padding: 30px 40px;
      border-bottom: 1px solid #eee;
    }
    .section h2 {
      color: #4338CA;
      margin-bottom: 18px;
    }
    .score {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background: #4338CA;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 34px;
      font-weight: bold;
      margin: 20px auto;
    }
    .preserve-whitespace {
      white-space: pre-wrap;
      line-height: 1.6;
    }
    .question {
      margin-bottom: 25px;
      background: #fafafa;
      padding: 15px;
      border-left: 4px solid #4338CA;
      border-radius: 4px;
    }
    .question h3 {
      font-size: 16px;
      color: #111827;
    }
    .question p {
      line-height: 1.6;
    }
    ul {
      padding-left: 22px;
    }
    li {
      margin: 8px 0;
    }
    .footer {
      padding: 30px;
      text-align: center;
      color: #888;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>HireZen AI Report</h1>
      <p>Target Role: ${report.title}</p>
      <p>Generated on ${formattedDate}</p>
    </div>

    <div class="section">
      <h2>Overall Match Score</h2>
      <div class="score">${report.matchScore}/100</div>
    </div>

    <div class="section">
      <h2>Job Description</h2>
      <p class="preserve-whitespace">${report.jobDescription}</p>
    </div>

    <div class="section">
      <h2>Candidate Summary</h2>
      <p class="preserve-whitespace">${report.selfDescription}</p>
    </div>

    <div class="section">
      <h2>Skill Gap Analysis</h2>
      <ul style="list-style-type: square;">
        ${skillGapsHTML}
      </ul>
    </div>

    <div class="section">
      <h2>Technical Interview Questions</h2>
      ${techQuestionsHTML}
    </div>

    <div class="section">
      <h2>Behavioral Interview Questions</h2>
      ${behavioralQuestionsHTML}
    </div>

    <div class="section">
      <h2>7-Day Preparation Roadmap</h2>
      <ul style="list-style-type: none; padding-left: 0;">
        ${preparationPlanHTML}
      </ul>
    </div>

    <div class="footer">
      Generated using HireZen AI
    </div>
  </div>
</body>
</html>`;
}
