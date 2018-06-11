/* eslint react/prop-types: 0 */
import React from 'react';

export default props => (
  <button
    className={`btn btn-${props.style}`}
    onClick={props.onClick}
  >
    <i className={`fa fa-${props.icon}`} />
  </button>
);
