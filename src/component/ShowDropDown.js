import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function ShowDropDown({ direction, }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle>Shows</DropdownToggle>
        <DropdownMenu >
          <DropdownItem >Drama</DropdownItem>
          <DropdownItem>Thriller</DropdownItem>
          <DropdownItem >Reality</DropdownItem>
          <DropdownItem >Crime</DropdownItem>
          <DropdownItem>Comedy</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

ShowDropDown.propTypes = {
  direction: PropTypes.string,
};

export default ShowDropDown;
