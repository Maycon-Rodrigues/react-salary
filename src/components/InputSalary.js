import React, { Component } from 'react';

export default class InputSalary extends Component {
  handleChange = (event) => {
    const newValue = +event.target.value;
    this.props.onSalaryChange(newValue);
  };

  render() {
    const { salary } = this.props;
    return (
      <div className="flex flex-row items-center justify-between border border-gray-400 shadow-lg rounded p-2 m-2 w-64">
        <label className="text-blue-900 font-bold" htmlFor="inputFullSalary">
          Salário bruto
        </label>
        <input
          autoFocus
          id="inputFullSalary"
          className="w-32 py-2 px-2 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg appearance-none leading-normal"
          type="number"
          name="salary"
          value={salary}
          onChange={this.handleChange}
          min="1000"
          step="100"
        />
      </div>
    );
  }
}
