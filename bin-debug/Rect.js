var Rect = (function (_super) {
    __extends(Rect, _super);
    function Rect() {
        _super.call(this);
        //绘制一个方块
        this.colors = [0x000000, 0xffffff, 0xff0000, 0x0000ff];
        this.currentcolors = 1;
        //将方块默认设置为不可点击的   即白色的
        this._type = RectType.UNCLICK;
        this.draw();
    }
    var d = __define,c=Rect,p=c.prototype;
    p.draw = function () {
        this.width = tools.getRectWidth();
        this.height = tools.getRectWidth();
        this.graphics.lineStyle(1);
        this.graphics.beginFill(this.colors[this.currentcolors]);
        this.graphics.drawRect(0, 0, tools.getRectWidth(), tools.getRectWidth());
        this.graphics.endFill();
    };
    d(p, "type"
        ,function () {
            return this._type;
        }
        ,function (val) {
            if (val != this._type) {
                this._type = val;
                if (this._type == RectType.UNCLICK) {
                    this.currentcolors = 1;
                }
                else {
                    this.currentcolors = 0;
                }
                this.draw();
            }
        }
    );
    //为每一个方块添加点击事件
    p.onRectClick = function () {
        if (this._type == RectType.UNCLICK) {
            this.currentcolors = 2;
        }
        else {
            this.currentcolors = 3;
        }
        this.draw();
    };
    return Rect;
}(egret.Sprite));
egret.registerClass(Rect,'Rect');
//# sourceMappingURL=Rect.js.map