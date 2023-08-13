import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NotFound, WeatherGame } from '@/pages';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<WeatherGame />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
