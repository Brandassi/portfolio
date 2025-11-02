import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

export default function PortfolioMerged(){
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen text-gray-100" style={{background:'linear-gradient(180deg,#0b0f13,#071018)'}}>
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold tracking-wider">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-pink-300 to-rose-300">GUSTAVO</span>
            <span className="block text-sm text-gray-400 mt-1">Brandassi</span>
          </h1>
        </div>
        <nav className="flex items-center gap-3">
          <a className="px-4 py-2 rounded-md border border-gray-800 bg-gray-900/40" href="/Gustavo_Brandassi_CV.pdf">CV</a>
          <a className="px-4 py-2 rounded-md text-white" href="https://github.com/Brandassi" style={{background:'linear-gradient(90deg,#6366f1,#fb7185)'}}>GitHub</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-8">
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
                <a className="text-xs px-3 py-1 rounded-full border border-gray-800" href="mailto:gustavobrandassi@icloud.com">Email</a>
                <a className="text-xs px-3 py-1 rounded-full border border-gray-800" href="https://www.linkedin.com/in/gustavo-brandassi">LinkedIn</a>
                <a className="text-xs px-3 py-1 rounded-full border border-gray-800" href="https://github.com/Brandassi">GitHub</a>
              </div>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg glass">
              <p className="text-xs text-gray-400">Formação</p>
              <p className="font-semibold mt-1">Ensino Médio Técnico em Informática — UNASP SP (2025)</p>
            </div>
            <div className="p-4 rounded-lg glass">
              <p className="text-xs text-gray-400">Cursos</p>
              <p className="font-semibold mt-1">Cloud, Dados, Segurança — SENAI (2023)</p>
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

          <h3 className="mt-6 text-sm text-gray-400 tracking-widest">LOCALIDADE</h3>
          <p className="mt-2 text-sm text-gray-300">Embu das Artes — SP</p>
        </aside>

        <section className="md:col-span-3 mt-2">
          <h3 className="text-lg font-semibold mb-4">Projetos em destaque</h3>

          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <ProjectCard key={p.id} project={p} index={idx} onOpen={() => setSelected(p)} />
            ))}
          </div>
        </section>

        <footer className="md:col-span-3 text-center text-xs text-gray-500 mt-8">© {new Date().getFullYear()} Gustavo Brandassi — Portfolio</footer>
      </main>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}
