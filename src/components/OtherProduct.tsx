
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const OtherProduct = async () => {

  
  const fetchData = await fetch("https://677ebc1f94bde1c1252d4a04.mockapi.io/Testing");
  const data: Product[] = await fetchData.json();

  return (
    <main className="min-h-screen">
     

      {/* Products Grid */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 py-8">
        <div className="text-center mx-auto mb-10 ">
          <h1 className="text-4xl font-bold leading-9">Relative Product</h1>
        </div>
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
               <div className="w-full max-w-[245px] h-[48px] flex justify-center items-center mx-auto my-9 border-2 border-[#B88E2F]">
            <button className="text-base font-semibold leading-6 text-[#B88E2F]">Show More</button>
          </div>
      </div>

    </main>
  );
};

export default OtherProduct;

