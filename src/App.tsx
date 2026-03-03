function App() {
  return (
    <>
      {/* LAB-2: Klavye kullanıcıları için Ana İçeriğe Atla linki */}
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        {/* LAB-2: Başlık hiyerarşisi için sayfadaki tek h1 */}
        <h1 className="site-title">Feti Sanaç</h1>
        {/* LAB-2: Ekran okuyucular için aria-label */}
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      {/* LAB-2: Ana içerik kapsayıcısı */}
      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-content">
            {/* LAB-2: figure ve figcaption kullanımı */}
            <figure>
              <img src="https://via.placeholder.com/200" alt="Feti'nin profil fotoğrafı" />
              <figcaption>Feti Sanaç</figcaption>
            </figure>
            <div>
              <p>Merhaba! Ben Feti. Bilgisayar Mühendisliği öğrencisiyim. Web geliştirme ve yazılım mimarisi üzerine çalışıyorum. Arta kalan zamanlarımda ise One Piece ve Demon Slayer gibi serilerle vakit geçirmeyi seviyorum.</p>
              <br/>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>React</li>
                <li>TypeScript</li>
                <li>CSS Grid</li>
                <li>Flexbox</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              {/* LAB-2: Anlamlı alt metinler */}
              <img src="https://via.placeholder.com/400x200" alt="E-Ticaret sitesi anasayfa ekran görüntüsü" />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
              </ul>
            </article>
            <article className="project-card">
              <img src="https://via.placeholder.com/400x200" alt="Blog uygulaması yazı listesi görünümü" />
              <h3>Blog Uygulaması</h3>
              <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>
          </div>
        </section>

        {/* LAB-2: Doğrulamalı ve Erişilebilir İletişim Formu */}
        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>
              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input type="text" id="name" name="name" required minLength={2} aria-describedby="name-error" />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input type="email" id="email" name="email" required aria-describedby="email-error" />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea id="message" name="message" rows={5} required minLength={10} aria-describedby="message-error"></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>
              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Feti Sanaç. Web Tasarımı ve Programlama LAB-3.</p>
      </footer>
    </>
  )
}

export default App