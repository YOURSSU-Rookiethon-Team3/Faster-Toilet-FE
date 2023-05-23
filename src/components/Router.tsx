import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BuildingList from '../pages/BuildingList';
import Home from '../pages/Home';
import Result from '../pages/Result';
import ToiletFilter from '../pages/ToiletFilter';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/building-list" element={<BuildingList />} />
        <Route path="/filter" element={<ToiletFilter />} />
        <Route path="/result/:buildingId" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
