export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  material: string;
  image: string;
  badge?: string;
}

export const categories = [
  { id: "all", label: "Все товары" },
  { id: "chairs", label: "Кресла" },
  { id: "sofas", label: "Диваны" },
  { id: "tables", label: "Столы" },
  { id: "hanging", label: "Подвесные кресла" },
  { id: "loungers", label: "Шезлонги" },
  { id: "decor", label: "Декор" },
  { id: "bags", label: "Кресла-мешки" },
  { id: "textile", label: "Текстиль и вышивка" },
];

export const products: Product[] = [
  { id: 1, name: "Кресло «Лагуна»", price: 28500, category: "chairs", material: "Искусственный ротанг", image: "", badge: "Хит" },
  { id: 2, name: "Кресло «Бриз»", price: 19900, category: "chairs", material: "Роуп", image: "" },
  { id: 3, name: "Кресло «Палермо»", price: 34000, category: "chairs", material: "Искусственный ротанг", image: "" },
  { id: 4, name: "Диван «Прованс» 2-местный", price: 62000, category: "sofas", material: "Искусственный ротанг", image: "", badge: "Новинка" },
  { id: 5, name: "Диван «Авиньон» 3-местный", price: 89000, category: "sofas", material: "Роуп", image: "" },
  { id: 6, name: "Угловой диван «Капри»", price: 115000, category: "sofas", material: "Искусственный ротанг + роуп", image: "" },
  { id: 7, name: "Стол обеденный «Рафаэль»", price: 38000, category: "tables", material: "Алюминий + стекло", image: "" },
  { id: 8, name: "Стол кофейный «Тулуза»", price: 14500, category: "tables", material: "Искусственный ротанг", image: "" },
  { id: 9, name: "Стол барный «Ницца»", price: 29000, category: "tables", material: "Алюминий + роуп", image: "", badge: "Новинка" },
  { id: 10, name: "Подвесное кресло «Кокон»", price: 24500, category: "hanging", material: "Искусственный ротанг", image: "", badge: "Хит" },
  { id: 11, name: "Подвесное кресло «Нест»", price: 31000, category: "hanging", material: "Роуп", image: "" },
  { id: 12, name: "Подвесной диван «Свинг»", price: 58000, category: "hanging", material: "Искусственный ротанг", image: "" },
  { id: 13, name: "Шезлонг «Канны»", price: 21000, category: "loungers", material: "Роуп", image: "" },
  { id: 14, name: "Шезлонг «Монако»", price: 26500, category: "loungers", material: "Искусственный ротанг", image: "", badge: "Хит" },
  { id: 15, name: "Кашпо плетёное «Флора»", price: 4200, category: "decor", material: "Искусственный ротанг", image: "" },
  { id: 16, name: "Ваза декоративная «Марсель»", price: 3800, category: "decor", material: "Роуп", image: "" },
  { id: 17, name: "Кресло-мешок «Груша» XL", price: 8900, category: "bags", material: "Вельвет / оксфорд", image: "" },
  { id: 18, name: "Кресло-мешок «Кубик»", price: 7500, category: "bags", material: "Вельвет", image: "" },
  { id: 19, name: "Подушка декоративная с вышивкой", price: 2200, category: "textile", material: "Хлопок + вышивка", image: "" },
  { id: 20, name: "Футболка с вышивкой логотипа", price: 1800, category: "textile", material: "Хлопок 180г", image: "" },
];
