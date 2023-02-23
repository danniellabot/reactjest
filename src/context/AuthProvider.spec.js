import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import axios from "axios";
import { AuthProvider, AuthContext } from "./AuthContext";

jest.mock("axios");

describe("AuthContext", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should set token when handleAuth is called", async () => {
    const sampleToken = "sampleToken";
    axios.post.mockResolvedValueOnce({ data: { token: sampleToken } });
    const children = <div>Test Component</div>;
    const { getByText } = render(
      <AuthProvider>{children}</AuthProvider>
    );

    const { handleAuth } = AuthContext._currentValue;
    const username = "testuser";
    const password = "testpassword";

    await act(async () => {
      await handleAuth(username, password);
    });

    expect(axios.post).toHaveBeenCalledWith("sample/auth", {
      username,
      password,
    });
    expect(getByText("Test Component")).toBeInTheDocument();
    expect(AuthContext._currentValue.token).toBe(sampleToken);
  });

  test("should clear token when handleExpire is called", () => {
    const sampleToken = "sampleToken";
    const children = <div>Test Component</div>;
    render(<AuthProvider>{children}</AuthProvider>);

    const { handleSetToken, handleExpire } = AuthContext._currentValue;
    handleSetToken(sampleToken);
    handleExpire();

    expect(AuthContext._currentValue.token).toBeNull();
  });
});
