import React from 'react';
import PropTypes from 'prop-types';

function CohortItem({ cohort }) {
  return (
    <li className='collection-item'>
      <div>
        {cohort.firstName} {cohort.lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons'>delete</i>
        </a>
      </div>
    </li>
  );
}
CohortItem.prototype = {
  cohort: PropTypes.object.isRequired,
};

export default CohortItem;
