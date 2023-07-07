const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    if (char === sentence[sentence.length - 1]) {
      console.log(); // Add a newline character at the end of the animation
    }
  }, delay);
  delay += 50; // Delay each character by 50ms longer than the previous one
}
