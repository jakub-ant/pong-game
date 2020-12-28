"use strict"
const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
let scale = 10;
const playerColor = '#fff'


const game = new Game(canvas, ctx, scale, playerColor)

