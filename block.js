class Block extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
      if(this.body.speed < 7){
       super.display();
      }
      else{
        World.remove(world, this.body);
      } 
    }
  };
  