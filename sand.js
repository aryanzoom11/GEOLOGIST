class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1,
      }
    this.body = Bodies.circle(x, y,radius, options);
  this.radius=radius
      
      World.add(world, this.body);
    }
  
  
    display(){
      var pos=this.body.position
      var angle=this.body.angle
      fill("yellow");
    ellipseMode(RADIUS)
   ellipse(pos.x, pos.y, this.radius);
      
     
    
  
    }
  
  };