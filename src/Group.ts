class Group extends egret.Sprite {
	public constructor() {
		super();
		this.creatRectGroup();
		this.creatBlackRect();
	}
	//将方块放入数组中，创建一行方块
	public _rect: Array<Rect> = [];
	private rects: Rect;
	public creatRectGroup() {
		for (var i: number = 0; i < 4; i++) {
			this.rects = new Rect();
			this._rect.push(this.rects);
			this.rects.x = this.rects.width * i;
			this.addChild(this.rects);
			this.rects.touchEnabled = true;
			//为方块添加事件监听
			this.rects.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickRect, this);
		}
	}
	//创建随机显示的黑色方块
	private creatblackindex: number = 0;
	public creatBlackRect() {
		this.init();
		var n: number = Math.random();
		if (n >= 0 && n < 0.25) {
			this.creatblackindex = 0;
		} else
			if (n >= 0.25 && n < 0.5) {
				this.creatblackindex = 1;
			} else
				if (n >= 0.5 && n < 0.75) {
					this.creatblackindex = 2;
				} else
					if (n >= 0.75 && n <= 1) {
						this.creatblackindex = 3;
					}
		this._rect[this.creatblackindex].type = RectType.CLICK;
	}
	//当前的行数
	public _currentRow: number = 0;
	//给方块组添加点击事件
	private onClickRect(evt: egret.TouchEvent): void {
		evt.currentTarget.onRectClick();
		if (evt.currentTarget.type == RectType.CLICK && this._currentRow == (tools.getRectRow()) - 2) {
			this.dispatchEvent(new egret.Event("continue"));
		} else {
			this.dispatchEvent(new egret.Event("gameover"));
		}
	}
	//将超过屏幕的方块颜色初始化
	public init() {
		for (var i = 0; i < 4; i++) {
			this._rect[i].type = RectType.UNCLICK;
		}
	}
	//方块移动
	public Move() {
		this._currentRow++;
		//判断当前的行数是否是总行数的最后一行
		if (this._currentRow == tools.getRectRow()) {
			this._currentRow = 0;
			this.creatBlackRect();
		}
		this.y = this._currentRow * tools.getRectWidth();
	}
}