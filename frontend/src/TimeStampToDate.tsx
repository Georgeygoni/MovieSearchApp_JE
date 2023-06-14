import React from 'react';

const TimestampToDate = ({ timestamp} : any) => {
  const date = new Date(timestamp);
  const longDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }).format(date);

  return <div>{longDate}</div>;
};

export default TimestampToDate;