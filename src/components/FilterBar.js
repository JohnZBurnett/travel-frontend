import React from 'react'

const FilterBar = (props) => {
  return (
    <div className="filter-bar">
      <input
        placeholder="Search here"
        value={props.currentQuery}
        onChange={props.onFilterChange}
        ></input>
    </div>
  )
}

export default FilterBar
