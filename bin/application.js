var WorldEntity = (function () {
    function WorldEntity() {
        this.children = [];
    }
    WorldEntity.prototype.update = function (deltaTime) {
        this.children.forEach(function (actor, actorIndex) {
            actor.update(deltaTime);
        });
    };
    WorldEntity.prototype.draw = function (drawContext) {
        console.error("Not implemented.");
    };
    return WorldEntity;
})();
/// <reference path="WorldEntity"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Actor = (function (_super) {
    __extends(Actor, _super);
    function Actor() {
        _super.call(this);
        this.layer = 0;
    }
    return Actor;
})(WorldEntity);
var CanvasRenderer = (function () {
    function CanvasRenderer(container) {
        this.container = container;
        this.canvasElement = this.getNewCanvas();
        this.container.appendChild(this.canvasElement);
        this.ctx = this.canvasElement.getContext('2d');
        this.fitCanvasToContainer();
        this.drawContext = new DrawContext();
        window.addEventListener('resize', this.handleResize.bind(this));
    }
    CanvasRenderer.prototype.handleResize = function (event) {
        this.fitCanvasToContainer();
    };
    CanvasRenderer.prototype.fitCanvasToContainer = function () {
        this.canvasElement.width = this.container.offsetWidth;
        this.canvasElement.height = this.container.offsetHeight;
    };
    CanvasRenderer.prototype.getNewCanvas = function () {
        return document.createElement("canvas");
    };
    CanvasRenderer.prototype.render = function () {
        console.error('Not implemented.');
    };
    CanvasRenderer.prototype.getDrawContext = function () {
        return this.drawContext;
    };
    return CanvasRenderer;
})();
/**
 * Public interface for all actions that
 * ultimately affect rendering.
 */
var DrawContext = (function () {
    function DrawContext() {
    }
    return DrawContext;
})();
var SceneManager = (function () {
    function SceneManager() {
    }
    SceneManager.prototype.switchScene = function (scene) {
    };
    return SceneManager;
})();
/// <reference path="IRenderer"/>
/// <reference path="CanvasRenderer"/>
/// <reference path="SceneManager"/>
var Game = (function () {
    /**
     * @param {HTMLElement} The container to put the game in. The game owns it now.
     * @param {number} The scaling ratio between the game world and the renderer.
     */
    function Game(container, worldUnitToPixelRatio) {
        this.container = container;
        this.renderer = new CanvasRenderer(container);
        this.sceneManager = new SceneManager();
    }
    /**
     * Starts the game.
     */
    Game.prototype.start = function () {
    };
    return Game;
})();
/// <reference path="Game" />
// The dev tools should open by default
require('nw.gui').Window.get().showDevTools();
// Main launch code
window.addEventListener('load', function () {
    var game = new Game(document.body, 1);
    var we = new WorldEntity();
    console.log(we);
});
/// <reference path="WorldEntity"/>
var Scene = (function (_super) {
    __extends(Scene, _super);
    function Scene() {
        _super.call(this);
    }
    Scene.prototype.update = function (deltaTime) {
    };
    return Scene;
})(WorldEntity);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldvcmxkRW50aXR5LnRzIiwiQWN0b3IudHMiLCJDYW52YXNSZW5kZXJlci50cyIsIkRyYXdDb250ZXh0LnRzIiwiU2NlbmVNYW5hZ2VyLnRzIiwiR2FtZS50cyIsIm1haW4udHMiLCJTY2VuZS50cyJdLCJuYW1lcyI6WyJXb3JsZEVudGl0eSIsIldvcmxkRW50aXR5LmNvbnN0cnVjdG9yIiwiV29ybGRFbnRpdHkudXBkYXRlIiwiV29ybGRFbnRpdHkuZHJhdyIsIkFjdG9yIiwiQWN0b3IuY29uc3RydWN0b3IiLCJDYW52YXNSZW5kZXJlciIsIkNhbnZhc1JlbmRlcmVyLmNvbnN0cnVjdG9yIiwiQ2FudmFzUmVuZGVyZXIuaGFuZGxlUmVzaXplIiwiQ2FudmFzUmVuZGVyZXIuZml0Q2FudmFzVG9Db250YWluZXIiLCJDYW52YXNSZW5kZXJlci5nZXROZXdDYW52YXMiLCJDYW52YXNSZW5kZXJlci5yZW5kZXIiLCJDYW52YXNSZW5kZXJlci5nZXREcmF3Q29udGV4dCIsIkRyYXdDb250ZXh0IiwiRHJhd0NvbnRleHQuY29uc3RydWN0b3IiLCJTY2VuZU1hbmFnZXIiLCJTY2VuZU1hbmFnZXIuY29uc3RydWN0b3IiLCJTY2VuZU1hbmFnZXIuc3dpdGNoU2NlbmUiLCJHYW1lIiwiR2FtZS5jb25zdHJ1Y3RvciIsIkdhbWUuc3RhcnQiLCJTY2VuZSIsIlNjZW5lLmNvbnN0cnVjdG9yIiwiU2NlbmUudXBkYXRlIl0sIm1hcHBpbmdzIjoiQUFBQTtJQUlDQTtRQUZBQyxhQUFRQSxHQUF1QkEsRUFBRUEsQ0FBQ0E7SUFJbENBLENBQUNBO0lBRURELDRCQUFNQSxHQUFOQSxVQUFPQSxTQUFpQkE7UUFDdkJFLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBLFVBQVNBLEtBQUtBLEVBQUVBLFVBQVVBO1lBQzlDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDQSxDQUFDQTtJQUNKQSxDQUFDQTtJQUVERiwwQkFB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O0lBQ0ZGLFdBQUNBO0FBQURBLENBMUJBLEFBMEJDQSxJQUFBO0FDOUJELDZCQUE2QjtBQU03Qix1Q0FBdUM7QUFDdkMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUU5QyxtQkFBbUI7QUFDbkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRDLElBQUksRUFBRSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7SUFFM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqQixDQUFDLENBQUMsQ0FBQztBQ2hCSCxtQ0FBbUM7QUFFbkM7SUFBb0JHLHlCQUFXQTtJQUU5QkE7UUFDQ0MsaUJBQU9BLENBQUNBO0lBQ1RBLENBQUNBO0lBRURELHNCQUFNQSxHQUFOQSxVQUFPQSxTQUFpQkE7SUFFeEJFLENBQUNBO0lBRUZGLFlBQUNBO0FBQURBLENBVkEsQUFVQ0EsRUFWbUIsV0FBVyxFQVU5QiIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFdvcmxkRW50aXR5IGltcGxlbWVudHMgSVVwZGF0YWJsZSwgSVJlbmRlcmFibGUge1xyXG5cclxuXHRjaGlsZHJlbjogQXJyYXk8V29ybGRFbnRpdHk+ID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHR9XHJcblxyXG5cdHVwZGF0ZShkZWx0YVRpbWU6IG51bWJlcikge1xyXG5cdFx0dGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGFjdG9yLCBhY3RvckluZGV4KSB7XHJcblx0XHRcdFx0YWN0b3IudXBkYXRlKGRlbHRhVGltZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRyYXcoZHJhd0NvbnRleHQ6IERyYXdDb250ZXh0KSB7XHJcblx0XHRjb25zb2xlLmVycm9yKFwiTm90IGltcGxlbWVudGVkLlwiKTtcclxuXHR9XHJcbn0iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiV29ybGRFbnRpdHlcIi8+XHJcblxyXG5jbGFzcyBBY3RvciBleHRlbmRzIFdvcmxkRW50aXR5IHtcclxuXHRcclxuXHRsYXllcjogbnVtYmVyID0gMDtcclxuXHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdH1cclxuXHJcbn0iLCJjbGFzcyBDYW52YXNSZW5kZXJlciBpbXBsZW1lbnRzIElSZW5kZXJlciB7XHJcblxyXG5cdHByaXZhdGUgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblx0cHJpdmF0ZSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHRwcml2YXRlIGRyYXdDb250ZXh0OiBEcmF3Q29udGV4dDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50KSB7XHJcblx0XHR0aGlzLmNhbnZhc0VsZW1lbnQgPSB0aGlzLmdldE5ld0NhbnZhcygpO1xyXG5cdFx0dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXNFbGVtZW50KTtcclxuXHRcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcblxyXG5cdFx0dGhpcy5maXRDYW52YXNUb0NvbnRhaW5lcigpO1xyXG5cclxuXHRcdHRoaXMuZHJhd0NvbnRleHQgPSBuZXcgRHJhd0NvbnRleHQoKTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUuYmluZCh0aGlzKSk7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhbmRsZVJlc2l6ZShldmVudDogRXZlbnQpOiB2b2lkIHtcclxuXHRcdHRoaXMuZml0Q2FudmFzVG9Db250YWluZXIoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZml0Q2FudmFzVG9Db250YWluZXIoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRXaWR0aDtcclxuXHRcdHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5vZmZzZXRIZWlnaHQ7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGdldE5ld0NhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpOiB2b2lkIHtcclxuXHRcdGNvbnNvbGUuZXJyb3IoJ05vdCBpbXBsZW1lbnRlZC4nKTtcclxuXHR9XHJcblxyXG5cdGdldERyYXdDb250ZXh0KCk6IERyYXdDb250ZXh0IHtcclxuXHRcdHJldHVybiB0aGlzLmRyYXdDb250ZXh0O1xyXG5cdH1cclxufSIsIi8qKlxyXG4gKiBQdWJsaWMgaW50ZXJmYWNlIGZvciBhbGwgYWN0aW9ucyB0aGF0XHJcbiAqIHVsdGltYXRlbHkgYWZmZWN0IHJlbmRlcmluZy5cclxuICovXHJcbmNsYXNzIERyYXdDb250ZXh0IHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHJcblx0fVxyXG59IiwiY2xhc3MgU2NlbmVNYW5hZ2VyIHtcclxuXHJcblx0Y3VycmVudFNjZW5lOiBTY2VuZTtcclxuXHJcblx0c3dpdGNoU2NlbmUoc2NlbmU6IFNjZW5lKSB7XHJcblxyXG5cdH1cclxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJUmVuZGVyZXJcIi8+XHJcbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJDYW52YXNSZW5kZXJlclwiLz5cclxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIlNjZW5lTWFuYWdlclwiLz5cclxuXHJcbmNsYXNzIEdhbWUge1xyXG5cdFxyXG5cdG5hbWU6IHN0cmluZztcclxuXHRnYW1lOiBHYW1lO1xyXG5cclxuXHRyZW5kZXJlcjogSVJlbmRlcmVyO1xyXG5cdHNjZW5lTWFuYWdlcjogU2NlbmVNYW5hZ2VyO1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBUaGUgY29udGFpbmVyIHRvIHB1dCB0aGUgZ2FtZSBpbi4gVGhlIGdhbWUgb3ducyBpdCBub3cuXHJcblx0ICogQHBhcmFtIHtudW1iZXJ9IFRoZSBzY2FsaW5nIHJhdGlvIGJldHdlZW4gdGhlIGdhbWUgd29ybGQgYW5kIHRoZSByZW5kZXJlci5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXHJcblx0XHRcdFx0XHRcdFx0d29ybGRVbml0VG9QaXhlbFJhdGlvOiBudW1iZXIpIHtcclxuXHJcblx0XHR0aGlzLnJlbmRlcmVyID0gbmV3IENhbnZhc1JlbmRlcmVyKGNvbnRhaW5lcik7XHJcblx0XHR0aGlzLnNjZW5lTWFuYWdlciA9IG5ldyBTY2VuZU1hbmFnZXIoKTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTdGFydHMgdGhlIGdhbWUuXHJcblx0ICovXHJcblx0c3RhcnQoKSB7XHJcblxyXG5cdH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiR2FtZVwiIC8+XHJcblxyXG4vLyBEZWNsYXJlIEdsb2JhbHMgaGVyZVxyXG5cclxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xyXG5cclxuLy8gVGhlIGRldiB0b29scyBzaG91bGQgb3BlbiBieSBkZWZhdWx0XHJcbnJlcXVpcmUoJ253Lmd1aScpLldpbmRvdy5nZXQoKS5zaG93RGV2VG9vbHMoKTtcclxuXHJcbi8vIE1haW4gbGF1bmNoIGNvZGVcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcclxuXHR2YXIgZ2FtZSA9IG5ldyBHYW1lKGRvY3VtZW50LmJvZHksIDEpO1xyXG5cclxuXHR2YXIgd2UgPSBuZXcgV29ybGRFbnRpdHkoKTtcclxuXHJcblx0Y29uc29sZS5sb2cod2UpO1xyXG59KTsiLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiV29ybGRFbnRpdHlcIi8+XHJcblxyXG5jbGFzcyBTY2VuZSBleHRlbmRzIFdvcmxkRW50aXR5IHtcclxuXHRcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG5cclxuXHR1cGRhdGUoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuXHRcdFxyXG5cdH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
