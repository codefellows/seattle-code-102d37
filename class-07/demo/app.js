function getName() {

  let name = prompt("What is your name?");
  if (name !== "John") {
    document.write("Nice to meet you " + name);
  } else {
    document.write("nobody cares");
  }

}
