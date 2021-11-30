import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const TopicDetail = () => (
  <div>
    <h1>TOPIC DETAIL PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route path='/hats' element={<HatsPage/>} />
      <Route path='/topic/:topicId' element={<TopicDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
