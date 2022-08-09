class Barco {

    constructor(x, y) {
        this.diametro = 170;
        this.speed = 0.05;
        this.animacao = barcoAnimacao;
        this.body = Bodies.circle(x, y, this.diametro/2 - 5);
        this.imagem = loadImage("./assets/boat.png");
        World.add(world, this.body);
    }

    remover(n){
        setTimeout(()=>{
            World.remove(world, barcos[n].body);
            barcos.splice(n);
        },1500)

    }
    animate() {
        this.speed += 0.05;
    }


    exibir() {
        var angle = this.body.angle;
        var pos = this.body.position;
        var indice = floor(this.speed % this.animacao.length);

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animacao[indice], 0, 0, this.diametro, this.diametro)
        pop();
    }
}