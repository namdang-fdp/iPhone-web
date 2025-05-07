import { useState } from "react"
import { Plus, Check } from "lucide-react"
import { accessories } from "../constants"

export default function RecommendedAccessories() {
  const [selectedAccessories, setSelectedAccessories] = useState([])

  const toggleAccessory = (id) => {
    if (selectedAccessories.includes(id)) {
      setSelectedAccessories(selectedAccessories.filter((item) => item !== id))
    } else {
      setSelectedAccessories([...selectedAccessories, id])
    }
  }

  return (
    <div className="space-y-4">
      {accessories.map((accessory) => (
        <div
          key={accessory.id}
          className={`flex items-center p-4 rounded-xl border transition-all ${
            selectedAccessories.includes(accessory.id)
              ? "border-blue-500 bg-zinc-800"
              : "border-zinc-700 hover:border-zinc-500"
          }`}
        >
          <img
            src={accessory.image || "/placeholder.svg"}
            alt={accessory.name}
            className="w-16 h-16 object-contain mr-4"
          />

          <div className="flex-1">
            <h3 className="font-medium">{accessory.name}</h3>
            <p className="text-sm text-zinc-400">${accessory.price}</p>
          </div>

          <button
            onClick={() => toggleAccessory(accessory.id)}
            className={`flex items-center justify-center h-8 w-8 rounded-full transition-all ${
              selectedAccessories.includes(accessory.id)
                ? "bg-blue-500 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
            }`}
          >
            {selectedAccessories.includes(accessory.id) ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </button>
        </div>
      ))}
    </div>
  )
}
