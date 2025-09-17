import React, { useState, useEffect } from 'react'
import { Droplet, Layers, Shield, Square, Activity, Truck, Waves, Package, Building2, Paintbrush,Sparkles } from "lucide-react";

const CircularInfographic = () => {
  const [activeItem, setActiveItem] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const items = [
    {
      id: 1,
      icon: Droplet,
      label: "Roof Water Proofing",
      position: { top: '5%', left: '50%', transform: 'translateX(-50%)' },
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    {
      id: 2,
      icon: Layers,
      label: "Industrial Epoxy Flooring",
      position: { top: '15%', right: '15%' },
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-100',
      textColor: 'text-cyan-600'
    },
    {
      id: 3,
      icon: Shield,
      label: "Basement Water Proofing",
      position: { top: '35%', right: '5%' },
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    {
      id: 4,
      icon: Square,
      label: "PU Flooring",
      position: { bottom: '35%', right: '5%' },
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-600'
    },
    {
      id: 5,
      icon: Activity,
      label: "Retaining Walls",
      position: { bottom: '15%', right: '15%' },
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600'
    },
    {
      id: 6,
      icon: Truck,
      label: "ESD Flooring",
      position: { bottom: '5%', left: '50%', transform: 'translateX(-50%)' },
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600'
    },
    {
      id: 7,
      icon: Waves,
      label: "Expansion Joints",
      position: { bottom: '15%', left: '15%' },
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600'
    },
    {
      id: 8,
      icon: Package,
      label: "Anti Skid Flooring",
      position: { bottom: '35%', left: '5%' },
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    },
    {
      id: 9,
      icon: Building2,
      label: "Lift Pits Water Proofing",
      position: { top: '35%', left: '5%' },
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    {
      id: 10,
      icon: Paintbrush,
      label: "Car Parking",
      position: { top: '15%', left: '15%' },
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-100',
      textColor: 'text-teal-600'
    }
  ];

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Central Figure */}
      <div className="relative z-20 flex flex-col items-center">
        <div 
          className="relative w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500">
          <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Sparkles size={32} className="text-white animate-pulse" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full animate-ping opacity-20"></div>
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-lg font-bold text-gray-900 gradient-text">Sanjana Enterprises</h3>
          <p className="text-sm text-gray-600">Premium Solutions</p>
        </div>
      </div>

      {/* Circular Path */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          className="w-[500px] h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 500 500"
        >
          <circle
            cx="250"
            cy="250"
            r="230"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="10,5"
            className="opacity-30"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Items around the circle */}
      {items.map((item, index) => {
        const IconComponent = item.icon
        const isActive = activeItem === item.id
        
        return (
          <div
            key={item.id}
            className={`absolute z-10 group cursor-pointer transition-all duration-500 ${
              isActive ? 'scale-125 z-30' : 'hover:scale-110'
            }`}
            style={item.position}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            {/* Item Icon */}
            <div className={`
              relative w-16 h-16 ${item.bgColor} rounded-xl flex items-center justify-center 
              shadow-lg
              ${isActive ? 'animate-pulse-glow' : ''}
            `}>
              <IconComponent 
                size={24} 
              />
              
              {/* Hover effect overlay */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${item.color} rounded-xl 
                opacity-0 group-hover:opacity-20 transition-opacity duration-300
              `}></div>
            </div>

            {/* Item Label */}
            <div className={`
              absolute top-full mt-2 left-1/2 transform -translate-x-1/2 
              bg-white rounded-lg px-3 py-2 shadow-lg border border-gray-200
              opacity-0 group-hover:opacity-100 transition-all duration-300
              whitespace-nowrap z-40
              ${isActive ? 'opacity-100 scale-110' : ''}
            `}>
              <div className="text-sm font-semibold text-gray-900">{item.label}</div>
              {item.subLabel && (
                <div className="text-xs text-blue-600 font-medium">{item.subLabel}</div>
              )}
              {item.description && (
                <div className="text-xs text-gray-600">{item.description}</div>
              )}
            </div>

            {/* Connection line to center */}
            <div className={`
              absolute top-1/2 left-1/2 w-px h-20 bg-gradient-to-b from-transparent via-gray-300 to-transparent
              transform -translate-x-1/2 -translate-y-1/2 origin-top
              opacity-0 group-hover:opacity-100 transition-opacity duration-300
              ${isActive ? 'opacity-100' : ''}
            `}></div>
          </div>
        )
      })}


      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default CircularInfographic
