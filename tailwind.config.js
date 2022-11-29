/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "895px",
    },
    extend: {
      boxShadow: {
        desktop:
          "2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)",
        mobile:
          "0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        proximaNova: ["Proxima Nova", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        avatar: {
          DEFAULT: "#D8D8D8",
        },
        badge: {
          benefits: {
            fill: "#FFCF0026", //rgba(255, 207, 0, 0.15);
            name: "#988B49",
            stroke: "#FFCF00",
          },
          type: {
            fill: "#A1B1DB4D", // rgba(161, 177, 219, 0.317343);
            name: "#55699E",
            stroke: "#55699E4D", //rgba(85, 105, 158, 0.3);
          },
        },
        bookmark: {
          DEFAULT: "#70778B",
          unmarked: "#70778B",
          marked: "#38415D",
        },
        button: {
          DEFAULT: "#384564",
          arrow: "#384564",
          backdrop: "#38456424", // opacity: 0.14;
          name: "#3A4562",
        },
        divider: {
          DEFAULT: "#3A4562",
        },
        "job-bar": {
          DEFAULT: "#EFF0F5",
          white: "#FFFFFF",
        },
        list: {
          mark: "#384564A1", // rgba(56, 69, 100, 0.632594);
        },
        location: {
          DEFAULT: "#D8D8D8",
          transparent: "#FFFFFF5C",
        },
        main: {
          DEFAULT: "#3A4562",
          secondary: "#878D9D",
          backdrop: "#E6E9F2",
          transparent: "#38415DD1", //D1 rgba(56, 65, 93, 0.82);
          "on-dark": "#E7EAF0",
          "on-dark-secondary": "#E8EBF3",
          "on-dark-transparent": "#FFFFFFAB", // rgba(255, 255, 255, 0.669635);
        },
        map: {
          fill: "#2A3047",
          "dark-fill": "#202336",
        },
        pagination: {
          accent: "#5876C5",
          arrows: "#7D859C",
          DEFAULT: "#70778B",
          divider: "DEE3EF",
          mobileBg: "#F9FAFD",
          mobileTxt: "#38415D9A", //  rgba(56, 65, 93, 0.602109);
          mobileAccent: "##55699E",
        },
        raiting: {
          DEFAULT: "#384564",
          uset: "#384564",
          set: "#38415D",
          stroke: "#3A4562",
        },
        timestamp: {
          DEFAULT: "#878D9D",
          transparent: "#38415D5B", //rgba(56, 65, 93, 0.355988);
          "transparent-mobile": "#38415D9A", //rgba(56, 65, 93, 0.602109);
        },
      },
    },
  },
  plugins: [],
};
