class Constraints{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB=pointB;
        this.constraints = Constraint.create(options);
        World.add(world, this.constraints);
    }
    fly(){
        this.constraints.bodyA=null;
    }
   attach(){
    var pointA = this.constraints.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
   }
    display(){
     if(this.constraints.bodyA){
        var pointA = this.constraints.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
     }
    }
    
}