import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

function TaskItem({ task }) {
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
        >
          {task.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'>ID#{task.id}</span> last edited by{' '}
          <span className='black-text'>{task.tech}</span> on{' '}
          <Moment format='MMMM Do YYYY, h:mm:ss a'>{task.date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
}
TaskItem.prototype = {
  tasks: PropTypes.object.isRequired,
};
export default TaskItem;
