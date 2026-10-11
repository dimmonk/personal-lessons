// Psychology, lesson 1 "What did they do?": four accounts held in reserve. No lesson names them; the weekly review asks one of them when the topic
// comes back, so the learner meets an account they have not seen. Two ordinary moments, one where the word fits and one that says nothing the person
// did. Invented people.
(() => {
const L = psyLine;
FC.items("psychology", [
  psyItem({
    id: "r-barista", kind: "ordinary", form: "friend", from: "Omar", detail: "Text message · Friday, 7:45 AM", who: "the barista",
    lines: [
      L("o1", "The new barista is so rude.", "label"),
      L("o2", "I said good morning and she handed me my coffee without looking up.", "act"),
      L("o3", "She hates her job.", "guess"),
      L("o4", "It stung a little.", "feeling"),
      L("o5", "The line was out the door.", "around")],
    act: ["o2"],
    reason: "“I said good morning and she handed me my coffee without looking up” is what the barista did. “Rude” is a word for her and “she hates her job” is a guess about her mind. “It stung a little” is how Omar felt, and the long line is what was going on around it."
  }),
  psyItem({
    id: "r-pickup", kind: "ordinary", form: "thread", from: "Dad", detail: "Text thread · Wednesday, 5:25 PM", who: "Dad",
    lines: [
      L("p1", "Sorry, I forgot practice ended at 5. I’m on my way now.", "act"),
      L("p2", "You always forget me.", "label", { me: true }),
      L("p3", "You care more about work than me.", "guess", { me: true }),
      L("p4", "Traffic is terrible.", "around", { note: "That is what was going on around it, as he tells it, not what he did." })],
    act: ["p1"],
    reason: "“Sorry, I forgot practice ended at 5. I’m on my way now.” is what Dad did: he forgot, and he is coming. “You always forget me” is your word for it and “you care more about work than me” is your guess about why. The traffic is what was going on around it."
  }),
  psyItem({
    id: "r-joke", kind: "word", form: "note", from: "Your note", detail: "Written the night after", who: "Taylor",
    lines: [
      L("a1", "Taylor is so belittling.", "label"),
      L("a2", "At my sister’s dinner he laughed and told everyone I burn water.", "act"),
      L("a3", "A week later he told the same joke in front of my coworkers.", "act"),
      L("a4", "He wants me to feel small.", "guess"),
      L("a5", "I laughed along, and I hated it.", "teller")],
    act: ["a2", "a3"],
    reason: "“At my sister’s dinner he laughed and told everyone I burn water” and “A week later he told the same joke in front of my coworkers” are two things Taylor did. “Belittling” is a word for him and “he wants me to feel small” is a guess about what he wants. “I laughed along, and I hated it” is about you."
  }),
  psyItem({
    id: "r-cold", kind: "unclear", form: "friend", from: "Wen", detail: "Text message · Saturday, 4:10 PM", who: "Marisol",
    lines: [
      L("w1", "Marisol has been so cold lately.", "label"),
      L("w2", "She’s obviously mad at me.", "guess"),
      L("w3", "I keep checking my phone for a text.", "feeling"),
      L("w4", "We usually talk every day.", "around")],
    act: "none", deciding: ["w1", "w2"], next: true,
    reason: "None of these lines says something Marisol did. “Cold” is a word for her and “she’s obviously mad at me” is a guess about her mind. Checking the phone is how Wen feels.",
    need: "To say anything about Marisol, you would need a line about something she said or did, such as ‘she left my text on read for three days’."
  })
]);
})();
