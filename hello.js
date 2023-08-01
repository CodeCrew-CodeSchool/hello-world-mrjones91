function hello(greetee) {
  let name = greetee;
  if (greetee == "DJ" || greetee == "Ray")
  {
    greetee == "Professor " + name; 
  } else if (greetee == "Audrey") {
    greetee = "President " + name;
  }

  return  `Hello ${greetee}!`;
}

module.exports = hello;
