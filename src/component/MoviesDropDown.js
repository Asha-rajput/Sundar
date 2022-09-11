import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function MoviesDropDown({ direction }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div >
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction} >
        <DropdownToggle >Movies</DropdownToggle>
        <DropdownMenu  >
          <DropdownItem>Telugu</DropdownItem>
          <DropdownItem>Tamil</DropdownItem>
          <DropdownItem>Hindi</DropdownItem>
          <DropdownItem>Bhojpuri</DropdownItem>
          <DropdownItem>Malayalam</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

MoviesDropDown.propTypes = {
  direction: PropTypes.string,
};

export default MoviesDropDown;
