
  "use client";
  import { createTheme } from '@mui/material/styles';

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ff9800', // Orange color
        light: '#ffb74d', // Lighter orange
        dark: '#f57c00', // Darker orange
        contrastText: '#fff', // Text color for contrast
      },
      secondary: {
        main: '#ff5722', // Complementary orange (or another color)
        light: '#ff8a50',
        dark: '#e64a19',
        contrastText: '#fff',
      },
      background: {
        default: '#fafafa', // Light background
        paper: '#fafafa', // Paper background
      },
      text: {
        primary: '#212121', // Dark text
        secondary: '#757575', // Secondary text
      },
    },
  });

  export default theme;
  