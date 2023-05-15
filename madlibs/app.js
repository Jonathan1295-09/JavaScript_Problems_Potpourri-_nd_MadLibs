const words = {
    number: "",
    adjective: "",
    pluralNoun: "",
    adverb: "",
    anotherAdjective: "",
    
}

function startMadlib() {
    words.number = prompt("give me a number?");
    words.adjective = prompt("give me a adjective?");
    words.pluralNoun = prompt("give me a plural noun?");
    words.adverb = prompt("give me a adverb?");
    words.anotherAdjective = prompt("give me a another adjective?");
  }
  startMadlib();
  const string = `Once upon a time a group of${words.number}General Assembly graduates
  got together and made a startup called ${words.adjective}Technologies.
  Their goal was to create smart ${words.pluralNoun}.
  They approached the challenge ${words.adverb}
  which ultimately lead them to ${words.anotherAdjective}ame.`;
  alert(string);