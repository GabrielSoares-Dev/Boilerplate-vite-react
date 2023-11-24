import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@pages'

export function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}
