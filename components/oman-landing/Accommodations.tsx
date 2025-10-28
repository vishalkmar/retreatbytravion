
"use client"
import { Star, MapPin } from 'lucide-react';

export default function Accommodations() {
  const properties = [
    {
      id: 1,
      name: 'Al Fardan View',
      location: 'Muscat',
      price: 'From $200',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      name: 'Golden Beach Resort',
      location: 'Sur',
      price: 'From $180',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      name: 'Al Jawad Villa',
      location: 'Nizwa',
      price: 'From $250',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-stone-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Accommodations
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Escape to Bahrain's garden oasis and diving areas, family-friendly stays at top of Oman.
            Our accommodations blend luxury with local charm, ensuring comfort and authentic experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{property.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="text-amber-500 fill-amber-500" size={18} />
                    <span className="font-semibold">{property.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">{property.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-teal-700">{property.price}</span>
                  <button className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-lg transition-colors">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-lg transition-colors">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
