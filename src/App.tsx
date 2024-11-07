import { AppProvider } from '@providers'
import { Main } from '@routes'
import './index.css'

export default function App() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  )
}
