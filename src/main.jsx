import ReactDom from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDom.createRoot(document.getElementById('root')).render(
<QueryClientProvider client={queryClient}>
<App />
</QueryClientProvider>
)
