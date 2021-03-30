const config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        parent: '#game',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false,
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    },
};


let game = new Phaser.Game(config);


let player;
let stars;
let platforms;
let cursors;
let score = 0;
let scoreText;

function preload ()
{
    this.load.image('sky1', '/imgs/nightsky.png');
    this.load.image('sky2', '/imgs/nightsky.png');
    this.load.image('ground', '/imgs/platform.png');
    this.load.image('star', '/imgs/star.png');
    this.load.image('bomb', '/imgs/bomb.png');
    this.load.image('ship', '/imgs/ship02.png');
    this.load.image('rock', '/imgs/asteroid.png');
    
}

function create ()
{
    this.add.image(400,300, 'sky1');

    this.platforms = this.physics.add.staticGroup();

    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();

    player = this.physics.add.sprite(100, 450, 'ship');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, this.platforms);

    cursors = this.input.keyboard.createCursorKeys();

    stars = this.physics.add.group({
        key: 'star',
        repeat: 11,
        setXY: { x: 12, y: 0, stepX: 70 }
    });

    stars.children.iterate(function (child) {

        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

    });


    this.physics.add.collider(stars, this.platforms);

    this.physics.add.overlap(player, stars, collectStar, null, this);

    scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });

    rocks = this.physics.add.group();

    this.physics.add.collider(rocks, this.platforms);

    this.physics.add.collider(player, rocks, hitBomb, null, this);

    console.log(game.canvas);
}

function update ()
{

    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
    }
    else
    {
        player.setVelocityX(0);
    }

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-330);
    }

}


function collectStar (player, star)
{
    star.disableBody(true, true);

    score += 10;
    scoreText.setText('score: ' + score);

    if (stars.countActive(true) === 0)
    {
        stars.children.iterate(function (child) {

            child.enableBody(true, child.x, 0, true, true);

        });

        var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

        var rock = rocks.create(x, 16, 'rock');
        rock.setBounce(1);
        rock.setCollideWorldBounds(true);
        rock.setVelocity(Phaser.Math.Between(-200, 200), 20);

    }

}

function hitBomb (player, bomb)
{
    this.physics.pause();

    player.setTint(0xff0000);

    gameOver = true;
}
