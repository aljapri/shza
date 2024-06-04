import React from 'react'
import main_picture from "../../public/image/main-image.jpg"
import Image from 'next/image';
import HeroSection from '@/components/heroSection/HeroSection';
import ContactUs from '@/components/contactUs/ContactUs';
import Product from '@/components/product/Product';
import Header from '@/components/header/Header';
export default function Page() {
  return (
    <div
      className="w-full h-full  bg-no-repeat"
      style={{ backgroundImage: `url(${main_picture.src}) ` }}
      
    >
      <main className="pt-16 h-full ">
        <section className="hero bg-cover bg-center h-screen text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold">مرحبا بكم في شذى الشام</h1>
            <p className="mt-4 text-3xl">منتجات غذائية عالية الجودة</p>
            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold pt-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </section>
      </main>
      <HeroSection />
      <Product/>
      <ContactUs/>
    </div>
  );
}
