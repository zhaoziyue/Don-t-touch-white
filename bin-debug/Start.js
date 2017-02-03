var Start = (function (_super) {
    __extends(Start, _super);
    function Start() {
        _super.call(this);
        this.skinName = "resource/eui_skins/startgame.exml";
        this.draw();
    }
    var d = __define,c=Start,p=c.prototype;
    p.draw = function () {
        var button = Main.createBitmapByName("2_png");
        button.x = 230;
        button.y = 700;
        this.addChild(button);
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startgame, this);
    };
    p.startgame = function () {
        var start = new RectsGroup();
        this.parent.addChild(start);
        this.parent.removeChild(this);
    };
    return Start;
}(eui.Component));
egret.registerClass(Start,'Start');
//# sourceMappingURL=Start.js.map