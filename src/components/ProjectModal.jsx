import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }){
  const [index, setIndex] = useState(0)
  const hasVideo = !!project.video

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <motion.div initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} className="max-w-4xl w-full bg-[#071018] rounded-2xl p-6 border border-gray-800">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-indigo-300 mt-1">{project.subtitle}</p>
          </div>
          <div>
            <button onClick={onClose} className="text-sm px-3 py-1 rounded-md border border-gray-800">Fechar</button>
          </div>
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {hasVideo ? (
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe src={project.video} title={project.title} frameBorder="0" allowFullScreen className="w-full h-full"></iframe>
              </div>
            ) : (
              <div>
                <div className="gallery-grid">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`img-${i}`} className="w-full h-32 object-cover rounded-md" onClick={() => setIndex(i)} />
                  ))}
                </div>
                <div className="mt-4">
                  <img src={project.images[index]} alt={`selected-${index}`} className="w-full h-60 object-cover rounded-md" />
                </div>
              </div>
            )}
          </div>

          <aside className="md:col-span-1">
            <p className="text-gray-300">{project.longDescription}</p>
            <div className="mt-4">
              <h4 className="text-sm text-gray-400">Tecnologias</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t,i)=> <span key={i} className="text-xs px-2 py-1 rounded-md border border-gray-800">{t}</span>)}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a href={project.link} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md bg-indigo-600/90 text-white text-center">Ver repositório</a>
              {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-md border border-gray-800 text-center">Abrir demo</a>}
            </div>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}
