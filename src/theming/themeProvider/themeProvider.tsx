// === Import : NPM
import React from 'react';
import { merge } from 'lodash';
import { ThemeProvider } from 'styled-components';

// === Import : LOCAL
import { ThemeProps, defaultTheme } from '../theme';

interface ThemeProviderProps {
  children?: React.ReactNode;
  disableDefaultTheme?: boolean;
  theme?: ThemeProps;
}

export const RocketThemeProvider: React.FC<ThemeProviderProps> = props => {
  const { children, disableDefaultTheme = false, theme } = props;

  const providedTheme =
    disableDefaultTheme && theme ? theme : merge(defaultTheme, theme);

  return <ThemeProvider theme={providedTheme}>{children}</ThemeProvider>;
};
