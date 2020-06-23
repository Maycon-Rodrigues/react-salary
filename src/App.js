import React, { Component } from 'react';

import * as salaryHelpers from './helpers/salary';
import InputSalary from './components/InputSalary';
import InputReadOnly from './components/InputReadOnly';
import ChartsSalary from './components/ChartsSalary';

const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#c0392b';
const COLOR_NET_SALARY = '#16a085';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };

    this.salaryObject = null;
  }

  handleSalaryChange = (newSalary) => {
    this.setState({
      fullSalary: newSalary,
    });
  };

  render() {
    const { fullSalary } = this.state;

    this.salaryObject = salaryHelpers.calculateSalaryFrom(fullSalary);

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.salaryObject;

    const percentINSS = (discountINSS / fullSalary) * 100;
    const percentIRPF = (discountIRPF / fullSalary) * 100;
    const percentNetSalary = 100 - percentINSS - percentIRPF;

    const series = [percentINSS, percentIRPF, percentNetSalary];

    return (
      <div className="container mx-auto">
        <div className="flex flex-col">
          <h1 className="text-5xl text-center">React Salário</h1>
          <div className="flex justify-center">
            <InputSalary
              salary={fullSalary}
              onSalaryChange={this.handleSalaryChange}
            />
          </div>
          <div className="mx-2 flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-4">
            <InputReadOnly label="Base INSS:" value={baseINSS} />
            <InputReadOnly
              label="Desconto INSS:"
              value={discountINSS}
              percentage={percentINSS}
              color={COLOR_INSS}
            />
            <InputReadOnly label="Base IRPF:" value={baseIRPF} />
            <InputReadOnly
              label="Desconto IRPF:"
              value={discountIRPF}
              percentage={percentIRPF}
              color={COLOR_IRPF}
            />
            <InputReadOnly
              label="Salário liquido:"
              value={netSalary}
              percentage={percentNetSalary}
              color={COLOR_NET_SALARY}
            />
          </div>
          <div className="p-4">
            <ChartsSalary serie={series} />
          </div>
        </div>
      </div>
    );
  }
}
