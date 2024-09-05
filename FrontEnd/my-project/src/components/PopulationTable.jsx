import React from 'react'
import ApexCharts from 'react-apexcharts';


function PopulationTable({population}) {
   console.log(population)
    const options = {
        chart: {
          type: 'bar',
        },
        xaxis: {
          categories: population.populationCounts.map(item => item.year), // gets years for x
          title: {
            text: 'Year',
            style: {
                fontSize: '10px',
                
                color: '#333',
              },
          },
        },
        yaxis: {
          title: {
            text: 'Value',
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          },
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: 'Yearly Values',
          align: 'left',
        },
      };
    
      // Configura los datos de la serie
      const series = [
        {
          name: 'Value',
          data: population.populationCounts.map(item => item.value), // Extrae los valores para la serie
        },
      ];
    
    
  return (
    <div>
          <ApexCharts options={options} series={series} type="bar" height={350} />
    </div>
  )
}

export default PopulationTable