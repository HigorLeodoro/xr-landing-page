/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/images/header.webp')",
        'headerMedium': "url('/images/headerM.webp')",
        'mobileHeader': "url('/mobileAssets/headerMobile.png')",
        'page': "url('/images/backgroundPage.png')",
        'murilao': "url('/images/murilao.webp')",
        'murilaoMobile': "url('/mobileAssets/murilaoMobile.png')",
        'services': "url('/images/servicos.png')",
        'servicesMedium': "url('/images/servicesMedium.png')",
        'benefits': "url('/images/diferenciais.png')",
        'brands': "url('/images/empresas.png')",
        'depositions': "url('/images/depoimentos.png')",
        'process': "url('/images/processo.png')",
      },
      fontFamily: {
        'helvetica': ['var(--font-helvetica)'],
        'microTecni': ['var(--font-microTecni)']
      },
      colors: {
        'red': '#FF0000',
        'redStroke': '#A5160C',
        'green': '#09FF12',
        'button': '#AC0000',
      },
      extend: {
        boxShadow: {
          'neon': '0 0 5px #ff0000, 0 0 15px #ff0000, 0 0 30px #ff0000, 0 0 60px #ff0000'
        }
      }
    },
  },
  plugins: [],
}