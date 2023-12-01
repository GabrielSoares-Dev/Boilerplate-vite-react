import { Navigate, Outlet } from 'react-router'
import { useGuard } from '@guards'

export function PrivateGuard() {
  const { isAuthenticated } = useGuard()

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}
