import { Route, Routes } from 'react-router-dom'
import { PrivateGuard } from '@guards'

export function Private() {
  return (
    <Routes>
      <Route Component={PrivateGuard}>
        <Route path="/example" element={<p>example</p>} />
      </Route>
    </Routes>
  )
}
