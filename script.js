document.addEventListener("DOMContentLoaded", () => {
  let e = ["a Programmer", "an Artist", "a Freelancer", "a Data Analyst"],
    t = document.getElementById("role");
  document.getElementById("profession");
  let n = 0;
  function a(e, t, n) {
    let a = 0,
      o = setInterval(() => {
        (t.textContent += e.charAt(a)),
          ++a > e.length && (clearInterval(o), setTimeout(n, 2e3));
      }, 100);
  }
  function o(e, t) {
    let n = e.textContent,
      a = n.length,
      o = setInterval(() => {
        (e.textContent = n.substring(0, a)), --a < 0 && (clearInterval(o), t());
      }, 50);
  }
  function l() {
    o(t, () => {
      a(e[(n = (n + 1) % e.length)], t, l);
    });
  }
  a(e[n], t, l),
    tsParticles.load("tsparticles", {
      background: { color: "#121212" },
      particles: {
        number: { value: 80, density: { enable: !0, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.5,
          anim: { enable: !0, speed: 1, opacity_min: 0.1, sync: !1 }
        },
        size: {
          value: 3,
          anim: { enable: !0, speed: 4, size_min: 0.1, sync: !1 }
        },
        move: {
          enable: !0,
          speed: 2,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 600, rotateY: 1200 }
        },
        line_linked: {
          enable: !0,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        interactivity: {
          events: {
            onhover: { enable: !0, mode: "repulse" },
            onclick: { enable: !0, mode: "push" }
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 }
          }
        }
      },
      retina_detect: !0
    });
});
