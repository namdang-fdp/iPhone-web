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

const BuyPage = () => {
	const [selectedColor, setSelectedColor] = useState("titanium");
	const [isLoading, setIsLoading] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState("256")

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000)

		return () => clearTimeout(timer);
	}, [])


  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
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
