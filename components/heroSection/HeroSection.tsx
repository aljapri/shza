import Image from "next/image";
import breakFast from "../../public/image/breakfast.jpg";
export default function HeroSection() {
  return (
    <section className=" dark:bg-gray-900 flex flex-row   bg-blue  pb-20 ">
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
        <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              شركة شذى الشام
            </h2>
            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed break-words">
              متخصصين في تقديم مواد غذائية عالية الجودة، تتميز منتجاتنا بالنكهة
              الفريدة والقيمة الغذائية العالية. تسعى الشركة لتلبية احتياجات
              العملاء عبر توفير تشكيلة متنوعة من المنتجات التي تلبي أعلى معايير
              السلامة والجودة.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500 text-xl">
                Get started
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image src={breakFast} width={1000} height={400} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}