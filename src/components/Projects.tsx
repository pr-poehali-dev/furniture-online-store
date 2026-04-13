const projects = [
  { title: "Ресторан «Бриз»", city: "Сочи", desc: "Полное оснащение летней веранды: лаундж-зона, обеденные группы, декор. 42 единицы мебели из роупа.", tag: "HoReCa" },
  { title: "Загородный отель «Сосны»", city: "Подмосковье", desc: "Оснащение бассейновой зоны — шезлонги, подвесные кресла, кашпо. Индивидуальный цвет плетения под фирстиль.", tag: "Отель" },
  { title: "Частная вилла", city: "Краснодар", desc: "Терраса 80 м²: угловой диван, обеденная группа на 8 персон, кресла-мешки для детской зоны, подушки с вышивкой.", tag: "Частный заказ" },
  { title: "Кафе «Пальма»", city: "Ростов-на-Дону", desc: "Открытая терраса: 20 обеденных кресел из ротанга, 5 столов, форменные футболки персонала с вышивкой логотипа.", tag: "HoReCa" },
  { title: "Спа-комплекс «Азалия»", city: "Пятигорск", desc: "Зона отдыха у бассейна: 16 шезлонгов роуп, подвесной диван, декоративные кашпо, пошив купальных халатов.", tag: "Спа" },
  { title: "Коттеджный посёлок «Дубки»", city: "Казань", desc: "Типовое оснащение 12 коттеджей: лаундж-комплект + обеденная группа для каждого. 84 единицы мебели.", tag: "Девелопмент" },
];

const tagColors: Record<string, string> = {
  "HoReCa": "#c17f3a",
  "Отель": "#3a7fc1",
  "Частный заказ": "#3ac17f",
  "Спа": "#9b3ac1",
  "Девелопмент": "#c13a6a",
};

export default function Projects() {
  return (
    <section id="projects" style={{ background: "#161209", padding: "90px 48px" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#d4a43a", marginBottom: "12px" }}>Портфолио</p>
        <h2 style={{ fontFamily: "serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#ede8df", marginBottom: "16px" }}>Выполненные проекты</h2>
        <p style={{ color: "rgba(237,232,223,0.5)", marginBottom: "56px", maxWidth: 540, lineHeight: 1.7 }}>
          Работаем с ресторанами, отелями, частными клиентами и девелоперами по всей России.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
          {projects.map((p, i) => (
            <div key={i} style={{ background: "#1e1a11", border: "1px solid rgba(212,164,58,0.1)", padding: "32px 28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <span style={{ fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", background: tagColors[p.tag] || "#d4a43a", color: "#fff", padding: "3px 10px", fontWeight: 700 }}>{p.tag}</span>
                <span style={{ fontSize: "0.72rem", color: "rgba(237,232,223,0.4)" }}>{p.city}</span>
              </div>
              <div style={{ width: "32px", height: "1px", background: "#d4a43a", marginBottom: "16px" }} />
              <h3 style={{ fontFamily: "serif", fontSize: "1.25rem", color: "#ede8df", marginBottom: "12px" }}>{p.title}</h3>
              <p style={{ fontSize: "0.83rem", color: "rgba(237,232,223,0.55)", lineHeight: 1.75 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
