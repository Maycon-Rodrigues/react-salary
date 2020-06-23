import React, { Component } from 'react';

import { formatMoney, formatPercentage } from '../helpers/formatters';

export default class InputReadOnly extends Component {
  render() {
    const { label, value, percentage, color = 'black' } = this.props;

    const id = 'input' + label;
    let formattedValue = formatMoney(value);
    formattedValue += percentage > 0 ? ' ' + formatPercentage(percentage) : '';

    return (
      <div className="border border-gray-400 shadow-lg rounded p-2 m-1 w-full md:w-auto ">
        <label className="text-sm text-gray-600 flex items-center" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          className="w-48"
          type="text"
          name="fullSalary"
          value={formattedValue}
          readOnly
          style={{ color, fontWeight: 'bold' }}
        />
      </div>
    );
  }
}
