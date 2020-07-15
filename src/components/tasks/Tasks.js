import React, { useEffect } from 'react';
import TaskItem from './TaskItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getTasks } from '../../actions/taskAction';

function Tasks({ task: { tasks, loading }, getTasks }) {
  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  if (loading || tasks === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header z-depth-2'>
      <li className='collection-header'>
        <h4 className='center'>Task Board</h4>
      </li>
      {!loading && tasks.length === 0 ? (
        <p className='center'>Looks good! No tasks so far.</p>
      ) : (
        tasks.map(task => <TaskItem task={task} key={task.id} />)
      )}
    </ul>
  );
}
Tasks.prototype = {
  task: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  task: state.task,
});

export default connect(mapStateToProps, { getTasks })(Tasks);
