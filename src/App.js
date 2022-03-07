
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Button } from '.\Button'

function App() {
  return (
    <div className={"App"}>
      <BrowserRouter>
        <Routes>
          <Route
          path={"./Button"}
          element={<h1>Button</h1>} />
          <Route
          path={"/"}
          element={<h1>Home</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;