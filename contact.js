let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    
  let username = document.querySelector("#name");
  let email = document.querySelector("#email");
  let newsletter_choice = document.getElementsByName("newsletter");
  let date = document.querySelector("#date");

  if (username.value == "" || email.value == "") {
    console.warn("You must enter some date to submit this form");
  } else {
    console.log("========= Form Submission =========");
    console.log("\tUsername: ", username.value);
    console.log("\tEmail: ", email.value);
    let newsletter_entered = false;

    for (var i = 0; i < newsletter_choice.length; ++i) {
      if (newsletter_choice[i].checked) {
        console.log("\tNewsletter: ", newsletter_choice[i].value);
        newsletter_entered = true;
      }
    }

    if (!newsletter_entered) {
      console.log("\tNewsletter: no submission");
    }

    if (date.value == "") {
      console.log("\tDate: no submission");
    } else {
      console.log("\tDate: ", date.value);
    }
  }
}