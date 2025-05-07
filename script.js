const texts = [
  "Hi, I'm Jacob.",
  "I'm a Computer Engineer.",
  "Passionate about software development.",
  "Interested in AI/ML."
];

const FADE_MS = 1500;
const DISPLAY_MS = 1900;
const INTERVAL_MS = FADE_MS + DISPLAY_MS;

let idx = 0;
const t1 = document.getElementById("text1");
const t2 = document.getElementById("text2");

t2.classList.remove("hidden");
t2.classList.add("fade-out");

t1.textContent = texts[0];
t1.classList.add("fade-out");

setTimeout(() => t1.classList.replace("fade-out", "fade-in"), 50);

function swapText() {
  const fadingOut = idx % 2 === 0 ? t1 : t2;
  const fadingIn = idx % 2 === 0 ? t2 : t1;

  fadingOut.classList.replace("fade-in", "fade-out");

  fadingOut.addEventListener(
    "transitionend",
    function handler() {
      fadingOut.removeEventListener("transitionend", handler);

      idx = (idx + 1) % texts.length;
      fadingIn.textContent = texts[idx];

      void fadingIn.offsetWidth;
      fadingIn.classList.replace("fade-out", "fade-in");
    },
    { once: true }
  );
}

setTimeout(() => {
  swapText(); 
  setInterval(swapText, INTERVAL_MS);
}, DISPLAY_MS);


//setInterval(swapText, INTERVAL_MS);



//Experience Section
function showExperience(index) {
  const tabs = document.querySelectorAll('.experience-list li');
  const items = document.querySelectorAll('.experience-item');

  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    items[i].classList.toggle('active', i === index);
  });
}
