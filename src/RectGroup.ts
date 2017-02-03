class RectsGroup extends egret.Sprite {
	private starttime: egret.Timer = new egret.Timer(1000, 30);
	private timeNum: number = 30;
	public constructor() {
		super();
		this.creatGroupsRect();
		this.drawTime();
		this.starttime.start();
		this.starttime.addEventListener(egret.TimerEvent.TIMER, this.ontime, this);
		this.starttime.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.gameover, this);
	}
	//创建一个数组存储所有的方块行
	public _grouprects: Array<Group> = [];
	private group: Group;
	private rect:Rect;
	private creatGroupsRect() {
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
			var mask: egret.Shape = new egret.Sprite();
			mask.graphics.beginFill(0xffffff,1);
			mask.graphics.drawRect(0,0, 640, 960);
			mask.graphics.endFill();
			this.addChild(mask);
			this.mask = mask;
		}
	}
	public continue() {
		for (var i = 0; i < tools.getRectRow(); i++) {
			this._grouprects[i].Move();
		}
		tools.score++;
	}
	public gameover() {
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
		var game: Gameover = new Gameover();
		this.addChild(game);
	}
	//创建显示的时间
	private txt: egret.TextField;
	private drawTime() {
		this.txt = new egret.TextField();
		this.txt.width = 300;
		this.txt.height = 100;
		this.txt.x = 200;
		this.txt.y = 200;
		this.txt.textColor = 0xff0000;
		this.txt.textAlign = egret.HorizontalAlign.CENTER;
		this.txt.text = "00:" + this.timeNum;
		this.addChild(this.txt);
	}
	private ontime() {
		this.timeNum--;
		if (this.timeNum >= 10) {
			this.txt.text = "00:" + this.timeNum;
			this.addChild(this.txt);
		} else {
			this.txt.text = "00:0" + this.timeNum;
			this.addChild(this.txt);
		}
		if (this.timeNum <= 0) {
			this.starttime.stop();
		}
	}


}