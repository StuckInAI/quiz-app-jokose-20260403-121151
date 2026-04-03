import Link from 'next/link';

const categories = [
  { id: 'general', name: 'General Knowledge', emoji: '🌍', color: '#6c63ff', questions: 5 },
  { id: 'science', name: 'Science', emoji: '🔬', color: '#00b4d8', questions: 5 },
  { id: 'history', name: 'History', emoji: '📜', color: '#f77f00', questions: 5 },
  { id: 'tech', name: 'Technology', emoji: '💻', color: '#2ec4b6', questions: 5 }
];

export default function QuizCategoryPage() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #6c63ff 0%, #48c6ef 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '24px',
        padding: '2.5rem 2rem',
        maxWidth: '560px',
        width: '100%',
        boxShadow: '0 8px 40px rgba(108,99,255,0.18)'
      }}>
        <Link href="/" style={{
          color: '#6c63ff',
          fontWeight: 600,
          fontSize: '0.95rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.3rem',
          marginBottom: '1.5rem'
        }}>← Back</Link>
        <h1 style={{
          fontSize: '1.8rem',
          fontWeight: 800,
          color: '#1a1a2e',
          marginBottom: '0.5rem'
        }}>Choose a Category</h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>Select a topic to start your quiz</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem'
        }}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/quiz/${cat.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem 1rem',
                borderRadius: '16px',
                background: `${cat.color}12`,
                border: `2px solid ${cat.color}30`,
                cursor: 'pointer',
                transition: 'transform 0.15s, box-shadow 0.15s',
                textDecoration: 'none'
              }}
            >
              <span style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{cat.emoji}</span>
              <span style={{ fontWeight: 700, color: cat.color, fontSize: '1rem' }}>{cat.name}</span>
              <span style={{ color: '#6b7280', fontSize: '0.82rem', marginTop: '0.25rem' }}>{cat.questions} questions</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
