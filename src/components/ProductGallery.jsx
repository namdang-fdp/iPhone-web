import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { baseImages } from "../constants"


function CreditCard(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  )
}

function Package(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

export default function ProductGallery({ selectedColor, currentStep }) {
	const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    setCurrentImage(0)
  }, [selectedColor])

  const images = baseImages

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900 aspect-square">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedColor}-${currentImage}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={images[currentImage] || "/placeholder.svg"}
              alt={`iPhone 15 Pro in ${selectedColor} - view ${currentImage + 1}`}
              className="object-contain max-h-full"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full p-2 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-full p-2 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`h-2 rounded-full transition-all ${
                currentImage === index ? "w-8 bg-gray-700" : "w-2 bg-white"
              }`}
            ></button>
          ))}
        </div>
      )}

      {currentStep === 1 && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="bg-zinc-900 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-medium">Free delivery</h3>
              <p className="text-sm text-zinc-400">Or pick up available at Apple Store</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="bg-zinc-900 p-3 rounded-full">
              <Package className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-medium">Free returns</h3>
              <p className="text-sm text-zinc-400">14-day return policy</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


