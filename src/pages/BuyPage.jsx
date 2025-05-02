import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ShoppingCart } from 'lucide-react';
import { colorList } from '../constants';
import { storageOptions } from '../constants';
import { paymentPlans } from '../constants';
import Navbar from '../components/Navbar';
const BuyPage = () => {

	const [isLoading, setIsLoading] = useState(true);

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
					<div>Hello</div>
				)
			}
		</div>
  );
};

export default BuyPage;
