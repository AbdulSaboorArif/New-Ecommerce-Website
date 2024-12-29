import Link from 'next/link'
import Image from 'next/image'
import { productData } from '@/app/Product-Data/product'

export default function ProductCategory(){
    return(
   
        
       
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
              {productData.map((product) => (
                <Link href={`Product-Category/Product-Detail/${product.id}`} key={product.id} className="group">
                  <div className="flex flex-col">
                    <div className="relative aspect-[285/301] mb-6 overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      {product.badge && (
                        <div
                          className="absolute top-4 right-4 px-3 py-1 rounded-full text-white text-sm"
                          style={{ backgroundColor: product.badge.color }}
                        >
                          {product.badge.text}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 bg-[#F4F5F7] p-4 rounded-lg">
                      <h3 className="text-2xl font-bold text-[#3A3A3A] leading-7">
                        {product.name}
                      </h3>
                      <p className="text-base text-[#898989] mt-1">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xl font-semibold text-[#3A3A3A]">
                          Rp {product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-base text-[#B0B0B0] line-through">
                            Rp {product.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )
        }
