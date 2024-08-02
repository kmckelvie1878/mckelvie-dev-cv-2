import { Radar } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  RadialLinearScale,
  Filler,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  Filler,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title
);

interface RadarProps {
  options: ChartOptions<"radar">;
  data: ChartData<"radar">;
}

const RadarChart: React.FC<RadarProps> = ({ data, options }) => (
  <Radar data={data} options={options} />
);

export default RadarChart;
