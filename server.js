const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 5 NEET Practice Questions with topic-specific images and dual explanations
const questions = [
  {
    id: 1,
    question: "Which organelle is known as the powerhouse of the cell?",
    correctOption: 1, // Index 1 = Mitochondria
    generalExplanation: "Mitochondria produce ATP through cellular respiration, supplying energy for cellular processes.",
    options: [
      { 
        text: "Chloroplast", 
        image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=300&q=80",
        explanation: "Chloroplasts conduct photosynthesis to produce glucose, not cellular respiration for ATP energy." 
      },
      { 
        text: "Mitochondria", 
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=300&q=80",
        explanation: "Mitochondria generate ATP during cellular respiration, supplying chemical energy to the cell." 
      },
      { 
        text: "Nucleus", 
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",
        explanation: "The nucleus houses genomic DNA and regulates functions, but does not produce ATP energy." 
      },
      { 
        text: "Ribosome", 
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80",
        explanation: "Ribosomes synthesize proteins using mRNA and do not participate in energy production." 
      }
    ]
  },
  {
    id: 2,
    question: "Which blood group is known as the universal donor?",
    correctOption: 2, // Index 2 = O Negative
    generalExplanation: "O Negative blood lacks A, B, and Rh antigens, avoiding immune reactions in recipients.",
    options: [
      { 
        text: "AB Positive", 
        image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=300&q=80",
        explanation: "AB Positive has A, B, and Rh antigens, making it the universal recipient, not donor." 
      },
      { 
        text: "A Positive", 
        image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=300&q=80",
        explanation: "A Positive blood contains A and Rh antigens, triggering immune responses in non-matching types." 
      },
      { 
        text: "O Negative", 
        image: "https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?auto=format&fit=crop&w=300&q=80",
        explanation: "O Negative lacks A, B, and Rh antigens, making it safe to donate to any recipient without immune reaction." 
      },
      { 
        text: "B Negative", 
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=300&q=80",
        explanation: "B Negative contains B antigens, causing immune rejection in non-B recipients." 
      }
    ]
  },
  {
    id: 3,
    question: "Which hormone regulates blood sugar level by lowering glucose?",
    correctOption: 0, // Index 0 = Insulin
    generalExplanation: "Insulin promotes glucose uptake into muscle and adipose cells, lowering blood sugar levels.",
    options: [
      { 
        text: "Insulin", 
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=300&q=80",
        explanation: "Insulin is secreted by pancreatic beta cells to facilitate glucose storage and lower blood sugar." 
      },
      { 
        text: "Glucagon", 
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=300&q=80",
        explanation: "Glucagon stimulates glycogen breakdown in the liver to increase blood glucose levels." 
      },
      { 
        text: "Adrenaline", 
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=300&q=80",
        explanation: "Adrenaline triggers fight-or-flight responses and elevates glucose levels for immediate energy." 
      },
      { 
        text: "Thyroxine", 
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=300&q=80",
        explanation: "Thyroxine regulates general basal metabolic rate rather than acute blood glucose homeostasis." 
      }
    ]
  },
  {
    id: 4,
    question: "Which plant tissue is responsible for transporting water from roots to leaves?",
    correctOption: 1, // Index 1 = Xylem
    generalExplanation: "Xylem vessel elements transport water and dissolved minerals unidirectionally upwards.",
    options: [
      { 
        text: "Phloem", 
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=300&q=80",
        explanation: "Phloem transports soluble organic compounds made during photosynthesis (sucrose), not water." 
      },
      { 
        text: "Xylem", 
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=300&q=80",
        explanation: "Xylem vessels conduct water and mineral nutrients from roots throughout the plant." 
      },
      { 
        text: "Parenchyma", 
        image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=300&q=80",
        explanation: "Parenchyma functions in nutrient storage, photosynthesis, and tissue repair." 
      },
      { 
        text: "Collenchyma", 
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=300&q=80",
        explanation: "Collenchyma provides structural mechanical support to growing stems and leaves." 
      }
    ]
  },
  {
    id: 5,
    question: "Which structural unit carries genetic information in living organisms?",
    correctOption: 2, // Index 2 = DNA
    generalExplanation: "DNA double helix carries hereditary genetic codes for protein synthesis and organism development.",
    options: [
      { 
        text: "Protein", 
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=300&q=80",
        explanation: "Proteins execute cellular functions and structures but do not store genetic inheritance data." 
      },
      { 
        text: "Lipid", 
        image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=300&q=80",
        explanation: "Lipids form cellular membrane bilayers and store energy reserves." 
      },
      { 
        text: "DNA", 
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=300&q=80",
        explanation: "Deoxyribonucleic acid (DNA) stores sequence information passed from parents to offspring." 
      },
      { 
        text: "Carbohydrate", 
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
        explanation: "Carbohydrates serve as short-term energy sources and structural components." 
      }
    ]
  }
];

// GET endpoint to fetch quiz questions
app.get('/api/questions', (req, res) => {
  res.json(questions);
});

// POST endpoint to calculate and evaluate test submission
app.post('/api/submit', (req, res) => {
  const { answers } = req.body;

  let score = 0;
  let correctCount = 0;
  let incorrectCount = 0;

  const results = questions.map((q) => {
    const userAns = answers?.find((a) => a.id === q.id);
    const selectedOption = userAns ? userAns.selectedOption : undefined;
    const isCorrect = selectedOption === q.correctOption;

    if (selectedOption !== undefined) {
      if (isCorrect) {
        score += 4;
        correctCount += 1;
      } else {
        score -= 1;
        incorrectCount += 1;
      }
    }

    return {
      id: q.id,
      question: q.question,
      selectedOption,
      correctOption: q.correctOption,
      isCorrect,
      explanation: q.generalExplanation
    };
  });

  const unattemptedCount = questions.length - (correctCount + incorrectCount);
  const maxScore = questions.length * 4;

  res.json({
    score,
    maxScore,
    correctCount,
    incorrectCount,
    unattemptedCount,
    results
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});