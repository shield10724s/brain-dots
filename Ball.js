class Ball{
    constructor(x,y){
        var options={
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 0.4
        }
        this.image = loadImage("ball.png");
        this.body = Bodies.rectangle(x, y,this.width,this.height,options);
        this.width=50;
        this.height = 50;
        World.add(world, this.body);
    }

    display(){
        var paper_pos = this.body.position;
        push();
        translate(paper_pos.x, paper_pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}