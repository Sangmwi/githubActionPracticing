// tests/auth/signup.spec.ts
import { test, expect } from "@playwright/test";

test.describe("회원가입 페이지 E2E 테스트", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/auth/signup");
  });

  test("회원가입 페이지가 올바르게 로드되는지 확인", async ({ page }) => {
    const heading = page.getByRole("heading", { name: "회원가입 페이지" });
    await expect(heading).toBeVisible();
  });

  test("로그인 링크 클릭 시 로그인 페이지로 이동되는지 확인", async ({
    page,
  }) => {
    const loginLink = page.getByRole("link", { name: "로그인 페이지로 이동" });
    await expect(loginLink).toBeVisible();
    await loginLink.click();
    await expect(page).toHaveURL("http://localhost:3000/auth/login");
  });
});
