
import { lato } from "@/lib/fonts";
export default function ImageShowcase() {
  const images = [
    {
      id: 1,
      title: 'Explore Oman\'s Digital Postcard',
      subtitle: 'Virtual Tours & Cultural Experiences',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'Hot Air Balloon Tours',
      subtitle: 'Manage Wahiba Camp',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/hot-air-balloon-over-landscape-rlL27zFZ7DSDx7eBcitZsB9AQ7f0OY.jpg',
    },
    {
      id: 3,
      title: 'Jib Beach, Cultural Retreat',
      subtitle: 'Contact Us',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/banner-jib-beach-31aNAbgHwzdPagZiVZJq1CAutQa7LJ.jpg',
    },
  ];

  return (
   <section className={`${lato.variable} py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-white to-amber-100`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="space-y-6">
          {images.map((item) => (
            <div
              key={item.id}
              className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 lg:px-16">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-lg md:text-xl text-amber-400">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
