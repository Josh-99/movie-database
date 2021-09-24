import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";

import Card from "./Card";

const cardProps = {
  title: "Luca"
};

describe("Card", () => {
  it("should not render a title when title is not provided", () => {
    render(<Card />);

    expect(screen.getByText(cardProps.title)).not.toBeInTheDocument();
  });

  it("should render a title when title is provided", () => {
    render(<Card title={cardProps.title} />);

    expect(screen.getByText(cardProps.title)).toBeInTheDocument();
  });
});
