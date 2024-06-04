import ContactUs from "@/components/contactUs/ContactUs";
import Explore from "@/components/explore/Explore";
import HeroSection from "@/components/heroSection/HeroSection";
import Product from "@/components/product/Product";
import main_picture from "../../public/image/main-image.jpg";
export default function Page() {
  return (
    <div
      className="w-full h-full  bg-no-repeat bg-blue "
      style={{ backgroundImage: `url(${main_picture.src})` }}
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
      {/* <Explore /> */}

      <HeroSection />
      <Product />
      <ContactUs />
    </div>
  );
}
