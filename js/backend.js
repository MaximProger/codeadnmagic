(function () {
  let onError = function (message) {
    console.error(message);
  };

  let onSuccess = function (data) {
    let animals = data;

    console.log(animals);
  };

  window.backend = {
    load: function (onSuccess, onError) {
      const url = "https://javascript.pages.academy/code-and-magick/data";

      let xhr = new XMLHttpRequest();

      xhr.addEventListener("load", function (evt) {
        if (xhr.status == "200") {
          onSuccess(JSON.parse(xhr.responseText));
        } else {
          onError("Статус ответа: " + xhr.status + " " + xhr.statusText);
        }
      });

      xhr.addEventListener("error", function () {
        onError("Произошла ошибка соединения");
      });

      xhr.addEventListener("timeout", function () {
        onError("Запрос не успел выполнится за " + xhr.timeout + "мс");
      });

      xhr.timeout = 1000;

      xhr.open("GET", url);
      xhr.send();
    },
    save: function (data, onSuccess, onError) {
      const url = "https://javascript.pages.academy/code-and-magick";

      let xhr = new XMLHttpRequest();

      xhr.addEventListener("load", function (evt) {
        onSuccess(JSON.parse(xhr.responseText));
      });

      xhr.open("POST", url);
      xhr.send(data);
    },
  };
})();
