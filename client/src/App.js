import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArticleDetail from './components/ArticleDetail';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/articles/:id" component={ArticleDetail} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
