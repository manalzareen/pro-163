AFRAME.registerComponent("splashes", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var splash = document.createElement("a-entity");

        splash.setAttribute("geometry", {
          primitive: "octahedron",
          radius: 1,
        });

        splash.setAttribute("material", "color", "white");

        var cam = document.querySelector("#camera");

        pos = cam.getAttribute("position");

        splash.setAttribute("position", {
          x: pos.x,
          y: pos.y,
          z: pos.z,
        });

        var camera = document.querySelector("#camera").object3D;

        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

      
      splash.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");

      
        splash.setAttribute("static-body", {
          shape: "sphere",
          mass: "0",
        });

    

        scene.appendChild(splash);

        //shooting sound
        this.shootSound();
      }
    });
  },
  
  shootSound: function () {
    var entity = document.querySelector("#sound1");
    entity.components.sound.playSound();
  },
});

