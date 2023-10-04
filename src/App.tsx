import "./App.css";
// import RoutesPage from "./routes/RoutesPage";
import { useCustomRoutes } from "./routes/useCustomRoutes";
function App() {
  const routes = useCustomRoutes();
  return (
    <>
      <div className="App">
        {/* <RoutesPage/> */}
        {routes}
      </div>
    </>
  );
}

export default App;
