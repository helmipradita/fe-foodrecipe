import React from 'react';

const Button = ({ title, type }) => {
  return <button className={`btn btn-${type} `}>{title}</button>;
};

export default Button;
