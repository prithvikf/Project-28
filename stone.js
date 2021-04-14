class Stone {
    constructor(x, y, radius) {
        var options = {

            restitution: 0.8
        }


        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("Plucking+mangoes/Plucking mangoes/stone.png")
        World.add(world, this.body);

    }
    display() {

        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.radius,this.radius);
        pop();

    }


}
