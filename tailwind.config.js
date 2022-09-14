module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '560px',
        '2xs': '375px'
      },
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
      },
      width: {
        '47': '189px',
        '58': '230px',
        '66': '264px',
        '81': '323px',
        '93': '372px',
        '125': '500px',
        '227': '1307px'
      },
      height: {
        '14': '56px',
        '15': '60px',
        '88': '350px',
        '90': '360px'
      },
      padding: {
        '50px': '50px',
        '60px': '60px',
      }
    },
  },
  plugins: [],
}