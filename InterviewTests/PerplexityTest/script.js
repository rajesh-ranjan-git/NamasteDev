function passwordChecker(pwd) {
  if (pwd.length < 4) return 0;

  let hasNumber = false;
  let hasUpperCaseLetter = false;

  for (let i = 0; i < pwd.length; i++) {
    if (Number(pwd[i])) {
      hasNumber = true;
    }

    if (pwd.charCodeAt(i) > 64 && pwd.charCodeAt(i) < 91) {
      hasUpperCaseLetter = true;
    }
  }

  if (!hasNumber || !hasUpperCaseLetter) return 0;

  if (pwd.includes(" ") || pwd.includes("/")) return 0;

  if (Number(pwd[0])) return 0;

  return 1;
}

console.log(passwordChecker("Rfsfghsdf7"));
