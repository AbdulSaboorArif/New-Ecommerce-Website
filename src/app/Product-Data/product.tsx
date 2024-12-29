export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  tag: string[];
  badge?: {
    text: string;
    color: string;
  };
  sku: string;
  colors: string[];
  size: string[];
}

export const productData: Product[] = [
  {
    id: "syltherine",
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: 2500000,
    originalPrice: 3500000,
    image: "/image-4.png",
    category: "Chairs",
    tag: ["Chair", "Furniture", "Wood"],
    sku: "SS001",
    colors: ["#B88E2F", "#333333", "#B5B5B5"],
    size: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "lolito",
    name: "Lolito",
    description: "Luxury big sofa",
    price: 7000000,
    originalPrice: 14000000,
    image: "/image-22.png",
    category: "Sofa",
    badge: {
      text: "-50%",
      color: "#E97171",
    },
    tag: ["Sofa", "Furniture", "Living Room"],
    sku: "LS001",
    colors: ["#B88E2F", "#333333", "#B5B5B5"],
    size: ["XS", "S", "M", "L", "XL"],
  },
];
