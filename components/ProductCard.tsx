import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  product: Product;
}
 
const ProductCard = ({ product }: Props) => {
    
  return (
    <Link href={`/products/${product._id}`} className="product-card hover:bg-[#485690] bg-[#485690bc] hover:scale-[1.1] z-0">
      <div className="product-card_img-container hover:bg-white-100 bg-white-200 z-0">
        <Image 
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>

      <div className="flex flex-col gap-3  ">
        <h3 className="product-title text-white">{product.title}</h3>

        <div className="flex justify-between px-4 py-3">
          <p className="text-white opacity-50 text-md capitalize">
            {product.category}
          </p>

          <p className="text-white px-4 text-lg font-semibold">
            {/* <span>{product?.currency}</span> */}
            {(product.isOutOfStock||product.currentPrice===0) ?
         (<p>Out of stock</p>)
         :
         <span>{product?.currency} {product?.currentPrice}</span>
            }      
          </p>
                     
            
          
        </div>
      </div>
    </Link>
  )
}

export default ProductCard