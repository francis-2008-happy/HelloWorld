// Hello World — a warm-up to verify my development workflow end to end.
// Goal: confirm that I can write code, run it, and publish it to a public
// GitHub repository cleanly before starting the larger course projects.

// The classic, required output: print "Hello World" to the screen.
console.log("Hello World");

// A little personality: build a friendly greeting that also shows the
// current date and time, proving the script actually executed just now.
function greet(name) {
  const now = new Date().toLocaleString();
  return `Hey ${name}! Francis here, coding from Lagos. It is currently ${now}.`;
}

// Call the function and print its result.
console.log(greet("World"));
