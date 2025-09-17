// src/components/SignupForm/index.tsx

"use client";

import { useState } from "react";
import { Input } from "../Input";

export const SignupForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = (field: keyof typeof values) => {
    setValues((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 회원가입 로직 처리
    console.log("회원가입!");
  };

  return (
    <form role="form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="block mb-2">
          이메일
        </label>
        <Input
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          type="email"
          placeholder="이메일을 입력하세요"
          onDelete={() => handleDelete("email")}
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-2">
          비밀번호
        </label>
        <Input
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호를 입력하세요"
          onDelete={() => handleDelete("password")}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mb-2">
          비밀번호 확인
        </label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="비밀번호를 다시 입력하세요"
          onDelete={() => handleDelete("confirmPassword")}
        />
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md w-full"
      >
        회원가입
      </button>
    </form>
  );
};