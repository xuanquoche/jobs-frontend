import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import theme from "../src/assets/themes/colors.ts";
import '../src/assets/themes/colors.ts'
import '../src/components/common/Input/style.ts'
import '../../client/src/index.css'
import '../src/components/common/Tag/style.ts'
import '../src/components/common/Card/index.tsx'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    theme
  },
  defaultTheme: 'light',
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];


export default preview;
