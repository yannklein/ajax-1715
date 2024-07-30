import Swal from 'sweetalert2';

console.log("Hello from JavaScript!");

// FETCH GET REQUEST example
const url = "https://api.github.com/users/jpblicer";

// console.log(fetch(url));
const result = fetch(url); // DOESN'T GIVE US  THE request result

const doSomething = (data) => {
  // ...
}

fetch(url)
  .then((response) => {
    // console.log("response:", response);
    // console.log(response.json());
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    // console.log("the data arrives!", data);
    doSomething(data)
  });

// console.log("after the fetch"); // the fetched data does NOT exist yet!

fetch(url)
  .then(response => response.json())
  .then((data) => {
    // console.log(data);
  })




// FETCH POST REQUEST example

// 1. Select elements (inputs, login)
const emailEl = document.querySelector("#email");
const passwordEl = document.querySelector("#password");
const buttonEl = document.querySelector("#button");

// 2. Listen to a click on login
buttonEl.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
  // 2.5 Fetch the dummy API
  const url = "https://reqres.in/api/register";

  const data = {
    email: emailEl.value,
    password: passwordEl.value
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(data)
  }

  fetch(url, options)
    .then((response) => {
      if (response.status === 200) {
        Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
      } else {
        Swal.fire({title: 'Error!', text: 'Oops! Something went wrong', icon: 'error'})
      }
      return response.json()
    })
    .then((data) => {
      // 3. Console.log the data
      console.log(data);
    })
  
});


// SWEETALERT example

// Swal.fire({
//   // position: "bottom-start",
//   icon: "success",
//   title: "Your work has been saved",
//   showConfirmButton: false,
//   timer: 1500
// });