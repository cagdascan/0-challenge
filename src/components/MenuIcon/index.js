import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './style.css';

const MenuIcon = (props) => (
  <button type="button" className="toggle-menu" onClick={props.toggleFilter}>
    <Icon
      type={props.filterVisible ? 'up' : 'down'}
      style={{ fontSize: '16px', color: '#f6891f' }}
    />
  </button>
);

MenuIcon.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  filterVisible: PropTypes.bool.isRequired,
};

export default MenuIcon;
