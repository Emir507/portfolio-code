import React from 'react';
import ProjectsList from '../ProjectsList';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
      <h1>App</h1>
      <ProjectsList />
    </div>
    </Router>
  )
}

export default App;