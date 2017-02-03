var tools = (function () {
    function tools() {
    }
    var d = __define,c=tools,p=c.prototype;
    tools.getRectWidth = function () {
        if (this.rectwidth == 0) {
            return this.rectwidth = 640 / 4;
        }
        else {
            return this.rectwidth;
        }
    };
    tools.getRectRow = function () {
        if (this._rectRow == 0) {
            this._rectRow = 1120 / 160;
        }
        return this._rectRow;
    };
    //获取舞台的高度
    tools.getStageHeight = function () {
        // return egret.MainContext.instance.stage.stageHeight;
        return 1120;
    };
    //获取舞台的宽度
    tools.getStageWidth = function () {
        // return egret.MainContext.instance.stage.stageWidth;
        return 640;
    };
    //设置一个方块的宽度和高度
    tools.rectwidth = 0;
    //设置分数
    tools.score = 0;
    //获取一共有多少行
    tools._rectRow = 0;
    return tools;
}());
egret.registerClass(tools,'tools');
//# sourceMappingURL=Tools.js.map