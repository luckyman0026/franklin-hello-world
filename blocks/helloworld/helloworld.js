// /blocks/helloworld/helloworld.js
export default function decorate(block) {
  // Clear any existing content
  block.textContent = '';

  // Create a simple greeting element
  const greeting = document.createElement('div');
  greeting.textContent = 'Hello World from a Franklin block!';

  // Add it into the block
  block.appendChild(greeting);
}
