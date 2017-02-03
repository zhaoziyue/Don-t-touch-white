class tools {
    public constructor() {
    }
    //设置一个方块的宽度和高度
    private static rectwidth: number = 0;
    public static getRectWidth(): number {
        if (this.rectwidth == 0) {
			return this.rectwidth = 640 / 4;
        } else {
			return this.rectwidth;
		}
    }
	//设置分数
    public static score: number = 0;

    //获取一共有多少行
    private static _rectRow: number = 0;
    public static getRectRow(): number {
        if (this._rectRow == 0) {
            this._rectRow = 1120 / 160 ;
        }
        return this._rectRow;
    }
    //获取舞台的高度
    public static getStageHeight(): number {
        // return egret.MainContext.instance.stage.stageHeight;
		return 1120;
    }
    //获取舞台的宽度
    public static getStageWidth(): number {
        // return egret.MainContext.instance.stage.stageWidth;
		return 640;
    }
}