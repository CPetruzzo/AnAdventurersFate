
        const WIDTH = 643;
        const HEIGHT = 641;

        let app = new PIXI.Application({
            view: document.getElementById("pixi-canvas"),
            resolution: window.devicePixelRatio || 1,
            autoDensity: true,
            backgroundColor: 0x6495ed,
            width: WIDTH,
            height: HEIGHT,
            
        }
        );

        window.addEventListener("resize", () => {
            console.log("resized!");
            const scaleX = window.innerWidth / app.screen.width;
            const scaleY = window.innerHeight / app.screen.height;
            const scale = Math.min(scaleX, scaleY)

            const gameWidth = Math.round(app.screen.width * scale);
            const gameHeight = Math.round(app.screen.height * scale);

            const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
            const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);

            app.view.style.width = gameWidth + "px";
            app.view.style.height = gameHeight + "px";

            app.view.style.marginLeft = marginHorizontal + "px";
            app.view.style.marginRight = marginHorizontal + "px";

            app.view.style.marginTop = marginVertical + "px";
            app.view.style.marginBottom = marginVertical + "px";

        });
        window.dispatchEvent(new Event("resize"));
        
        document.body.appendChild(app.view);

        PIXI.sound.add('my-sound', "Earth.mp3");
        
        let sprite = PIXI.Sprite.from('spotify.png');
        app.stage.addChild(sprite);
        sprite.interactive = true;
        sprite.on("pointerdown", () => {
            PIXI.sound.play('my-sound');
        })
