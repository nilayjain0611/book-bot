import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'logout', label: 'Logout' },
  { value: 'login', label: 'Go to Login Page' },
];

const DropdownMenu = ({ onSelect }) => {
  const handleSelect = (selectedOption) => {
    if (selectedOption) {
      onSelect(selectedOption.value);
    }
  };

  return (
    <Select options={options} onChange={handleSelect} />
  );
};

export default DropdownMenu;