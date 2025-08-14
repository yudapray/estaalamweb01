import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 transition-all duration-500 hover:bg-background/90 hover:backdrop-blur-lg hover:border-border/70">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#beranda" className="logo-container">
              <img
                src="/lovable-uploads/logoestaalam.webp"
                alt="Esta Alam Logo"
                className="h-16 md:h-20 w-auto object-contain"                
              />
            </a>
            <div className="flex flex-col leading-tight">
              <a href="#beranda" className="text-xl md:text-2xl font-bold text-plantation nav-link">
                Esta Alam
              </a>
              <span className="text-sm md:text-lg text-plantation">
                Indonesian Farmer
              </span>
            </div>
            {/*<div >
              <a href="#beranda" className="text-2xl font-bold text-plantation">
                Esta Alam
              </a> 
              <a className="text-2xl text-plantation"> Indonesian Farmer </a> 
            </div>*/}
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#beranda" className="nav-link text-foreground font-bold">
              Beranda
            </a>
            <a href="#produk" className="nav-link text-foreground font-bold">
              Produk
            </a>
            <a href="#testimoni" className="nav-link text-foreground font-bold">
              Testimoni
            </a>
            <a href="#tentang" className="nav-link text-foreground font-bold">
              Tentang Kami
            </a>
            <a href="#kontak" className="nav-link text-foreground font-bold">
              Kontak
            </a>
          </div>
          <a href="https://wa.me/628996939588" target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="sm" className="contact-button">
              <span>Hubungi Kami</span>
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
