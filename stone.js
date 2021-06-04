class stone{
constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution: 0.01,
            friction:1,
            density: 1.2		
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image = loadImage("images/stone.png");

        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
 		World.add(world, this.body);

	}
	display()
	{
			var stonePos=this.body.position;		
			push()
			translate(stonePos.x, stonePos.y);
			ellipseMode(RADIUS)
			imageMode(CENTER)
            fill(128,128,128)
			image(this.image,0,0,this.r*2,this.r*2);
			pop()
			
	}

}
