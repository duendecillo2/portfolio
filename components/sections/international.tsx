"use client";

import { motion } from "framer-motion";
import { Globe, Plane, Languages, MessageCircle } from "lucide-react";

export function International() {
  return (
    <section id="international" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
          Global <span className="text-indigo-500">Mindset</span>
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-2xl text-lg">
          My international experience and multilingual proficiency enable me to seamlessly integrate into diverse, global engineering teams.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Languages Column */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Languages className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Languages</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">Spanish</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">English</span>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">Advanced (C1/C2)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300 font-medium">Portuguese</span>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">Conversational</span>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="p-6 rounded-xl bg-indigo-600/10 border border-indigo-500/20"
          >
             <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-indigo-400" />
                <h4 className="font-bold text-white">Cultural Adaptability</h4>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed">
               Proven ability to thrive in fast-paced international environments in the US, handling diverse customer interactions with resilience.
             </p>
          </motion.div>
        </div>

        {/* Work & Travel Column */}
        <div className="lg:col-span-2 space-y-6">
           <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-4">
             <Plane className="w-5 h-5 text-pink-400" />
             Work & Travel USA Experience
           </h3>

           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-pink-500/20 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
               <h4 className="text-lg font-bold text-white">Beach Attendant</h4>
               <span className="text-sm text-gray-400">1 Hotels | Miami, FL</span>
            </div>
            <span className="text-xs font-mono text-gray-500 mb-4 block">Dec 2024 - Mar 2025</span>
            <p className="text-gray-400 text-sm mb-4">
              Provided premium service in a high-end hospitality environment. Refined English communication skills through constant interaction with international guests and effectively solving on-site issues.
            </p>
             <div className="flex gap-2">
               <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">Customer Service</span>
               <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">English Fluency</span>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-xl bg-card/40 backdrop-blur-sm border border-white/5 hover:border-pink-500/20 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
               <h4 className="text-lg font-bold text-white">Beach Attendant & Cashier</h4>
               <span className="text-sm text-gray-400">Boucher Brothers Management | Miami Beach, FL</span>
            </div>
            <span className="text-xs font-mono text-gray-500 mb-4 block">Dec 2023 - Mar 2024</span>
            <p className="text-gray-400 text-sm mb-4">
              Handled fast-paced transactions and logistics in a high-volume tourist area. Developed situational leadership and cash handling procedures while collaborating with a multicultural team.
            </p>
             <div className="flex gap-2">
               <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">Adaptability</span>
               <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded border border-gray-700">Teamwork</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
