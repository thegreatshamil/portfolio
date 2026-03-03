export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#050505',
        'accent': '#3b82f6', // Electric Blue
        'accent-bright': '#60a5fa',
      },
      fontFamily: {
        'display': ['Inter', 'Geist', 'sans-serif'],
        'body': ['Inter', 'Geist', 'sans-serif'],
      },
      letterSpacing: {
        'tighter': '-0.04em',
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" seed=\"2\" /></filter><rect width=\"100\" height=\"100\" fill=\"%23050505\" /><rect width=\"100\" height=\"100\" fill=\"%23ffffff\" opacity=\"0.03\" filter=\"url(%23n)\" /></svg>')",
      },
    },
  },
  plugins: [],
}
