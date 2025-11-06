// ✅ Check login
if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
}



// ✅ Doctor’s Advice Data with YouTube Video Links
const adviceData = {
  "Knee Injury": {
    tips: [
      "Avoid running, jumping, or deep squats until cleared by a doctor.",
      "Apply ice for 15–20 minutes after activity.",
      "Do gentle range-of-motion exercises to prevent stiffness.",
      "Strengthen quadriceps and hamstrings gradually."
    ],
    video: "https://www.youtube.com/embed/fiRip5WW9T8?si=8WOKFRsbGS72ZqVd autoplay" // Example: Knee rehab exercise
  },

  
  "Back Injury": {
    tips: [
      "Avoid heavy lifting and twisting your spine suddenly.",
      "Maintain good posture — sit straight with back support.",
      "Stretch every 30–40 minutes if sitting for long periods.",
      "Do gentle core-strengthening exercises once pain reduces."
    ],
    video: "https://www.youtube.com/embed/HXSZHLGNSyU?si=DPSqHsA3hKPJqUGe" // Example: Back pain stretches
  },

  "Shoulder Injury": {
    tips: [
      "Avoid overhead lifting.",
      "Start with pendulum swings to regain motion.",
      "Apply ice or a cold pack after exercise.",
      "Gradually strengthen rotator cuff muscles."
    ],
    video: "https://www.youtube.com/embed/IXf8N9tb88c?si=T3YrI6zi_f0Z3E18" // Shoulder mobility
  },

  
  "Ankle Injury": {
    tips: [
      "Follow R.I.C.E. — Rest, Ice, Compression, Elevation.",
      "Avoid putting weight too early.",
      "Do gentle ankle circles as swelling decreases.",
      "Strengthen calf muscles before resuming sports."
    ],
    video: "https://www.youtube.com/embed/Z0Xrt__GjuI?si=z2EIdvPjAlWwZa8m" // Ankle rehab exercises
  },
 
  "Neck Injury": {
    tips: [
      "Avoid sudden neck movements or long phone use.",
      "Apply a warm compress to relax tight muscles.",
      "Do slow neck tilts and rotations daily.",
      "Maintain good posture while sitting."
    ],
    video: "https://www.youtube.com/embed/Q12nIfVCpdU?si=YvfBadBQNlyuTVBh" // Neck pain relief exercises
  },

  "Wrist Injury": {
    tips: [
      "Avoid push-ups or heavy wrist stress.",
      "Keep wrist elevated and apply ice.",
      "Do gentle wrist flexion and extension.",
      "Strengthen forearm muscles gradually."
    ],
    video: "https://www.youtube.com/embed/7-EXcqSMR9E?si=LAl_rWS7RMq4Eqyj" // Wrist rehab stretches
  },

  "Hip Injury": {
    tips: [
      "Avoid running or deep lunges early on.",
      "Use heating pad for tightness.",
      "Do glute bridges and side leg raises.",
      "Focus on core and glute activation."
    ],
    video: "https://www.youtube.com/embed/kfCgbUc4FBg?si=o-069jmiKi8A7Pay" // Hip mobility
  },

  "Hamstring Injury": {
    tips: [
      "Rest and avoid sprinting early.",
      "Apply ice and elevate leg.",
      "Start with light stretching.",
      "Add hamstring curls gradually."
    ],
    video: "https://www.youtube.com/embed/-wMdBY81900?si=QStPASfUZ3c__RXv" // Hamstring recovery
  }
};



// ✅ Display advice cards with video
const adviceContainer = document.getElementById("advice-container");
for (const injury in adviceData) {
  const { tips, video } = adviceData[injury];

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${injury}</h3>
    <ul>${tips.map(tip => `<li>${tip}</li>`).join("")}</ul>
    <div class="video-container">
      <iframe width="100%" height="215"
        src="${video}"
        title="${injury} recovery video"
        frameborder="0"
        allowfullscreen>
      </iframe>
    </div>
  `;

  adviceContainer.appendChild(card);
}

