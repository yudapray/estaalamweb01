import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="kontak" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-plantation mb-6">
            Hubungi Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Siap melayani kebutuhan produk perkebunan berkualitas tinggi Anda
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-plantation">
                  <MapPin className="h-6 w-6" />
                  Alamat Perkebunan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Kp. Kiarasanding No.11 RT.04 RW.06<br />
                  Desa Pulosari, Kecamatan Pangalengan<br />
                  Kabupaten Bandung 12345<br />
                  Jawa Barat 40378, Indonesia
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-plantation">
                  <Phone className="h-6 w-6" />
                  Telepon & WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>WhatsApp:</strong> +62 8996939588
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-plantation">
                  <Mail className="h-6 w-6" />
                  Email & Social Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  estaalam.farm@gmail.com<br />
                  <a href="https://www.instagram.com/estaalam" target="_blank" rel="noopener noreferrer">instagram.com/estaalam</a><br />
                  <a href="https://www.tiktok.com/@esta.alam" target="_blank" rel="noopener noreferrer">tiktok.com/@esta.alam</a>
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-plantation">
                  <Clock className="h-6 w-6" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Senin - Jumat:</strong> 08:00 - 17:00 WIB<br />
                  <strong>Sabtu:</strong> 08:00 - 12:00 WIB<br />
                  <strong>Minggu:</strong> Tutup
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-2xl shadow-medium p-8">
            <h3 className="text-2xl font-bold text-plantation mb-6">
              Kirim Pesan
            </h3>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nama Lengkap
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-plantation focus:border-transparent"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-plantation focus:border-transparent"
                  placeholder="Masukkan email Anda"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nomor Telepon
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-plantation focus:border-transparent"
                  placeholder="Masukkan nomor telepon Anda"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pesan
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-plantation focus:border-transparent"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>
              
              <Button variant="plantation" size="lg" className="w-full">
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
