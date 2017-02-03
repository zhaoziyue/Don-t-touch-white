var RectsGroup = (function (_super) {
    __extends(RectsGroup, _super);
    function RectsGroup() {
        _super.call(this);
        this.starttime = new egret.Timer(1000, 30);
        this.timeNum = 30;
        //创建一个数组存储所有的方块行
        this._grouprects = [];
        this.creatGroupsRect();
        this.drawTime();
        this.starttime.start();
        this.starttime.addEventListener(egret.TimerEvent.TIMER, this.ontime, this);
        this.starttime.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.gameover, this);
    }
    var d = __define,c=RectsGroup,p=c.prototype;
    p.creatGroupsRect = function () {
        for (var i = 0; i < tools.getRectRow(); i++) {
            this.group = new Group();
            this._grouprects.push(this.group);
            this.group.y = tools.getRectWidth() * i;
            this.addChild(this.group);
            this.group._currentRow = i;
            this.group.addEventListener("continue", this.continue, this);
            this.group.addEventListener("gameover", this.gameover, this);
        }
        if (this.group.y = 960) {
            var mask = new egret.Sprite();
            mask.graphics.beginFill(0xffffff, 1);
            mask.graphics.drawRect(0, 0, 640, 960);
            mask.graphics.endFill();
            this.addChild(mask);
            this.mask = mask;
        }
    };
    p.continue = function () {
        for (var i = 0; i < tools.getRectRow(); i++) {
            this._grouprects[i].Move();
        }
        tools.score++;
    };
    p.gameover = function () {
        // console.log(this.starttime);
        this.starttime.stop();
        this.starttime.removeEventListener(egret.TimerEvent.TIMER, this.ontime, this);
        this.starttime.removeEventListener(egret.TimerEvent.TIMER_COMPLETE, this.gameover, this);
        for (var j = 0; j < this._grouprects.length; j++) {
            this._grouprects[j].touchEnabled = false;
            this._grouprects[j].removeEventListener("continue", this.continue, this);
            this._grouprects[j].removeEventListener("gameover", this.gameover, this);
            for (var i = 0; i < this._grouprects[j].$children.length; i++) {
                this._grouprects[j].$children[i].touchEnabled = false;
            }
        }
        var game = new Gameover();
        this.addChild(game);
    };
    p.drawTime = function () {
        this.txt = new egret.TextField();
        this.txt.width = 300;
        this.txt.height = 100;
        this.txt.x = 200;
        this.txt.y = 200;
        this.txt.textColor = 0xff0000;
        this.txt.textAlign = egret.HorizontalAlign.CENTER;
        this.txt.text = "00:" + this.timeNum;
        this.addChild(this.txt);
    };
    p.ontime = function () {
        this.timeNum--;
        if (this.timeNum >= 10) {
            this.txt.text = "00:" + this.timeNum;
            this.addChild(this.txt);
        }
        else {
            this.txt.text = "00:0" + this.timeNum;
            this.addChild(this.txt);
        }
        if (this.timeNum <= 0) {
            this.starttime.stop();
        }
    };
    return RectsGroup;
}(egret.Sprite));
egret.registerClass(RectsGroup,'RectsGroup');
//# sourceMappingURL=RectGroup.js.map