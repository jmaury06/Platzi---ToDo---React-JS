import './Components/layout.css'
import AppUI from './AppUI';
import { AppProvider } from './Context';

function App() {
  return (
    <AppProvider>
      <AppUI />
    </AppProvider>
  );
}

export default App;
