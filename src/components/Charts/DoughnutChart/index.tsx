"use client"

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import styled from "styled-components";
import { getColorHex } from "@/helpers/getColor";
import { Text } from "@chakra-ui/react";

Chart.register(ArcElement);

interface DoughnutChartProps {
  score: number;
  label: string;
}

const Wrapper = styled.div`
  font-family: "din-condensed", sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AttributeLabel = styled.span`
  font-size: 19px;
  width: 116px;
  height: 40px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  line-height: 20px;
  margin-bottom: -1rem;
`

const Score = styled(Text)`
  position: absolute;
  bottom: 1rem;
  font-size: 36px;
  font-weight: 400;
  color: inherit;

  @media (min-width: 48em) and (max-width: 65.9375em) {
    font-size: 20px;
    bottom: 0.25rem;
  }

  @media (min-width: 34.375em) and (max-width: 47.9375em) {
    font-size: 50px;
    bottom: 1.5rem;
  }

  @media (min-width: 55em) and (max-width: 65.9375em) {
    font-size: 24px;
    bottom: 0.75rem;
  }

`;


const DoughnutChart = ({score, label}: DoughnutChartProps) => {


  
  const data = {
    datasets: [
      {
        data: [score, 10 - score],
        backgroundColor: [getColorHex(score), "#3d4d5a"],
        display: true,
        borderWidth: 0,
      },
    ],
  };

  return (
    <Wrapper className="font-dinCon">
      <AttributeLabel>{label}</AttributeLabel>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          rotation: -90,
          circumference: 180,
          cutout: "75%",
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
      <Score color={getColorHex(score)}>{score * 10}</Score>
    </Wrapper>
  );
};

export default DoughnutChart;
