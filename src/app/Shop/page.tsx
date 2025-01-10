
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Navbar";
import Footer from "@/components/Fotter";
import { Trophy, Shield, Truck, HeadphonesIcon } from 'lucide-react';
// import { useState, useEffect } from "react";
// import {add} from "../redux/CartSlice";
// import { useDispatch } from "react-redux";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const Shop = async () => {
  // const [product, setProduct] = useState<Product[]>([]);
  // const Dispatch = useDispatch();
 
  // const getProducts = async () => { 
  //   const fetchData = await fetch("https://677ebc1f94bde1c1252d4a04.mockapi.io/Testing");
  //   const data: Product[] = await fetchData.json();
  //   setProduct(data);
  // };

  // const handleAdd = (product: Product) => {
  //   Dispatch(add(product));
  // };


  // useEffect(() => {
  //   getProducts();
  // }, []);
  
  const fetchData = await fetch("https://677ebc1f94bde1c1252d4a04.mockapi.io/Testing");
  const data: Product[] = await fetchData.json();

  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section with background image */}
      <div className="w-full max-w-[1440px] mx-auto bg-[url('/BackgroundImage.jpg')] py-12 md:py-16 bg-cover bg-center bg-no-repeat opacity-90">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold leading-8 text-black">Shop</h1>
          <div className="text-lg">
            <Link
              href="/"
              className="hover:text-amber-800 transition-colors font-semibold"
            >
              Home
            </Link>
            <span> {">"} </span>
            <span className="text-black">Shop</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <Link key={product.id} href={`/Shop/${product.id}`}>
              <div className="flex flex-col group">
                <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
                  <Image
                    src={product.image}
                    alt="datatitle"
                    width={285}
                    height={301}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 bg-[#F4F5F7] p-4">
                  <h3 className="text-xl font-bold text-[#3A3A3A] leading-7 line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-base text-[#898989] mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xl font-semibold text-[#3A3A3A]">
                      ${product.price}
                    </span>
                    <span className="text-base text-[#B0B0B0] line-through">
                      ${(product.price * 1.2).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
{/* Pagination */}
<div className="flex justify-center gap-2 mt-8 mb-12">
          <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded bg-[#B88E2F] text-white text-sm md:text-base">
            1
          </button>
          <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded hover:bg-[#B88E2F] hover:text-white transition-colors text-sm md:text-base">
            2
          </button>
          <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded hover:bg-[#B88E2F] hover:text-white transition-colors text-sm md:text-base">
            3
          </button>
          <button className="px-3 md:px-4 h-8 md:h-10 flex items-center justify-center rounded hover:bg-[#B88E2F] hover:text-white transition-colors text-sm md:text-base">
            Next
          </button>
        </div>
      {/* Features Section */}
      <div className="bg-[#FAF3EA] py-12 md:py-16 -mx-4 px-4">
        <div className="max-w-[1230px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <Trophy className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              <div>
                <h3 className="font-bold mb-1 text-sm md:text-base">
                  High Quality
                </h3>
                <p className="text-xs md:text-sm text-[#898989]">
                  crafted from top materials
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              <h3 className="font-bold mb-1 text-sm md:text-base">
                Warranty Protection
              </h3>
              <p className="text-xs md:text-sm text-[#898989]">Over 2 years</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              <h3 className="font-bold mb-1 text-sm md:text-base">
                Free Shipping
              </h3>
              <p className="text-xs md:text-sm text-[#898989]">
                Order over 150 $
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <HeadphonesIcon className="w-6 h-6 md:w-8 md:h-8 mb-2" />
              <h3 className="font-bold mb-1 text-sm md:text-base">
                24 / 7 Support
              </h3>
              <p className="text-xs md:text-sm text-[#898989]">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Shop;

