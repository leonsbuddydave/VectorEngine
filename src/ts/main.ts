/// <reference path="Game" />

// Declare Globals here

declare var require: any;

// The dev tools should open by default
require('nw.gui').Window.get().showDevTools();

// Main launch code
window.addEventListener('load', function() {
	var game = new Game(document.body, 1);

	var we = new WorldEntity();

	console.log(we);
});