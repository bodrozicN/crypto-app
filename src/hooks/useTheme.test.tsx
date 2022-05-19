import { useTheme } from "./";
import { renderHook, act } from "@testing-library/react";
import { store } from "../redux";
import { Provider } from "react-redux";

describe("useTheme", () => {
  it("initial value should be false", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.isDark).toBe(false);
  });

  it("should return true for dark mode", () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    act(() => {
      result.current.changeTheme();
    });

    expect(result.current.isDark).toBe(true);
  });
});
