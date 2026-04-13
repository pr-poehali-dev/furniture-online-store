import { useCart } from "@/context/CartContext";
import Icon from "@/components/ui/icon";

const gold = "#b8881e";
const text = "#2c2415";
const textMuted = "rgba(44,36,21,0.5)";
const bg = "#f7f2e9";
const surfaceAlt = "#ede8d8";
const border = "rgba(184,136,30,0.18)";

export default function CartDrawer() {
  const { items, remove, changeQty, total, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div onClick={() => setIsOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(44,36,21,0.35)", zIndex: 200 }} />
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: "min(420px, 100vw)", background: bg, zIndex: 201, display: "flex", flexDirection: "column", boxShadow: "-4px 0 32px rgba(44,36,21,0.15)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 28px", borderBottom: `1px solid ${border}` }}>
          <span style={{ fontFamily: "serif", fontSize: "1.4rem", color: text }}>Корзина</span>
          <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: text }}>
            <Icon name="X" size={22} />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "20px 28px" }}>
          {items.length === 0 ? (
            <div style={{ textAlign: "center", color: textMuted, paddingTop: "60px" }}>
              <Icon name="ShoppingCart" size={48} />
              <p style={{ marginTop: "16px", fontSize: "0.9rem" }}>Корзина пуста</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: "16px", marginBottom: "20px", paddingBottom: "20px", borderBottom: `1px solid ${border}` }}>
                <div style={{ width: 64, height: 64, background: surfaceAlt, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 4 }}>
                  <Icon name="Armchair" size={28} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.85rem", color: text, marginBottom: 6 }}>{item.name}</div>
                  <div style={{ fontSize: "0.8rem", color: gold, marginBottom: 10 }}>{item.price.toLocaleString("ru-RU")} ₽</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button onClick={() => changeQty(item.id, item.qty - 1)} style={{ width: 26, height: 26, background: surfaceAlt, border: `1px solid ${border}`, color: text, cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>−</button>
                    <span style={{ fontSize: "0.85rem", minWidth: 20, textAlign: "center", color: text }}>{item.qty}</span>
                    <button onClick={() => changeQty(item.id, item.qty + 1)} style={{ width: 26, height: 26, background: surfaceAlt, border: `1px solid ${border}`, color: text, cursor: "pointer", fontSize: "1rem", display: "flex", alignItems: "center", justifyContent: "center" }}>+</button>
                  </div>
                </div>
                <button onClick={() => remove(item.id)} style={{ background: "none", border: "none", cursor: "pointer", color: textMuted, alignSelf: "flex-start" }}>
                  <Icon name="Trash2" size={16} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div style={{ padding: "20px 28px", borderTop: `1px solid ${border}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
              <span style={{ color: textMuted, fontSize: "0.85rem" }}>Итого:</span>
              <span style={{ fontFamily: "serif", fontSize: "1.3rem", color: gold }}>{total.toLocaleString("ru-RU")} ₽</span>
            </div>
            <button style={{ width: "100%", background: gold, color: "#fff", border: "none", padding: "14px", fontSize: "0.78rem", letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", fontWeight: 700 }}>
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </>
  );
}
