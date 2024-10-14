import React from 'react';
import MovieCarousel from '@widgets/MovieCarousel/ui/MovieCarousel';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import MatrixCarousel from '@widgets/MatrixCarousel/ui/MatrixCarousel';
import Header from '@widgets/Header/ui/Header';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Header />
      <MovieCarousel />
      <MatrixCarousel />
    </Provider>

  );
};

export default App;
