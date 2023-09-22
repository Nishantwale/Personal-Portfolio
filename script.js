let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
// document.querySelectorAll('.project a').forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         // Load more project details here, e.g., show a modal or navigate to a separate page.
//     });
// });

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // You can add your own logic here to send the form data, e.g., using AJAX
    // For this example, we'll display a success message
    const responseDiv = document.getElementById('response');
    responseDiv.innerText = `Thank you, ${name}! Your message has been sent.`;

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
});