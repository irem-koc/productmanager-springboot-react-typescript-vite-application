import Navbar from "./components/Navbar";
import { ContextProvider } from "./context/MyContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <AppRouter />
    </ContextProvider>
  );
}

export default App;
