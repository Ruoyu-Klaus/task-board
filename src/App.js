import React, { Fragment, useEffect } from 'react';
import SearchBar from './components/layout/SearchBar';
import Tasks from './components/tasks/Tasks';
import AddBtn from './components/layout/AddBtn';
import AddTaskModal from './components/tasks/AddTaskModal';
import EditTaskModal from './components/tasks/EditTaskModal';
import AddCohortModal from './components/cohorts/AddCohortModal';
import CohortListModal from './components/cohorts/CohortListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddTaskModal />
        <EditTaskModal />
        <AddCohortModal />
        <CohortListModal />
        <Tasks />
      </div>
    </Fragment>
  );
}

export default App;
