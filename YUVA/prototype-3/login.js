// LOGIN.JS

// Get elements
const showSignInBtn = document.getElementById("show-signin");
const showSignUpBtn = document.getElementById("show-signup");
const signInForm = document.getElementById("signin-form");
const signUpForm = document.getElementById("signup-form");
const registerAsSelect = document.getElementById("register-as");
const aadhaarSection = document.getElementById("aadhaar-section");
const skillsSection = document.getElementById("skills-section");
const dobInput = document.getElementById("dob");
const ageInput = document.getElementById("age");

// Show Sign In Form
showSignInBtn.addEventListener("click", () => {
  signInForm.classList.remove("hidden");
  signUpForm.classList.add("hidden");
});

// Show Sign Up Form
showSignUpBtn.addEventListener("click", () => {
  signUpForm.classList.remove("hidden");
  signInForm.classList.add("hidden");
});

// Toggle Aadhaar & Skills Fields
registerAsSelect.addEventListener("change", () => {
  const selected = registerAsSelect.value;

  if (selected === "needy") {
    aadhaarSection.classList.remove("hidden");
    skillsSection.classList.add("hidden");
  } else if (selected === "yuva-sevak") {
    skillsSection.classList.remove("hidden");
    aadhaarSection.classList.add("hidden");
  } else {
    aadhaarSection.classList.add("hidden");
    skillsSection.classList.add("hidden");
  }
});

// Calculate Age from DOB
function calculateAge(dob) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}

dobInput.addEventListener("change", () => {
  const dob = dobInput.value;
  if (dob) {
    ageInput.value = calculateAge(dob);
  }
});
