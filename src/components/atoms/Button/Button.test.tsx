import { fireEvent, render, screen } from "@testing-library/react";
import  Button  from "./Button";

describe("Button Component", () => {
  const onClick = jest.fn();

  test("Matches Snapshot", () => {
    const { asFragment } = render(<Button name="hello" onClick={onClick} />);
    expect(asFragment.name).toMatchSnapshot();
  });

  it("should get button text", () => {
    render(<Button variant="text" onClick={onClick}>hello </Button>);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });

  it("should call onclick", () => {
    const { getByText } = render(<Button variant="text" onClick={onClick} >hello</Button>);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText("hello"));
    expect(onClick).toHaveBeenCalled();   
  });
});
