export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  material: string;
  image: string;
  badge?: string;
  sizes?: string;
}

export const categories = [
  { id: "all", label: "Все товары" },
  { id: "lounge", label: "Лаундж-комплекты" },
  { id: "dining", label: "Обеденные группы" },
  { id: "hanging", label: "Подвесные кресла" },
  { id: "loungers", label: "Шезлонги" },
  { id: "balcony", label: "Балконные группы" },
  { id: "gazebo", label: "Беседки" },
  { id: "chairs", label: "Кресла и диваны" },
];

export const products: Product[] = [
  // Лаундж-комплекты
  { id: 1, name: "Лаундж-комплект «Riviera» 4-местный", price: 148000, category: "lounge", material: "Искусственный ротанг, алюминиевый каркас", image: "", badge: "Хит", sizes: "Диван 220×90, 2 кресла, стол 110×60" },
  { id: 2, name: "Лаундж-комплект «Palma» 6-местный", price: 198000, category: "lounge", material: "Искусственный ротанг, алюминиевый каркас", image: "", sizes: "Угловой диван + 2 кресла + стол" },
  { id: 3, name: "Лаундж-комплект «Monaco» модульный", price: 245000, category: "lounge", material: "Искусственный ротанг PE, каркас сталь", image: "", badge: "Новинка" },
  { id: 4, name: "Лаундж-комплект «Capri» 3-местный", price: 98000, category: "lounge", material: "Искусственный ротанг, алюминий", image: "" },

  // Обеденные группы
  { id: 5, name: "Обеденная группа «Toscana» на 6 персон", price: 112000, category: "dining", material: "Ротанг + закалённое стекло", image: "", badge: "Хит" },
  { id: 6, name: "Обеденная группа «Porto» на 4 персоны", price: 74000, category: "dining", material: "Ротанг + алюминий", image: "" },
  { id: 7, name: "Обеденная группа «Amalfi» на 8 персон", price: 168000, category: "dining", material: "Искусственный ротанг PE, каркас алюминий", image: "" },
  { id: 8, name: "Барная группа «Santorini»", price: 89000, category: "dining", material: "Ротанг + закалённое стекло", image: "", badge: "Новинка" },

  // Подвесные кресла
  { id: 9, name: "Подвесное кресло «Кокон»", price: 32000, category: "hanging", material: "Искусственный ротанг, стальная рама", image: "", badge: "Хит" },
  { id: 10, name: "Подвесное кресло «Nest»", price: 28500, category: "hanging", material: "Искусственный ротанг", image: "" },
  { id: 11, name: "Подвесное кресло «Bubble»", price: 41000, category: "hanging", material: "Искусственный ротанг, алюминий", image: "" },
  { id: 12, name: "Подвесной диван-качели «Swing»", price: 68000, category: "hanging", material: "Искусственный ротанг PE, каркас сталь", image: "", badge: "Новинка" },
  { id: 13, name: "Подвесное кресло с подставкой «Drop»", price: 54000, category: "hanging", material: "Искусственный ротанг, стальная стойка", image: "" },

  // Шезлонги
  { id: 14, name: "Шезлонг «Cannes»", price: 28000, category: "loungers", material: "Искусственный ротанг, алюминиевый каркас", image: "", badge: "Хит" },
  { id: 15, name: "Шезлонг «Bali»", price: 34500, category: "loungers", material: "Искусственный ротанг PE, регулируемая спинка", image: "" },
  { id: 16, name: "Шезлонг «Maldives» с навесом", price: 52000, category: "loungers", material: "Искусственный ротанг + тент", image: "" },
  { id: 17, name: "Шезлонг «Nice» двойной", price: 44000, category: "loungers", material: "Искусственный ротанг, сталь", image: "" },

  // Балконные группы
  { id: 18, name: "Балконная группа «Compact» 2-местная", price: 42000, category: "balcony", material: "Искусственный ротанг, алюминий", image: "" },
  { id: 19, name: "Балконная группа «Bistro»", price: 29000, category: "balcony", material: "Ротанг + стекло, складные стулья", image: "", badge: "Хит" },
  { id: 20, name: "Балконная группа «Mini Lounge»", price: 56000, category: "balcony", material: "Искусственный ротанг, мягкие подушки", image: "" },

  // Беседки
  { id: 21, name: "Беседка «Villa» с мягкой кровлей", price: 320000, category: "gazebo", material: "Алюминий + ротанг, поликарбонат", image: "", badge: "Хит" },
  { id: 22, name: "Беседка «Pavilion» 3×4 м", price: 248000, category: "gazebo", material: "Алюминий, поликарбонат, ротанговые панели", image: "" },
  { id: 23, name: "Беседка «Cabana» с боковыми панелями", price: 198000, category: "gazebo", material: "Алюминий + ротанговые вставки", image: "" },

  // Кресла и диваны
  { id: 24, name: "Кресло «Adelaide»", price: 24000, category: "chairs", material: "Искусственный ротанг, алюминий", image: "" },
  { id: 25, name: "Диван 2-местный «Barcelona»", price: 58000, category: "chairs", material: "Искусственный ротанг PE, каркас алюминий", image: "", badge: "Новинка" },
  { id: 26, name: "Кресло-качалка «Relax»", price: 31000, category: "chairs", material: "Искусственный ротанг, деревянные полозья", image: "" },
  { id: 27, name: "Диван 3-местный «Verona»", price: 84000, category: "chairs", material: "Искусственный ротанг, алюминиевый каркас", image: "" },
];
