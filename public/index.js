

const form = document.getElementById("form");
const result = document.getElementById("result");
const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const logoutBtn = document.getElementById("logout");

// ✅ Redirect buttons
loginBtn.addEventListener("click", () => window.location.href = "/login.html");
signupBtn.addEventListener("click", () => window.location.href = "/signup.html");

// ✅ Check login state
if (localStorage.getItem("isLoggedIn") === "true") {
  loginBtn.style.display = "none";
  signupBtn.style.display = "none";
  logoutBtn.style.display = "inline-block";
} else {
  logoutBtn.style.display = "none";
}

// ✅ Logout
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  alert("You have been logged out!");
  window.location.href = "/login.html";
});

// ✅ Load last plan (if any)
window.addEventListener("DOMContentLoaded", () => {
  const lastPlan = localStorage.getItem("lastPlan");
  if (lastPlan) result.textContent = lastPlan;
});

// ✅ Form submission
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please log in first!");
    window.location.href = "/login.html";
    return;
  }

  const body = Object.fromEntries(new FormData(form));

  const res = await fetch("/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  const newPlan = data.plan;

  // ✅ Display current plan
  result.textContent = newPlan;

  // ✅ Save latest plan
  localStorage.setItem("lastPlan", newPlan);

  // ✅ Save all plans in history
  let history = JSON.parse(localStorage.getItem("planHistory")) || [];
  history.push({
    plan: newPlan,
    date: new Date().toLocaleString(),
  });
  localStorage.setItem("planHistory", JSON.stringify(history));

  alert("Workout plan generated and saved to history!");
});

// const form = document.getElementById("form");
// const result = document.getElementById("result");
// const loginBtn = document.getElementById("login");
// const signupBtn = document.getElementById("signup");
// const logoutBtn = document.getElementById("logout");

// // ✅ Your Gemini API Key here
// const API_KEY = "AIzaSyCAF0Ojvg3euhS8l04PdfZRskzyidAZ91o";

// // ✅ Redirect buttons
// loginBtn.addEventListener("click", () => window.location.href = "/login.html");
// signupBtn.addEventListener("click", () => window.location.href = "/signup.html");

// // ✅ Check login state
// if (localStorage.getItem("isLoggedIn") === "true") {
//   loginBtn.style.display = "none";
//   signupBtn.style.display = "none";
//   logoutBtn.style.display = "inline-block";
// } else {
//   logoutBtn.style.display = "none";
// }

// // ✅ Logout
// logoutBtn.addEventListener("click", () => {
//   localStorage.removeItem("isLoggedIn");
//   alert("You have been logged out!");
//   window.location.href = "/login.html";
// });

// // ✅ Load last plan
// window.addEventListener("DOMContentLoaded", () => {
//   const lastPlan = localStorage.getItem("lastPlan");
//   if (lastPlan) result.innerHTML = lastPlan.replace(/\n/g, "<br>");
// });

// // ✅ Form submission (Gemini API)
// form.addEventListener("submit", async (e) => {
//   e.preventDefault();

//   if (localStorage.getItem("isLoggedIn") !== "true") {
//     alert("Please log in first!");
//     window.location.href = "/login.html";
//     return;
//   }

//   const formData = Object.fromEntries(new FormData(form));
//   const injuryType = formData.injury;

//   const prompt = `
//   Create a safe workout plan for someone recovering from ${injuryType}. 
//   Include:
//   ✅ Warm-up (3 points)
//   ✅ Main exercises (3–5)
//   ✅ Cool down
//   ✅ Safety Tips
//   Present clean bullet points.
//   `;

//   try {
//     const response = await fetch(
//       "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY,
//       // {
//       //   method: "POST",
//       //   headers: { "Content-Type": "application/json" },
//       //   body: JSON.stringify({
//       //     contents: [{ role: "user", parts: [{ text: prompt }] }]
//       //   })
//       // }
//     );

//     // const data = await response.json();
//     // const workoutPlan = data.candidates[0].content.parts[0].text;

//     result.innerHTML = workoutPlan.replace(/\n/g, "<br>");

//     // ✅ Save last plan
//     localStorage.setItem("lastPlan", workoutPlan);

//     // ✅ Save history
//     let history = JSON.parse(localStorage.getItem("planHistory")) || [];
//     history.push({
//       plan: workoutPlan,
//       date: new Date().toLocaleString(),
//     });
//     localStorage.setItem("planHistory", JSON.stringify(history));

//     alert("✅ Workout Plan Generated!");
//   } catch (error) {
//     console.error(error);
//     alert("Error generating workout plan!");
//   }
// });

