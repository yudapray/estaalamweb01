import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

// Import testimonial images
import testimonial1 from "@/assets/testimonial-1.webp";
import testimonial2 from "@/assets/testimonial-2.webp";
import testimonial3 from "@/assets/testimonial-3.webp";
import testimonial4 from "@/assets/testimonial-4.webp";
import testimonial5 from "@/assets/testimonial-5.webp";
import testimonial6 from "@/assets/testimonial-6.webp";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Bu Sari Wijaya",
      location: "Jakarta",
      product: "Alpukat Hass",
      rating: 5,
      text: "Alpukat Hass dari Esta Alam benar-benar premium! Teksturnya sangat creamy dan sempurna untuk MPASI bayi saya. Kualitasnya konsisten dan selalu fresh saat diterima.",
      image: testimonial1
    },
    {
      id: 2,
      name: "Pak Bambang Sutrisno",
      location: "Surabaya", 
      product: "Kopi Arabika",
      rating: 5,
      text: "Sebagai pecinta kopi, saya sangat terkesan dengan kopi arabika Esta Alam. Aroma dan cita rasanya kompleks, benar-benar single origin berkualitas tinggi. Proses tradisionalnya terasa sekali!",
      image: testimonial2
    },
    {
      id: 3,
      name: "Ibu Dewi Lestari",
      location: "Bandung",
      product: "Alpukat Hass",
      rating: 5,
      text: "Sudah berlangganan alpukat Hass Esta Alam selama 6 bulan. Anak-anak suka sekali karena rasanya manis dan tidak pahit. Packaging juga rapi dan aman untuk pengiriman jarak jauh.",
      image: testimonial3
    },
    {
      id: 4,
      name: "Pak Agus Firmansyah",
      location: "Medan",
      product: "Kopi Arabika", 
      rating: 5,
      text: "Kopi arabika Esta Alam ini benar-benar istimewa. Sebagai owner coffee shop, saya selalu mencari kopi berkualitas tinggi. Esta Alam memberikan konsistensi rasa yang luar biasa untuk pelanggan saya.",
      image: testimonial4
    },
    {
      id: 5,
      name: "Bu Maya Sari",
      location: "Yogyakarta",
      product: "Alpukat Hass",
      rating: 5,
      text: "Alpukat Hass Esta Alam sangat cocok untuk diet sehat saya. Kandungan lemak sehatnya tinggi dan rasa yang enak membuat saya tidak bosan mengonsumsinya setiap hari. Recommended!",
      image: testimonial5
    },
    {
      id: 6,
      name: "Pak Rudi Hermawan",
      location: "Bali",
      product: "Kopi Arabika",
      rating: 5,
      text: "Menjalankan homestay di Bali, saya selalu menyajikan kopi arabika Esta Alam untuk tamu. Mereka selalu terkagum dengan kualitas kopinya. Benar-benar membantu memberikan pengalaman otentik Indonesia!",
      image: testimonial6
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="testimoni" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Badge variant="secondary" className="mb-4 bg-plantation-green/10 text-plantation-green border-plantation-green/20">
            Testimoni Pelanggan
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Apa Kata Pelanggan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kepuasan pelanggan adalah prioritas utama kami. Dengarkan langsung pengalaman mereka dengan produk berkualitas Esta Alam.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 bg-card border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-plantation-green/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(testimonial.rating)}</div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.product}
                    </Badge>
                  </div>
                  
                  <blockquote className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground mb-4">
            Bergabunglah dengan ribuan pelanggan puas lainnya
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div>
              <span className="font-semibold">500+</span> Pelanggan Puas
            </div>
            <div>
              <span className="font-semibold">2+</span> Tahun Pengalaman
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;