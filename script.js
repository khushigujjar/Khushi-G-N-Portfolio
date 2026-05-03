// =======================
// SCROLL PROGRESS BAR
// =======================
window.addEventListener("scroll", () => {
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});

// =======================
// PARTICLES & AOS INIT
// =======================
window.addEventListener("load", () => {
  if (window.particlesJS) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 70 },
        color: { value: ["#007acc", "#00c4ff"] },
        shape: { type: "circle" },
        opacity: { value: 0.35 },
        size: { value: 3 },
        line_linked: { enable: true, opacity: 0.2 },
        move: { enable: true, speed: 1.2 }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } }
      }
    });
  }

  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: "ease-out",
      once: true
    });
  }
});

// =======================
// PROJECT DATA (UPDATED)
// =======================
const projectData = {
  project5: {
    title: "AI-Powered PCOS Detection System",
    duration: "May 2024",
    description: `
      <ul>
        <li>Developed a CNN model to detect PCOS from ultrasound images.</li>
        <li>Automated ovarian pattern analysis for early diagnosis.</li>
        <li>Used Python, TensorFlow, OpenCV, and medical datasets.</li>
      </ul>
    `,
    tech: "Python, TensorFlow, OpenCV"
  },

  project6: {
    title: "Anti Bike Key Start System",
    duration: "Feb 2024",
    description: `
      <ul>
        <li>Developed a smart ignition system preventing unauthorized bike start.</li>
        <li>Integrated RFID/NFC authentication.</li>
        <li>Automated ignition lock using Arduino.</li>
        <li>Reduced theft risk through secure access.</li>
      </ul>
    `,
    tech: "Arduino, RFID/NFC"
  }
};

function openModal(id) {
  const p = projectData[id];
  if (!p) return;

  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalDescription").innerHTML = p.description;
  document.getElementById("modalDuration").innerText = p.duration;
  document.getElementById("modalTech").innerText = p.tech;

  document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}
// =======================
// PROJECT MODAL
// =======================
function openModal(projectId) {
  const p = projectData[projectId];
  if (!p) return;

  document.getElementById("modalTitle").innerText = p.title;

  // ✅ supports bullets
  document.getElementById("modalDescription").innerHTML = p.description;

  document.getElementById("modalDuration").innerText = p.duration;
  document.getElementById("modalTech").innerText = p.tech;

  document.getElementById("projectModal").style.display = "flex";
  document.body.style.overflow = "hidden"; // lock scroll
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
  document.body.style.overflow = ""; // unlock scroll
}

// Close modal when clicking outside
window.addEventListener("click", e => {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
});

// =======================
// CONTACT FORM
// =======================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }
});