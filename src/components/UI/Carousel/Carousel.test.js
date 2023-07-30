import { render, screen, fireEvent, act } from "@testing-library/react";
import Carousel from "./Carousel";

jest.useFakeTimers(); // Mock timers for setInterval and setTimeout

describe("Carousel component", () => {
  const slides = ["Slide 1", "Slide 2", "Slide 3"];

  test("renders the Carousel without any errors", () => {
    render(<Carousel slides={slides} />);
  });

  test("displays the first slide initially", () => {
    render(<Carousel slides={slides} />);
    const firstSlide = screen.getByText("Slide 1");
    expect(firstSlide).toBeInTheDocument();
  });

  test("switches to the next slide after a specified interval", () => {
    render(<Carousel slides={slides} />);

    // Advance the timer by 12 seconds (12000 milliseconds)
    act(() => {
      jest.advanceTimersByTime(12000);
    });

    const secondSlide = screen.getByText("Slide 2");
    expect(secondSlide).toBeInTheDocument();
  });

  test("clicking on the indicator switches to the corresponding slide", () => {
    render(<Carousel slides={slides} />);
    const secondSlideIndicator = screen.getAllByRole("button")[1]; // Second slide indicator

    fireEvent.click(secondSlideIndicator);

    const secondSlide = screen.getByText("Slide 2");
    expect(secondSlide).toBeInTheDocument();
  });

  test('clicking on the "Previous Slide" button switches to the previous slide', () => {
    render(<Carousel slides={slides} />);
    const previousSlideButton = screen.getByLabelText("Previous Slide");

    fireEvent.click(previousSlideButton);

    const lastSlide = screen.getByText("Slide 3");
    expect(lastSlide).toBeInTheDocument();
  });

  test('clicking on the "Next Slide" button switches to the next slide', () => {
    render(<Carousel slides={slides} />);
    const nextSlideButton = screen.getByLabelText("Next Slide");

    fireEvent.click(nextSlideButton);

    const secondSlide = screen.getByText("Slide 2");
    expect(secondSlide).toBeInTheDocument();
  });
});
