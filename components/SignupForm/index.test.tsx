
import { fireEvent, render, screen } from "@testing-library/react";
import { SignupForm } from ".";

test("회원가입 버튼을 클릭하면 콘솔로그가 출력되는지 확인", () => {
  render(<SignupForm />);

  const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  // 회원가입 버튼 가져오기 및 클릭
  const signupForm = screen.getByRole("form");
  fireEvent.submit(signupForm);

  // 회원가입 버튼 클릭 시 콘솔에 "회원가입!" 메시지가 출력되는지 확인
  expect(consoleSpy).toHaveBeenCalledWith("회원가입!");

  // jest.spyOn()으로 생성된 스파이(spy)를 원래 구현(original implementation)으로 완전히 복원하는 역할
  consoleSpy.mockRestore();
});