'use strict';

var coordinatesCloud = [[120, 500, 520, 520, 500, 120, 100, 100, 120], [10, 10, 30, 260, 280, 280, 260, 30, 10]];
var coordinatesShadow = [[130, 510, 530, 530, 510, 130, 110, 110, 130], [20, 20, 40, 270, 290, 290, 270, 40, 20]];
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var HEADER_X = 140;
var HEADER_Y = 30;
var GAP = 10;
var START_GAP = 55;
var TEXT_WIDTH = 40;
var TEXT_GAP = 250;
var RECT_GAP = 240;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TIME_GAP = 50;
var BAR_HEIGHT = 150;

var renderCloud = function (ctx, coordinates, color, strokeColor) {
  ctx.fillStyle = color;
  ctx.strokeStyle = strokeColor;
  ctx.beginPath();
  ctx.moveTo(coordinates[0][0], coordinates[1][0]);

  for (var i = 1; i < coordinates[0].length; i++) {
    ctx.lineTo(coordinates[0][i], coordinates[1][i]);
  }

  ctx.stroke();
  ctx.fill();
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

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, coordinatesShadow, 'rgba(0, 0, 0, 0.3)', 'transparent');
  renderCloud(ctx, coordinatesCloud, '#fff', 'transparent');

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили! Список результатов:', HEADER_X, HEADER_Y);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var randomOpacity = Math.random().toFixed(2);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 77, 255, ' + randomOpacity + ')';
    }

    ctx.fillRect(CLOUD_X + START_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_Y + RECT_GAP, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + START_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_Y + TEXT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + START_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_Y + (CLOUD_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime) - TIME_GAP);
  }
};
