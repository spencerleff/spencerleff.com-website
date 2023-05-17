/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": ["#a89fe9", "#a89fe9", "#a89fe9", "#a89fe9", "#e9a9e7", "#e9a9e7", "#e9a9e7", "#e9a9e7", "#7158e2", "#7158e2", "#f78fb3", "#a89fe9", "#a89fe9", "#a89fe9", "#a89fe9", "#e9a9e7", "#e9a9e7", "#e9a9e7", "#e9a9e7", "#7158e2", "#7158e2", "#f78fb3", "#a89fe9", "#a89fe9", "#a89fe9", "#a89fe9", "#e9a9e7", "#e9a9e7", "#e9a9e7", "#e9a9e7", "#7158e2", "#7158e2", "#f78fb3", "#63cdda", "#574b90"]
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 4
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.15,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.05,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 110,
        "color": "#ffffff",
        "opacity": 0.1,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4.5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 280,
          "size": 3.8,
          "duration": 0.2,
          "opacity": 0.3,
          "speed": 0.35
        },
        "repulse": {
          "distance": 110,
          "speed": 400,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 30
        },
        "remove": {
          "particles_nb": 50
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#000000",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
