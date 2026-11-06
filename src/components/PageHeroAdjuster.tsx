"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Transform = { scale: number; x: number; y: number; width: number };
type PageHeroAdjusterProps = {
  text: ReactNode;
  image: ReactNode;
  className: string;
  imageClassName: string;
  defaultTextTransform?: Partial<Transform>;
  defaultImageTransform?: Partial<Transform>;
};

const defaultTransform: Transform = { scale: 1, x: 0, y: 0, width: 100 };

export function PageHeroAdjuster({
  text,
  image,
  className,
  imageClassName,
  defaultTextTransform,
  defaultImageTransform,
}: PageHeroAdjusterProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [imageBaseHeight, setImageBaseHeight] = useState(0);
  const textTransform = { ...defaultTransform, ...defaultTextTransform };
  const imageTransform = { ...defaultTransform, ...defaultImageTransform };

  useEffect(() => {
    const element = imageRef.current;
    if (!element) return;
    const updateHeight = () => setImageBaseHeight(element.offsetHeight);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    return () => observer.disconnect();
  }, [imageTransform.scale]);

  const imageScaleOverflow = Math.max(0, Math.ceil(((imageTransform.scale - 1) * imageBaseHeight) / 2));

  return (
    <div
      className={`page-hero-adjuster ${className}`}
    >
      <div
        className="relative z-10"
        style={{
          transform: `translate(${textTransform.x}px, ${textTransform.y}px) scale(${textTransform.scale})`,
          transformOrigin: "left center",
        }}
      >
        {text}
      </div>

      <div
        ref={imageRef}
        className={`page-hero-image-target relative z-20 mx-auto lg:ml-auto lg:mr-0 ${imageClassName}`}
        style={{
          "--hero-image-width": `${imageTransform.width}%`,
          "--page-hero-x": `${imageTransform.x}px`,
          "--page-hero-y": `${imageTransform.y}px`,
          "--page-hero-scale": imageTransform.scale,
          marginTop: imageScaleOverflow,
          marginBottom: imageScaleOverflow,
        } as CSSProperties}
      >
        {image}
      </div>
    </div>
  );
}
