import React from 'react';
import ReactECharts from 'echarts-for-react';

export const Statistics = () => {

    const option = {
        title: {
          text: 'Estadísticas',
          textStyle: {
            color: 'white',
            fontSize: 18// Color del texto del título
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['Temperatura', 'Batería'],
          textStyle: {
            color: 'white' // Color del texto de la leyenda
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            color: 'white' // Color del texto del eje x
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: 'white' // Color del texto del eje y
          }
        },
        series: [
          {
            name: 'Temperatura',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Batería',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          }
        ]
      };

  return (
    <div>
        <ReactECharts option={option} />
    </div>
  )
}
