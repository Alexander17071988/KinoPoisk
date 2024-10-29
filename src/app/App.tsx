import React from 'react';
import { Provider } from 'react-redux';
import store from '@app/store';
import { RouterProvider } from 'react-router-dom';
import AppRouter from './router/router';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider >
  );
};

export default App;
