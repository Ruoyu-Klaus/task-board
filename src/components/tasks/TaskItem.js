import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

import { connect } from 'react-redux';
import { deleteTask, setCurrent } from '../../actions/taskAction';

function TaskItem({ task, deleteTask, setCurrent }) {
  const onDelete = () => {
    deleteTask(task.id);
    M.toast({ html: `Task Deleted` });
  };

  return (
    <li className='collection-item'>
      <div>
        <a
          href='#edit-task-model'
          className={`modal-trigger ${
            task.attention
              ? 'deep-orange-text darken-4'
              : 'blue-text text-darken-2'
          }`}
          onClick={() => setCurrent(task)}
        >
          {task.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID#{task.id}</span> last edited by{' '}
          <span className='black-text'>{task.cohort}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{task.date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
}
TaskItem.prototype = {
  tasks: PropTypes.object.isRequired,
  deleteTask: PropTypes.object.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteTask, setCurrent })(TaskItem);
