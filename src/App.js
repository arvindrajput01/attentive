import Login from "./components/Login/Login";
import {Routes,Route} from  'react-router-dom'

function App() {
  return (
    <div>

      <Routes>
        <Route exact path="/"  element={<Login />} />
      </Routes>
    </div>

  );
}

export default App;
