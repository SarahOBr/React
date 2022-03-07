
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Counter } from './components/Counter'
function App() {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Routes>
          <Route
          path={"Counter"}
          element={<Counter />} />
          <Route
          path={"/"}
          element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;