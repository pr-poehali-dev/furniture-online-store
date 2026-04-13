const gold = "#b8881e";
const text = "#2c2415";
const textMuted = "rgba(44,36,21,0.55)";
const border = "rgba(184,136,30,0.18)";

const projects = [
  { title: "Отель Sochi Marriott", city: "Сочи", desc: "Оснащение бассейновой зоны и открытых террас: 48 шезлонгов «Cannes», 12 лаундж-комплектов, беседка «Villa» с кровлей.", tag: "Отель" },
  { title: "Ресторан «Терраса»", city: "Краснодар", desc: "Летняя веранда 200 м²: обеденные группы «Toscana», лаундж-зона «Riviera», подвесные кресла «Кокон» — 64 единицы.", tag: "HoReCa" },
  { title: "Частная резиденция", city: "Геленджик", desc: "Терраса и бассейновая зона: угловой комплект «Monaco», шезлонги «Bali» с навесом, беседка «Pavilion» 3×4 м.", tag: "Частный заказ" },
  { title: "Санаторий «Черноморье»", city: "Анапа", desc: "Зона отдыха у моря: 80 шезлонгов, 40 подвесных кресел, 6 лаундж-зон. Индивидуальный цвет плетения под фирстиль.", tag: "Спа" },
  { title: "Клубный посёлок «Береговой»", city: "Новороссийск", desc: "Оснащение 18 коттеджей: лаундж-комплект + обеденная группа + шезлонги для каждого. 126 единиц мебели.", tag: "Девелопмент" },
  { title: "Кафе-бар «Balcony»", city: "Ростов-на-Дону", desc: "Балконная терраса 60 м²: балконные группы «Bistro», подвесные кресла «Nest», обеденный комплект «Porto» на 20 гостей.", tag: "HoReCa" },
];

const tagColors: Record<string, string> = {
  "HoReCa": "#b8881e",
  "Отель": "#3a7fc1",
  "Частный заказ": "#3aaf7f",
  "Спа": "#9b6ec1",
  "Девелопмент": "#c13a6a",
};

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#ede8d8", padding: "90px 48px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: gold, marginBottom: "12px" }}>Портфолио</p>
        <h2 style={{ fontFamily: "serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: text, marginBottom: "16px" }}>Выполненные проекты</h2>
        <p style={{ color: textMuted, marginBottom: "56px", maxWidth: 540, lineHeight: 1.7 }}>
          Работаем с ресторанами, отелями, частными клиентами и девелоперами по всей России.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: "#fff", border: `1px solid ${border}`, padding: "32px 28px", boxShadow: "0 2px 16px rgba(44,36,21,0.06)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", background: tagColors[p.tag] || gold, color: "#fff", padding: "3px 10px", fontWeight: 700 }}>{p.tag}</span>
                <span style={{ fontSize: "0.72rem", color: textMuted }}>{p.city}</span>
              </div>
              <div style={{ width: "32px", height: "1px", background: gold, marginBottom: "16px" }} />
              <h3 style={{ fontFamily: "serif", fontSize: "1.25rem", color: text, marginBottom: "12px" }}>{p.title}</h3>
              <p style={{ fontSize: "0.83rem", color: textMuted, lineHeight: 1.75 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
