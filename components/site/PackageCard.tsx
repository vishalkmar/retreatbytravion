// import Image from "next/image";
// import Link from "next/link";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import type { Package } from "@/lib/seed";

// export function PackageCard({ pkg }: { pkg: Package }) {
//   return (
//     <Card>
//       <CardHeader>
//         <div className="relative w-full h-48 overflow-hidden rounded-xl">
//           <Image
//             src={pkg.heroImage}
//             alt={pkg.title}
//             fill
//             className="object-cover"
//           />
//         </div>
//       </CardHeader>
//       <CardContent>
//         <h3 className="text-lg font-semibold">{pkg.title}</h3>
//         <p className="text-sm text-ink/70 mt-1">{pkg.location}</p>
//         <p className="text-sm mt-1">
//           {typeof pkg.duration === "string"
//             ? pkg.duration
//             : `${pkg.duration} days`}{" "}
//           • From ₹{pkg.basePrice}
//         </p>
//         <div className="mt-4 flex gap-3">
//           <Button asChild size="sm">
//             <Link
//               href={`/${pkg.category === "Wellness" ? "retreats" : "tours"}/${pkg.category.toLowerCase()}/${pkg.slug}`}
//             >
//               View
//             </Link>
//           </Button>
//           <Button variant="outline" asChild size="sm">
//             <Link href="/contact">Enquire</Link>
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }


import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Package } from "@/lib/seed";

export function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Card className="overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative">
        {/* Package Image */}
        <div className="relative w-full h-80 overflow-hidden">
          <Image
            src={pkg.heroImage}
            alt={pkg.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Price Badge - Top Left */}
        <div className="absolute top-4 left-4 bg-yellow-200 rounded-3xl px-5 py-3 shadow-md">
          <p className="text-xs text-gray-700 font-medium">Starting @</p>
          <p className="text-2xl font-bold text-gray-900">₹{pkg.basePrice.toLocaleString()}</p>
        </div>

        {/* Duration Badge - Bottom Right */}
        <div className="absolute bottom-4 right-4 bg-white rounded-2xl px-5 py-3 shadow-md text-right">
          <p className="text-2xl font-bold text-gray-900">
            {typeof pkg.duration === "string"
              ? pkg.duration
              : `${pkg.duration}D / ${pkg.duration - 1}N`}
          </p>
          <p className="text-sm text-gray-600">Tour Duration</p>
        </div>
      </div>

      <CardContent className="p-6 flex flex-col flex-grow">
        {/* Content Container - grows to fill available space */}
        <div className="flex-grow">
          {/* Package Title - fixed height with line clamp */}
          <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[4rem]">
            {pkg.title}
          </h3>
          
          {/* Location - fixed height with line clamp */}
          <p className="text-base text-gray-600 mb-6 line-clamp-2 min-h-[3rem]">
            {pkg.location}
          </p>
        </div>

        {/* Action Buttons - always at the bottom */}
        <div className="flex gap-3 mt-auto">
          <Button 
            asChild 
            variant="outline"
            className="flex-1 rounded-xl border-2 border-gray-300 text-gray-900 font-semibold hover:bg-gray-50"
          >
            <Link
              href={`/${pkg.category === "Wellness" ? "retreats" : "tours"}/${pkg.category.toLowerCase()}/${pkg.slug}`}
            >
              View Details
            </Link>
          </Button>
          <Button 
            asChild
            className="flex-1 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800"
          >
            <Link href="/contact">Enquire</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}