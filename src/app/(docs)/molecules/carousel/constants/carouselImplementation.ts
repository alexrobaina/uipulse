export const carouselImplementation = `import Carousel, { CarouselItem } from "@/app/ui/molecules/Carousel";
import { useState } from "react";

export default function CarouselExample() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const imageSlides: CarouselItem[] = [
    {
      id: "1",
      content: (
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
        />
      ),
      alt: "Mountain landscape",
    },
    {
      id: "2", 
      content: (
        <img 
          src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&h=400&fit=crop"
          alt="Forest path"
          className="w-full h-full object-cover"
        />
      ),
      alt: "Forest path",
    },
    {
      id: "3",
      content: (
        <img 
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=400&fit=crop"
          alt="Ocean waves"
          className="w-full h-full object-cover"
        />
      ),
      alt: "Ocean waves",
    },
  ];

  const contentSlides: CarouselItem[] = [
    {
      id: "testimonial-1",
      content: (
        <div className="p-8 text-center">
          <blockquote className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
            "This carousel component is exactly what I needed for my project."
          </blockquote>
          <cite className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            — Sarah Johnson
          </cite>
        </div>
      ),
    },
    {
      id: "testimonial-2", 
      content: (
        <div className="p-8 text-center">
          <blockquote className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
            "Great accessibility features and smooth animations."
          </blockquote>
          <cite className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            — Mike Chen
          </cite>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-8">
      {/* Basic Image Carousel */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Basic Image Carousel</h3>
        <Carousel
          items={imageSlides}
          aspectRatio="video"
          variant="modern"
        />
      </div>

      {/* Auto-play Carousel */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Auto-play (3 seconds)</h3>
        <Carousel
          items={imageSlides}
          autoPlay={3000}
          pauseOnHover
          aspectRatio="video"
          variant="modern"
        />
      </div>

      {/* Controlled Carousel */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Controlled Carousel</h3>
        <Carousel
          items={imageSlides}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
          aspectRatio="video"
          variant="elevated"
        />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Current slide: {currentSlide + 1} of {imageSlides.length}
        </p>
      </div>

      {/* Content Carousel */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Content Carousel - Testimonials</h3>
        <Carousel
          items={contentSlides}
          variant="modern"
          autoPlay={5000}
          pauseOnHover
          navigationVariant="modern"
        />
      </div>

      {/* Different Variants */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Different Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Carousel
            items={imageSlides.slice(0, 2)}
            variant="default"
            size="sm"
            aspectRatio="square"
          />
          <Carousel
            items={imageSlides.slice(0, 2)}
            variant="modern"
            size="sm"
            aspectRatio="square"
          />
          <Carousel
            items={imageSlides.slice(0, 2)}
            variant="elevated"
            size="sm"
            aspectRatio="square"
          />
        </div>
      </div>

      {/* Navigation Options */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Navigation Options</h3>
        <div className="space-y-4">
          <Carousel
            items={imageSlides}
            variant="modern"
            navigationVariant="elevated"
            showNavigationOutside
            aspectRatio="video"
          />
        </div>
      </div>

      {/* Without Indicators */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Without Indicators</h3>
        <Carousel
          items={imageSlides}
          variant="modern"
          showIndicators={false}
          aspectRatio="video"
        />
      </div>

      {/* No Loop */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">No Loop (Finite)</h3>
        <Carousel
          items={imageSlides}
          variant="modern"
          loop={false}
          aspectRatio="video"
        />
      </div>
    </div>
  );
}`;
