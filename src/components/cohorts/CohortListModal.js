import React, { useEffect, useState } from 'react';
import CohortItem from './CohortItem';

function CohortListModal() {
  const [cohorts, setCohort] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCohorts();
    // eslint-disable-next-line
  }, []);

  const getCohorts = async () => {
    setLoading(true);
    const res = await fetch('/cohorts');
    const data = await res.json();
    setCohort(data);
    setLoading(false);
  };

  return (
    <div id='cohort-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Cohorts List</h4>
        <ul className='collection striped'>
          {!loading &&
            cohorts.map(cohort => (
              <CohortItem cohort={cohort} key={cohort.id} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default CohortListModal;
