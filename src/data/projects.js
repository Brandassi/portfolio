// src/data/projects.js
// Arquivo centralizado de projetos — aqui você pode adicionar o campo `apk` quando necessário.
// Exemplo adicionado corretamente abaixo (um único lugar, estrutura consistente).

const projects = [
  {
    id: 'tcc',
    title: 'Dessalinizador Solar (TCC)',
    subtitle: 'Sistema de dessalinização com aquecimento e condensação',
    short: 'Dessalinizador movido a energia solar, controlado por Arduino.',
    description: 'Projeto de TCC: dessalinizador movido a energia solar, controle via Arduino, sensores de nível e temperatura, interface Bluetooth.',
    longDescription:
      'Dessalinizador movido a energia solar. Aquecimento por painel solar, condensação do vapor e controle via Arduino. Possui sensores de condutividade, nível e pressão para automação do processo.',
    images: [
      '/images/tcc-1.png',
      '/images/tcc-2.png',
      '/images/tcc-3.png'
    ],
    tech: ['Arduino', 'C', 'Bluetooth', 'Sensores'],
  },

  {
    id: 'site-responsivo',
    title: 'Site Responsivo',
    subtitle: 'Portfólio e apresentação de projetos',
    short: 'Site responsivo em React + Tailwind.',
    description: 'Site responsivo que mostra projetos com modal, galeria de imagens e links para demo/repositório.',
    longDescription:
      'Site responsivo criado em React, usando Tailwind e Framer Motion para animações. Inclui componentes reutilizáveis para cards e modais de projeto.',
    images: [
      '/images/site-1.png',
      '/images/site-2.png',
      '/images/site-3.png'
    ],
    tech: ['React', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/SEU_USUARIO/site-responsivo',
    demo: 'https://seu-site-exemplo.com'
  },

  // Exemplo de projeto com APK — adicione apenas se realmente quiser disponibilizar o arquivo.
  // Para ativar, coloque o arquivo em /public/downloads/app-debug.apk (ou ajuste o caminho)
  // e mantenha a propriedade `apk` abaixo. Se não quiser, apague este objeto ou remova `apk`.
  {
    id: 'controle-dessalinizador-android',
    title: 'Controle Dessalinizador (Android)',
    subtitle: 'App mobile para controlar o dessalinizador',
    short: 'App Android que controla o dessalinizador via HC-05.',
    description: 'Aplicativo Android que conecta via Bluetooth e envia comandos para o dessalinizador.',
    longDescription: 'App Android (debug APK) — conecta ao módulo HC-05 e envia comandos. Disponibilizado para instalação manual via APK.',
    images: ['/images/android-app.png'],
    tech: ['Android', 'Java', 'Bluetooth'],
    apk: '/downloads/app-debug.apk', // <-- coloque o APK aqui (um único lugar)
    demo: null
  }
]

export default projects
