import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

function App() {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans transition-colors">
      
      {/* Erişilebilirlik: Ana İçeriğe Atla (Sadece Tab ile görünür) */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50">
        Ana içeriğe atla
      </a>

      {/* Tema Değiştirme Butonu */}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema degistir"
      >
        <span className="dark:hidden text-xl">☾</span>
        <span className="hidden dark:inline text-xl">☀</span>
      </button>

      {/* HEADER VE NAVİGASYON */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Feti Sanaç
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a href="#hakkimda" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Hakkımda
                </a>
              </li>
              <li>
                <a href="#projeler" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  Projeler
                </a>
              </li>
              <li>
                <a href="#iletisim" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors">
                  İletişim
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* HAKKIMDA BÖLÜMÜ */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img 
                src="https://via.placeholder.com/160" 
                alt="Feti Sanaç profil fotoğrafı" 
                className="w-40 h-40 rounded-full object-cover shadow-lg" 
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba! Ben Sakarya Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim. Modern web teknolojileri, yazılım mimarisi ve mikroservis yapıları üzerine çalışmalar yapıyorum. Kodlamadan arta kalan zamanlarımda Demon Slayer ve One Piece gibi serileri takip etmekten keyif alırım.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Java</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind CSS</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">C#</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJELER BÖLÜMÜ */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card 
                variant="elevated" 
                title="BookVerse Mimari Projesi" 
                image="https://via.placeholder.com/400x200" 
                imageAlt="BookVerse ekran görüntüsü"
              >
                C4 modelleri kullanılarak tasarlanmış, yazılım mimarisi odaklı proje.
              </Card>

              <Card 
                variant="elevated" 
                title="Diş Kliniği Otomasyonu" 
                image="https://via.placeholder.com/400x200" 
                imageAlt="Otomasyon ekran görüntüsü"
              >
                Klinik süreçlerini hızlandırmak için geliştirilmiş yönetim sistemi otomasyonu.
              </Card>

              <Card 
                variant="elevated" 
                title="Ostam Crafts" 
                image="https://via.placeholder.com/400x200" 
                imageAlt="Etsy mağaza arayüzü"
                footer={<Button size="sm" variant="ghost">İncele</Button>}
              >
                Etsy üzerinde hoodie ve tasarım ürünler sergilediğim e-ticaret mağazası.
              </Card>

            </div>
          </div>
        </section>

        {/* İLETİŞİM BÖLÜMÜ */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              
              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Mesajınız
                </label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required 
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                ></textarea>
              </div>
              
              <Button variant="primary" size="lg" type="submit" className="w-full">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2026 Feti Sanaç. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;