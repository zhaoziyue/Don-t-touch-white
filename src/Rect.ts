class Rect extends egret.Sprite {
	public constructor() {
		super();
		this.draw();
		
	}
	//绘制一个方块
	private colors: Array<number> = [0x000000, 0xffffff, 0xff0000, 0x0000ff];
	private currentcolors: number = 1;
	private draw() {
		this.width = tools.getRectWidth();
		this.height = tools.getRectWidth();
		this.graphics.lineStyle(1);
		this.graphics.beginFill(this.colors[this.currentcolors]);
		this.graphics.drawRect(0, 0, tools.getRectWidth(), tools.getRectWidth());
		this.graphics.endFill();
	}
	//将方块默认设置为不可点击的   即白色的
	public _type: string = RectType.UNCLICK;
	public get type(): string {
		return this._type;
	}
	public set type(val: string) {
		if (val != this._type) {
			this._type = val;
			if (this._type == RectType.UNCLICK) {
				this.currentcolors = 1;
			} else {
				this.currentcolors = 0;
			}
			this.draw();
		}
	}
	//为每一个方块添加点击事件
	public onRectClick(){
		if (this._type == RectType.UNCLICK) {
			this.currentcolors = 2;
		} else {
			this.currentcolors = 3;
		}
		this.draw();
	}
}