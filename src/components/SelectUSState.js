  
import React from "react";
import states from "./states.json";
import PropTypes from "prop-types";

class SelectUSState extends React.Component {
  handleChange = event => {
    const { onChange } = this.props;
    onChange(event.target.value);
  };

  getSelected = abbreviation => {
    abbreviation === 'NH' ? true : false
  }

  render() {
    const { id, className } = this.props;
    return (
      <select id={id} className={className} onChange={this.handleChange}>
        {states.map(item => {
          if (item.abbreviation === 'NH') {
              return (
                  <option key={item.abbreviation} value={item.abbreviation} selected="selected">
                      {item.name}
                  </option>
              )
          } else {
              return (
                <option key={item.abbreviation} value={item.abbreviation}>
                    {item.name}
                </option>
              )
          }
        })}
      </select>
    );
  }
}

const propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string
};

SelectUSState.propTypes = propTypes;

export default SelectUSState;