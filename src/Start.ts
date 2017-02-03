class Start extends eui.Component{
	public constructor() {
		super();
		this.skinName="resource/eui_skins/startgame.exml";
        this.draw();
	}
    private draw(){
        var button:egret.Bitmap = Main.createBitmapByName("2_png");
        button.x = 230;
        button.y = 700;
        this.addChild(button);
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startgame,this);
    }
    private startgame(){
        var start:RectsGroup = new RectsGroup();
        this.parent.addChild(start);
        this.parent.removeChild(this);
    }
}