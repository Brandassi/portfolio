import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)

  // placeholders caso o projeto não tenha imagens
  const placeholders = [
    '/images/tcc-dark.svg',
    '/images/tcc-dark.svg',
    '/images/tcc-dark.svg'
  ]

  const imgs = [
    (project.images && project.images[0]) ? project.images[0] : placeholders[0],
    (project.images && project.images[1]) ? project.images[1] : placeholders[1],
    (project.images && project.images[2]) ? project.images[2] : placeholders[2],
  ]

  // URL de download / QR: aceita caminhos relativos ou URLs absolutas
  let apkUrl = null
  if (project && project.apk) {
    try {
      // se já for URL absoluta
      const u = new URL(project.apk, window.location.origin)
      apkUrl = u.href
    } catch (e) {
      // fallback: concatena com origin
      apkUrl = window.location.origin + project.apk
    }
  }

  const tech = project && project.tech ? project.tech : []

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <motion.div
        initial={{ scale: 0.98, y: 8 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.14 }}
        className="max-w-4xl w-full bg-[#071018] rounded-2xl p-6 border border-gray-800 shadow-xl"
      >
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 id="project-modal-title" className="text-xl font-bold text-gray-100">{project.title}</h3>
            {project.subtitle && <p className="text-sm text-indigo-300 mt-1">{project.subtitle}</p>}
          </div>

          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="text-sm px-3 py-1 rounded-md border border-gray-800 bg-transparent text-gray-300"
              aria-label="Fechar modal"
            >
              Fechar
            </button>
          </div>
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {/* miniaturas */}
            <div className="grid grid-cols-3 gap-2">
              {imgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-full h-20 overflow-hidden rounded-md ${i === index ? 'ring-2 ring-indigo-500' : 'border border-gray-800'}`}
                  aria-pressed={i === index}
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

            {/* imagem grande */}
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
            <p className="text-gray-300">{project.longDescription || project.description || project.short}</p>

            <div className="mt-4">
              <h4 className="text-sm text-gray-400">Tecnologias</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {tech.length ? tech.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-md border border-gray-800 text-gray-200">{t}</span>
                )) : <span className="text-xs text-gray-500">Nenhuma informação</span>}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-2 rounded-md bg-indigo-600/90 text-white text-center"
                >
                  Ver repositório
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-2 rounded-md border border-gray-800 text-center text-gray-200"
                >
                  Abrir demo
                </a>
              )}

              {apkUrl && (
                <a
                  href={apkUrl}
                  download
                  className="text-sm px-3 py-2 rounded-md bg-green-600/90 text-white text-center"
                  aria-label="Baixar APK"
                >
                  📥 Baixar APK
                </a>
              )}
            </div>

            {/* QR code */}
            {apkUrl && (
              <div className="mt-4">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(apkUrl)}`}
                  alt="QR APK"
                  className="w-40 h-40 object-contain"
                />
                <p className="text-xs text-gray-400 mt-2">Escaneie para baixar no celular</p>
              </div>
            )}
          </aside>
        </div>
      </motion.div>
    </motion.div>
  )
}
