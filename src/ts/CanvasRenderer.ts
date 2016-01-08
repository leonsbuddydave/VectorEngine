class CanvasRenderer implements IRenderer {

	private canvasElement: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private drawContext: DrawContext;

	constructor(private container: HTMLElement) {
		this.canvasElement = this.getNewCanvas();
		this.container.appendChild(this.canvasElement);
		this.ctx = this.canvasElement.getContext('2d');

		this.fitCanvasToContainer();

		this.drawContext = new DrawContext();

		window.addEventListener('resize', this.handleResize.bind(this));
	}

	private handleResize(event: Event): void {
		this.fitCanvasToContainer();
	}

	private fitCanvasToContainer(): void {
		this.canvasElement.width = this.container.offsetWidth;
		this.canvasElement.height = this.container.offsetHeight;
	}

	private getNewCanvas(): HTMLCanvasElement {
		return document.createElement("canvas");
	}

	render(): void {
		console.error('Not implemented.');
	}

	getDrawContext(): DrawContext {
		return this.drawContext;
	}
}