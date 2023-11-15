
import React from 'react';

const SortOptions = ({ onSortChange }) => {
  const options = [
    { label: 'Priority Desc', value: 'priorityDesc' },
    { label: 'Priority Asc', value: 'priorityAsc' },
    { label: 'Title Desc', value: 'titleDesc' },
    { label: 'Title Asc', value: 'titleAsc' },
    { label: 'Status', value: 'status' },
  ];

  return (
    <div className="sort-options">
      {options.map((option) => (
        <button key={option.value} onClick={() => onSortChange(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SortOptions;
