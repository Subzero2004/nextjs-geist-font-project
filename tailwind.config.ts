import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        // Light theme colors
        light: {
          background: '#F8F9FB',       // gris muy suave
          surface: '#FFFFFF',          // blanco puro para tarjetas
          primary: '#1746C1',          // azul profundo
          'primary-emphasis': '#2C5BEA', // azul más vivo
          'accent-1': '#F79C2E',       // naranja vibrante
          'accent-2': '#F8D08F',       // dorado suave
          'info-teal': '#6AAAB3',      // teal elegante
          text: '#0B1221',             // casi negro para máxima legibilidad
          muted: '#94A3B8',            // gris neutro para secundarios
        },

        // Dark theme colors
        dark: {
          background: '#0F131A',       // gris oscuro azulado
          surface: '#151B24',          // superficie un poco más clara
          primary: '#7EA1FF',          // azul claro que resalta en fondo oscuro
          'primary-emphasis': '#5A82F0', // azul intermedio para hover/activo
          'accent-1': '#FFC36E',       // dorado cálido
          'accent-2': '#F79C2E',       // naranja vivo
          'info-teal': '#7CC9D1',      // teal más luminoso
          text: '#E6ECF2',             // gris muy claro (no blanco puro, más suave)
          muted: '#708199',            // gris azulado apagado para texto secundario
        },
        // Default theme mapping (will be overridden by CSS variables)
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      },
      borderRadius: {
        'cleanmind': '16px',
        'cleanmind-lg': '20px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontWeight: {
        'title': '700',
        'text': '400',
        'text-medium': '500',
      }
    }
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
