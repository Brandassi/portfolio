export const projects = [
  {
    id: 1,
    title: 'Dessalinizador Solar — TCC',
    subtitle: 'Protótipo embarcado • Energia solar + sensoriamento',
    description: 'Dessalinizador por aquecimento e condensação com monitoramento via Bluetooth. Firmware, eletrônica e integração de sensores. Protótipo funcional em bancada.',
    longDescription: 'Projeto de TCC que inclui design eletrônico, firmware em C para Arduino, integração de sensores (TDS, fluxo, nível), controle de aquecimento e telemetria via Bluetooth. Sistema alimentado por painel solar e bateria. Documentação, esquemas e resultados no repositório.',
    tech: ['Arduino (C)', 'TDS / Fluxo / Nível', 'HC-08 (Bluetooth)', 'Solar + Bateria'],
    link: 'https://github.com/Brandassi/tcc',
    demo: '',
    video: '',
    images: ['/images/tcc-dark.svg','/images/tcc-dark.svg','/images/tcc-dark.svg']
  },
  {
    id: 2,
    title: 'Site Responsivo',
    subtitle: 'Frontend simples hospedado no Vercel',
    description: 'Landing page responsiva feita em HTML/CSS/JS com deploy contínuo.',
    longDescription: 'Projeto menor de front-end para prática de responsividade e deploy. Inclui CI/CD via Vercel.',
    tech: ['HTML5','CSS3','Vercel'],
    link: 'https://your-vercel-demo.vercel.app',
    demo: 'https://your-vercel-demo.vercel.app',
    video: '',
    images: ['/images/web-dark.svg','/images/web-dark.svg']
  }
]
