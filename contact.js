let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let message = document.querySelector("#message");

  if (name.value === "" || email.value === "" || message.value === "") {
    console.warn("You must enter all values to submit this form");
  } else {
    console.log("========= Form Submission =========");
    console.log("\tEmail: ", email.value);
    console.log("\tMessage: ", message.value);

    if (name.value == "") {
      console.log("\tName: no submission");
    } else {
      console.log("\tName: ", name.value);
    }
    if (email.value == "") {
        console.log("\tEmail: no submission");
      } else {
        console.log("\tEmail: ", email.value);
    }
    if (message.value == "") {
        console.log("\tMessage: no submission");
      } else {
        console.log("\tMessage: ", message.value);
    }
  }
}