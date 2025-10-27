"use client"
import React from 'react';
import { Check } from 'lucide-react';
const itineraryData = [
  {
    id: 1,
    title: "Arrival & Grounding",
    meals: ["Dinner"],
    sessions: [
      { time: "", title: "Arrival at Retreat Centre with warm herbal tea & snacks welcome" },
      { time: "", title: "Check-in to nature-facing rooms" },
      { time: "", title: "Opening Circle with intention-setting ceremony" },
      { time: "", title: "Evening Session with grounding meditation & group connection, Yoga & Pranayama" },
      { time: "", title: "Dinner: Wholesome vegetarian meal with community sharing & conversations" },
      { time: "", title: "Night Under The Sky: Live acoustic music under the stars" },
      { time: "", title: "Optional Yoga Nidra for deep relaxation" },
    ],
  },
  {
    id: 2,
    title: "Mystic Rose Meditation & Healing",
    meals: ["Breakfast", "Lunch", "Dinner"],
    sessions: [
      { time: "", title: "Morning Yoga & Breathwork session" },
      { time: "", title: "Mystic Rose Meditation (2 hours) – a transformative practice of laughter, tears & silence" },
      { time: "", title: "Breakfast" },
      { time: "", title: "Late Morning Sound Healing Session 1 – Chakra-balancing with Tibetan singing bowls in nature" },
      { time: "", title: "Lunch" },
      { time: "", title: "Afternoon rest" },
      { time: "", title: "Tea & Light Snacks" },
      { time: "", title: "Yoga Nidra for nervous system reset" },
      { time: "", title: "Dinner" },
      { time: "", title: "Night Under The Sky: Storytelling, music, chanting, drumming, dance & open mic" },
    ],
  },
  {
    id: 3,
    title: "Naad & Sound Healing",
    meals: ["Breakfast", "Lunch", "Dinner"],
    sessions: [
      { time: "", title: "Morning Yoga & Meditation session" },
      { time: "", title: "Breakfast" },
      { time: "", title: "Naad Activities in the Resort" },
      { time: "", title: "Lunch" },
      { time: "", title: "Afternoon Return & Rest" },
      { time: "", title: "Evening Sound Healing Session 2 in indoor space" },
      { time: "", title: "Dinner" },
    ],
  },
  {
    id: 4,
    title: "Departure & Closure",
    meals: ["Breakfast"],
    sessions: [
      { time: "", title: "Early Morning Yoga & Gratitude Meditation" },
      { time: "", title: "Light Breakfast" },
      { time: "", title: "Closing Circle: Reflections, blessings & emotional closure" },
      { time: "", title: "Departure by Noon" },
    ],
  },
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

            <ul className="p-4 space-y-2">
              {day.sessions.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700 truncate">
                  &nbsp;<div className="flex-shrink-0 mt-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full p-1 text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Check width={0.1} height={0.1} />
              </div>
                  <span className="text-slate-600"> &nbsp;{s.title}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}