import AppRoutes from "./routes/routes";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  return (
    <div className="App">
        <GlobalStyles />
        <AppRoutes />
    </div>
  );
}

export default App;
