import { useLocalStorage } from "./useLocalStorage";
import { renderHook, act } from "@testing-library/react";

describe("useLocalStorage", () => {
  it("should return null for value does not exist", () => {
    const { result } = renderHook(() => useLocalStorage());
    act(() => {
      result.current.getFromLocalStorage("test");
    });
    expect(result.current.getFromLocalStorage("test")).toBeNull();
  });

  it("should return value for value exists", () => {
    const { result } = renderHook(() => useLocalStorage());
    act(() => {
      result.current.setToLocalStorage("test", 3);
    });
    expect(result.current.getFromLocalStorage("test")).toBe(3);
  });
});
