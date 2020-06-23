import React, { Component } from 'react';
import Chart from 'react-apexcharts';

export default class ChartsSalary extends Component {
  constructor() {
    super();

    this.pie = {
      options: {
        chart: { type: 'donut' },
        labels: ['INSS', 'IRPF', 'Salário Liquido'],
        colors: ['#e67e22', '#c0392b', '#16a085'],
      },
    };

    this.line = {
      options: {
        chart: { type: 'line' },
        xaxis: { categories: ['INSS', 'IRPF', 'Salário Liquido'] },
      },
    };
  }

  render() {
    const { serie } = this.props;

    const serieNumber = serie.map((number) => {
      const formated = number.toFixed(2);
      const interger = parseFloat(formated);
      return interger;
    });

    return (
      <>
        <div
          className="mt-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-center',
          }}
        >
          <div className="flex w-full mb-6 border border-gray-400"></div>

          <Chart
            options={this.pie.options}
            series={serieNumber}
            type="donut"
            width="400"
          />
        </div>
      </>
    );
  }
}
