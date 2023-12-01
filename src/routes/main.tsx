import { BrowserRouter } from 'react-router-dom'
import { Private, Public } from '@routes'

export function Main() {
  return (
    <BrowserRouter>
      <Public />
      <Private />
    </BrowserRouter>
  )
}
