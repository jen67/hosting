 // THis javascript is responsible for the change of the stick navbar during scrolling
window.addEventListener('scroll', function () {
                const header = document.querySelector('header');
                header.classList.toggle("sticky", window.scrollY > 0);
            });

            function toggleMenu(){
                const menuToggle = document.querySelector('.menuToggle'); 
                const navigation = document.querySelector('.navigation');
                menuToggle.classList.toggle('active');
                navigation.classList.toggle('active');
            }

    function validateForm() {
    var fullname = document.forms["myForm"]["usrnm"].value;
    var email = document.forms["myForm"]["email"].value;
    var password = document.forms["myForm"]["psw"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var gender = document.forms["myForm"]["gender"].value;

    if (fullname == "" || email == "" || password == "" || phone == "" || gender == "") {
      alert("Please fill out all required fields.");
      return false;
    }

    // Validate email format
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Validate password length
    if (password.length < 4) {
      alert("Password must be at least 4 characters long.");
      return false;
    }

    // Validate phone number format
    var phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 11-digit phone number.");
      return false;
    }
    if (fullname != "" && emailRegex.test(email) && password.length >= 4 && phoneRegex.test(phone) && gender != "") {
      alert("Submission successful!");
      return true;
      form.reset();
    }
}
  
function submitForm() {
    const username = 'jen67';
    const repo = 'hosting';
    const token = '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';

    let title = "New form submission";
    let body = `
Fullname: ${document.myForm.usrnm.value}
Email: ${document.myForm.email.value}
Phone: ${document.myForm.phone.value}
Gender: ${document.myForm.gender.value}
`;

    fetch(`https://api.github.com/repos/${username}/${repo}/issues`, {
        method: 'POST',
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
        },
        body: JSON.stringify({
            title: title,
            body: body
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.id) {
            alert('Form submitted successfully!');
        } else {
            alert('Error submitting form.');
        }
    })
    .catch(error => {
        alert('Error submitting form.');
    });

    return false;
}
