import { useState } from "react";
import Icon from "@/components/ui/icon";

const gold = "#b8881e";
const text = "#2c2415";
const textMuted = "rgba(44,36,21,0.55)";
const border = "rgba(184,136,30,0.18)";

const reviews = [
  { name: "Дмитрий Коваль", role: "Владелец ресторана «Бриз», Сочи", rating: 5, text: "Заказывали полное оснащение террасы. Результат превзошёл ожидания — мебель стильная, крепкая, пережила уже два сезона без единой проблемы." },
  { name: "Марина Соколова", role: "Частный клиент, Краснодар", rating: 5, text: "Заказала угловой диван и обеденную группу для террасы. Делали под мои размеры и цвет — всё точно в срок. Качество плетения отличное." },
  { name: "Алексей Петров", role: "Управляющий отелем «Сосны»", rating: 5, text: "Работаем с мануфактурой уже третий год. Оснастили бассейновую зону, потом заказали кресла для детской площадки. Надёжный партнёр." },
  { name: "Татьяна Иванова", role: "Дизайнер интерьеров, Москва", rating: 5, text: "Рекомендую коллегам! Берутся за нестандартные проекты, могут сделать нужный цвет ротанга под проект. Сроки соблюдают." },
  { name: "Игорь Смирнов", role: "Девелопер, Казань", rating: 5, text: "Оснащали 18 коттеджей сразу. Справились в срок, цена за объём приятная. Мебель на открытом воздухе стоит третий год без нареканий." },
  { name: "Ольга Белова", role: "Частный клиент, Сочи", rating: 5, text: "Подвесное кресло «Кокон» — просто мечта! Красивое, удобное, плетение плотное. Заказала ещё шезлонг. Доставка быстрая, упаковка надёжная." },
];

export default function Reviews() {
  const [visible, setVisible] = useState(3);

  return (
    <section id="reviews" style={{ padding: "90px 48px", maxWidth: "1300px", margin: "0 auto" }}>
      <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: gold, marginBottom: "12px" }}>Отзывы</p>
      <h2 style={{ fontFamily: "serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: text, marginBottom: "48px" }}>Что говорят клиенты</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px", marginBottom: "40px" }}>
        {reviews.slice(0, visible).map((r, i) => (
          <div key={i} style={{ background: "#fff", border: `1px solid ${border}`, padding: "32px 28px", display: "flex", flexDirection: "column", boxShadow: "0 2px 16px rgba(44,36,21,0.06)" }}>
            <div style={{ display: "flex", gap: "4px", marginBottom: "20px", color: gold }}>
              {Array.from({ length: r.rating }).map((_, j) => (
                <Icon key={j} name="Star" size={14} />
              ))}
            </div>
            <p style={{ fontSize: "0.87rem", color: textMuted, lineHeight: 1.75, flex: 1, marginBottom: "24px" }}>«{r.text}»</p>
            <div style={{ borderTop: `1px solid ${border}`, paddingTop: "16px" }}>
              <div style={{ fontWeight: 600, fontSize: "0.88rem", color: text }}>{r.name}</div>
              <div style={{ fontSize: "0.72rem", color: "rgba(44,36,21,0.4)", marginTop: "4px" }}>{r.role}</div>
            </div>
          </div>
        ))}
      </div>

      {visible < reviews.length && (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setVisible((v) => Math.min(v + 3, reviews.length))}
            style={{ background: "transparent", border: `1px solid ${border}`, color: gold, padding: "12px 36px", fontSize: "0.75rem", letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer" }}
          >
            Показать ещё
          </button>
        </div>
      )}
    </section>
  );
}
