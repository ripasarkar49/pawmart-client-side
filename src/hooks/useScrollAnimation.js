import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (animationType = 'fade-up', delay = 0) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        let ctx = gsap.context(() => {
            let animationFrom = {};
            let animationTo = {
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%', // Trigger when top of element hits 85% of viewport height
                    toggleActions: 'play none none reverse',
                }
            };

            switch (animationType) {
                case 'fade-up':
                    animationFrom = { opacity: 0, y: 50 };
                    animationTo = { ...animationTo, opacity: 1, y: 0, delay };
                    break;
                case 'fade-in':
                    animationFrom = { opacity: 0 };
                    animationTo = { ...animationTo, opacity: 1, delay };
                    break;
                case 'slide-left':
                    animationFrom = { opacity: 0, x: -50 };
                    animationTo = { ...animationTo, opacity: 1, x: 0, delay };
                    break;
                case 'slide-right':
                    animationFrom = { opacity: 0, x: 50 };
                    animationTo = { ...animationTo, opacity: 1, x: 0, delay };
                    break;
                case 'scale-up':
                    animationFrom = { opacity: 0, scale: 0.8 };
                    animationTo = { ...animationTo, opacity: 1, scale: 1, delay };
                    break;
                default:
                    animationFrom = { opacity: 0, y: 50 };
                    animationTo = { ...animationTo, opacity: 1, y: 0, delay };
            }

            gsap.fromTo(element, animationFrom, animationTo);
        }, elementRef);

        return () => ctx.revert();
    }, [animationType, delay]);

    return elementRef;
};

export default useScrollAnimation;
