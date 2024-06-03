import Image from "next/image";
export default function Product() {
  const images = [
    [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    ],
    [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
    ],
    [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
    ],
    [
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
    ],
  ];
  return (
    <div className="py-10 flex flex-col px-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((column, columnIndex) => (
          <div key={columnIndex} className="grid gap-4">
            {column.map((image, imageIndex) => (
              <div key={imageIndex}>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src={image}
                  width={200}
                  height={200}
                  alt={`Gallery Image ${columnIndex * 3 + imageIndex + 1}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
