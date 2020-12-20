(function () {
  // Перетаскивание окна диалога
  let setupDialogElement = document.querySelector(".setup");
  let setupUser = setupDialogElement.querySelector(".setup-user");

  setupUser.addEventListener("mousedown", function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY,
    };

    let dragged = false;

    let onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY,
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY,
      };

      setupDialogElement.style.top =
        setupDialogElement.offsetTop - shift.y + "px";
      setupDialogElement.style.left =
        setupDialogElement.offsetLeft - shift.x + "px";
    };

    let onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);

      if (dragged) {
        let onClickPreventDefault = function (evt) {
          evt.preventDefault();
          setupUserPic.removeEventListener("click", onClickPreventDefault);
        };
        setupUserPic.addEventListener("click", onClickPreventDefault);
      }
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });
})();
