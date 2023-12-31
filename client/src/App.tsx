import ContextProvider from "./context/ContextProvider";
import Home from "./screens/Home";

function App() {
  return (
    <ContextProvider>
      <div className="font-Nunito">
        <Home />
      </div>
    </ContextProvider>
  );
}

export default App;
