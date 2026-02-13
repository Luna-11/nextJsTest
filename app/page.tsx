// app/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      button.style.transform = 'translateY(6px)';
      
      setTimeout(() => {
        button.style.transform = '';
        router.push('/val');
      }, 180);
      
      console.log('wax seal clicked — navigating to new page');
    };

    button.addEventListener('click', handleClick);
    return () => button.removeEventListener('click', handleClick);
  }, [router]);

  const colors = {
    drought: '#FFF4F2',
    puttyYellow: '#9D8C81',
    seaPink: '#D97F7F',
    oldWine: '#910C21',
    cherryPicking: '#5E0A12'
  };

  return (
    <main style={{
      background: colors.drought,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '640px', // Reduced from 860px
        width: '100%',
        background: '#fffcf7',
        borderRadius: '2rem 2rem 1.5rem 1.5rem', // Slightly smaller
        boxShadow: `0 20px 32px -8px ${colors.cherryPicking}40, 0 1px 3px rgba(0,0,0,0.05)`,
        padding: '1.8rem 1.5rem 2.2rem 1.5rem', // Reduced padding
        border: `1px solid ${colors.puttyYellow}60`
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.2rem' }}>
          <div style={{
            fontSize: '1.6rem', // Reduced from 2.2rem
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: colors.cherryPicking,
            fontFamily: '"engagement"',
            display: 'inline-block',
            padding: '0.3rem 1.5rem 0.1rem 1.5rem', // Reduced padding
            borderRadius: '40px',
            backdropFilter: 'blur(2px)',
            lineHeight: 1.2
          }}>
            Please open the envelop by clicking the heart!
          </div>
        </div>

        {/* Image stage with wax button */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          margin: '0.3rem 0 0.8rem 0'
        }}>
          {/* Envelope image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/env.png"
            alt="envelope with wax seal"
            style={{
              maxWidth: '100%',
              width: '600px', // Reduced from 800px
              borderRadius: '16px', // Slightly smaller
              display: 'block',
              background: colors.drought,
              aspectRatio: '16/11',
              objectFit: 'cover'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22412%22%20viewBox%3D%220%200%20600%20412%22%3E%3Crect%20width%3D%22600%22%20height%3D%22412%22%20fill%3D%22${encodeURIComponent(colors.drought)}%22%2F%3E%3Cpath%20d%3D%22M75%2C112%20L525%2C112%20L488%2C300%20L112%2C300%20Z%22%20fill%3D%22${encodeURIComponent(colors.puttyYellow)}%22%20stroke%3D%22${encodeURIComponent(colors.oldWine)}%22%20stroke-width%3D%223%22%2F%3E%3Ccircle%20cx%3D%22412%22%20cy%3D%22188%22%20r%3D%2238%22%20fill%3D%22${encodeURIComponent(colors.oldWine)}%22%20stroke%3D%22${encodeURIComponent(colors.seaPink)}%22%20stroke-width%3D%224%22%2F%3E%3Ctext%20x%3D%22386%22%20y%3D%22202%22%20font-size%3D%2222%22%20fill%3D%22%23ffffff%22%20font-family%3D%22monospace%22%3E%E2%9D%A4%3C%2Ftext%3E%3C%2Fsvg%3E`;
            }}
          />
          
          {/* Wax seal button */}
          <button
            ref={buttonRef}
            style={{
              position: 'absolute',
              bottom: '16%',
              right: '39%',
              width: '180px', 
              height: '180px', 
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 15,
              padding: 0,
              borderRadius: '40%',
              overflow: 'hidden',
              transition: 'transform 0.08s linear'
            }}
          >
            <img 
              src="/heart.png" 
              alt="Open heart"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block'
              }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.style.background = `radial-gradient(circle at 30% 35%, ${colors.seaPink}, ${colors.oldWine} 75%)`;
                target.parentElement!.style.color = colors.drought;
                target.parentElement!.style.display = 'flex';
                target.parentElement!.style.alignItems = 'center';
                target.parentElement!.style.justifyContent = 'center';
                target.parentElement!.style.fontSize = '3rem'; // Reduced from 4rem
                target.parentElement!.innerHTML = '❤️';
              }}
            />
          </button>
        </div>

        {/* Footer text */}
        <div style={{
          textAlign: 'center',
          marginTop: '0.6rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.1rem'
        }}>
          <div style={{
            fontSize: '1.1rem', // Reduced from 1.5rem
            fontWeight: 350,
            color: colors.puttyYellow,
            marginTop: '0.2rem',
            textTransform: 'uppercase',
            letterSpacing: '4px', // Reduced from 6px
            wordSpacing: '6px', // Reduced from 8px
            borderTop: `1px solid ${colors.seaPink}`,
            paddingTop: '0.5rem', // Reduced from 0.8rem
            fontFamily: '"engagement"'
          }}>
            <span style={{
              background: colors.drought,
              fontFamily: '"carattere"',
              padding: '0.15rem 0.8rem', // Reduced padding
              borderRadius: '20px', // Smaller radius
              fontWeight: 400,
              color: colors.cherryPicking,
              border: `1px solid ${colors.puttyYellow}60`
            }}>
              FROM: SWEETIE
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}