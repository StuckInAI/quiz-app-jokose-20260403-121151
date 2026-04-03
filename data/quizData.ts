export interface Question {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type QuizData = Record<string, Question[]>;

export const quizData: QuizData = {
  general: [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctIndex: 2,
      explanation: 'Paris is the capital and most populous city of France.'
    },
    {
      question: 'How many continents are there on Earth?',
      options: ['5', '6', '7', '8'],
      correctIndex: 2,
      explanation: 'There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America.'
    },
    {
      question: 'Which ocean is the largest?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      correctIndex: 3,
      explanation: 'The Pacific Ocean is the largest and deepest ocean, covering more than 30% of Earth\'s surface.'
    },
    {
      question: 'What is the longest river in the world?',
      options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
      correctIndex: 1,
      explanation: 'The Nile River in Africa is traditionally considered the longest river in the world at approximately 6,650 km.'
    },
    {
      question: 'Which country has the most natural lakes?',
      options: ['Russia', 'USA', 'Canada', 'Brazil'],
      correctIndex: 2,
      explanation: 'Canada has more lakes than any other country, containing about 60% of the world\'s freshwater lakes.'
    }
  ],
  science: [
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Go', 'Gd', 'Au', 'Ag'],
      correctIndex: 2,
      explanation: 'The chemical symbol for gold is Au, derived from the Latin word "aurum".'
    },
    {
      question: 'What planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctIndex: 1,
      explanation: 'Mars is called the Red Planet because of the iron oxide (rust) on its surface, giving it a reddish appearance.'
    },
    {
      question: 'What is the speed of light in a vacuum?',
      options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '200,000 km/s'],
      correctIndex: 0,
      explanation: 'The speed of light in a vacuum is approximately 299,792 km/s, often rounded to 300,000 km/s.'
    },
    {
      question: 'What is the powerhouse of the cell?',
      options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'],
      correctIndex: 2,
      explanation: 'The mitochondria is often called the powerhouse of the cell because it produces ATP (energy) through cellular respiration.'
    },
    {
      question: 'How many bones are in the adult human body?',
      options: ['196', '206', '216', '226'],
      correctIndex: 1,
      explanation: 'An adult human body has 206 bones. Babies are born with around 270-300 bones that fuse together over time.'
    }
  ],
  history: [
    {
      question: 'In which year did World War II end?',
      options: ['1943', '1944', '1945', '1946'],
      correctIndex: 2,
      explanation: 'World War II ended in 1945, with Germany surrendering in May and Japan in September after the atomic bombings.'
    },
    {
      question: 'Who was the first President of the United States?',
      options: ['John Adams', 'Thomas Jefferson', 'Benjamin Franklin', 'George Washington'],
      correctIndex: 3,
      explanation: 'George Washington was the first President of the United States, serving from 1789 to 1797.'
    },
    {
      question: 'The Great Wall of China was primarily built during which dynasty?',
      options: ['Han Dynasty', 'Tang Dynasty', 'Ming Dynasty', 'Qing Dynasty'],
      correctIndex: 2,
      explanation: 'Most of the Great Wall that exists today was built during the Ming Dynasty (1368–1644).'
    },
    {
      question: 'Who wrote the "I Have a Dream" speech?',
      options: ['Malcolm X', 'Martin Luther King Jr.', 'Barack Obama', 'Rosa Parks'],
      correctIndex: 1,
      explanation: 'Martin Luther King Jr. delivered the famous "I Have a Dream" speech on August 28, 1963, during the March on Washington.'
    },
    {
      question: 'In which year did the Berlin Wall fall?',
      options: ['1987', '1988', '1989', '1990'],
      correctIndex: 2,
      explanation: 'The Berlin Wall fell on November 9, 1989, marking a pivotal moment in the end of the Cold War.'
    }
  ],
  tech: [
    {
      question: 'Who is the co-founder of Apple Inc.?',
      options: ['Bill Gates', 'Elon Musk', 'Steve Jobs', 'Mark Zuckerberg'],
      correctIndex: 2,
      explanation: 'Steve Jobs co-founded Apple Inc. in 1976 along with Steve Wozniak and Ronald Wayne.'
    },
    {
      question: 'What does "HTML" stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Tech Modern Language',
        'Hyper Transfer Markup Language',
        'Home Tool Markup Language'
      ],
      correctIndex: 0,
      explanation: 'HTML stands for Hyper Text Markup Language, the standard language for creating web pages.'
    },
    {
      question: 'Which programming language is known as the "language of the web"?',
      options: ['Python', 'Java', 'JavaScript', 'C++'],
      correctIndex: 2,
      explanation: 'JavaScript is known as the language of the web and is the most widely used programming language for web development.'
    },
    {
      question: 'What does "CPU" stand for?',
      options: [
        'Central Processing Unit',
        'Computer Personal Unit',
        'Central Program Utility',
        'Core Processing Unit'
      ],
      correctIndex: 0,
      explanation: 'CPU stands for Central Processing Unit, the primary component of a computer that executes instructions.'
    },
    {
      question: 'In what year was the first iPhone released?',
      options: ['2005', '2006', '2007', '2008'],
      correctIndex: 2,
      explanation: 'The first iPhone was released on June 29, 2007, by Apple Inc. under the leadership of Steve Jobs.'
    }
  ]
};
