export const getColorScheme = (value: number) => {
  if (value < 50) {
    return "red";
  } else if (value > 49 && value < 70) {
    return "yellow";
  } else {
    return "green";
  }
};

export const getColorHex = (value: number) => {
  if (value < 5) {
    return "#df183b";
  } else if (value > 4.9 && value < 7) {
    return "#f0be2f";
  } else {
    return "#23b21c";
  }
};