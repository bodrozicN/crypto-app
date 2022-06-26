export function handleDisplayComponent(
  element: HTMLElement | null,
  className: string,
  setState: (bool: boolean) => void
) {
  function click(e: Event) {
    const clickedEl = e.target as Element;
    setState(Boolean(clickedEl.closest(className)));
  }

  element?.addEventListener("click", click);
}
