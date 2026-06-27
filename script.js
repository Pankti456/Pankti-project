function checkStrength() {
    const password = document.getElementById('passwordInput').value;
    const bar = document.getElementById('strengthBar');
    const text = document.getElementById('strengthText');
    
    let score = 0;
    if (password.length === 0) {
        bar.style.width = "0%";
        text.innerText = "Enter a password";
        return;
    }

    // Security checks
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    // Update UI based on score
    if (score <= 2) {
        bar.style.width = "33%";
        bar.style.backgroundColor = "#ef4444"; // Red
        text.innerText = "Weak (Easy to crack)";
        text.style.color = "#ef4444";
    } else if (score <= 4) {
        bar.style.width = "66%";
        bar.style.backgroundColor = "#f59e0b"; // Orange
        text.innerText = "Medium (Decent)";
        text.style.color = "#f59e0b";
    } else {
        bar.style.width = "100%";
        bar.style.backgroundColor = "#10b981"; // Green
        text.innerText = "Strong (Industry Standard)";
        text.style.color = "#10b981";
    }
}

function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    // Generate a 14 character highly secure string
    for (let i = 0; i < 14; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('generatedPassword').value = password;
}