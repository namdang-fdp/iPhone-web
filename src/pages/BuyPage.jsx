import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { colorList } from '../constants';
import { storageOptions } from '../constants';
import { paymentPlans } from '../constants';
import Navbar from '../components/Navbar';
import ProductGallery from '../components/ProductGallery';

const BuyPage = () => {
	const [selectedColor, setSelectedColor] = useState("titanium");
	const [isLoading, setIsLoading] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000)

		return () => clearTimeout(timer);
	}, [])

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
							</div>
						</div>
					</main>
				)
			}
		</div>
  );
};

export default BuyPage;
