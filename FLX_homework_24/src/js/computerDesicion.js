export let computerDecision = () => {
  let randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
