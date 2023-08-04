import { render, screen } from "@testing-library/react";
import FutPlayerCardComponent, { FutPlayerCardProps } from "./PlayerCard";

const mockProps: FutPlayerCardProps = {
  rating: 90,
  position: "ST",
  name: "John Doe",
  statsLeft: [
    { value: 85, label: "PAC" },
    { value: 87, label: "SHO" },
    { value: 79, label: "PAS" },
  ],
  statsRight: [
    { value: 82, label: "DRI" },
    { value: 60, label: "DEF" },
    { value: 75, label: "PHY" },
  ],
};

test("renders the FutPlayerCard component without any errors", () => {
  render(<FutPlayerCardComponent {...mockProps} />);
});

test("displays the player name, rating, position, and stats", () => {
  render(<FutPlayerCardComponent {...mockProps} />);

  const playerName = screen.getAllByText(mockProps.name);
  const playerRating = screen.getByText(mockProps.rating.toString());
  const playerPosition = screen.getByText(mockProps.position);

  playerName.forEach((element) => expect(element).toBeInTheDocument());
  expect(playerRating).toBeInTheDocument();
  expect(playerPosition).toBeInTheDocument();

  const statsLeftLabels = mockProps.statsLeft.map((stat) => screen.getByText(stat.label));
  const statsLeftValues = mockProps.statsLeft.map((stat) => screen.getByText(stat.value.toString()));
  const statsRightLabels = mockProps.statsRight.map((stat) => screen.getByText(stat.label));
  const statsRightValues = mockProps.statsRight.map((stat) => screen.getByText(stat.value.toString()));

  // Verify that all stats left labels and values are present on the component
  statsLeftLabels.forEach((label) => expect(label).toBeInTheDocument());
  statsLeftValues.forEach((value) => expect(value).toBeInTheDocument());

  // Verify that all stats right labels and values are present on the component
  statsRightLabels.forEach((label) => expect(label).toBeInTheDocument());
  statsRightValues.forEach((value) => expect(value).toBeInTheDocument());
});
