import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Taskpeding from "./components/Taskpending";
import Adduser from "./components/Adduser";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  return <>

    <div id="wrapper">
      <SideBar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/task" element={<Taskpeding />}></Route>
        <Route path="/add-user" element={<Adduser />}></Route>

        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>

      {/* <Dashboard /> */}
    </div>

  </>
}

export default App;
