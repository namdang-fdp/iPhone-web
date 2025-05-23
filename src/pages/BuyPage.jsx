import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { colorList } from '../constants';
import { storageOptions } from '../constants';
import { paymentPlans } from '../constants';
import Navbar from '../components/Navbar';
import ProductGallery from '../components/ProductGallery';
import ColorSelector from '../components/ColorSelector';
import StorageSelector from '../components/StorageSelector';
import PaymentPlanSelector from '../components/PaymentPlanSelector';
import RecommendedAccessories from '../components/RecommendedAccessories';

const BuyPage = () => {
	const [selectedColor, setSelectedColor] = useState("titanium");
	const [isLoading, setIsLoading] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState("256");
  const [selectedPaymentPlan, setSelectedPaymentPlan] = useState("monthly");

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000)

		return () => clearTimeout(timer);
	}, [])

  const getPrice = () => {
    const selectedOption = storageOptions.find((option) => option.size === selectedStorage)
    return selectedOption ? selectedOption.price : 999
  }

  const getMonthlyPrice = () => {
    return (getPrice() / 24).toFixed(2)
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
			<Navbar />

			{isLoading ? (
				<div className="flex items-center justify-center h-screen">
					<div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div>
				</div>
				) : (
					<main className="container mx-auto px-4 py-8">
						<div className="max-w-7xl max-auto">
							<div className="flex items-center justify-between mb-8">
								<h1 className="text-3xl md:text-4xl font-medium">iPhone 15 Pro</h1>
								<div className="hidden md:flex items-center space-x-4">
									<div className={`h-3 w-3 rounded-full ${currentStep >= 1 ? "bg-blue" : "bg-gray-600"}`}></div>
									<div className={`h-3 w-3 rounded-full ${currentStep >= 2 ? "bg-blue" : "bg-gray-600"}`}></div>
									<div className={`h-3 w-3 rounded-full ${currentStep >= 3 ? "bg-blue" : "bg-gray-600"}`}></div>
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-12">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`product-${currentStep}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="sticky top-24"
                  >
                    <ProductGallery selectedColor={selectedColor} currentStep={currentStep} />
                  </motion.div>
                </AnimatePresence>
							
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`step-${currentStep}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-zinc-900 rounded-3xl p-8"
                  >
                    {currentStep === 1 && (
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-2xl font-medium mb-6">Choose your finish.</h2>
                          <ColorSelector
                            colors={colorList}
                            selectedColor={selectedColor}
                            setSelectedColor={setSelectedColor}
                          />
                        </div>

                        <div className="pt-6">
                          <h2 className="text-2xl font-medium mb-6">Choose your storage.</h2>
                          <StorageSelector
                            options={storageOptions}
                            selectedStorage={selectedStorage}
                            setSelectedStorage={setSelectedStorage}
                          />
                        </div>

                        <div className="pt-8">
                          <button
                            onClick={handleNextStep}
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-full font-medium flex items-center justify-center transition-all"
                          >
                            Continue
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-2xl font-medium mb-6">How would you like to pay?</h2>
                          <PaymentPlanSelector
                            plans={paymentPlans}
                            selectedPlan={selectedPaymentPlan}
                            setSelectedPlan={setSelectedPaymentPlan}
                            price={getPrice()}
                            monthlyPrice={getMonthlyPrice()}
                          />
                        </div>

                        <div className="pt-8 flex space-x-4">
                          <button
                            onClick={handlePrevStep}
                            className="flex-1 border border-zinc-700 hover:border-zinc-500 text-white py-4 px-6 rounded-full font-medium flex items-center justify-center transition-all"
                          >
                            Back
                          </button>
                          <button
                            onClick={handleNextStep}
                            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-full font-medium flex items-center justify-center transition-all"
                          >
                            Continue
                            <ChevronRight className="ml-2 h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-8">
                        <div>
                          <h2 className="text-2xl font-medium mb-6">Recommended Accessories</h2>
                          <RecommendedAccessories />
                        </div>

                        <div className="border-t border-zinc-800 pt-6">
                          <div className="space-y-4 mb-6">
                            <div className="flex justify-between">
                              <span className="text-zinc-400">iPhone 15 Pro</span>
                              <span>${getPrice()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Color</span>
                              <span className="capitalize">{selectedColor}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Storage</span>
                              <span>{selectedStorage} GB</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-zinc-400">Payment</span>
                              <span>
                                {selectedPaymentPlan === "monthly" ? `$${getMonthlyPrice()}/mo.` : `$${getPrice()}`}
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-between text-xl font-medium pt-4 border-t border-zinc-800">
                            <span>Total</span>
                            <span>
                              {selectedPaymentPlan === "monthly"
                                ? `$${getMonthlyPrice()}/mo. for 24 mo.`
                                : `$${getPrice()}`}
                            </span>
                          </div>
                        </div>

                        <div className="pt-8 flex space-x-4">
                          <button
                            onClick={handlePrevStep}
                            className="flex-1 border border-zinc-700 hover:border-zinc-500 text-white py-4 px-6 rounded-full font-medium flex items-center justify-center transition-all"
                          >
                            Back
                          </button>
                          <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-full font-medium flex items-center justify-center transition-all">
                            Add to Bag
                            <ShoppingCart className="ml-2 h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
						</div>
					</main>
				)
			}
		</div>
  );
};

export default BuyPage;
