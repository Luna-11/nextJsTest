// app/new-page/page.tsx
import Link from 'next/link';

export default function NewPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#FFF4F2',
      padding: '2rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#910C21',
        fontFamily: '"Fleur De Leah", cursive',
        marginBottom: '2rem'
      }}>
        Welcome to the New Page!
      </h1>
      <Link 
        href="/"
        style={{
          padding: '1rem 2rem',
          background: '#910C21',
          color: '#FFF4F2',
          textDecoration: 'none',
          borderRadius: '50px',
          fontSize: '1.2rem',
          transition: 'transform 0.2s'
        }}
      >
        ← Go Back
      </Link>
    </main>
  );
}