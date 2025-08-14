import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import avocadoImage from "@/assets/real-avocado-hass.jpg";
import coffeeImage from "@/assets/coffee-product.jpg";

const Products = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="produk" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-plantation mb-6">
            Produk Unggulan Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dua produk premium dari perkebunan kami yang telah terbukti kualitasnya
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Alpukat Hass */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="overflow-hidden shadow-medium hover:shadow-xl transition-all duration-300 group h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={avocadoImage} 
                  alt="Alpukat Hass Premium"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-avocado px-3 py-1 rounded-full text-sm font-medium">
                    Premium Quality
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-plantation">
                  Alpukat Hass
                </CardTitle>
                <CardDescription className="text-lg">
                  Alpukat Hass berkualitas premium dengan daging buah yang lembut dan bernutrisi tinggi
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-plantation">Keunggulan:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Tekstur daging buah yang creamy</li>
                    <li>• Kandungan lemak sehat tinggi</li>
                    <li>• Tidak mudah berubah warna</li>
                    <li>• Tahan lama dan mudah disimpan</li>
                  </ul>
                </div>
                
                <Button variant="plantation" className="w-full">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Kopi Arabika */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Card className="overflow-hidden shadow-medium hover:shadow-xl transition-all duration-300 group h-full">
              <div className="relative overflow-hidden">
                <img 
                  src={coffeeImage} 
                  alt="Kopi Arabika Premium"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="bg-coffee px-3 py-1 rounded-full text-sm font-medium">
                    Single Origin
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl text-coffee">
                  Kopi Arabika
                </CardTitle>
                <CardDescription className="text-lg">
                  Kopi Arabika single origin dengan karakteristik rasa yang unik dan aroma yang menggoda
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-coffee">Karakteristik:</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Aroma yang khas dan wangi</li>
                    <li>• Rasa yang kompleks dan seimbang</li>
                    <li>• Tingkat keasaman yang pas</li>
                    <li>• Proses pengolahan secara tradisional</li>
                  </ul>
                </div>
                
                <Button variant="coffee" className="w-full">
                  Pelajari Lebih Lanjut
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;
