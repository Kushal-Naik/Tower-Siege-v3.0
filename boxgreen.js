class Box2 extends BaseClass
{
    constructor(x,y,width,height)
    {
        super(x,y,width,height);
        this.image = loadImage("greenBlock.PNG");
        this.visibility = 255;
    }

    display()
    {
        if(this.body.speed > 3){
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility -5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            pop();
        }
        else{
            imageMode(CENTER);
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
            super.display();
        }

        // fill(60, 242, 163);
        // super.display();
    }
    score()
    {
        if(this.visibility<0 && this.visibility>-105){
            score++;
        }
    }
}