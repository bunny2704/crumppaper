class dustbin


{ constructor(x,y,width,height)
    { var options = { isStatic:true,
        
     
       } 
      // this.image=loadImage("dustbingreen.png");
  
  
  
  
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
     World.add(world, this.body); }
  
    display(){ var pose =this.body.position;
            
  
  
      push();
  
      translate(pose.x, pose.y) ;
  
 
 
  
  fill("white");
  
  
  
  rect(0, 0,this.width,this.height);
  pop();
    }
}