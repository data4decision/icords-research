'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaBuilding, FaLandmark, FaBriefcase, FaHandsHelping } from 'react-icons/fa';

const clients = [
  { name: "Universities", icon: FaUniversity, color: "text-[blue-600]" },
  { name: "Polytechnics", icon: FaUniversity, color: "text-emerald-600" },
  { name: "Government Agencies", icon: FaLandmark, color: "text-amber-600" },
  { name: "Corporate Organizations", icon: FaBriefcase, color: "text-purple-600" },
  { name: "NGOs & Development Partners", icon: FaHandsHelping, color: "text-rose-600" },
];

const ClientSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--blue)] mb-4">
              Our Clients
            </h2>
            <p className="text-[var(--blue)]/70 text-lg max-w-2xl mx-auto">
              Trusted by leading institutions across academia, government, and the private sector
            </p>
          </motion.div>
        </div>

        {/* Client Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group bg-white border border-[var(--gray)]/10 rounded-2xl p-8 hover:border-[var(--lightblue)]/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className={`w-16 h-16 rounded-2xl bg-[var(--orange)]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${client.color}`}>
                <client.icon size={32} />
              </div>
              
              <h3 className="font-semibold text-xl text-[var(--blue)] mb-2">
                {client.name}
              </h3>
              
              <p className="text-[var(--blue)]/60 text-sm">
                Leading institutions and organizations
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Bar / Marquee */}
        <div className="mt-20">
          <p className="text-center text-[var(--orange)]/60 text-sm mb-8 tracking-widest">
            PARTNERS WE WORK WITH
          </p>
          
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                ease: "linear" 
              }}
              className="flex gap-16 items-center whitespace-nowrap"
            >
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-16 text-2xl font-medium text-[var(--blue)]/40">
                  <span>University of Ilorin</span>
                  <span>Kwara State Government</span>
                  <span>UNICEF</span>
                  <span>Central Bank of Nigeria</span>
                  <span>National Bureau of Statistics</span>
                  <span>Polytechnic Ilorin</span>
                  <span>World Bank</span>
                  <span>ICRC</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClientSection;