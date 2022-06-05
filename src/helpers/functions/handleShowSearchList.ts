// remove event listener !!!!!!!!!!!

export const handleShowSearchList = (
  callback: React.Dispatch<React.SetStateAction<boolean>>,
  className: string
) => {
  document.body.addEventListener("click", (e) => {
    const clickedElement = e.target as Element;
    callback(Boolean(clickedElement.closest(className)));
  });
};
