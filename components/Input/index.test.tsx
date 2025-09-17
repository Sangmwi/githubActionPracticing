// src/components/Input/index.test.tsx

import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from ".";

// ... 생략

// 아래의 테스트는 잠시 주석 처리한다.
// test("X 버튼 클릭 시 입력값이 지워지는지 확인한다", () => {
//   render(<Input value="입력값" onChange={jest.fn()} onDelete={jest.fn()} />);

//   const input = screen.getByRole("textbox");
//   const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

//   // X 버튼 클릭
//   fireEvent.click(deleteButton);

//   // 입력값이 지워지고,
//   expect(input).toHaveValue("");
//   // X 버튼이 사라진다.
//   expect(deleteButton).not.toBeInTheDocument();
// });

test("X 버튼 클릭 시 onDelete props에 전달된 함수가 호출되는지 확인한다.", () => {
  const onDelete = jest.fn();
  render(<Input value="입력값" onChange={jest.fn()} onDelete={onDelete} />);

  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  // X 버튼 클릭
  fireEvent.click(deleteButton);

  // onDelete 함수가 호출된다.
  expect(onDelete).toHaveBeenCalled();
});

// ... 생략