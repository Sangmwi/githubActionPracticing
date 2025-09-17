import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./index";



test("Button 클릭하면 onClick 함수가 호출되어야한다.", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>클릭</Button>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
});

