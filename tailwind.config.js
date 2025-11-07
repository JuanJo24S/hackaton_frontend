/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
          // 🎨 Base
          background: '#fff8f5',
          foreground: '#1f2d3d',
          border: '#e7d9d2',

          // 🧩 Inputs y acciones principales
          input: '#fff5f2',
          primary: '#8a4b2b',
          'primary-foreground': '#ffffff',

          secondary: '#e8f3ff',
          'secondary-foreground': '#0b3a66',

          // ⚙️ Tonos neutros y auxiliares
          muted: '#fbf9f8',
          'muted-foreground': '#9b8e86',

          // ✅ Estados
          success: '#2f9e44',
          'success-foreground': '#ffffff',

          // 🌈 Acentos
          accent: '#2b6fb8',
          'accent-foreground': '#ffffff',

          // ❌ Errores
          destructive: '#d6453b',
          'destructive-foreground': '#ffffff',

          // ⚠️ Advertencias
          warning: '#f2c94c',
          'warning-foreground': '#2b2b2b',

          // 🧾 Tarjetas o contenedores
          card: '#ffffff',
          'card-foreground': '#1f2d3d',

          // 📂 Barra lateral
          sidebar: '#fff2ec',
          'sidebar-foreground': '#5a3a2b',
          'sidebar-primary': '#a05a36',
          'sidebar-primary-foreground': '#ffffff',
      },

      borderColor: {
        DEFAULT: '#e7d9d2', // borde general por defecto
      },
    },

    plugins: [],
  }
}
