import React, { useMemo } from 'react';

const FloatingParticles = () => {
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      fontSize: Math.random() * 20 + 10,
      animationDuration: 3 + Math.random() * 4,
      animationDelay: Math.random() * 5,
      emoji: ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)]
    })), []
  );

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute opacity-30 transition-all duration-1000"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              fontSize: `${particle.fontSize}px`,
              animation: `smoothFloat ${particle.animationDuration}s ease-in-out infinite`,
              animationDelay: `${particle.animationDelay}s`
            }}
          >
            {particle.emoji}
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes smoothFloat {
          0% { 
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          20% { 
            transform: translateY(-15px) translateX(8px) rotate(72deg) scale(1.1);
            opacity: 0.7;
          }
          40% { 
            transform: translateY(-25px) translateX(-3px) rotate(144deg) scale(0.9);
            opacity: 0.9;
          }
          60% { 
            transform: translateY(-35px) translateX(-12px) rotate(216deg) scale(1.2);
            opacity: 0.8;
          }
          80% { 
            transform: translateY(-20px) translateX(5px) rotate(288deg) scale(0.8);
            opacity: 0.6;
          }
          100% { 
            transform: translateY(0px) translateX(0px) rotate(360deg) scale(1);
            opacity: 0.4;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingParticles;