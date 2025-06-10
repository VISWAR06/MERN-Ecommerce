import {  Route, Routes } from "react-router-dom";
import UserLayout from "./Components/Layout/userLayout";

const App = () => {
  return (
   
      <Routes>
        <Route path='/' element={<UserLayout />} />
      </Routes>
    
  );
};

export default App;
