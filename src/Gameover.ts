class Gameover extends egret.Sprite {
	public constructor() {
		super();
		this.gameoverpage();
		this.Retrybtn();
	}
	private btn: egret.Sprite;
	private txt: egret.TextField;
	private showbtnback: egret.Sprite;
	//结束界面
	private gameoverpage() {
		this.graphics.beginFill(0, 0.5);
		this.graphics.drawRect(0, 0, tools.getStageWidth(), tools.getStageHeight());
		this.graphics.endFill();
		this.showbtnback = new egret.Sprite();
		this.showbtnback.graphics.beginFill(0xffffff, 1);
		this.showbtnback.graphics.drawRect(0, 0, 320, 160);
		this.showbtnback.graphics.endFill();
		this.showbtnback.x = 160;
		this.showbtnback.y = 280;
		this.addChild(this.showbtnback);

		this.txt = new egret.TextField();
		this.txt.background = false;
		this.txt.textColor = 0x112233;
		this.txt.fontFamily = "楷体";
		this.txt.size = 22;
		this.txt.textAlign = "center";
		this.txt.width = 640;
		this.txt.height = 32;
		this.txt.text = "您的成绩是：" + tools.score;
		this.txt.y = 300;
		this.addChild(this.txt);

	}
	//设置重新开始按钮
	private Retrybtn() {
		//创建按钮
		this.btn = new egret.Sprite();
		this.btn.graphics.beginFill(0x334455, 1);
		this.btn.graphics.drawRect(0, 0, 150, 60);
		this.btn.graphics.endFill();
		//创建按钮文字
		var btntxt = new egret.TextField();
		btntxt.background = false;
		btntxt.fontFamily = "楷体";
		btntxt.textColor = 0xffffff;
		btntxt.size = 26;
		btntxt.textAlign = "center";
		btntxt.width = 150;
		btntxt.height = 25;
		btntxt.text = "重新开始";
		btntxt.y = (this.btn.height - btntxt.height) / 2;
		this.btn.addChild(btntxt);
		this.addChild(this.btn);
		this.btn.touchEnabled = true;
		this.btn.x = 240;
		this.btn.y = 350;
		this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startgame, this);
	}
	//重新开始，移除游戏结束界面，调用开始游戏的方法
	// private retry:Start = new Start();
	private startgame():void {
		var start:Start = new Start();
		this.parent.addChild(start);
		this.parent.removeChild(this);
		this.touchEnabled = false;
		tools.score = 0;
		// RectsGroup.
	}
}