import logo from './logo.svg';
import './styles/index.scss';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import configureStore from './Redux/store';
import CategoryPage from './components/CategoryPage';
import ProductDetailsPage from './components/ProductDetailsPage';
import FavoritesPage from './components/FavoritesPage';



function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/Categories/:id/:name" element={<CategoryPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
