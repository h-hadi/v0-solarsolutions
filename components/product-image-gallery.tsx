"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ProductImage {
  src: string
  alt: string
}

interface ProductImageGalleryProps {
  images: ProductImage[]
}

export default function ProductImageGallery({ images }: ProductImageGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  // Function to select image by index
  const selectImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <div>
      {/* Main Image with Navigation */}
      <div className="bg-gray-100 rounded-xl overflow-hidden mb-6 relative">
        <img
          src={images[currentImageIndex].src || "/placeholder.svg"}
          alt={images[currentImageIndex].alt}
          className="w-full h-auto object-contain aspect-[4/3]"
        />

        {/* Image Navigation Controls */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prevImage}
            className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextImage}
            className="bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`bg-gray-100 rounded-lg overflow-hidden cursor-pointer border-2 ${
              currentImageIndex === index ? "border-green-500" : "border-transparent"
            }`}
            onClick={() => selectImage(index)}
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-auto object-cover aspect-square"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
