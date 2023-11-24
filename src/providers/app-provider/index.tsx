import type { AppProviderProps } from '@providers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

export function AppProvider({ children }: AppProviderProps) {
  const enabledDevTools = import.meta.env.DEV
  return (
    <QueryClientProvider client={queryClient}>
      {enabledDevTools && <ReactQueryDevtools initialIsOpen={false} />}
      {children}
    </QueryClientProvider>
  )
}
