function handleFormSubmit(event) {
 event.preventDefault();

 const name = event.target.username.value;
 const email = event.target.useremail.value;
 const phone = event.target.phoneNo.value;

 const userdetails = {
    name,
    email,
    phone,
 }
 localStorage.setItem("userdetails" , JSON.stringyify(userdetails))
}