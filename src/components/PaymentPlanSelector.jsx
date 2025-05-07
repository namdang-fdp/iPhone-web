import { Check } from "lucide-react"
import { motion } from "framer-motion"

export default function PaymentPlanSelector({ plans, selectedPlan, setSelectedPlan, price, monthlyPrice }) {
  return (
    <div className="space-y-4">
      {plans.map((plan) => (
        <button
          key={plan.id}
          onClick={() => setSelectedPlan(plan.id)}
          className={`relative w-full text-left p-4 rounded-xl border transition-all ${
            selectedPlan === plan.id ? "border-blue-500 bg-zinc-800" : "border-zinc-700 hover:border-zinc-500"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">{plan.name}</h3>
              <p className="text-sm text-zinc-400">
                {plan.id === "monthly"
                  ? `From $${monthlyPrice}/mo. for 24 mo.`
                  : plan.id === "full"
                    ? `$${price}`
                    : plan.description}
              </p>
            </div>

            {selectedPlan === plan.id && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="bg-blue-500 rounded-full p-0.5">
                <Check className="h-4 w-4" />
              </motion.div>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
