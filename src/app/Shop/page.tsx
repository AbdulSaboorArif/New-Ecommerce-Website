"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Trophy,
  Shield,
  Truck,
  HeadphonesIcon,
} from "lucide-react";


import Header from "@/components/Navbar";

import Fotter from "@/components/Fotter";

export default function Shop(){
    return(
      <main className="min-h-screen">
            <Header/>
        
    <div className="min-h-screen ">
      {/* Hero Section with background image */}
      <div className="w-full  max-w-[1440px] mx-auto bg-[url('/BackgroundImage.jpg')] py-12 md:py-16  bg-cover bg-center bg-no-repeat opacity-90">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold leading-8 text-black ">Shop</h1>
          <div className="text-lg">
            <Link
              href="/"
              className="hover:text-amber-800 transition-colors font-semibold "
            >
              Home
            </Link>
            <span> {">"} </span>
            <span className="text-black">Shop</span>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <section className="w-full max-w-[1440px] min-h-auto sm:h-[100] mx-auto px-12 py-8 bg-[#F9F1E7]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 ">
          <div className="flex flex-wrap items-center gap-4">
            <select className="px-2 py-1 border rounded-md text-sm min-w-[100px]">
              <option>Filter</option>
            </select>
            <select className="px-2 py-1 border rounded-md text-sm min-w-[100px]">
              <option>Grid</option>
              <option>List</option>
            </select>
            <span className="text-sm text-muted-foreground hidden md:inline">
              Showing 1-16 of 32 results
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <select className="px-2 py-1 border rounded-md text-sm min-w-[100px]">
              <option>Show 16</option>
              <option>Show 32</option>
              <option>Show 48</option>
            </select>
            <select className="px-2 py-1 border rounded-md text-sm min-w-[120px]">
              <option>Default sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cos-3 lg:grid-cols-4 py-4 px-5 gap-x-6 gap-y-8">
        
        {/* Product 1 */}
        <Link href="/ProductCategory/ProductDetail">
        <div className="flex flex-col group">
          <div className="reloative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image 
              src="/image-4.png"
              alt="Syltherine"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Syltherine
            </h3>
            <p className="text-base text-[#898989] mt-1">Stylish cafe chair</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 2.500.000
              </span>
              <span className="text-base text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span>
            </div>
          </div>
        </div></Link>

        {/* Product 2 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-22.png"
              alt="Lolito"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#E97171]">
              -50%
            </div>
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Lolito
            </h3>
            <p className="text-base text-[#898989] mt-1">Luxury big sofa</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 7.000.000
              </span>
              <span className="text-base text-[#B0B0B0] line-through">
                Rp 14.000.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-5.png"
              alt="Respira"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#2EC1AC]">
              New
            </div>
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Respira
            </h3>
            <p className="text-base text-[#898989] mt-1">
              Outdoor bar table and stool
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-6.jpg"
              alt="Grifo"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Grifo
            </h3>
            <p className="text-base text-[#898989] mt-1">Night lamp</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 1.500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="flex flex-col group">
          <div className="reloative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-4.png"
              alt="Syltherine"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Syltherine
            </h3>
            <p className="text-base text-[#898989] mt-1">Stylish cafe chair</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 2.500.000
              </span>
              <span className="text-base text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-22.png"
              alt="Lolito"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#E97171]">
              -50%
            </div>
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Lolito
            </h3>
            <p className="text-base text-[#898989] mt-1">Luxury big sofa</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 7.000.000
              </span>
              <span className="text-base text-[#B0B0B0] line-through">
                Rp 14.000.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 7 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-5.png"
              alt="Respira"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#2EC1AC]">
              New
            </div>
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Respira
            </h3>
            <p className="text-base text-[#898989] mt-1">
              Outdoor bar table and stool
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 8 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-6.jpg"
              alt="Grifo"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Grifo
            </h3>
            <p className="text-base text-[#898989] mt-1">Night lamp</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 1.500.000
              </span>
            </div>
          </div>
        </div>
        {/* Product 1 */}
        <div className="flex flex-col group">
          <div className="reloative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-4.png"
              alt="Syltherine"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Syltherine
            </h3>
            <p className="text-base text-[#898989] mt-1">Stylish cafe chair</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 2.500.000
              </span>
              <span className="text-base text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-22.png"
              alt="Lolito"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#E97171]">
              -50%
            </div>
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Lolito
            </h3>
            <p className="text-base text-[#898989] mt-1">Luxury big sofa</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 7.000.000
              </span>
              <span className="text-base text-[#B0B0B0] line-through">
                Rp 14.000.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-5.png"
              alt="Respira"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#2EC1AC]">
              New
            </div>
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Respira
            </h3>
            <p className="text-base text-[#898989] mt-1">
              Outdoor bar table and stool
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-6.jpg"
              alt="Grifo"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Grifo
            </h3>
            <p className="text-base text-[#898989] mt-1">Night lamp</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 1.500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="flex flex-col group">
          <div className="reloative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-4.png"
              alt="Syltherine"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Syltherine
            </h3>
            <p className="text-base text-[#898989] mt-1">Stylish cafe chair</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 2.500.000
              </span>
              <span className="text-base text-[#B0B0B0] line-through">
                Rp 3.500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 6 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-22.png"
              alt="Lolito"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#E97171]">
              -50%
            </div>
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Lolito
            </h3>
            <p className="text-base text-[#898989] mt-1">Luxury big sofa</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 7.000.000
              </span>
              <span className="text-base text-[#B0B0B0] line-through">
                Rp 14.000.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 7 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-5.png"
              alt="Respira"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm bg-[#2EC1AC]">
              New
            </div>
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Respira
            </h3>
            <p className="text-base text-[#898989] mt-1">
              Outdoor bar table and stool
            </p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 500.000
              </span>
            </div>
          </div>
        </div>

        {/* Product 8 */}
        <div className="flex flex-col group">
          <div className="relative w-full aspect-[285/301] mb-6 overflow-hidden">
            <Image
              src="/image-6.jpg"
              alt="Grifo"
              width={285}
              height={301}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 bg-[#F4F5F7] p-4">
            <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
              Grifo
            </h3>
            <p className="text-base text-[#898989] mt-1">Night lamp</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xl font-semibold text-[#3A3A3A]">
                Rp 1.500.000
              </span>
            </div>
          </div>
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
    </div>

          <Fotter/>
      </main>
    )
}