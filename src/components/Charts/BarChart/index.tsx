import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import type { ChartData, ChartOptions } from "chart.js";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


interface BarProps {
  options: ChartOptions<"bar">;
  data: ChartData<"bar">;
  height?: number;
};

const BarChart: React.FC<BarProps> = ({ data, options, height }) => (
  <Bar data={data} options={options} height={height} />
);

export default BarChart;
