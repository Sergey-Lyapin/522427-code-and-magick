'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var START_GAP = 55;
var TEXT_WIDTH = 40;
var TEXT_GAP = 250;
var RECT_GAP = 240;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var TIME_GAP = 50;
var barHeight = 150;
var POINT_1X = 120;
var POINT_1Y = 10;
var POINT_2X = 500;
var POINT_2Y = 10;
var POINT_3X = 520;
var POINT_3Y = 30;
var POINT_4X = 520;
var POINT_4Y = 260;
var POINT_5X = 500;
var POINT_5Y = 280;
var POINT_6X = 120;
var POINT_6Y = 280;
var POINT_7X = 100;
var POINT_7Y = 260;
var POINT_8X = 100;
var POINT_8Y = 30;
var POINT_9X = 120;
var POINT_9Y = 10;

var renderCloud = function (ctx, point1x, point1y, point2x, point2y, point3x, point3y, point4x, point4y, point5x, point5y, point6x, point6y, point7x, point7y, point8x, point8y, point9x, point9y, color, strokeColor) {
  ctx.fillStyle = color;
  ctx.strokeStyle = strokeColor;
  ctx.beginPath();
  ctx.moveTo(POINT_1X, POINT_1Y);
  ctx.lineTo(POINT_2X, POINT_2Y);
  ctx.lineTo(POINT_3X, POINT_3Y);
  ctx.lineTo(POINT_4X, POINT_4Y);
  ctx.lineTo(POINT_5X, POINT_5Y);
  ctx.lineTo(POINT_6X, POINT_6Y);
  ctx.lineTo(POINT_7X, POINT_7Y);
  ctx.lineTo(POINT_8X, POINT_8Y);
  ctx.lineTo(POINT_9X, POINT_9Y);
  ctx.stroke();
  ctx.fill();
};

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
  renderCloud(ctx, POINT_1X + GAP, POINT_1Y + GAP, POINT_2X + GAP, POINT_2Y + GAP, POINT_3X + GAP, POINT_3Y + GAP, POINT_4X + GAP, POINT_4Y + GAP, POINT_5X + GAP, POINT_5Y + GAP, POINT_6X + GAP, POINT_6Y + GAP, POINT_7X + GAP, POINT_7Y + GAP, POINT_8X + GAP, POINT_8Y + GAP, POINT_9X + GAP, POINT_9Y + GAP, 'rgba(0, 0, 0, 0.3)', 'transparent');
  renderCloud(ctx, POINT_1X, POINT_1Y, POINT_2X, POINT_2Y, POINT_3X, POINT_3Y, POINT_4X, POINT_4Y, POINT_5X, POINT_5Y, POINT_6X, POINT_6Y, POINT_7X, POINT_7Y, POINT_8X, POINT_8Y, POINT_9X, POINT_9Y, '#fff', 'transparent');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили! Список результатов:', 140, 30);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < players.length; i++) {
    var randomOpacity = Math.random().toFixed(2);
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 77, 255, ' + randomOpacity + ')';
    }
    ctx.fillRect(CLOUD_X + START_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_Y + RECT_GAP, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
  }
  for (i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + START_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_Y + TEXT_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + START_GAP + (TEXT_WIDTH + BAR_GAP) * i, CLOUD_Y + (CLOUD_HEIGHT - (barHeight * times[i]) / maxTime) - TIME_GAP);
  }
};
