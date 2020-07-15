import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { searchTasks } from '../../actions/taskAction';

function SearchBar({ searchTasks }) {
  const text = useRef('');

  const onChange = e => {
    console.log(text.current.value);
    searchTasks(text.current.value);
  };

  return (
    <nav style={{ marginBottm: '30px' }} className='teal lighten-2 z-depth-2'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search tasks'
              ref={text}
              onChange={onChange}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}
SearchBar.prototype = {
  searchTasks: PropTypes.func.isRequired,
};

export default connect(null, { searchTasks })(SearchBar);
