import React from 'react'

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Über uns
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                LH – Luxus oder Horror? Ich sehe mehr als vier Wände – ich sehe Möglichkeiten. Ich sehe mehr als vier Wände – ich sehe Möglichkeiten. Hinter manch scheinbarem Albtraum steckt Ihr größter Glücksgriff. Mit Herz, Humor und Know-how begleite ich Sie auf dem Weg zu Ihrer Traumimmobilie – oder helfe Ihnen
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Mehr erfahren
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            
            <div className="w-full max-w-lg h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-gray-600 font-medium">Über uns Bild</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}