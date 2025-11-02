import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)

  // garante um array de 3 imagens (usa placeholder se faltar)
  const placeholders = [
    '/images/tcc-dark.svg',
    '/images/tcc-dark.svg',
    '/images/tcc-dark.svg'
  ]
  const imgs = [
    project.images && project.images[0] ? project.images[0] : placeholders[0],
    project.images && project.images[1] ? project.images[1] : placeholders[1],
    project.images && project.images[2] ? project.images[2] : placeholders[2],
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, y: 10 }}
        animate={{ scale: 1, y: 0 }}
        className="max-w-4xl w-full bg-[#071018] rounded-2xl p-6 border border-gray-800"
      >
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
            {/* 3 miniaturas fixas */}
            <div className="grid grid-cols-3 gap-2">
              {imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-full h-20 overflow-hidden rounded-md border ${i === index ? 'ring-2 ring-indigo-500' : 'border-gray-800'}`}
                  aria-label={`Selecionar imagem ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`${project.title} - imagem ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* imagem grande selecionada */}
            <div className="mt-4">
              <img
                src={imgs[index]}
                alt={`${project.title} - selecionada`}
                className="w-full h-60 object-cover rounded-md"
                loading="lazy"
              />
            </div>
          </div>

          <aside className="md:col-span-1">
            <p className="text-gray-300">{project.longDescription}</p>
            <div className="mt-4">
              <h4 className="text-sm text-gray-400">Tecnologias</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-md border border-gray-800">{t}</span>
                ))}
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
