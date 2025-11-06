const express = require("express");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));
//app.use(express.static(__dirname + "/public"));


// Gemini API key
// const GEMINI_API_KEY = "AIzaSyCAF0Ojvg3euhS8l04PdfZRskzyidAZ91o";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

app.post("/generate", async (req, res) => {
  const { injury, stage, level } = req.body;

  const prompt = `
  Generate injury recovery workout plan in few steps with simple language : 
  - Injury: ${injury}
  - Recovery Stage: ${stage}
  - Fitness Level: ${level}
  `;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ plan: text });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"));

