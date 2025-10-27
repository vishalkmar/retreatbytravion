"use client"
import React from 'react';

const itineraryData = [
  {
    id: 1,
    title: 'Arrival & Grounding - Awaken',
    meals: ['Dinner'],
    sessions: [
      { time: '12:00–2:00 PM', title: 'Arrival & Check-in with herbal welcome drink' },
      { time: '2:30–4:00 PM', title: 'Grounding Yoga + Breath Awareness Flow' },
      { time: '4:30–5:30 PM', title: 'Tea Break + Intention Setting Circle' },
      { time: '6:00–7:00 PM', title: 'Sound Healing Journey (Gong + Singing Bowls)' },
      { time: '7:30–9:00 PM', title: 'Sattvic Dinner' }
    ]
  },
  {
    id: 2,
    title: 'Energy Alignment - Heal',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    sessions: [
      { time: '6:30–7:30 AM', title: 'Shatkriya (Jal Neti & Basti) + Pranayama + Yoga Flow' },
      { time: '8:00–9:00 AM', title: 'Conscious Breakfast' },
      { time: '10:00–11:30 AM', title: 'Nature Walk / Forest Bathing' },
      { time: '12:30–1:30 PM', title: 'Ayurvedic Lunch' },
      { time: '2:00–3:00 PM', title: 'Chakra & Energy Anatomy Workshop' },
      { time: '4:00–5:15 PM', title: 'Ananta Prana Sadhana' },
      { time: '6:00–6:30 PM', title: 'Ganga Aarti' }
    ]
  },
  {
    id: 3,
    title: 'Expansion - Evolve',
    meals: ['Breakfast', 'Lunch', 'Dinner'],
    sessions: [
      { time: '6:30–7:30 AM', title: 'Shatkriya (Kapalbhati + Agnisar) + Tratak Meditation + Light Yoga' },
      { time: '8:00–9:00 AM', title: 'Breakfast' },
      { time: '9:30–12:30 PM', title: 'Optional Reiki Level 1 Attunement / Self-time' },
      { time: '1:00–2:00 PM', title: 'Lunch' },
      { time: '3:00–4:00 PM', title: 'Cyclic Meditation' },
      { time: '6:30–7:30 PM', title: 'Agni Hotra Fire Ceremony' }
    ]
  },
  {
    id: 4,
    title: 'Integration & Farewell',
    meals: ['Breakfast'],
    sessions: [
      { time: '6:30–7:30 AM', title: 'Shatkriya (Nauli Demonstration) + Closing Meditation' },
      { time: '8:00–9:00 AM', title: 'Breakfast' },
      { time: '10:00 AM', title: 'Check-out + Farewell Gift Pack' }
    ]
  }
];

export default function ItineraryHorizontalComponent() {
  return (
    <section className="w-full bg-gray-50 py-10 px-4 md:px-10 mb-6">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Daily Schedule
          <div className="w-20 h-1 mx-auto mt-3 bg-gradient-to-r from-green-500 via-green-600 to-teal-600 rounded-full"></div>
        </h2>
        {/* <p className="text-slate-600 text-sm md:text-base">A concise journey through each day</p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 ">
        {itineraryData.map((day, idx) => (
          <div
            key={day.id}
            className="bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="bg-gradient-to-r rounded-xl from-green-500 to-teal-500 text-white px-5 py-3 flex items-center justify-between border-rounded">
              <h3 className="text-base md:text-lg font-semibold truncate">{day.title}</h3>
              <span className="bg-white/20 text-xs px-2.5 py-0.5 rounded-full">Day {idx + 1}</span>
            </div>

            <div className="px-4 py-2 flex flex-wrap gap-1 border-b border-gray-100">
              {day.meals.map((meal) => (
                <span key={meal} className="text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-md border border-green-100">{meal}</span>
              ))}
            </div>

            <ul className="p-4 space-y-1">
              {day.sessions.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 truncate">
                  <span className="text-blue-600 font-semibold whitespace-nowrap text-green-700 ">{s.time}</span>
                  <span className="text-slate-600">– {s.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}