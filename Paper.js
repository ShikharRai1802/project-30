class Paper{
    constructor(x,y,r){
    var options = {
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    
    this.image = loadImage("TowerSiege-1-main/TowerSiege-1-main/polygon.png")
    this.body = Bodies.circle(x,y,r,options);
    World.add(world,this.body);
    
    this.radius = r;
    
    }
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
    }