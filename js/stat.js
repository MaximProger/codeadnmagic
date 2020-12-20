(function () {
  // Улучшение игры
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 15;
  var TEXT_WIDTH = 50;
  var BAR_WIDTH = 40;
  var baHeight = 150;

  // Возращает случайное число в диапазоне
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.fillStyle = "white";
    ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);

    ctx.font = "16px PT Mono";
    ctx.fillStyle = "black";
    ctx.fillText("Ура вы победили!", 110, 50);
    ctx.fillText("Список результатов:", 110, 70);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
      // Имена
      ctx.fillStyle = "black";
      ctx.fillText(
        names[i],
        CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i,
        CLOUD_Y + 260
      );

      // Очки
      ctx.fillStyle = "black";
      ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i,
        CLOUD_Y + 83
      );

      if (names[i] == "Вы") {
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
      } else {
        ctx.fillStyle = `rgba(30,${getRandomIntInclusive(30, 150)},255, 1)`;
      }

      // Столбцы
      ctx.fillRect(
        CLOUD_X + TEXT_WIDTH + (TEXT_WIDTH + BAR_WIDTH) * i,
        CLOUD_Y + 40 + TEXT_WIDTH + baHeight - (baHeight * times[i]) / maxTime,
        BAR_WIDTH,
        (baHeight * times[i]) / maxTime
      );
    }
  };
})();
