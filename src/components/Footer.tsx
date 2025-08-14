const Footer = () => {
  return (
    <footer className="bg-plantation text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Esta Alam</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Perkebunan alpukat hass dan kopi arabika premium dengan kualitas terbaik 
              dari tanah Indonesia yang subur.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
            <div className="space-y-2">
              <a href="#beranda" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Beranda
              </a>
              <a href="#produk" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Produk
              </a>
              <a href="#testimoni" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Testimoni
              </a>
              <a href="#tentang" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Tentang Kami
              </a>
              <a href="#kontak" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Kontak
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Kp. Kiarasanding No.11 RT.04 RW.06</p>
              <p>Desa Pulosari Kec. Pangalengan Kab. Bandung Jawa Barat 40378, Indonesia</p>
              <p>Telepon & Whatsapp: <a href="https://wa.me/628996939588" target="_blank" rel="noopener noreferrer">+628996939588</a></p>
              <p>Email: info@estaalam.com</p>
              <p>IG: <a href="https://www.instagram.com/estaalam/" target="_blank" rel="noopener noreferrer">instagram.com/estaalam</a></p>
              <p>Tiktok: <a href="https://www.tiktok.com/@esta.alam" target="_blank" rel="noopener noreferrer">tiktok.com/@esta.alam</a></p>
              <p>Shopee: estaalam</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Esta Alam. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
