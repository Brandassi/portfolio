// src/components/PortfolioMerged.jsx
import React, { useState, useRef, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import projects from '../data/projects' // import default
import { motion } from 'framer-motion'

export default function PortfolioMerged() {
  const [selected, setSelected] = useState(null)

  const [copied, setCopied] = useState(false)
  const copyTimerRef = useRef(null)
  const EMAIL = 'gustavobrandassi@icloud.com'

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
    }
  }, [])

  const handleCopyEmail = async () => {
    if (copyTimerRef.current) {
      clearTimeout(copyTimerRef.current)
      copyTimerRef.current = null
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        const ta = document.createElement('textarea')
        ta.value = EMAIL
        ta.setAttribute('readonly', '')
        ta.style.position = 'absolute'
        ta.style.left = '-9999px'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }

      setCopied(true)
      copyTimerRef.current = setTimeout(() => {
        setCopied(false)
        copyTimerRef.current = null
      }, 4000)
    } catch (err) {
      console.error('Erro ao copiar email:', err)
      setCopied(true)
      copyTimerRef.current = setTimeout(() => {
        setCopied(false)
        copyTimerRef.current = null
      }, 4000)
    }
  }

  // Inline SVG components for icons (GraduationCap and Backpack)
  const GraduationCapSVG = ({ className = 'w-8 h-8 text-indigo-300', ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false" {...props}>
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  )

  const BackpackSVG = ({ className = 'w-8 h-8 text-indigo-300', ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false" {...props}>
      <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M8 10h8" />
      <path d="M8 18h8" />
      <path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    </svg>
  )

  // Use projects as provided in src/data/projects.js (now central place for apk if present)
  const allProjects = projects

  return (
    <div className="min-h-screen text-gray-100" style={{ background: 'linear-gradient(180deg,#0b0f13,#071018)' }}>
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-wider">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-pink-300 to-rose-300">GUSTAVO</span>
            <span className="block text-sm text-gray-400 mt-1">Brandassi</span>
          </h1>
        </div>
        <nav className="flex items-center gap-3">
          <a className="px-4 py-2 rounded-md border border-gray-800 bg-gray-900/40" href="/Gustavo_Brandassi_CV.pdf">CV</a>
          <a className="px-4 py-2 rounded-md text-white" href="https://github.com/Brandassi" style={{ background: 'linear-gradient(90deg,#6366f1,#fb7185)' }}>GitHub</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8 items-start">
        <section className="md:col-span-2 card p-6">
          <div className="flex gap-6 items-center">
            <div className="w-28 h-28 rounded-xl overflow-hidden border border-gray-800">
              <img src="/images/avatar-dark.svg" alt="Gustavo" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-indigo-300 font-semibold text-sm">Estudante • Futuro Estagiário em Desenvolvimento / IoT</p>
              <h2 className="text-2xl font-bold mt-2">Olá — eu sou Gustavo</h2>
              <p className="text-gray-300 mt-2 max-w-xl">Construo projetos que unem hardware e software para resolver problemas reais. Atualmente desenvolvendo um dessalinizador solar como projeto final do técnico. Gosto de prototipar rápido, testar e iterar.</p>

              <div className="mt-4 flex gap-3">
                <button onClick={handleCopyEmail} className="text-xs px-3 py-1 rounded-full border border-gray-800" aria-label="Copiar e-mail">
                  Email
                </button>

                <a className="text-xs px-3 py-1 rounded-full border border-gray-800" href="https://www.linkedin.com/in/gustavo-brandassi">LinkedIn</a>
                <a className="text-xs px-3 py-1 rounded-full border border-gray-800" href="https://github.com/Brandassi">GitHub</a>
              </div>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg glass flex items-start gap-3">
              <GraduationCapSVG className="w-5 h-5 text-indigo-300 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400">Formação</p>
                <p className="font-semibold mt-1">Ensino Médio Técnico em Informática — UNASP SP (2025)</p>
              </div>
            </div>

            <div className="p-4 rounded-lg glass flex items-start gap-3">
              <BackpackSVG className="w-5 h-5 text-indigo-300 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400">Cursos</p>
                <p className="font-semibold mt-1">Implantação e análise de dados dp-900 | SENAI - 2023</p>
              </div>
            </div>

            <div className="p-4 rounded-lg glass flex items-start gap-3">
              <BackpackSVG className="w-5 h-5 text-indigo-300 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400">Cursos</p>
                <p className="font-semibold mt-1">Implantação de serviços em nuvem - AWS Cloud | SENAI - 2023</p>
              </div>
            </div>

            <div className="p-4 rounded-lg glass flex items-start gap-3">
              <BackpackSVG className="w-5 h-5 text-indigo-300 mt-0.5" />
              <div>
                <p className="text-xs text-gray-400">Cursos</p>
                <p className="font-semibold mt-1">Fundamentos de segurança em nuvem SC-900 | SENAI - 2023</p>
              </div>
            </div>
          </div>
        </section>

        <aside className="card p-6">
          <h3 className="text-sm text-gray-400 tracking-widest">HABILIDADES</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>Arduino (C) — sensores e atuadores</li>
            <li>HTML / CSS — interfaces responsivas</li>
            <li>AWS — conceitos de implantação</li>
            <li>Power BI — análise básica</li>
            <li>Git / GitHub — versionamento</li>
          </ul>

          <h3 className="mt-6 text-sm text-gray-400 tracking-widest">IDIOMAS</h3>
          <p className="mt-2 text-sm text-gray-300">Português (nativo) • Inglês (intermediário)</p>
        </aside>

        <section className="md:col-span-3 mt-2">
          <h3 className="text-lg font-semibold mb-4">Projetos em destaque</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {allProjects.map((p, idx) => (
              <ProjectCard key={p.id} project={p} index={idx} onOpen={() => setSelected(p)} />
            ))}
          </div>
        </section>

        <footer className="md:col-span-3 text-center text-xs text-gray-500 mt-8">© {new Date().getFullYear()} Gustavo Brandassi — Portfolio</footer>
      </main>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}

      {/* Toast de confirmação — acessível */}
      <div aria-live="polite" className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-6 right-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={copied ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-auto bg-indigo-600 text-white px-4 py-2 rounded-md shadow-lg"
            role="status"
          >
            Email copiado!
          </motion.div>
        </div>
      </div>
    </div>
  )
}
