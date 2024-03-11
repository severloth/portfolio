import React from 'react';
import '../styles/particle.css';
import { useEffect, useRef } from 'react';


const ParticleA = () => {
    const particleRef = useRef(null);

    useEffect(() => {
        const particle = particleRef.current;
        const getRandomPosition = () => ({
            x: Math.random() * (window.innerWidth - particle.offsetWidth ),
            y: Math.random() * (window.innerHeight - particle.offsetHeight),
        });
        const getRandomSpeed = () => ({
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2,
        });

        let { x, y } = getRandomPosition();
        let { x: speedX, y: speedY } = getRandomSpeed();
        
        particle.style.transition = 'left 0.5s, top 0.5s';
        const handleMouseMove = (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const deltaX = x + particle.offsetWidth / 2 - mouseX;
            const deltaY = y + particle.offsetHeight / 2 - mouseY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const speedFactor = 5;
            speedX = (deltaX / distance) * speedFactor;
            speedY = (deltaY / distance) * speedFactor;
        };

        const animateParticle = () => {
            x += speedX;
            y += speedY;
            if (x < 0 || x > window.innerWidth - particle.offsetWidth 
                || y < 0 || y > window.innerHeight - particle.offsetHeight
            ) {
                ({ x, y } = getRandomPosition());
            }
            if (y < 0 || y > window.innerHeight) {
                ({ x, y } = getRandomPosition());
            }
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            requestAnimationFrame(animateParticle);
        };
        animateParticle();
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
        
    }, []);
    return <div ref={particleRef} className='particle'></div>;
}


export default ParticleA;