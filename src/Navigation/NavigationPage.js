import { Routes, Route, Navigate } from "react-router-dom";
import MXGoldPage from '../Screens/MXGoldPage';
import HomePage from '../Screens/HomePage';
import NewRelease from '../Screens/NewRelease';
import MXVdesi from '../Screens/MXVdesi';
import SearchScreen from '../Screens/SearchScreen';



const NavigationPage=()=>{
return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/MXGoldPage" element={<MXGoldPage />} />
      <Route path="/NewRelease" element={<NewRelease />} />
      <Route path="/MXVdesi" element={<MXVdesi />} />
      <Route path="/SearchScreen" element={<SearchScreen />} />
    


    </Routes>
)
};
export default NavigationPage;