
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css'
import { AppRoutes } from './Routes';
function App() {
  const queryClient = new QueryClient();


  return (
    <>
  <QueryClientProvider client={queryClient}>
    <AppRoutes/>
  </QueryClientProvider>
    </>
  );
}

export default App
