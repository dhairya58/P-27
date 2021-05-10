class Chain{
	constructor(body1,body2,offsetX )
	{
		this.offsetX=offsetX
		//this.offsetY=offsetY
		var options={
			bodyA:body1,//bob
			bodyB:body2,//roof
			pointB:{x:this.offsetX, y:0} //roof+xPosition
		}
		//console.log(options);
		this.chain=Matter.Constraint.create(options)
		World.add(world,this.chain)
	}

	display()
	{
		var pointA=this.chain.bodyA.position;
		var pointB=this.chain.bodyB.position;
		fill("red")
		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
	}

}