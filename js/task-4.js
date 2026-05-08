const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', event => {
    event.preventDefault();

    const userEmail = form.elements.email.value.trim();
    const userPassword = form.elements.password.value.trim();

    if (userEmail === "" || userPassword === "") {
        alert("All form fields must be filled in.");
        return;
    };

    const formData = {
        email: userEmail,
        password: userPassword,
    };

    console.log(formData);

    form.reset();
});