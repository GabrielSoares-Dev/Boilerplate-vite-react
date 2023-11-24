import { AppProvider } from '@providers'
import { Main } from '@routes'

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  )
}
