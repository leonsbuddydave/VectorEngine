/// <reference path="IRenderer"/>
/// <reference path="CanvasRenderer"/>
/// <reference path="SceneManager"/>

class Game {
	
	name: string;
	game: Game;

	renderer: IRenderer;
	sceneManager: SceneManager;

	/**
	 * @param {HTMLElement} The container to put the game in. The game owns it now.
	 * @param {number} The scaling ratio between the game world and the renderer.
	 */
	constructor(private container: HTMLElement,
							worldUnitToPixelRatio: number) {

		this.renderer = new CanvasRenderer(container);
		this.sceneManager = new SceneManager();

	}

	/**
	 * Starts the game.
	 */
	start() {

	}
}
