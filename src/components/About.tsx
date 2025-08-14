const About = () => {
  return (
    <section id="tentang" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-plantation mb-6">
            Tentang Esta Alam - Indonesian Farmer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Perkebunan yang dikelola dengan penuh dedikasi untuk menghasilkan produk terbaik
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-plantation mb-4">Visi Kami</h3>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi perkebunan terdepan yang menghasilkan alpukat hass dan kopi arabika 
                berkualitas premium dengan metode pertanian berkelanjutan dan ramah lingkungan.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold text-coffee mb-4">Misi Kami</h3>
              <p className="text-muted-foreground leading-relaxed">
                Memberikan produk perkebunan terbaik kepada konsumen sambil menjaga kelestarian 
                alam dan memberdayakan masyarakat sekitar perkebunan.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-plantation mb-2">10+</div>
              <p className="text-muted-foreground">Tahun Pengalaman</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-coffee mb-2">5Ha</div>
              <p className="text-muted-foreground">Luas Perkebunan</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-avocado mb-2">100%</div>
              <p className="text-muted-foreground">Alami</p>
            </div>
          </div>
        </div>

        {/* Lokasi Perkebunan */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-4">Lokasi Perkebunan</h3>
          <p className="text-center text-muted-foreground mb-6">
            Kp. Kiarasanding No.11 RT.04 RW.06 Desa Pulosari Kecamatan Pangalengan Kabupaten Bandung Jawa Barat 40378 Indonesia
          </p>
          <div className="flex justify-center">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.003296187679!2d107.55443857354838!3d-7.176332470421326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e689371c0f2574d%3A0xf4c1bf91d7452c89!2sEsta%20Alam%20Indonesian%20Farmer!5e1!3m2!1sid!2sid!4v1754891454950!5m2!1sid!2sid" 
              width="100%" 
              height="400" 
              style={{ border: 0 }}
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Perkebunan Esta Alam">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
