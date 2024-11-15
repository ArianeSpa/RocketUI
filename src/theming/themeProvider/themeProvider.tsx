// === Import : NPM
import React, { createContext, useContext } from 'react';
import { merge } from 'lodash';
import { ThemeProvider } from 'styled-components';

// === Import : LOCAL
import { defaultTheme, ThemeProps } from '../theme';

interface ThemeProviderProps {
  theme?: ThemeProps;
  children?: React.ReactNode;
}

const ThemeContext = createContext(defaultTheme);
export const useTheme = () => useContext(ThemeContext) ?? defaultTheme;

export const RocketThemeProvider: React.FC<ThemeProviderProps> = props => {
  return (
    <ThemeProvider theme={merge(defaultTheme, props.theme)}>
      {props.children}
    </ThemeProvider>
  );
};
