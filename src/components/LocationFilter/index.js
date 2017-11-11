import React from 'react';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import './style.css';

const LocationFilter = (props) => (
  <div>
    <ul className="location-list">
      {props.markers.map((marker) => (
        <li key={marker.id}>
          <span className="matched">{marker.matched}</span>
          <span>
            {marker.remaining
              ? marker.remaining
              : marker.matched ? marker.remaining : marker.name}
          </span>
        </li>
      ))}
    </ul>
    <div className="input-container">
      <Input
        placeholder="Filter locations"
        value={props.filterValue}
        onChange={props.handleInput}
        maxLength="20"
      />
    </div>
  </div>
);

LocationFilter.propTypes = {
  markers: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterValue: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
};

LocationFilter.defaultProps = {
  filterValue: '',
};

export default LocationFilter;
