function showData() {
let name = document.getElementById("name").value
let email = document.getElementById("email").value
let Phone = document.getElementById("Phone").value
let subject = document.getElementById("subject").value
let message = document.getElementById("message").value

document.getElementById("name").value = ""
document.getElementById("email").value = ""
document.getElementById("Phone").value = ""
document.getElementById("subject").value = ""
document.getElementById("message").value = ""

if (name, email, Phone, subject, message == ""){
      return alert ("Kolom tidak boleh kosong")
}
let emailReceiver = "ardanuaryhfz@gmail.com"
let a = document.createElement('a')
a.href = `mailto:${emailReceiver}?subject=${subject}&body=
Hello my name ${name}, ${subject}, ${message}. This my number phone ${Phone}`
a.click()

}

