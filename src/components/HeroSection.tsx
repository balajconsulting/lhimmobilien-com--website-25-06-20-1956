import React from 'react'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            LH.Immobilien - Ihre Immobilienexpertin
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Professionelle Beratung für Käufer, Verkäufer und Investoren in der Region
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Beratung vereinbaren
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Mehr erfahren
            </button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <p className="font-semibold text-lg">Persönliche Beratung</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <p className="font-semibold text-lg">Marktkenntnis</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
              <p className="font-semibold text-lg">Rundum-Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}