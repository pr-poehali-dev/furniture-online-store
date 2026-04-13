import { useCart } from "@/context/CartContext";
import Catalog from "@/components/Catalog";
import CartDrawer from "@/components/CartDrawer";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { href: "#catalog", label: "Каталог" },
  { href: "#projects", label: "Проекты" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

const SERVICES = [
  { icon: "Armchair", title: "Мебель из ротанга", desc: "Кресла, диваны, столы, шезлонги, подвесные кресла — из искусственного ротанга и роупа" },
  { icon: "Bean", title: "Кресла-мешки", desc: "Пошив кресел-мешков любых форм и размеров из влагостойких тканей" },
  { icon: "Shirt", title: "Текстиль и вышивка", desc: "Подушки, футболки, форменная одежда с нанесением логотипа методом вышивки" },
  { icon: "Ruler", title: "Индивидуальные проекты", desc: "Разработка и изготовление мебели под ваши размеры, цвет и стиль" },
];

function Header() {
  const { count, setIsOpen } = useCart();
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(19,16,9,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(212,164,58,0.18)" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px" }}>
        <div>
          <div style={{ fontFamily: "serif", fontSize: "1.5rem", color: "#d4a43a", letterSpacing: "0.08em", lineHeight: 1 }}>Всё в Ажуре</div>
          <div style={{ fontSize: "0.58rem", color: "rgba(237,232,223,0.35)", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 3 }}>Мануфактура мебели</div>
        </div>
        <nav style={{ display: "flex", gap: "28px" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "rgba(237,232,223,0.6)", fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          style={{ position: "relative", background: "none", border: "1px solid rgba(212,164,58,0.35)", color: "#ede8df", padding: "8px 18px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontSize: "0.72rem", letterSpacing: "0.1em" }}
        >
          <Icon name="ShoppingCart" size={16} />
          Корзина
          {count > 0 && (
            <span style={{ position: "absolute", top: -8, right: -8, background: "#d4a43a", color: "#131009", borderRadius: "50%", width: 20, height: 20, fontSize: "0.65rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
              {count}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ background: "linear-gradient(135deg, #131009 60%, #1e1710 100%)", padding: "100px 48px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,164,58,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,164,58,0.1)", border: "1px solid rgba(212,164,58,0.25)", padding: "6px 16px", marginBottom: "28px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#d4a43a", display: "inline-block" }} />
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#d4a43a" }}>Собственное производство</span>
          </div>
          <h1 style={{ fontFamily: "serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 0.95, fontWeight: 600, color: "#ede8df", marginBottom: "28px" }}>
            Мебель<br />
            <span style={{ color: "#d4a43a" }}>из ротанга</span><br />
            и роупа
          </h1>
          <p style={{ fontSize: "1rem", color: "rgba(237,232,223,0.55)", maxWidth: "440px", lineHeight: 1.75, marginBottom: "44px" }}>
            Производим мебель для улицы и интерьера, шьём кресла-мешки и подушки, наносим вышивку на текстиль. Индивидуальные проекты любой сложности.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#catalog" style={{ background: "#d4a43a", color: "#131009", padding: "14px 36px", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>
              Смотреть каталог
            </a>
            <a href="#contact" style={{ background: "transparent", color: "#ede8df", border: "1px solid rgba(237,232,223,0.2)", padding: "14px 36px", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
              Обсудить проект
            </a>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{ background: "#1e1a11", border: "1px solid rgba(212,164,58,0.1)", padding: "28px 22px" }}>
              <div style={{ color: "#d4a43a", marginBottom: "12px" }}>
                <Icon name={s.icon} size={28} />
              </div>
              <div style={{ fontFamily: "serif", fontSize: "0.95rem", color: "#ede8df", marginBottom: "8px", lineHeight: 1.3 }}>{s.title}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(237,232,223,0.4)", lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [["12+", "лет на рынке"], ["3 000+", "реализованных проектов"], ["46", "регионов доставки"], ["100%", "собственное производство"]];
  return (
    <div style={{ background: "#d4a43a", padding: "32px 48px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "24px" }}>
        {stats.map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "serif", fontSize: "2.2rem", fontWeight: 700, color: "#131009", lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(19,16,9,0.65)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ background: "#1c1710", padding: "90px 48px", textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#d4a43a", marginBottom: "12px" }}>Свяжитесь с нами</p>
        <h2 style={{ fontFamily: "serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#ede8df", marginBottom: "16px" }}>Обсудим ваш проект</h2>
        <p style={{ color: "rgba(237,232,223,0.5)", marginBottom: "48px", lineHeight: 1.7 }}>
          Оставьте заявку — перезвоним в течение рабочего дня, подберём решение под ваш бюджет и сроки.
        </p>
        <form style={{ display: "flex", flexDirection: "column", gap: "14px" }} onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Ваше имя" style={{ background: "#131009", border: "1px solid rgba(212,164,58,0.2)", color: "#ede8df", padding: "14px 18px", fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box" }} />
          <input placeholder="Телефон или email" style={{ background: "#131009", border: "1px solid rgba(212,164,58,0.2)", color: "#ede8df", padding: "14px 18px", fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box" }} />
          <textarea placeholder="Расскажите о задаче..." rows={4} style={{ background: "#131009", border: "1px solid rgba(212,164,58,0.2)", color: "#ede8df", padding: "14px 18px", fontSize: "0.85rem", outline: "none", resize: "vertical", fontFamily: "sans-serif", width: "100%", boxSizing: "border-box" }} />
          <button type="submit" style={{ background: "#d4a43a", color: "#131009", border: "none", padding: "15px", fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase", cursor: "pointer", fontWeight: 700 }}>
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(212,164,58,0.15)", padding: "36px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", background: "#0f0d08" }}>
      <div>
        <div style={{ fontFamily: "serif", fontSize: "1.2rem", color: "#d4a43a", letterSpacing: "0.08em" }}>Всё в Ажуре</div>
        <div style={{ fontSize: "0.6rem", color: "rgba(237,232,223,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 3 }}>Мануфактура мебели</div>
      </div>
      <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} style={{ color: "rgba(237,232,223,0.35)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
            {l.label}
          </a>
        ))}
      </div>
      <div style={{ fontSize: "0.72rem", color: "rgba(237,232,223,0.25)" }}>© 2024 Все права защищены</div>
    </footer>
  );
}

const Index = () => {
  return (
    <div style={{ backgroundColor: "#131009", minHeight: "100vh", color: "#ede8df", fontFamily: "sans-serif" }}>
      <Header />
      <Hero />
      <Stats />
      <Catalog />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Index;