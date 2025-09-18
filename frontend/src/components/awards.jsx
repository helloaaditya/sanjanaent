import React from 'react'
import { Trophy } from 'lucide-react'

const Awards = () => {
  // Sample awards data - replace with your actual awards
  const awards = [
    {
      id: 1,
      title: "Award 1",
      image: "/assets/Award 1.jpg",
      year: "2023"
    },
    {
      id: 2,
      title: "Award 2",
      image: "/assets/Award 2.jpg",
      year: "2023"
    },
    {
      id: 3,
      title: "Award 3",
      image: "/assets/Award 3.jpg",
      year: "2023"
    },
    {
      id: 4,
      title: "Award 4",
      image: "/assets/Award 4.jpg",
      year: "2023"
    },
    {
      id: 5,
      title: "Award 5",
      image: "/assets/Award 5.jpg",
      year: "2023"
    },
    {
      id: 6,
      title: "Award 6",
      image: "/assets/Award 6.jpg",
      year: "2023"
    },
    {
      id: 7,
      title: "Award 7",
      image: "/assets/Award 7.jpg",
      year: "2023"
    },
    {
      id: 8,
      title: "Award 8",
      image: "/assets/Award 8.jpg",
      year: "2023"
    },
    {
      id: 9,
      title: "Award 9",
      image: "/assets/Award 9.jpg",
      year: "2023"
    },
    {
      id: 10,
      title: "Award 10",
      image: "/assets/Award 10.jpg",
      year: "2023"
    },
    {
      id: 11,
      title: "Award 11",
      image: "/assets/Award 11.jpg",
      year: "2023"
    },
    {
      id: 12,
      title: "Award 12",
      image: "/assets/Award 12.jpg",
      year: "2023"
    },
    {
      id: 13,
      title: "Award 13",
      image: "/assets/Award 13.jpg",
      year: "2023"
    },
    {
      id: 14,
      title: "Award 14",
      image: "/assets/Award 14.jpg",
      year: "2023"
    },
    {
      id: 15,
      title: "Award 15",
      image: "/assets/Award 15.jpg",
      year: "2023"
    },
    {
      id: 16,
      title: "Award 16",
      image: "/assets/Award 16.jpg",
      year: "2023"
    },
    {
      id: 17,
      title: "Award 17",
      image: "/assets/Award 17.jpg",
      year: "2023"
    },
    {
      id: 18,
      title: "Award 18",
      image: "/assets/Award 18.jpg",
      year: "2023"
    },
    {
      id: 19,
      title: "Award 19",
      image: "/assets/Award 19.jpg",
      year: "2023"
    },
    {
      id: 20,
      title: "Award 20",
      image: "/assets/Award 20.jpg",
      year: "2023"
    },
    {
      id: 21,
      title: "Award 21",
      image: "/assets/Award 21.jpg",
      year: "2023"
    },
    {
      id: 22,
      title: "Award 22",
      image: "/assets/Award 22.jpg",
      year: "2023"
    },
    {
      id: 23,
      title: "Award 23",
      image: "/assets/Award 23.jpg",
      year: "2023"
    },
    {
      id: 24,
      title: "Award 24",
      image: "/assets/Award 24.jpg",
      year: "2023"
    }
  ]
  
  // Resolve asset URL from src/assets using Vite bundling
  const assetUrl = (path) => {
    const clean = (path || '').replace(/^\//, '') // remove leading slash
      .replace(/^assets\//, '') // normalize if starts with assets/
    // Build URL relative to this file -> ../assets/<file>
    try {
      return new URL(`../assets/${clean}`, import.meta.url).href
    } catch (e) {
      return ''
    }
  }

  // Duplicate awards for seamless loop
  const duplicatedAwards = [...awards, ...awards]

  return (
    <div className="w-full py-8 overflow-hidden">
      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
        
        {/* Marquee */}
        <div className="flex animate-marquee items-center space-x-8">
          {duplicatedAwards.map((award, index) => (
            <div
              key={`${award.id}-${index}`}
              className="flex-shrink-0 group cursor-pointer relative"
            >
              <div className="relative transition-all duration-300 transform hover:-translate-y-2 hover:scale-150 hover:z-50">
                <img
                  src={assetUrl(award.image)}
                  alt={award.title}
                  className="max-h-32 max-w-[240px] w-auto h-auto object-contain rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 bg-white p-2 hover:bg-white hover:p-4"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  )
}

export default Awards