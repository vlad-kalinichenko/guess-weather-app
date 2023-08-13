import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { NotFound, PostList } from '@/pages';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PostList />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
