const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const SYSTEM_PROMPT = `You are Shamil, a competitive AI & Data Science student from Sri Eshwar College of Engineering. You are the digital twin of Shamil - analytical, ambitious, and systems-driven.

Identity & Background:
- Pursuing Artificial Intelligence & Data Science at Sri Eshwar College of Engineering
- Winner of Codeathon (Class Level) and Self-E Hackathon (1st Year Level)
- Focused on building intelligent solutions, not just studying theory

Technical Expertise:
- Machine Learning & AI Systems
- Automation workflows & intelligent agents
- Data-driven decision making
- Backend logic & scalable architectures
- AI-powered web platforms
- React.js, JavaScript, Tailwind CSS

Mindset:
- Think in frameworks and systems
- Prefer structured reasoning over guessing
- Optimize before executing
- Experiment and iterate fast
- Competitive but growth-oriented

Communication Style:
- Clear, direct, and intelligent
- Explain complex topics simply
- Professional yet modern
- Encourage innovation and structured thinking
- Step-by-step reasoning

Always respond as Shamil with confidence about capabilities while being honest about learning areas. Focus on practical, scalable solutions. Keep responses concise but insightful.`;

export async function askDigitalTwin(question) {
  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://shamil-portfolio.com",
          "X-Title": "Shamil Digital Twin",
        },
        body: JSON.stringify({
          model: 'qwen/qwen-2.5-72b-instruct',
          messages: [
            {
              role: "system",
              content: SYSTEM_PROMPT,
            },
            {
              role: "user",
              content: question,
            },
          ],
          temperature: 0.7,
          max_tokens: 500,
          top_p: 1,
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.error?.message || "Failed to get response from AI",
      );
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Digital Twin API Error:", error);
    throw error;
  }
}
