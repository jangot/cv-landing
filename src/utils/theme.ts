import { createTheme } from '@mui/material/styles';
import { THEME_COLORS } from './constants';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: THEME_COLORS.dark.primary,
      light: '#90caf9',
      dark: '#1976d2',
    },
    secondary: {
      main: THEME_COLORS.dark.secondary,
      light: '#81c784',
      dark: '#388e3c',
    },
    background: {
      default: THEME_COLORS.dark.background,
      paper: THEME_COLORS.dark.surface,
    },
    text: {
      primary: THEME_COLORS.dark.text,
      secondary: THEME_COLORS.dark.textSecondary,
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(26, 26, 26, 0.95)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});