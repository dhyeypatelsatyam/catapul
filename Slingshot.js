class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.string1 = loadImage("sprites/sling1.png")
        this.string2 = loadImage("sprites/sling2.png")
        this.string3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.string1,200,30)
        image(this.string2,170,30)
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,22,8);
            
            image(this.string3,pointA.x-30,pointA.y-10,15,)
        }
        line(pointA.x+20, pointA.y, pointB.x-30, pointB.y+3);
            line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3);
    }
    
}