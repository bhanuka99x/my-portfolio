'use client'
import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-20">
        <h2 className="text-5xl md:text-6xl font-bilmond font-bold text-center mb-16">
          About <span className="text-amber-400">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a passionate Software Engineer with a deep love for creating elegant solutions to complex problems. 
              My journey in tech has been driven by curiosity and a constant desire to learn and improve.
            </p>
            <p className="text-lg leading-relaxed">
              With expertise in full-stack development, I specialize in building scalable web applications 
              that deliver exceptional user experiences. I believe in writing clean, maintainable code 
              and following best practices in software development.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-600 rounded-2xl opacity-20 absolute inset-0 blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">Quick Facts</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">▹</span>
                  Full Stack Developer
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">▹</span>
                  Problem Solver
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">▹</span>
                  Clean Code Advocate
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">▹</span>
                  Continuous Learner
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
