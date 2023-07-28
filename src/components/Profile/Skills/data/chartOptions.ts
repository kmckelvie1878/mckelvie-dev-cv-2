export const RadarOptions = {
  scales: {
    r: {
      grid: {
        circular: true,
        color: "#e1e1e1",
      },
      angleLines: {
        color: "#e1e1e1",
      },
      pointLabels: {
        color: "#888",
      },
      ticks: {
        display: false,
      },
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const BarOptions = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 3,
      borderRadius: 5,
    },
  },
  responsive: true,
  layout: {
    padding: 6,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      display: false,
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: false,
        font: {
          size: 14,
        },
        color: "#999",
      },
    },
  },
};
