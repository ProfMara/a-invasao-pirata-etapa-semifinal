class BalaCanhao {
    constructor(x, y) {
        var parado = {
            isStatic: true
        };
        this.diametro = 30;
        this.body = Bodies.circle(x, y, this.diametro / 2, parado);
        this.image = loadImage("./assets/cannonball.png");
        this.trajetoria = [];
        World.add(world, this.body);
    }

    remover(n){
        setTimeout(()=>{
            World.remove(world, balas[n].body);
            delete balas[n];
        },1500)

    }

    atirar() {
        var novoAngulo = canhao.angle - 28;
        novoAngulo *= (3.14 / 180)
        var v = p5.Vector.fromAngle(novoAngulo);
        v.mult(90 / 3.14);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {x: v.x,y: v.y});
    }

    display() {
        var pos = this.body.position;

        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.diametro, this.diametro);
        pop();

        if (this.body.velocity.x > 0 && pos.x > 10) {
            var posicao = [pos.x, pos.y];
            this.trajetoria.push(posicao);
        }

        for (var i = 0; i < this.trajetoria.length; i++) {
            image(this.image, this.trajetoria[i][0], this.trajetoria[i][1], 5, 5);
        }
    }
}