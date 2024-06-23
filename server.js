const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Sample questions data
const questions = {
  technology: [
    "What programming languages are you proficient in?",
    "Describe your experience with cloud computing platforms.",
    "What is your favorite technology gadget and why?"
  ],
  health: [
    "How often do you exercise?",
    "What is your typical daily diet?",
    "Do you track your health metrics? If so, how?"
  ],
  education: [
    "What is your highest level of education?",
    "Describe a memorable learning experience you've had.",
    "How do you think education will change in the next decade?"
  ]
};

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Endpoint to fetch questions based on topic
app.get('/api/questions/:topic', (req, res) => {
  const { topic } = req.params;
  if (questions[topic]) {
    res.json(questions[topic]);
  } else {
    res.status(404).json({ error: Questions for topic '${topic}' not found });
  }
});

// Handles any requests that don't match the API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});