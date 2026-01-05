"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Database, Server, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
      {/* Background Decor - More complex coloring */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/20 opacity-30 blur-[100px]"></div>
      <div className="absolute left-0 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/20 opacity-30 blur-[100px]"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
               <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono border border-emerald-500/20 flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                 Open to work
               </span>
               <span className="text-sm font-mono text-muted-foreground tracking-wide uppercase">
                 Buenos Aires based
               </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Juan Martin <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Canguillen
              </span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Backend Software Engineer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl"
          >
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
              I architect scalable server-side systems and robust data pipelines.
              My expertise lies in <span className="text-indigo-400 font-semibold">NestJS</span>,{" "}
              <span className="text-emerald-400 font-semibold">Python (Django)</span>,{" "}
              <span className="text-cyan-400 font-semibold">React</span>, and{" "}
               <span className="text-purple-400 font-semibold">System Analysis</span>.
            </p>
            <p className="text-base text-gray-500">
               With a semi-senior background +3 years in production, I combine technical autonomy with a product-driven mindset, bridging the gap between business logic and efficient database architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <Link
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-indigo-600 px-8 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition-all hover:bg-indigo-500 hover:scale-105 hover:shadow-indigo-500/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
            >
              <Server className="mr-2 h-4 w-4" />
              View Architecture
            </Link>
            <Link
              href="/files/resume-CanguillenJuanMartin.pdf"
              target="_blank"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-700 bg-gray-900/50 px-8 text-sm font-medium text-gray-300 shadow-sm transition-all hover:bg-gray-800 hover:text-white hover:border-gray-600"
            >
              <Database className="mr-2 h-4 w-4" />
              Download Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex gap-6 text-gray-500"
          >
            <Link href="https://linkedin.com/in/mcanguillen" target="_blank" className="hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="mailto:jmcanguillen@gmail.com" className="hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>

        {/* Photo / Visual */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <motion.div
             initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 0.7, type: "spring" }}
             className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-gray-900">
               <Image 
                  src="/images/me.png" 
                  alt="Juan Martin Canguillen" 
                  fill
                  className="object-cover"
                  priority
               />
               
               {/* Floating Badges */}
               <motion.div 
                 initial={{ x: 50, opacity: 0 }}
                 animate={{ x: 0, opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur-md border border-gray-800 p-3 rounded-lg flex items-center gap-3 shadow-xl"
               >
                 <div className="p-2 bg-indigo-500/20 rounded-md">
                   <Code2 className="w-5 h-5 text-indigo-400" />
                 </div>
                 <div>
                   <div className="text-xs text-gray-400 uppercase font-bold tracking-wider">Focus</div>
                   <div className="text-sm font-semibold text-white">System Design</div>
                 </div>
               </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-gray-600 animate-bounce" />
      </motion.div>
    </section>
  );
}
