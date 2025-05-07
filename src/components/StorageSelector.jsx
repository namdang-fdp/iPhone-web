import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function StorageSelector({ options, selectedStorage, setSelectedStorage }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {options.map((option) => (
        <button
          key={option.size}
          onClick={() => setSelectedStorage(option.size)}
          className={`relative flex flex-col items-center p-4 rounded-xl border transition-all ${
            selectedStorage === option.size ? "border-blue-500 bg-zinc-800" : "border-zinc-700 hover:border-zinc-500"
          }`}
        >
          <span className="text-lg font-medium mb-1">{option.size} GB</span>
          <span className="text-sm text-zinc-400">${option.price}</span>

          {selectedStorage === option.size && (
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
