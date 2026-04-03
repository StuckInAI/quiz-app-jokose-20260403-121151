'use client';

import { Question } from '@/data/quizData';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onSelect: (idx: number) => void;
}

export default function QuizQuestion({ question, selectedAnswer, onSelect }: QuizQuestionProps) {
  const isAnswered = selectedAnswer !== null;

  function getOptionStyle(idx: number): React.CSSProperties {
    const base: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.9rem 1.1rem',
      borderRadius: '12px',
      border: '2px solid #e5e7eb',
      marginBottom: '0.75rem',
      cursor: isAnswered ? 'default' : 'pointer',
      transition: 'all 0.2s',
      fontSize: '0.98rem',
      fontWeight: 500,
      background: '#fafafa'
    };

    if (!isAnswered) {
      return base;
    }

    if (idx === question.correctIndex) {
      return {
        ...base,
        background: '#e8faf0',
        border: '2px solid #00c853',
        color: '#00c853'
      };
    }

    if (idx === selectedAnswer) {
      return {
        ...base,
        background: '#fff0f0',
        border: '2px solid #ff1744',
        color: '#ff1744'
      };
    }

    return { ...base, opacity: 0.5 };
  }

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div>
      <h2 style={{
        fontSize: '1.25rem',
        fontWeight: 700,
        color: '#1a1a2e',
        marginBottom: '1.5rem',
        lineHeight: 1.5
      }}>
        {question.question}
      </h2>
      {question.options.map((option, idx) => (
        <div
          key={idx}
          style={getOptionStyle(idx)}
          onClick={() => onSelect(idx)}
        >
          <span style={{
            minWidth: '28px',
            height: '28px',
            borderRadius: '50%',
            background: isAnswered
              ? idx === question.correctIndex
                ? '#00c853'
                : idx === selectedAnswer
                  ? '#ff1744'
                  : '#e5e7eb'
              : '#6c63ff18',
            color: isAnswered
              ? idx === question.correctIndex || idx === selectedAnswer
                ? '#fff'
                : '#6b7280'
              : '#6c63ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.85rem'
          }}>
            {isAnswered
              ? idx === question.correctIndex
                ? '✓'
                : idx === selectedAnswer
                  ? '✗'
                  : optionLabels[idx]
              : optionLabels[idx]}
          </span>
          <span>{option}</span>
        </div>
      ))}
      {isAnswered && (
        <div style={{
          marginTop: '1rem',
          padding: '0.9rem 1.1rem',
          borderRadius: '12px',
          background: selectedAnswer === question.correctIndex ? '#e8faf0' : '#fff8e1',
          border: `1px solid ${selectedAnswer === question.correctIndex ? '#00c853' : '#ffd600'}`,
          color: '#1a1a2e',
          fontSize: '0.92rem',
          lineHeight: 1.5
        }}>
          <strong>{selectedAnswer === question.correctIndex ? '✅ Correct! ' : '❌ Incorrect. '}</strong>
          {question.explanation}
        </div>
      )}
    </div>
  );
}
