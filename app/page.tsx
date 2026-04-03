import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #6c63ff 0%, #48c6ef 100%)'
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '24px',
        padding: '3rem 2.5rem',
        maxWidth: '480px',
        width: '100%',
        boxShadow: '0 8px 40px rgba(108,99,255,0.18)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧠</div>
        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 800,
          color: '#6c63ff',
          marginBottom: '0.75rem'
        }}>
          Quiz Master
        </h1>
        <p style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: 1.6
        }}>
          Test your knowledge with our fun and challenging quizzes. Choose a category and see how you score!
        </p>
        <Link href="/quiz" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #6c63ff, #48c6ef)',
          color: '#fff',
          padding: '0.9rem 2.5rem',
          borderRadius: '50px',
          fontWeight: 700,
          fontSize: '1.1rem',
          boxShadow: '0 4px 16px rgba(108,99,255,0.25)',
          transition: 'transform 0.15s'
        }}>
          Start Quiz 🚀
        </Link>
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          color: '#6b7280',
          fontSize: '0.95rem'
        }}>
          <div><span style={{ fontWeight: 700, color: '#6c63ff' }}>20</span> Questions</div>
          <div><span style={{ fontWeight: 700, color: '#6c63ff' }}>4</span> Categories</div>
          <div><span style={{ fontWeight: 700, color: '#6c63ff' }}>∞</span> Fun</div>
        </div>
      </div>
    </main>
  );
}
