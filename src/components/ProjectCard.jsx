import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project, index, onOpen }){
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index }}
      className="relative rounded-2xl overflow-hidden border border-gray-800 p-4 bg-gradient-to-b from-[#071018] to-[#061018]"
    >
      <div className="flex gap-4 items-start">
        <div className="w-24 h-24 rounded-md overflow-hidden border border-gray-800 flex-shrink-0">
          <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-semibold">{project.title}</h4>
          <p className="text-xs text-indigo-300 mt-1">{project.subtitle}</p>
          <p className="mt-2 text-sm text-gray-300">{project.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t,i)=> <span key={i} className="text-xs px-2 py-1 rounded-md border border-gray-800">{t}</span>)}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-2">
              <a href={project.link} target="_blank" rel="noreferrer" className="text-sm text-indigo-300 underline">Repo</a>
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm px-2 py-1 rounded-md border border-gray-800">Demo</a>}
            </div>

            <div className="flex items-center gap-2">
              {project.video ? (
                <a href={project.video} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-full bg-indigo-600/80">Ver vídeo</a>
              ) : (
                <button onClick={onOpen} className="text-xs px-3 py-1 rounded-full border border-gray-800">Detalhes</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
