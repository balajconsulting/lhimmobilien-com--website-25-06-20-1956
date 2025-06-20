import React from 'react'

export default function ServicesSection() {
  const services = [{"name":"Verkaufsstrategie","description":"Optimale Vermarktung Ihrer Immobilie","icon":"FaBriefcase"},{"name":"Finanzierungsberatung","description":"Optimale Finanzierungskonzepte","icon":"FaDollarSign"},{"name":"Rechtliche Begleitung","description":"Sicherheit bei Verträgen und Abwicklung","icon":"FaBalanceScale"},{"name":"Investment-Analyse","description":"Renditeprüfung und Marktbewertung","icon":"FaChartLine"}]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-heading mb-4">
            Unsere Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, index: number) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}