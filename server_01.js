const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 20 Indian NEET Questions
const questions = [
  {
    id: 1,
    question: "Which organelle is known as the powerhouse of the cell?",
    options: [
      { text: "Ribosome" },
      { text: "Mitochondria", image: "https://img.icons8.com/color/96/mitochondria.png" },
      { text: "Golgi Body" },
      { text: "Endoplasmic Reticulum" }
    ],
    answerIndex: 1
  },
  {
    id: 2,
    question: "The functional unit of human kidney is:",
    options: [
      { text: "Neuron" },
      { text: "Nephron" },
      { text: "Alveoli" },
      { text: "Glomerulus" }
    ],
    answerIndex: 1
  },
  {
    id: 3,
    question: "Which hormone regulates the blood calcium level in the human body?",
    options: [
      { text: "Insulin" },
      { text: "Thyroxine" },
      { text: "Parathormone" },
      { text: "Adrenaline" }
    ],
    answerIndex: 2
  },
  {
    id: 4,
    question: "What is the unit of electric current?",
    options: [
      { text: "Volt" },
      { text: "Watt" },
      { text: "Ampere" },
      { text: "Joule" }
    ],
    answerIndex: 2
  },
  {
    id: 5,
    question: "Plant cell wall is mainly composed of:",
    options: [
      { text: "Chitin" },
      { text: "Cellulose" },
      { text: "Pectin" },
      { text: "Suberin" }
    ],
    answerIndex: 1
  },
  {
    id: 6,
    question: "Which gas is released during photosynthesis?",
    options: [
      { text: "Carbon Dioxide" },
      { text: "Nitrogen" },
      { text: "Oxygen" },
      { text: "Hydrogen" }
    ],
    answerIndex: 2
  },
  {
    id: 7,
    question: "The pH of normal human blood is approximately:",
    options: [
      { text: "6.4" },
      { text: "7.4" },
      { text: "8.2" },
      { text: "5.8" }
    ],
    answerIndex: 1
  },
  {
    id: 8,
    question: "Which law states that stress is directly proportional to strain within elastic limits?",
    options: [
      { text: "Hooke's Law" },
      { text: "Pascal's Law" },
      { text: "Bernoulli's Principle" },
      { text: "Newton's Third Law" }
    ],
    answerIndex: 0
  },
  {
    id: 9,
    question: "Which element is present in chlorophyll?",
    options: [
      { text: "Iron" },
      { text: "Magnesium" },
      { text: "Calcium" },
      { text: "Zinc" }
    ],
    answerIndex: 1
  },
  {
    id: 10,
    question: "What is the speed of light in vacuum?",
    options: [
      { text: "3 x 10^8 m/s" },
      { text: "3 x 10^6 m/s" },
      { text: "3 x 10^10 m/s" },
      { text: "3 x 10^5 m/s" }
    ],
    answerIndex: 0
  },
  {
    id: 11,
    question: "Double fertilization is a characteristic feature of:",
    options: [
      { text: "Gymnosperms" },
      { text: "Angiosperms" },
      { text: "Pteridophytes" },
      { text: "Bryophytes" }
    ],
    answerIndex: 1
  },
  {
    id: 12,
    question: "Which organ secretes bile juice?",
    options: [
      { text: "Pancreas" },
      { text: "Gallbladder" },
      { text: "Liver" },
      { text: "Stomach" }
    ],
    answerIndex: 2
  },
  {
    id: 13,
    question: "In DNA, Adenine always pairs with:",
    options: [
      { text: "Guanine" },
      { text: "Cytosine" },
      { text: "Thymine" },
      { text: "Uracil" }
    ],
    answerIndex: 2
  },
  {
    id: 14,
    question: "Which instrument is used to measure atmospheric pressure?",
    options: [
      { text: "Barometer" },
      { text: "Thermometer" },
      { text: "Hydrometer" },
      { text: "Manometer" }
    ],
    answerIndex: 0
  },
  {
    id: 15,
    question: "What is the chemical formula of Ozone?",
    options: [
      { text: "O2" },
      { text: "O3" },
      { text: "O4" },
      { text: "H2O2" }
    ],
    answerIndex: 1
  },
  {
    id: 16,
    question: "The Master Gland of human body is:",
    options: [
      { text: "Thyroid Gland" },
      { text: "Adrenal Gland" },
      { text: "Pituitary Gland" },
      { text: "Pancreas" }
    ],
    answerIndex: 2
  },
  {
    id: 17,
    question: "SI unit of force is:",
    options: [
      { text: "Dyne" },
      { text: "Newton" },
      { text: "Pascal" },
      { text: "Watt" }
    ],
    answerIndex: 1
  },
  {
    id: 18,
    question: "Oxygen transport in human blood is carried out by:",
    options: [
      { text: "Hemoglobin" },
      { text: "Myoglobin" },
      { text: "Albumin" },
      { text: "Fibrinogen" }
    ],
    answerIndex: 0
  },
  {
    id: 19,
    question: "Work done by a force is zero when the angle between force and displacement is:",
    options: [
      { text: "0 degrees" },
      { text: "45 degrees" },
      { text: "90 degrees" },
      { text: "180 degrees" }
    ],
    answerIndex: 2
  },
  {
    id: 20,
    question: "Which disease is caused by deficiency of Vitamin C?",
    options: [
      { text: "Rickets" },
      { text: "Scurvy" },
      { text: "Beriberi" },
      { text: "Night Blindness" }
    ],
    answerIndex: 1
  }
];

// Returns correctOption along with the questions so client can calculate live score
app.get('/api/questions', (req, res) => {
  const sanitizedQuestions = questions.map(({ id, question, options, answerIndex }) => ({
    id,
    question,
    options,
    correctOption: answerIndex
  }));
  res.json(sanitizedQuestions);
});

// Calculate final result with NEET marking (+4 for correct, -1 for wrong)
app.post('/api/submit', (req, res) => {
  const userAnswers = req.body.answers || [];

  let score = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  const results = questions.map((question) => {
    const userAns = userAnswers.find((a) => a.id === question.id);
    const selectedOption = userAns ? userAns.selectedOption : null;
    
    let status = 'unattempted';
    if (selectedOption !== null && selectedOption !== undefined) {
      if (selectedOption === question.answerIndex) {
        status = 'correct';
        score += 4;
        correctCount++;
      } else {
        status = 'incorrect';
        score -= 1;
        incorrectCount++;
      }
    }

    return {
      id: question.id,
      selectedOption,
      correctAnswerIndex: question.answerIndex,
      status
    };
  });

  res.json({
    score,
    maxScore: questions.length * 4,
    total: questions.length,
    correctCount,
    incorrectCount,
    unattemptedCount: questions.length - (correctCount + incorrectCount),
    results
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});