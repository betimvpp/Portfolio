/*
	Installed from https://reactbits.dev/ts/default/
*/

import { useEffect, useState, useRef } from "react";
import { motion, type PanInfo, useMotionValue, useTransform } from "framer-motion";
import "./Carousel.css";

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  image: string;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: "Text Animations",
    description: "Cool text animations for your projects.",
    id: 1,
    image: "/placeholder-1.jpg",
  },
  {
    title: "Animations",
    description: "Smooth animations for your projects.",
    id: 2,
    image: "/placeholder-2.jpg",
  },
  {
    title: "Components",
    description: "Reusable components for your projects.",
    id: 3,
    image: "/placeholder-3.jpg",
  },
  {
    title: "Backgrounds",
    description: "Beautiful backgrounds and patterns for your projects.",
    id: 4,
    image: "/placeholder-4.jpg",
  },
  {
    title: "Common UI",
    description: "Common UI components are coming soon!",
    id: 5,
    image: "/placeholder-5.jpg",
  },
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring" as const, stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 840,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
}: CarouselProps): React.JSX.Element {
  const containerPadding = 16;
  
  // Responsive base width
  const getResponsiveBaseWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 320; // sm
      if (width < 768) return 480; // md
      if (width < 1024) return 640; // lg
      if (width < 1280) return 720; // xl
      return baseWidth; // 2xl+
    }
    return baseWidth;
  };
  
  const responsiveBaseWidth = getResponsiveBaseWidth();
  const itemWidth = responsiveBaseWidth - containerPadding * 2;
  const itemHeight = typeof window !== 'undefined' && window.innerWidth <= 480 ? 220 : (itemWidth * 9) / 16; // Proporção 16:9
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  
  // Update responsive width on window resize
  useEffect(() => {
    const handleResize = () => {
      const newBaseWidth = getResponsiveBaseWidth();
      if (newBaseWidth !== responsiveBaseWidth) {
        window.location.reload(); // Simple solution for demo
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [responsiveBaseWidth]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (prevIndex === items.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        });
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, pauseOnHover, isHovered, items.length]);

  const handleAnimationComplete = () => {
    if (loop && currentIndex === items.length) {
      setIsResetting(true);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const velocity = info.velocity.x;
    const distance = info.offset.x;

    if (Math.abs(velocity) > VELOCITY_THRESHOLD) {
      if (velocity > 0) {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
      } else {
        setCurrentIndex((prevIndex) => Math.min(items.length - 1, prevIndex + 1));
      }
    } else if (Math.abs(distance) > trackItemOffset / 2) {
      if (distance > 0) {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
      } else {
        setCurrentIndex((prevIndex) => Math.min(items.length - 1, prevIndex + 1));
      }
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(items.length - 1, prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`}
      style={{
        width: responsiveBaseWidth,
        height: itemHeight + 120,
      }}
    >
      <motion.div
        className="carousel-track"
        style={{
          x,
          width: carouselItems.length * trackItemOffset,
        }}
        animate={{
          x: isResetting ? 0 : -currentIndex * trackItemOffset,
        }}
        transition={SPRING_OPTIONS}
        onAnimationComplete={handleAnimationComplete}
        drag="x"
        dragConstraints={{
          left: -(carouselItems.length - 1) * trackItemOffset,
          right: 0,
        }}
        onDragEnd={handleDragEnd}
        dragElastic={0.1}
      >
        {carouselItems.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            className={`carousel-item ${round ? "round" : ""}`}
            style={{
              width: itemWidth,
              height: itemHeight,
              marginRight: index === carouselItems.length - 1 ? 0 : GAP,
            }}
          >
            <div className="carousel-item-header">
              <img
                src={item.image}
                alt={item.title}
                className="carousel-image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "calc(var(--outer-r) - var(--p-distance) - 1px)",
                }}
              />
            </div>
            <div className="carousel-item-content">
              <h3 className="carousel-item-title">{item.title}</h3>
              <p className="carousel-item-description">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === currentIndex ? "active" : "inactive"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
