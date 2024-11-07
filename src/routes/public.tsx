import { Route, Routes } from 'react-router-dom'
import { Home } from '@pages'

export function Public() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
