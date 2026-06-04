import { useState, useRef } from 'react';

const TiltCard = ({ children, className = '', style = {}, maxTilt = 12 }) => {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card's dimensions (from -0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Compute rotations based on relative position
    // Mouse moving up tilts the card forward (rotateX negative)
    // Mouse moving right tilts the card right (rotateY positive)
    const rotateX = -y * maxTilt;
    const rotateY = x * maxTilt;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        ...tiltStyle,
        transformStyle: 'preserve-3d'
      }}
    >
      <div style={{ transform: 'translateZ(20px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
