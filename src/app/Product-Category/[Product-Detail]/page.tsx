'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import { productData } from '@/app/Product-Data/product'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/lable'
import { Input } from '@/components/ui/input'

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = productData.find((p) => p.id === params.id)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0])
  const [selectedSize, setSelectedSize] = useState(product?.size[0])
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-[#3A3A3A]">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground">5 Customer Review</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold">Rp {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-lg text-muted-foreground line-through">
                  Rp {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <Label className="text-base">Color</Label>
                <RadioGroup
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="flex gap-2 mt-2"
                >
                  {product.colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={color}
                        id={`color-${color}`}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={`color-${color}`}
                        className="h-8 w-8 rounded-full cursor-pointer ring-offset-background transition-all hover:scale-110 peer-data-[state=checked]:ring-2 peer-data-[state=checked]:ring-primary peer-data-[state=checked]:ring-offset-2"
                        style={{ backgroundColor: color }}
                      />
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base">Size</Label>
                <RadioGroup
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex gap-2 mt-2"
                >
                  {product.size.map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className="px-4 py-2 rounded-md border cursor-pointer transition-all hover:bg-muted peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32">
                  <Label className="text-base">Quantity</Label>
                  <div className="flex items-center mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e: { target: { value: string } }) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-16 text-center mx-2"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                + Compare
              </Button>
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex gap-2">
                <span className="font-semibold">SKU:</span>
                <span className="text-muted-foreground">{product.sku}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Category:</span>
                <span className="text-muted-foreground">{product.category}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Tags:</span>
                <span className="text-muted-foreground">{product.tag.join(', ')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

