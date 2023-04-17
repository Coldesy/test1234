const particlesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500,
      },
    },
    color: {
      value: ["#ff8dcc", "#ff8dcc", "#ff8dcc", "#ff8dcc", "#ff8dcc"],
    },
    shape: {
      type: ["circle"],
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
    },
    "blur": 50, 
    "color": {
      "value": "#ff8dcc"
    },
    opacity: {
      value: 0.7,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 1,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 3000,
        rotateY: 3000,
      },
      rotate: {
        random: true,
        direction: "random",
        animation: {
          enable: true,
          speed: 10,
          sync: false
        }
      }
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 150,
        size: 10,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};


const firefliesConfig = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 500,
      },
    },
    color: {
      value: ["#ff8dcc", "#ff8dcc", "#ff8dcc", "#ff8dcc", "#ff8dcc"],
    },
    shape: {
      type: ["star"],
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 6,
      },
    },
    "blur": 500, 
    "color": {
      "value": "#ff8dcc"
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: true,
        speed: 100,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 3000,
        rotateY: 3000,
      },
      rotate: {
        random: true,
        direction: "random",
        animation: {
          enable: true,
          speed: 10,
          sync: false
        }
      }
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "bubble",
      },
      onclick: {
        enable: false,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 150,
        size: 10,
        duration: 2,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

const combinedConfig = {
  ...particlesConfig,
  particles: {
    ...particlesConfig.particles,
    number: {
      value: particlesConfig.particles.number.value + firefliesConfig.particles.number.value,
      density: {
        enable: particlesConfig.particles.number.density.enable && firefliesConfig.particles.number.density.enable,
        value_area: particlesConfig.particles.number.density.value_area + firefliesConfig.particles.number.density.value_area,
      },
    },
    shape: {
      type: [...particlesConfig.particles.shape.type, ...firefliesConfig.particles.shape.type],
    },
    opacity: {
      ...particlesConfig.particles.opacity,
      value: particlesConfig.particles.opacity.value * firefliesConfig.particles.opacity.value,
    },
    size: {
      ...particlesConfig.particles.size,
      value: particlesConfig.particles.size.value * firefliesConfig.particles.size.value,
      anim: {
        ...particlesConfig.particles.size.anim,
        enable: particlesConfig.particles.size.anim.enable || firefliesConfig.particles.size.anim.enable,
      },
    },
    move: {
      ...particlesConfig.particles.move,
      speed: (particlesConfig.particles.move.speed + firefliesConfig.particles.move.speed) / 2,
    },
  },
};

const container = document.getElementById("particles-container");
if (container !== null) {
  particlesJS("particles-container", combinedConfig);
  container.onclick = function () {
    changeColors();
  };
}

