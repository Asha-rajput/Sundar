import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';

function MusicDropDown({ direction }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle>Music</DropdownToggle>
        <DropdownMenu >
          <DropdownItem >Hindi</DropdownItem>
          <DropdownItem>Tamil</DropdownItem>
          <DropdownItem>Punjabi</DropdownItem>
          <DropdownItem>English</DropdownItem>
          <DropdownItem>Telugu</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

MusicDropDown.propTypes = {
  direction: PropTypes.string,
};

export default MusicDropDown;