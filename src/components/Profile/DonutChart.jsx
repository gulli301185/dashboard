import Chart from "react-apexcharts";

// eslint-disable-next-line react/prop-types
const DonutChart = ({ darkMode }) => {
  const options = {
    series: [44, 55, 41],
    options: {
      chart: {
        height: 350,
      },
      labels: ["Desktop", "Tablet", "Mobile"],
      colors: ["#FF5733", "#33FF57", "#3357FF"],
      legend: {
        position: "bottom",
        labels: {
          colors: darkMode ? "#dddddd" : "#000000",
        },
      },
      dataLabels: {
        style: {
          colors: ["#dddddd"],
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div className="pt-12 pb-2 bg-white rounded-lg flex dark:bg-gray-600 items-center justify-center">
      <Chart
        options={options.options}
        series={options.series}
        type="donut"
        height={250}
      />
    </div>
  );
};

export default DonutChart;
