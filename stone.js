class Stone {
    constructor(x, y, width,height) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':4,
          'mass':4
      }
    this.body = Bodies.rectangle(x, y,width, height,options);
  
      
      World.add(world, this.body);
    }
  
  
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        
        
        push ()
        translate(pos.x,pos.y)
        rotate(angle)
      rectMode(CENTER);
        fill("cyan");
        rect(0, 0, this.width, this.height);
       pop ()
     
    
  
    }
  
  };