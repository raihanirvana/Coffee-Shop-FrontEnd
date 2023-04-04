/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundSize: {
        30: "30px",
        31: "270px",
        32: "200px",
      },
      backgroundPosition: {
        test: "-60px -220px",
        tost: "-35px -70px",
        tist: "-35px -40px",
        tast: "-45px -100px",
        drum: "-25px 0px",
        salty: "-35px 0px",
        pen: "13px 13px",
        histo: "0px -400px",
        home: "0px -1000px",
        lghome: "0px -500px",
        pinky: "-30px -50px",
        wings: "-10px -40px",
      },
      padding: {
        20: "20px 85px",
        21: "20px 150px",
        22: "20px 173px",
        23: "20px 25px",
        24: "18px 28px",
      },
      dropShadow: {
        drop: "0 0 0.75rem rgba(57, 57, 57, 0.1)",
      },
      gridTemplateRows: {
        7: "repeat(3, minmax(0, 280px))",
        8: "repeat(4, minmax(0, 280px))",
        8: "repeat(2, 150px)",
        9: "repeat(5, 150px)",
      },
      gridTemplateColumns: {
        20: "repeat(1, auto)",
        21: "repeat(3, 420px)",
      },
      backgroundColor: {
        but: "rgba(231,170,54,0.52)",
      },
      objectPosition: {
        op: "0px -15px",
      },
    },
  },
  plugins: [],
};
