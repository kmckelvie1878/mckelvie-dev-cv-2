import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer component", () => {
  test('displays the current year in the footer', () => {
    render(<Footer />);
  
    const currentYear = new Date().getFullYear();
    const yearRegExp = new RegExp(currentYear.toString());
  
    const footerText = screen.getByText(yearRegExp);
    expect(footerText).toBeInTheDocument();
  });
});
