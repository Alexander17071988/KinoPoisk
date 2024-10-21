import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@app/store';
import Header from '@widgets/Header/ui/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home/ui/Home';
import MyPage from '@pages/MyPage/ui/MyPage';
import Subscriptions from '@pages/Subscriptions/ui/Subscriptions';
import Channels from '@pages/Channels/ui/Channels';
import Sport from '@pages/Sport/ui/Sport';
import Games from '@pages/Games/ui/Games';

const App: React.FC = () => {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='my' element={<MyPage />} />
          <Route path='subscriptions' element={<Subscriptions />} />
          <Route path='channels' element={<Channels />} />
          <Route path='sport' element={<Sport />} />
          <Route path='games' element={<Games />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
