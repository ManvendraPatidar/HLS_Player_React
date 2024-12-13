import { useState } from "react";
import { LoginScreen } from "./pages/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        {/* <LoginScreen /> */}
       <div>
           <Routes>
              <Route path="/" element={<LoginScreen/>} />
              <Route path="/home" element={<HomeScreen/>} />
           </Routes>
       </div>    
    </>
  );
}

export default App;
