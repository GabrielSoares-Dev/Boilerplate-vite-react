import { Route, Routes } from 'react-router-dom'

export function Public() {
  return (
    <Routes>
      <Route path="/" element={<p>example</p>} />
    </Routes>
  )
}
