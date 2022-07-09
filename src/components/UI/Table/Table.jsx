import React from 'react';
import styles from './Table.module.scss'

const Table = ({data}) => {
  // console.log(data);
  return (
    <div className={styles.table}>
      <br />
      {data.map(row => 
        // console.log(chartData);
        <div 
          key={row.label} 
          className={styles.row}>
            {/* <p>Id: {row.label}</p> */}
            <p>Year: {row.year}</p>
            <p>Gain: {row.userGain}  </p>
            <p> Lost: {row.userLost}</p>
        </div>
      )}
    </div>
  );
};

export default Table;