// app/page.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; // Add this import

export default function HomePage() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter(); // Add this line

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      // Press animation
      button.style.transform = 'translateY(6px)';
      
      setTimeout(() => {
        button.style.transform = '';
        // Navigate after animation
        router.push('/val'); // Change this to your desired path
      }, 180);
      
      console.log('wax seal clicked — navigating to new page');
    };

    button.addEventListener('click', handleClick);
    return () => button.removeEventListener('click', handleClick);
  }, [router]); // Add router to dependency array

  // Color palette from image
  const colors = {
    drought: '#FFF4F2',      // background / soft neutral
    puttyYellow: '#9D8C81',  // text accents / borders
    seaPink: '#D97F7F',       // subtle highlights
    oldWine: '#910C21',       // primary accent / wax seal base
    cherryPicking: '#5E0A12'  // deep shadows / button press
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
        maxWidth: '860px',
        width: '100%',
        background: '#fffcf7',
        borderRadius: '2.5rem 2.5rem 2rem 2rem',
        boxShadow: `0 25px 40px -10px ${colors.cherryPicking}40, 0 1px 3px rgba(0,0,0,0.05)`,
        padding: '2.2rem 2rem 3rem 2rem',
        border: `1px solid ${colors.puttyYellow}60`
      }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <div style={{
            fontSize: '2.2rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            color: colors.cherryPicking,
            fontFamily: '"engagement"',
            display: 'inline-block',
            padding: '0.4rem 2rem 0.2rem 2rem',
            borderRadius: '60px',
            backdropFilter: 'blur(2px)',
            lineHeight: 1.3
          }}>
            Please open the envelop by clicking the heart!
          </div>
        </div>

        {/* Image stage with wax button - repositioned onto the wax */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          margin: '0.5rem 0 1.2rem 0'
        }}>
          {/* Envelope image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/env.png"
            alt="envelope with wax seal"
            style={{
              maxWidth: '100%',
              width: '800px',
              borderRadius: '20px',
              display: 'block',
              background: colors.drought,
              aspectRatio: '16/11',
              objectFit: 'cover'
            }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22800%22%20height%3D%22550%22%20viewBox%3D%220%200%20800%20550%22%3E%3Crect%20width%3D%22800%22%20height%3D%22550%22%20fill%3D%22${encodeURIComponent(colors.drought)}%22%2F%3E%3Cpath%20d%3D%22M100%2C150%20L700%2C150%20L650%2C400%20L150%2C400%20Z%22%20fill%3D%22${encodeURIComponent(colors.puttyYellow)}%22%20stroke%3D%22${encodeURIComponent(colors.oldWine)}%22%20stroke-width%3D%224%22%2F%3E%3Ccircle%20cx%3D%22550%22%20cy%3D%22250%22%20r%3D%2250%22%20fill%3D%22${encodeURIComponent(colors.oldWine)}%22%20stroke%3D%22${encodeURIComponent(colors.seaPink)}%22%20stroke-width%3D%225%22%2F%3E%3Ctext%20x%3D%22515%22%20y%3D%22270%22%20font-size%3D%2230%22%20fill%3D%22%23ffffff%22%20font-family%3D%22monospace%22%3E%E2%9D%A4%3C%2Ftext%3E%3C%2Fsvg%3E`;
            }}
          />
          
          {/* Wax seal button - single heart image */}
          <button
            ref={buttonRef}
            style={{
              position: 'absolute',
              bottom: '16%',
              right: '40%',
              width: '240px',
              height: '240px',
              background: 'none', 
              border: 'none',
              cursor: 'pointer',
              zIndex: 15,
              padding: 0,
              borderRadius: '40%',
              overflow: 'hidden',  // Ensure image stays within circular button
              transition: 'transform 0.08s linear'
            }}
          >
            {/* Single heart image - removed background from button */}
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
                // Fallback if heart image doesn't exist
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.style.background = `radial-gradient(circle at 30% 35%, ${colors.seaPink}, ${colors.oldWine} 75%)`;
                target.parentElement!.style.color = colors.drought;
                target.parentElement!.style.display = 'flex';
                target.parentElement!.style.alignItems = 'center';
                target.parentElement!.style.justifyContent = 'center';
                target.parentElement!.style.fontSize = '4rem';
                target.parentElement!.innerHTML = '❤️';
              }}
            />
          </button>
        </div>

        {/* Footer text */}
        <div style={{
          textAlign: 'center',
          marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 350,
            color: colors.puttyYellow,
            marginTop: '0.4rem',
            textTransform: 'uppercase',
            letterSpacing: '6px',
            wordSpacing: '8px',
            borderTop: `1px solid ${colors.seaPink}`,
            paddingTop: '0.8rem',
            fontFamily: '"engagement"'
          }}>
            <span style={{
              background: colors.drought,
              fontFamily: '"carattere"',
              padding: '0.2rem 1rem',
              borderRadius: '30px',
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