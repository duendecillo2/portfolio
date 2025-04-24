"use client"

import { useState, useRef, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  images: string[]
  videoUrl?: string
  techStack: string[]
  demoUrl?: string
  codeUrl?: string
  liveDemo: string
  viewCode: string
}

export default function ProjectModal({
  isOpen,
  onClose,
  title,
  description,
  images,
  videoUrl,
  techStack,
  demoUrl,
  codeUrl,
  liveDemo,
  viewCode,
}: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          prevImage()
          break
        case "ArrowRight":
          nextImage()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Focus trap and scroll lock
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (isOpen) {
      document.body.style.overflow = "hidden"
      modalRef.current?.focus()
    }

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isOpen])

  const nextImage = () => {
    if (images.length <= 1) return
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    if (images.length <= 1) return
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 bg-gray-900 border-b border-gray-800">
          <h2 id="project-modal-title" className="text-xl font-bold text-gray-100">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <div className="p-6">
          {/* Media Gallery */}
          <div className="mb-6">
            {images.length > 0 && (
              <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5 text-white" />
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-colors",
                            index === currentImageIndex ? "bg-white" : "bg-white/50",
                          )}
                          aria-label={`Go to image ${index + 1}`}
                          aria-current={index === currentImageIndex}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {videoUrl && (
              <div className="mt-4 aspect-video bg-gray-800 rounded-lg overflow-hidden">
                <iframe
                  src={videoUrl}
                  title={`${title} demonstration video`}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Description</h3>
            <p className="text-gray-300">{description}</p>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-200 mb-2">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-500 text-gray-900 rounded-md hover:bg-teal-400 transition-colors"
              >
                {liveDemo}
              </a>
            )}
            {codeUrl && (
              <a
                href={codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-800 text-teal-400 border border-teal-500/30 rounded-md hover:bg-gray-700 transition-colors"
              >
                {viewCode}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
