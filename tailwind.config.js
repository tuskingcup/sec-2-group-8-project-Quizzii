module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow' : 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-moderato' : 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-fast' : 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    },
  },
  plugins: [require("daisyui")],
}