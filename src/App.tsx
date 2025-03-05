import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProfile } from './views/UserProfile';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProfile />
    </QueryClientProvider>
  );
}

export default App;
