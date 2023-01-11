import React, { Fragment } from 'react';

const Alert = ({ title, text, type }) => {
  return (
    <Fragment>
      <div
        className={`position-absolute top-50 start-50 translate-middle alert alert-${type} my-2`}
      >
        <strong>{title}!</strong> {text}
      </div>
    </Fragment>
  );
};
export default Alert;
