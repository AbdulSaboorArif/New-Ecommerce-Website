import Footer from "@/components/Fotter";
import Header from "@/components/Navbar";
import {
  Trophy,
  Shield,
  Truck,
  HeadphonesIcon,
  User,
  Calendar,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Header />
      <div className="w-full max-w-[1440px] h-auto ">
        <div className="w-full  max-w-[1440px] h-auto sm:h-[316] mx-auto bg-[url('/BackgroundImage.jpg')] py-12 md:py-16  bg-cover bg-center bg-no-repeat opacity-90">
          {/* Center Logo */}
          <div className="text-center ">
            <div className="flex justify-center ">
              <Image
                src="/Image 2.jpg"
                alt="Furniro Logo"
                width={50}
                height={95}
                className="w-auto h-77 sm:h-24"
              />
            </div>
            <h1 className="text-5xl font-bold leading-8 text-black">Blog</h1>

            <div className="text-lg pt-4">
              <Link
                href="/"
                className="hover:text-amber-800 transition-colors font-semibold"
              >
                Home
              </Link>
              <span> {">"} </span>
              <span className="text-black">Blog</span>
            </div>
          </div>
        </div>
          {/* Main Blog  */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto px-20 py-10 ">
        {/* Main Content - Blog Posts */}
        <div className="lg:col-span-2 space-y-12">
          {/* Blog Post 1 */}
          <div className="space-y-4">
            <div className="relative w-full h-[500px] sm:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/Blog.image.jpg"
                alt="Blog post image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Admin</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>14 Oct 2022</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>Wood</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Going all-in with millennial design</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices.
            </p>
            <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Read More
            </button>
          </div>

          {/* Blog Post 2 */}
          <div className="space-y-4">
            <div className="relative w-full h-[500px] sm:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/Blog.image2.jpg"
                alt="Blog post image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Admin</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>14 Oct 2022</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>Wood</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Exploring new ways of decorating</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc.
            </p>
            <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Read More
            </button>
          </div>

          {/* Blog Post 3 */}
          <div className="space-y-4">
            <div className="relative w-full h-[500px] sm:h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/Blog.image3.jpg"
                alt="Blog post image"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Admin</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>14 Oct 2022</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4" />
                <span>Wood</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Modern home in Asian style</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc.
            </p>
            <button className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Categories */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <Link href="#" className="hover:text-gray-600">Crafts</Link>
                <span className="text-gray-500">2</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="#" className="hover:text-gray-600">Design</Link>
                <span className="text-gray-500">8</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="#" className="hover:text-gray-600">Handmade</Link>
                <span className="text-gray-500">7</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="#" className="hover:text-gray-600">Interior</Link>
                <span className="text-gray-500">1</span>
              </div>
              <div className="flex justify-between items-center">
                <Link href="#" className="hover:text-gray-600">Wood</Link>
                <span className="text-gray-500">6</span>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Image
                  src="/Blog.imagee3.jpg"
                  alt="Recent post thumbnail"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <Link href="#" className="font-medium hover:text-gray-600">
                    Going all-in with millennial design
                  </Link>
                  <p className="text-sm text-gray-500">03 Aug 2022</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Recent post thumbnail"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <Link href="#" className="font-medium hover:text-gray-600">
                    Exploring new ways of decorating
                  </Link>
                  <p className="text-sm text-gray-500">03 Aug 2022</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Recent post thumbnail"
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <Link href="#" className="font-medium hover:text-gray-600">
                    Modern home in Asian style
                  </Link>
                  <p className="text-sm text-gray-500">03 Aug 2022</p>
                </div>
              </div>
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
                <p className="text-xs md:text-sm text-[#898989]">
                  Over 2 years
                </p>
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
      <Footer />
    </>
  );
}



{/* Main Section 
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto px-20 py-20 space-y-10">
          {/* Left Section Blog Post
          <div>
            {/* Blog # 1 
            <div>
              <Image
                src="/Blog.image.jpg"
                alt="Furniro Logo"
                width={817}
                height={500}
                className="w-auto h-500 sm:h-400 rounded-xl"
              />
            </div>
            <div className="flex flex-row py-4">
              <User />
              <h1 className="mr-10">Admin</h1>
              <Calendar />
              <h1>14 Oct 2022</h1>
              <Tag />
              <h1>Wood</h1>
            </div>
            <div>
              <h1>Going all-in with millennial design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
            </div>
            <button>Read more</button>
          
        {/* //   Blog # 2 
        <div>
        <div>
              <Image
                src="/Blog.image2.jpg"
                alt="Furniro Logo"
                width={817}
                height={500}
                className="w-auto h-500 sm:h-400 rounded-xl"
              />
            </div>
            <div>
              <User />
              <h1>Admin</h1>
              <Calendar />
              <h1>14 Oct 2022</h1>
              <Tag />
              <h1>Wood</h1>
            </div>
            <div>
              <h1>Going all-in with millennial design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
            </div>
            <button>Read more</button>
          </div>
       
          {/* Blog # 3 
   
        <div>
        <div>
              <Image
                src="/Blog.image3.jpg"
                alt="Furniro Logo"
                width={817}
                height={500}
                className="w-auto h-500 sm:h-400 rounded-xl"
              />
            </div>
            <div>
              <User />
              <h1>Admin</h1>
              <Calendar />
              <h1>14 Oct 2022</h1>
              <Tag />
              <h1>Wood</h1>
            </div>
            <div>
              <h1>Going all-in with millennial design</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
                mauris vitae ultricies leo integer malesuada nunc. In nulla
                posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
                pulvinar mattis nunc sed blandit libero. Pellentesque elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
                ornare aenean euismod elementum.
              </p>
            </div>
            <button>Read more</button>
            </div>
          </div>
          {/* Right Section
          <div>

          </div>
        </div> */}