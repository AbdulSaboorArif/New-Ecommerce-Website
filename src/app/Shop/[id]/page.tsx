// 'use client'
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Navbar";
import Footer from "@/components/Fotter";
import CartSection from "@/components/ProductInfo";
import { Trophy, Shield, Truck, HeadphonesIcon } from "lucide-react";
import ComponetWork from "@/components/OtherProduct";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { add } from "@/app/redux/CartSlice";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductDetailProps {
  params: {
    id: number;
  };
}

export default async function ProductDetail({ params }: ProductDetailProps) {
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

  const fetchData = await fetch(
    `https://677ebc1f94bde1c1252d4a04.mockapi.io/Testing/${params.id}`
  );
  const data: Product = await fetchData.json();

  return (
    <main className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="w-full max-w-[1440px] mx-auto bg-[url('/BackgroundImage.jpg')] py-8 sm:py-12 md:py-16 bg-cover bg-center bg-no-repeat opacity-90">
        <div className="text-center space-y-3 sm:space-y-5 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
            Product Details
          </h1>
          <div className="text-base sm:text-lg flex items-center justify-center gap-2">
            <Link
              href="/"
              className="hover:text-amber-800 transition-colors font-semibold"
            >
              Home
            </Link>
            <span className="text-sm">{">"}</span>
            <Link
              href="/shop"
              className="hover:text-amber-800 transition-colors font-semibold"
            >
              Shop
            </Link>
            <span className="text-sm">{">"}</span>
            <span className="text-black truncate max-w-[200px]">{data.title}</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 bg-[#F9F1E7] py-8">
        <div className="">
          <div className="space-x-6">
            <Link
              href="/"
              className="text-[#9F9F9F] hover:text-black transition-colors font-semibold"
            >
              Home
            </Link>
            <span className=""> {">"} </span>
            <Link
              href="/Shop"
              className="text-[#9F9F9F] hover:text-black transition-colors font-semibold"
            >
              Shop
            </Link>
            <span> {">"} </span>
            <span>{"|"}</span>
            <span className="font-bold">{data.title}</span>
          </div>
        </div>
      </div>
      {/* Product Detail Section */}
      <CartSection data={data} />
      {/* Additionnal Informamtion */}
      <div className="container mx-auto px-4 py-8">
        {/* Tabs Header */}
        <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-8 overflow-x-auto">
          <button className="text-base sm:text-lg md:text-xl font-semibold border-b-2 border-primary px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap">
            Description
          </button>
          <button className="text-base sm:text-lg md:text-xl font-semibold text-gray-500 px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap">
            Additional Information
          </button>
          <button className="text-base sm:text-lg md:text-xl font-semibold text-gray-500 px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap">
            Reviews [5]
          </button>
        </div>

        {/* Content Section */}
        <div className="space-y-4 sm:space-y-6">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="bg-[#FBF9F9] rounded-lg p-3 sm:p-6">
              <Image
                src="/image-23.png"
                alt="Product view 1"
                className="w-full h-auto object-cover"
                width={700}
                height={500}
              />
            </div>
            <div className="bg-[#FBF9F9] rounded-lg p-3 sm:p-6">
              <Image 
                src="/image-24.png"
                alt="Product view 2"
                className="w-full h-auto object-cover"
                width={700}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>

      <ComponetWork />
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
}
