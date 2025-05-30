export const defaultTheme = {
  colors: {
    background: '#000000',
    lighterBackground: '#262626',
    lightestBackground: '#4D4D4D',
    cta: '#29F4D5',
    blur: '#525252',
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
      cta: '#29F4D5',
      disabled: '#777777',
    },
  },
  typography: {
    weights: {
      bold: 'Montserrat-Bold',
      medium: 'Montserrat-Medium',
      regular: 'Montserrat-Regular',
    },
    sizes: {
      small: 12,
      base: 16,
      medium: 20,
      large: 24,
      xLarge: 32,
    },
  },
} as const;
