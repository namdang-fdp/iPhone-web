import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function ColorSelector({ colors, selectedColor, setSelectedColor }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {colors.map((color) => (
        <button
          key={color.id}
          onClick={() => setSelectedColor(color.id)}
          className={`relative flex flex-col items-center p-4 rounded-xl border transition-all ${
            selectedColor === color.id ? "border-blue-500 bg-zinc-800" : "border-zinc-700 hover:border-zinc-500"
          }`}
        >
          <div className="w-16 h-16 rounded-full mb-3" style={{ backgroundColor: color.hex }}></div>
          <span className="text-sm">{color.name}</span>

          {selectedColor === color.id && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-3 right-3 bg-blue-500 rounded-full p-0.5"
            >
              <Check className="h-3 w-3" />
            </motion.div>
          )}
        </button>
      ))}
    </div>
  )
}
