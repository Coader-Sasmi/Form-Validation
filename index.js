
var form = document.getElementById('form')
form.addEventListener('submit', function (event) {
    event.preventDefault()

    var firstname = document.getElementById('firstname').value
    console.log(firstname)

    var lastname = document.getElementById('lastname').value
    console.log(lastname)

    var phone = document.getElementById("phone").value
    console.log(phone)

    var email = document.getElementById('email').value
    console.log(email)

    var pass = document.getElementById('pass').value
    console.log(pass)

    var cpass = document.getElementById('cpass').value
    console.log(cpass)

    var text = document.getElementById('text').value
    console.log(text)
})
