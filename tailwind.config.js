module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}', // Include all your component and page files
    ],
    theme: {
      extend: {
        colors: {
          'pastel-blue': '#a0c8ff',
          'dark-blue': '#0077c2',
          'light-blue': '#1a8aff',
          'dark-gray': '#121212',
          'light-gray': '#f1f1f1',
          'gray': '#bbb',
          'darker-gray': '#343a40',
          'online-green': '#00ff00',
          'offline-red': '#ff0000',
        },
      },
    },
    plugins: [],
  };