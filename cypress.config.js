import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'
import addAccessibilityTasks from 'wick-a11y/accessibility-tasks'

export default defineConfig({
  accessibilityFolder: 'cypress/reports/a11y',
  e2e: {
    setupNodeEvents(on) {
      //on('file:preprocessor', vitePreprocessor())
      addAccessibilityTasks(on)
    },
  },
  env: {
    enableAccessibilityVoice: true
  }
})