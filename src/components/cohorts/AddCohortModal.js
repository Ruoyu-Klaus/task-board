import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

function AddCohortModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a firstname and lastname' });
    } else {
      console.log(firstName, lastName);

      // clear fileds
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div id='add-cohort-modal' className='modal' style={modelStyle}>
      <div className='modal-content'>
        <h4>Enter New Cohort</h4>
        <br />
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              autoComplete='off'
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              autoComplete='off'
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          className='modal-close waves-effect waves-light btn'
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
}
const modelStyle = {
  width: '70%',
  height: '70%',
};
export default AddCohortModal;
