import { useState } from "react";
import { products, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const gold = "#b8881e";
const text = "#2c2415";
const textMuted = "rgba(44,36,21,0.5)";
const surface = "#fff";
const surfaceAlt = "#ede8d8";
const border = "rgba(184,136,30,0.18)";

const categoryIcons: Record<string, string> = {
  all: "LayoutGrid",
  lounge: "Sofa",
  dining: "UtensilsCrossed",
  hanging: "CircleDot",
  loungers: "BedDouble",
  balcony: "Wind",
  gazebo: "Home",
  chairs: "Armchair",
};

export default function Catalog() {
  const [active, setActive] = useState("all");
  const { add } = useCart();

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalog" style={{ padding: "80px 48px", maxWidth: "1300px", margin: "0 auto" }}>
      <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: gold, marginBottom: "12px" }}>Каталог</p>
      <h2 style={{ fontFamily: "serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: text, marginBottom: "40px" }}>Наша продукция</h2>

      {/* Tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "48px" }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "8px 18px", fontSize: "0.75rem", letterSpacing: "0.08em",
              textTransform: "uppercase", cursor: "pointer", border: "1px solid",
              borderColor: active === cat.id ? gold : border,
              background: active === cat.id ? gold : "transparent",
              color: active === cat.id ? "#fff" : textMuted,
              fontWeight: active === cat.id ? 700 : 400,
              transition: "all 0.2s",
            }}
          >
            <Icon name={categoryIcons[cat.id] || "Package"} size={13} />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "24px" }}>
        {filtered.map((p) => (
          <div key={p.id} style={{ background: surface, border: `1px solid ${border}`, display: "flex", flexDirection: "column", position: "relative", boxShadow: "0 2px 16px rgba(44,36,21,0.07)" }}>
            {p.badge && (
              <div style={{ position: "absolute", top: 12, left: 12, background: gold, color: "#fff", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "3px 10px", fontWeight: 700, zIndex: 1 }}>
                {p.badge}
              </div>
            )}
            <div style={{ background: surfaceAlt, height: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={categoryIcons[p.category] || "Package"} size={64} />
            </div>
            <div style={{ padding: "20px 20px 24px" }}>
              <div style={{ fontSize: "0.65rem", color: gold, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>{p.material}</div>
              <div style={{ fontFamily: "serif", fontSize: "1.1rem", color: text, marginBottom: 12, lineHeight: 1.3 }}>{p.name}</div>
              <div style={{ fontFamily: "serif", fontSize: "1.4rem", color: gold, marginBottom: 20 }}>{p.price.toLocaleString("ru-RU")} ₽</div>
              <button
                onClick={() => add({ id: p.id, name: p.name, price: p.price, image: p.image })}
                style={{ width: "100%", background: "transparent", border: `1px solid ${gold}`, color: gold, padding: "10px", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s", fontWeight: 600 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = gold; (e.currentTarget as HTMLButtonElement).style.color = "#fff"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = gold; }}
              >
                <Icon name="ShoppingCart" size={14} />
                В корзину
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
