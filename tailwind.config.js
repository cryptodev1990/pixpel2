module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        app: {
          black: {
            DEFAULT: '#29313C',
            light: '#C4C4C4',
            button: '#37404C',
            modal: "#1F2630",
            select: "#48515F",
          },
          blue: {
            DEFAULT: '#0095C8',
            second: "#0095C8",
            fifth: 'rgba(0, 149, 200, 0.7)',
          },
          red: {
            DEFAULT: "#F6465D",
          },
          purple: {
            DEFAULT: '#7B61FF',
          },
          green: {
            DEFAULT: '#2EBD85'
          }
        }
      },
      borderColor: {
        app: {
          black: {
            DEFAULT: '#37404C',
          }
        }
      },
      textColor: {
        app: {
          blue: {
            DEFAULT: '#0095C8',
          }
        }
      }
    },
  },
  plugins: [],
}