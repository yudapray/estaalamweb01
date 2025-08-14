import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/plantation-hero.jpg";
import avocadoPlantation from "@/assets/hero-avocado-plantation.webp";
import coffeePlantation from "@/assets/hero-coffee-plantation.jpg";
import farmerPicking from "@/assets/hero-panenhass.webp";
import sustainableFarm from "@/assets/hero-farmer-picking.jpg";

const Hero = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const heroImages = [
    heroImage,
    avocadoPlantation,
    coffeePlantation,
    farmerPicking,
    sustainableFarm
  ];

  // Preload images for better LCP
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = heroImages.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = src;
        });
      });
      
      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Still show content even if some images fail
      }
    };

    preloadImages();
  }, []);

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Show first image immediately for better LCP, fallback while carousel loads */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
        style={{ 
          backgroundImage: `url(${heroImages[0]})`,
          opacity: imagesLoaded ? 0 : 1
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-plantation/80 via-plantation/60 to-coffee/70" />
      
      {imagesLoaded && (
        <Carousel
          className="absolute inset-0"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="relative min-h-screen">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-plantation/80 via-plantation/60 to-coffee/70" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}
      
      <motion.div 
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Esta Alam
          <motion.span 
            className="block text-3xl md:text-4xl mt-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Indonesian Farmer
          </motion.span>
          <motion.span 
            className="block text-avocado text-3xl md:text-4xl mt-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Alpukat Hass & Kopi Arabika Terbaik
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          Menyajikan hasil perkebunan terbaik dari tanah Indonesia yang subur. 
          Alpukat Hass berkualitas tinggi dan kopi Arabika dengan cita rasa istimewa.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a href="#produk">
             <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Lihat Produk Kami
             </Button>
          </a>
          <a href="#tentang">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Tentang Perkebunan Kami
            </Button>
          </a>          
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
