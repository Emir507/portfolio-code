import React from 'react';
import ProjectsList from '../ProjectsList';
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css'

function App() {
  return (
    <div className='pt-4'>
      <Header />
      <ProjectsList />
    </div>
  )
}

export default App;