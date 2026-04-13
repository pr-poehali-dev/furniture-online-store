import { useCart } from "@/context/CartContext";
import Catalog from "@/components/Catalog";
import CartDrawer from "@/components/CartDrawer";
import Projects from "@/components/Projects";
import Reviews from "@/components/Reviews";
import Icon from "@/components/ui/icon";

const C = {
  bg: "#f7f2e9",
  bgMid: "#efe8d8",
  bgDeep: "#e8dfc8",
  surface: "#fff",
  surfaceAlt: "#f2ece0",
  gold: "#b8881e",
  goldLight: "#d4a43a",
  text: "#2c2415",
  textMuted: "rgba(44,36,21,0.55)",
  textFaint: "rgba(44,36,21,0.35)",
  border: "rgba(184,136,30,0.2)",
};

const NAV_LINKS = [
  { href: "#catalog", label: "Каталог" },
  { href: "#projects", label: "Проекты" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

const SERVICES = [
  { icon: "Sofa", title: "Лаундж-комплекты", desc: "Модульные системы и готовые комплекты для террас, бассейнов и садовых зон" },
  { icon: "CircleDot", title: "Подвесные кресла", desc: "Коконы, «Nest», «Bubble» и диваны-качели — от 28 000 ₽" },
  { icon: "BedDouble", title: "Шезлонги", desc: "Лёгкие и прочные, с регулировкой спинки, для бассейнов и пляжных зон" },
  { icon: "Home", title: "Беседки и перголы", desc: "Сборные конструкции с ротанговыми панелями, поликарбонатная кровля" },
];

function Header() {
  const { count, setIsOpen } = useCart();
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(247,242,233,0.97)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${C.border}` }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 48px" }}>
        <div>
          <div style={{ fontFamily: "serif", fontSize: "1.6rem", color: C.gold, letterSpacing: "0.06em", lineHeight: 1 }}>Всё в Ажуре</div>
          <div style={{ fontSize: "0.55rem", color: C.textFaint, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>Мануфактура мебели · Краснодар</div>
        </div>
        <nav style={{ display: "flex", gap: "28px" }}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} style={{ color: C.textMuted, fontSize: "0.72rem", letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          style={{ position: "relative", background: "none", border: `1px solid ${C.border}`, color: C.text, padding: "8px 18px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontSize: "0.72rem", letterSpacing: "0.1em" }}
        >
          <Icon name="ShoppingCart" size={16} />
          Корзина
          {count > 0 && (
            <span style={{ position: "absolute", top: -8, right: -8, background: C.gold, color: "#fff", borderRadius: "50%", width: 20, height: 20, fontSize: "0.65rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>
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
    <section style={{ background: `linear-gradient(135deg, ${C.bg} 60%, ${C.bgMid} 100%)`, padding: "100px 48px 80px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(184,136,30,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(184,136,30,0.08)", border: `1px solid rgba(184,136,30,0.25)`, padding: "6px 16px", marginBottom: "28px" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold, display: "inline-block" }} />
            <span style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: C.gold }}>Собственное производство · Краснодар</span>
          </div>
          <h1 style={{ fontFamily: "serif", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", lineHeight: 0.95, fontWeight: 600, color: C.text, marginBottom: "28px" }}>
            Стильная<br />
            <span style={{ color: C.gold }}>мебель</span><br />
            из ротанга
          </h1>
          <p style={{ fontSize: "1rem", color: C.textMuted, maxWidth: "440px", lineHeight: 1.75, marginBottom: "44px" }}>
            Премиальная мебель из искусственного ротанга: подвесные кресла, шезлонги, обеденные и лаундж-комплекты, беседки — для террас, балконов, садов и коммерческих объектов.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="#catalog" style={{ background: C.gold, color: "#fff", padding: "14px 36px", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", fontWeight: 700 }}>
              Смотреть каталог
            </a>
            <a href="#contact" style={{ background: "transparent", color: C.text, border: `1px solid rgba(44,36,21,0.2)`, padding: "14px 36px", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none" }}>
              Обсудить проект
            </a>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{ background: C.surface, border: `1px solid ${C.border}`, padding: "28px 22px", boxShadow: "0 2px 12px rgba(44,36,21,0.06)" }}>
              <div style={{ color: C.gold, marginBottom: "12px" }}>
                <Icon name={s.icon} size={28} />
              </div>
              <div style={{ fontFamily: "serif", fontSize: "0.95rem", color: C.text, marginBottom: "8px", lineHeight: 1.3 }}>{s.title}</div>
              <div style={{ fontSize: "0.72rem", color: C.textMuted, lineHeight: 1.6 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [["15+", "лет на рынке"], ["5 000+", "довольных клиентов"], ["89", "городов доставки"], ["100%", "собственное производство"]];
  return (
    <div style={{ background: C.gold, padding: "32px 48px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "24px" }}>
        {stats.map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "serif", fontSize: "2.2rem", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{num}</div>
            <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 6 }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ background: C.bgMid, padding: "90px 48px", textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: C.gold, marginBottom: "12px" }}>Свяжитесь с нами</p>
        <h2 style={{ fontFamily: "serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: C.text, marginBottom: "16px" }}>Обсудим ваш проект</h2>
        <p style={{ color: C.textMuted, marginBottom: "32px", lineHeight: 1.7 }}>
          Оставьте заявку — перезвоним в течение рабочего дня, подберём решение под ваш бюджет и сроки.
        </p>
        <div style={{ display: "flex", gap: "32px", justifyContent: "center", flexWrap: "wrap", marginBottom: "40px" }}>
          <a href="tel:+78612345678" style={{ display: "flex", alignItems: "center", gap: 8, color: C.gold, textDecoration: "none", fontSize: "0.85rem" }}>
            <Icon name="Phone" size={16} />
            +7 (861) 234-56-78
          </a>
          <a href="mailto:info@vsevajure.ru" style={{ display: "flex", alignItems: "center", gap: 8, color: C.gold, textDecoration: "none", fontSize: "0.85rem" }}>
            <Icon name="Mail" size={16} />
            info@vsevajure.ru
          </a>
          <span style={{ display: "flex", alignItems: "center", gap: 8, color: C.textMuted, fontSize: "0.85rem" }}>
            <Icon name="MapPin" size={16} />
            Краснодар, ул. Производственная, 12
          </span>
        </div>
        <form style={{ display: "flex", flexDirection: "column", gap: "14px" }} onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Ваше имя" style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text, padding: "14px 18px", fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box" }} />
          <input placeholder="Телефон или email" style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text, padding: "14px 18px", fontSize: "0.85rem", outline: "none", width: "100%", boxSizing: "border-box" }} />
          <textarea placeholder="Расскажите о задаче..." rows={4} style={{ background: C.surface, border: `1px solid ${C.border}`, color: C.text, padding: "14px 18px", fontSize: "0.85rem", outline: "none", resize: "vertical", fontFamily: "sans-serif", width: "100%", boxSizing: "border-box" }} />
          <button type="submit" style={{ background: C.gold, color: "#fff", border: "none", padding: "15px", fontSize: "0.78rem", letterSpacing: "0.16em", textTransform: "uppercase", cursor: "pointer", fontWeight: 700 }}>
            Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${C.border}`, padding: "36px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", background: C.bgDeep }}>
      <div>
        <div style={{ fontFamily: "serif", fontSize: "1.3rem", color: C.gold, letterSpacing: "0.06em" }}>Всё в Ажуре</div>
        <div style={{ fontSize: "0.55rem", color: C.textFaint, letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 4 }}>Мануфактура мебели · Краснодар</div>
      </div>
      <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} style={{ color: C.textMuted, fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}>
            {l.label}
          </a>
        ))}
      </div>
      <div style={{ fontSize: "0.72rem", color: C.textFaint }}>© 2024 Всё в Ажуре. Все права защищены.</div>
    </footer>
  );
}

const Index = () => {
  return (
    <div style={{ backgroundColor: C.bg, minHeight: "100vh", color: C.text, fontFamily: "sans-serif" }}>
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
