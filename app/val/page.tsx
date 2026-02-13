// app/new-page/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NewPage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noMessage, setNoMessage] = useState('');
  const [imageError, setImageError] = useState(false);

  const noPhrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart!",
  ];

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setNoMessage(noPhrases[Math.min(noCount, noPhrases.length - 1)]);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  // Base size for buttons
  const baseSize = 20;
  
  // Calculate button sizes based on noCount
  const yesButtonSize = baseSize + (noCount * 3);
  const noButtonSize = Math.max(baseSize - (noCount * 2), 12);

  // Color palette from original
  const colors = {
    drought: '#FFF4F2',
    puttyYellow: '#9D8C81',
    seaPink: '#D97F7F',
    oldWine: '#910C21',
    cherryPicking: '#5E0A12'
  };

  if (yesPressed) {
    return (
      <main style={{
        background: colors.drought,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          maxWidth: '700px',
          width: '100%',
          background: '#fffcf7',
          borderRadius: '2.5rem',
          boxShadow: `0 25px 40px -10px ${colors.cherryPicking}40`,
          padding: '3rem 2rem',
          textAlign: 'center',
          border: `1px solid ${colors.puttyYellow}60`
        }}>
          {/* Happy Jumping Cat GIF */}
          <div style={{
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '200px'
          }}>
            {!imageError ? (
              <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                <Image 
                  src="/cute.gif" 
                  alt="Happy jumping cat"
                  fill
                  sizes="1000px"
                  style={{
                    objectFit: 'contain',
                    animation: 'bounce 2s ease infinite'
                  }}
                  onError={() => setImageError(true)}
                  priority
                  unoptimized // Required for GIFs with Image component
                />
              </div>
            ) : (
              // Fallback to emoji if GIF fails to load
              <div style={{
                fontSize: '8rem',
                animation: 'bounce 2s ease infinite',
                lineHeight: 1
              }}>
                😺
              </div>
            )}
          </div>

          {/* Success Message */}
          <h1 style={{
            fontSize: '3rem',
            color: colors.oldWine,
            fontFamily: '"engagement"',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            Yay! You made me the happiest!
          </h1>
          
<div style={{
  fontSize: '1.5rem',
  color: colors.cherryPicking,
  marginBottom: '2rem',
  fontFamily: '"carattere", cursive'
}}>
 <div> Waiting celebrate with you! 💕</div>
</div>

          {/* Floating hearts animation */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2rem',
            fontSize: '2rem'
          }}>
            <span style={{ animation: 'float 3s ease infinite' }}>💖</span>
            <span style={{ animation: 'float 3s ease infinite 0.5s' }}>💘</span>
            <span style={{ animation: 'float 3s ease infinite 1s' }}>💝</span>
          </div>

          {/* Back button */}
          <Link 
            href="/"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              background: colors.oldWine,
              color: colors.drought,
              textDecoration: 'none',
              borderRadius: '50px',
              fontSize: '1.2rem',
              border: `2px solid ${colors.seaPink}`,
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: `0 4px 0 ${colors.cherryPicking}`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 6px 0 ${colors.cherryPicking}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 0 ${colors.cherryPicking}`;
            }}
          >
            ← Back to Envelope
          </Link>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}</style>
      </main>
    );
  }

  // Rest of your existing code for the question page...
  return (
    <main style={{
      background: colors.drought,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '700px',
        width: '100%',
        background: '#fffcf7',
        borderRadius: '2.5rem',
        boxShadow: `0 25px 40px -10px ${colors.cherryPicking}40`,
        padding: '3rem 2rem',
        textAlign: 'center',
        border: `1px solid ${colors.puttyYellow}60`
      }}>
        {/* Floating hearts decoration */}
        <div style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          opacity: 0.7
        }}>
          💝 💘 💖
        </div>

        <h1 style={{
          fontSize: '3.5rem',
          color: colors.oldWine,
          fontFamily: '"Fleur De Leah", cursive',
          marginBottom: '2rem',
          lineHeight: 1.2,
          textShadow: `2px 2px 4px ${colors.seaPink}40`
        }}>
          Will you be my valentine?
        </h1>

        {/* No message appears when they hit No */}
        {noMessage && (
          <div style={{
            fontSize: '2rem',
            color: colors.cherryPicking,
            fontFamily: '"carattere", cursive',
            marginBottom: '2rem',
            animation: 'fadeIn 0.5s ease'
          }}>
            {noMessage} {noCount > 2 ? '😢' : '💔'}
          </div>
        )}

        {/* Button container */}
        <div style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '2rem',
          minHeight: '150px'
        }}>
          {/* YES button */}
          <button
            onClick={handleYesClick}
            style={{
              padding: `${yesButtonSize * 0.4}px ${yesButtonSize * 1.2}px`,
              background: `linear-gradient(135deg, ${colors.oldWine}, ${colors.cherryPicking})`,
              color: 'white',
              border: `3px solid ${colors.seaPink}`,
              borderRadius: '60px',
              fontSize: `${yesButtonSize * 0.8}px`,
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: `0 ${yesButtonSize/4}px 0 ${colors.cherryPicking}, 0 10px 20px rgba(0,0,0,0.2)`,
              transition: 'all 0.3s ease',
              minWidth: noCount === 0 ? '120px' : `${yesButtonSize * 2.5}px`,
              transform: noCount > 3 ? 'scale(1.05)' : 'scale(1)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = noCount > 3 ? 'scale(1.05)' : 'scale(1)'}
          >
            YES! 💕
          </button>

          {/* NO button */}
          <button
            onClick={handleNoClick}
            style={{
              padding: `${noButtonSize * 0.4}px ${noButtonSize * 1.2}px`,
              background: colors.puttyYellow,
              color: colors.drought,
              border: `2px solid ${colors.seaPink}`,
              borderRadius: '60px',
              fontSize: `${noButtonSize * 0.8}px`,
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: `0 ${noButtonSize/4}px 0 ${colors.cherryPicking}80`,
              transition: 'all 0.3s ease',
              opacity: Math.max(1 - noCount * 0.08, 0.6),
              minWidth: noCount === 0 ? '120px' : `${noButtonSize * 2.5}px`
            }}
          >
            {noCount === 0 ? 'No' : 
             noCount === 1 ? '😢 No' :
             noCount === 2 ? '💔 No' :
             'No 💔'}
          </button>
        </div>

        {/* Playful messages */}
        {noCount > 4 && (
          <div style={{
            marginTop: '2rem',
            fontSize: '1.2rem',
            color: colors.oldWine,
            fontStyle: 'italic',
            animation: 'fadeIn 0.5s ease'
          }}>
            The YES button is getting bigger... just saying! 😉
          </div>
        )}

        {noCount > 8 && (
          <div style={{
            marginTop: '1rem',
            fontSize: '1.5rem',
            color: colors.cherryPicking,
            fontFamily: '"Fleur De Leah", cursive'
          }}>
           <div> You know you want to say YES! 💖</div> 
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}