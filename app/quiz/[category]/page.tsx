'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { quizData } from '@/data/quizData';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResult from '@/components/QuizResult';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const category = typeof params.category === 'string' ? params.category : '';

  const questions = quizData[category] ?? [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

  if (!questions.length) {
    return (
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #6c63ff 0%, #48c6ef 100%)'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: '24px',
          padding: '3rem 2rem',
          textAlign: 'center',
          maxWidth: '400px'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>❓</div>
          <h2 style={{ color: '#1a1a2e', marginBottom: '1rem' }}>Category not found</h2>
          <button
            onClick={() => router.push('/quiz')}
            style={{
              background: '#6c63ff',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              padding: '0.75rem 2rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Go Back
          </button>
        </div>
      </main>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const isLast = currentIndex === questions.length - 1;

  function handleSelect(idx: number) {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = idx;
    setAnswers(newAnswers);
    if (idx === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (!isAnswered) return;
    if (isLast) {
      setShowResult(true);
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers(Array(questions.length).fill(null));
  }

  if (showResult) {
    return (
      <QuizResult
        score={score}
        total={questions.length}
        category={category}
        questions={questions}
        answers={answers}
        onRestart={handleRestart}
        onBack={() => router.push('/quiz')}
      />
    );
  }

  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6c63ff 0%, #48c6ef 100%)',
      display: 'flex',
      alignItems: 'center',
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
        {/* Progress */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '0.5rem'
          }}>
            <span style={{ color: '#6b7280', fontSize: '0.9rem', fontWeight: 600 }}>
              Question {currentIndex + 1} of {questions.length}
            </span>
            <span style={{
              background: '#6c63ff18',
              color: '#6c63ff',
              borderRadius: '50px',
              padding: '0.2rem 0.8rem',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}>
              Score: {score}
            </span>
          </div>
          <div style={{
            height: '8px',
            background: '#e5e7eb',
            borderRadius: '50px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
              background: 'linear-gradient(90deg, #6c63ff, #48c6ef)',
              borderRadius: '50px',
              transition: 'width 0.4s ease'
            }} />
          </div>
        </div>

        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          onSelect={handleSelect}
        />

        <button
          onClick={handleNext}
          disabled={!isAnswered}
          style={{
            marginTop: '1.5rem',
            width: '100%',
            padding: '0.9rem',
            borderRadius: '50px',
            border: 'none',
            background: isAnswered
              ? 'linear-gradient(90deg, #6c63ff, #48c6ef)'
              : '#e5e7eb',
            color: isAnswered ? '#fff' : '#9ca3af',
            fontWeight: 700,
            fontSize: '1rem',
            cursor: isAnswered ? 'pointer' : 'not-allowed',
            transition: 'all 0.2s'
          }}
        >
          {isLast ? 'Finish Quiz 🏁' : 'Next Question →'}
        </button>
      </div>
    </main>
  );
}
