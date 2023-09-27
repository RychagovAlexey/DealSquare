import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark', // Enable dark mode
    themes: {
      dark: {
        colors: {
          surface: '#000',
          secondary: '#177306',
        },
      },
      light: {
        colors: {
          secondary: '#177306',
        },
      },
    },
  },
})
