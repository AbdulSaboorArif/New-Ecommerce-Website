  'use client'

  import React from 'react';
  import { remove } from "../redux/CartSlice";
  import { useDispatch, useSelector } from 'react-redux';
  import { RootState } from '../redux/Store';
  import Image from 'next/image';

  interface CartItem {
    id: number;
    title: string;
    price: number;
    image: string;
  };

  export default function Cart() {
    const cart = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id: number) => {
      dispatch(remove(id));
    };

    return (
      <div className="w-full max-w-[1440px] mx-auto my-4">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cart.map((item: CartItem) => (
            <div key={item.id} className="flex flex-col gap-4 border-2 border-gray-200 p-4">
              <Image src={item.image} alt={item.title} width={200} height={200} />
              <div className="flex justify-between items-center">
                <span className="text-lg">{item.title}</span>
                <span className="text-lg">${item.price}</span>
              </div>
              <button
                className="bg-red-500 text-white py-1 px-2 rounded-md"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

