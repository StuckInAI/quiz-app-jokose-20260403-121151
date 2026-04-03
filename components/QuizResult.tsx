'use client';

import { Question } from '@/data/quizData';

interface QuizResultProps {
  score: number;
  total: number;
  category: string;
  questions: Question[];
  answers: (number | null)[];
  onRestart: () => void;
  onBack: () => void;
}

function getGrade(score: number, total: number): { emoji: string; label: string; color: string } {
  const pct = (score / total) * 100;
  if (pct === 100) return { emoji: '🏆', label: 'Perfect!', color: '#f59e0b' };
  if (pct >= 80) return { emoji: '🌟', label: 'Excellent!', color: '#6c63ff' };
  if (pct >= 60) return { emoji: '👍', label: 'Good Job!', color: '#00b4d8' };
  if (pct >= 40) return { emoji: '📚', label: 'Keep Studying!', color: '#f77f00' };
  return { emoji: '💪', label: 'Try Again!', color: '#ff1744' };
}

export default function QuizResult({
  score,
  total,
  questions,
  answers,
  onRestart,
  onBack
}: QuizResultProps) {
  const grade = getGrade(score, total);
  const pct = Math.round((score / total) * 100);

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6c63ff 0%, #48c6ef 100%)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 8px 40px rgba(108,99,255,0.18)'
      }}>
        {/* Score summary */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>{grade.emoji}</div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: grade.color, marginBottom: '0.25rem' }}>
            {grade.label}
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Quiz Complete!</p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: `${grade.color}12`,
            border: `2px solid ${grade.color}30`,
            borderRadius: '50px',
            padding: '0.5rem 1.5rem',
            marginBottom: '1.5rem'
          }}>
            <span style={{ fontSize: '1.8rem', fontWeight: 800, color: grade.color }}>{score}</span>
            <span style={{ color: '#6b7280', fontWeight: 600 }}>/ {total}</span>
            <span style={{
              background: grade.color,
              color: '#fff',
              borderRadius: '50px',
              padding: '0.1rem 0.6rem',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginLeft: '0.5rem'
            }}>{pct}%</span>
          </div>

          {/* Progress bar */}
          <div style={{
            height: '10px',
            background: '#e5e7eb',
            borderRadius: '50px',
            overflow: 'hidden',
            marginBottom: '1.5rem'
          }}>
            <div style={{
              height: '100%',
              width: `${pct}%`,
              background: `linear-gradient(90deg, ${grade.color}, #48c6ef)`,
              borderRadius: '50px',
              transition: 'width 0.6s ease'
            }} />
          </div>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button
              onClick={onRestart}
              style={{
                background: 'linear-gradient(90deg, #6c63ff, #48c6ef)',
                color: '#fff',
                border: 'none',
                borderRadius: '50px',
                padding: '0.75rem 1.75rem',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer'
              }}
            >
              🔄 Try Again
            </button>
            <button
              onClick={onBack}
              style={{
                background: '#f3f4f6',
                color: '#374151',
                border: 'none',
                borderRadius: '50px',
                padding: '0.75rem 1.75rem',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer'
              }}
            >
              📚 New Category
            </button>
          </div>
        </div>

        {/* Answer review */}
        <div>
          <h3 style={{ fontWeight: 700, color: '#1a1a2e', marginBottom: '1rem', fontSize: '1.1rem' }}>
            Answer Review
          </h3>
          {questions.map((q, idx) => {
            const userAnswer = answers[idx];
            const isCorrect = userAnswer === q.correctIndex;
            return (
              <div
                key={idx}
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  border: `1.5px solid ${isCorrect ? '#00c853' : '#ff1744'}30`,
                  background: isCorrect ? '#e8faf0' : '#fff0f0',
                  marginBottom: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.1rem' }}>{isCorrect ? '✅' : '❌'}</span>
                  <div>
                    <p style={{ fontWeight: 600, color: '#1a1a2e', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                      {q.question}
                    </p>
                    {!isCorrect && (
                      <p style={{ color: '#ff1744', fontSize: '0.85rem', marginBottom: '0.1rem' }}>
                        Your answer: {userAnswer !== null ? q.options[userAnswer] : 'Not answered'}
                      </p>
                    )}
                    <p style={{ color: '#00c853', fontSize: '0.85rem' }}>
                      Correct: {q.options[q.correctIndex]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
