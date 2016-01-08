class WorldEntity implements IUpdatable, IRenderable {

	children: Array<WorldEntity> = [];

	constructor() {

	}

	update(deltaTime: number) {
		this.children.forEach(function(actor, actorIndex) {
				actor.update(deltaTime);
		});
	}

	draw(drawContext: DrawContext) {
		console.error("Not implemented.");
	}
}