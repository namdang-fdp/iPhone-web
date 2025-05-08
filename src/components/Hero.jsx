import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
	const [videoSrc, setVideoSrc] = useState(window.innerWidth > 768 ? heroVideo : smallHeroVideo);
	
	const handleVideoSrc = () => {
		if(window.innerWidth <= 768) {
			setVideoSrc(smallHeroVideo);
		} else {
			setVideoSrc(heroVideo);
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleVideoSrc);
		return () => {
			window.removeEventListener('resize', handleVideoSrc);
		}
	}, [])

	useGSAP(() => {
		gsap.to("#hero", {
			opacity: 1,
			delay: 1.5,
			ease: 'power2.out',
		})

		gsap.to("#cta", {
			opacity: 1,
			y: -50,
			delay: 1.5,
			ease: 'expo.inOut',
		})
	}, [])


  return (
		<section className="w-full nav-height bg-black relative">
			<div className="h-5/6 w-full flex-center flex-col">
				<p id="hero" className="hero-title">IPhone 15 Pro</p>
				<div className="md:w-10/12 w-9/12">
					<video className="pointer-events-none" loop autoPlay muted playsInline={true} key={videoSrc}>
						<source src={videoSrc} type="video/mp4" />
					</video>
				</div>
			</div>

			<div id="cta" className="flex flex-col items-center opacity-0 translate-y-15">
				<Link to="/buy" className="btn">Buy</Link>
				<p className="font-normal text-xl">From $199/month or $999</p>
			</div>
		</section>
	)
}

export default Hero



