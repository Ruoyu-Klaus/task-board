import React from 'react';

function SearchBar() {
  return (
    <nav style={{ marginBottm: '30px' }} className='teal lighten-2'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' required />
            <label className='label-icon' for='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default SearchBar;
