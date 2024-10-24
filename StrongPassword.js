function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let falts = 0;
  // Return the minimum number of characters to make the password strong
  let faults = 0;

  // Check if the password contains at least one special character
  if (!/[!@#$%^&*()+-]/.test(password)) faults++;

  // Check if the password contains at least one digit
  if (!/[0-9]/.test(password)) faults++;

  // Check if the password contains at least one uppercase letter
  if (!/[A-Z]/.test(password)) faults++;

  // Check if the password contains at least one lowercase letter
  if (!/[a-z]/.test(password)) faults++;

  // Ensure the password is at least 6 characters long
  if (n + faults < 6) {
    faults += 6 - (faults + n);
  }

  return faults;
}

const n = 11;
const password = "#HackerRank";

console.log(minimumNumber(n, password));
