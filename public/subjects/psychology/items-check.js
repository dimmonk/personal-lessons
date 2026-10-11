// Psychology, lesson 1 "What did they do?": the six accounts of the end check of part A. None was in the groups. Three ordinary moments, two
// where the word fits (two lines say what was done), and one that says nothing the person did. Invented people.
(() => {
const L = psyLine;
FC.items("psychology", [
  psyItem({
    id: "k-lazy", kind: "ordinary", form: "friend", from: "Rosa", detail: "Text message · Thursday, 5:40 PM", who: "Pete",
    lines: [
      L("z1", "Pete is so lazy.", "label"),
      L("z2", "He left at 4:55 while I was still packing the last order.", "act"),
      L("z3", "He never thinks about how much I’m carrying.", "guess"),
      L("z4", "His shift ends at 5.", "around"),
      L("z5", "I was furious.", "feeling")],
    act: ["z2"],
    reason: "“He left at 4:55 while I was still packing the last order” is what Pete did. “Lazy” is a word for him and “he never thinks about how much I’m carrying” is a guess about his mind. His shift ending at 5 is what was going on around it, and “I was furious” is how Rosa felt."
  }),
  psyItem({
    id: "k-heat", kind: "ordinary", form: "thread", from: "Ben", detail: "Text thread · Sunday, 9:10 PM", who: "Ben",
    lines: [
      L("t1", "Why is it freezing in here?", "teller", { me: true }),
      L("t2", "I turned the heat down to 60 while you were out.", "act"),
      L("t3", "You’re trying to freeze me out.", "guess", { me: true }),
      L("t4", "You are so cheap.", "label", { me: true }),
      L("t5", "The bill came and it scared me.", "feeling", { note: "That is how he says he feels, not what he did." })],
    act: ["t2"],
    reason: "“I turned the heat down to 60 while you were out” is what Ben did. “You’re trying to freeze me out” is your guess about why, and “you are so cheap” is your word for him. “The bill came and it scared me” is how he says he feels."
  }),
  psyItem({
    id: "k-party", kind: "ordinary", form: "note", from: "Your note", detail: "Written after the party", who: "Sofia",
    lines: [
      L("q1", "Sofia is so self-absorbed.", "label"),
      L("q2", "At the party she talked about her new job for the whole hour we were together.", "act"),
      L("q3", "She only wants an audience.", "guess"),
      L("q4", "I felt like furniture.", "feeling"),
      L("q5", "She starts Monday at a hospital she has wanted to work at for years.", "around")],
    act: ["q2"],
    reason: "“At the party she talked about her new job for the whole hour we were together” is what Sofia did. “Self-absorbed” is a word for her and “she only wants an audience” is a guess about what she wants. “I felt like furniture” is how you felt, and her new job is the background."
  }),
  psyItem({
    id: "k-meeting", kind: "word", form: "friend", from: "Leo", detail: "Text message · Tuesday, 12:30 PM", who: "Leo’s manager",
    lines: [
      L("g1", "My manager is a bully.", "label"),
      L("g2", "On Monday she read out my sales numbers to the whole team and said they were the worst.", "act"),
      L("g3", "Two weeks ago she corrected my mistake in front of a customer.", "act"),
      L("g4", "She enjoys seeing me squirm.", "guess"),
      L("g5", "I shake before every meeting now.", "feeling")],
    act: ["g2", "g3"],
    reason: "“On Monday she read out my sales numbers to the whole team and said they were the worst” and “Two weeks ago she corrected my mistake in front of a customer” are two things Leo’s manager did. “Bully” is a word for her, “she enjoys seeing me squirm” is a guess about what she feels, and “I shake before every meeting now” is how Leo feels."
  }),
  psyItem({
    id: "k-plans", kind: "word", form: "thread", from: "Jess", detail: "Text thread · Over two weeks", who: "Jess",
    lines: [
      L("f1", "Can’t come Thursday, sorry.", "act"),
      L("f2", "You’re so flaky.", "label", { me: true }),
      L("f3", "Can’t come Saturday either. Something came up.", "act"),
      L("f4", "You just don’t want to see me anymore.", "guess", { me: true })],
    act: ["f1", "f3"],
    reason: "“Can’t come Thursday, sorry.” and “Can’t come Saturday either. Something came up.” are the two things Jess did: she canceled twice. “You’re so flaky” is your word for her, and “you just don’t want to see me anymore” is your guess about why."
  }),
  psyItem({
    id: "k-fake", kind: "unclear", form: "note", from: "Your note", detail: "Written after dinner", who: "Priyanka",
    lines: [
      L("y1", "Priyanka is so fake.", "label"),
      L("y2", "She was being weird at dinner. I just know she talks about me behind my back.", "guess"),
      L("y3", "I feel so stupid for trusting her.", "feeling"),
      L("y4", "We’ve been friends since college.", "around")],
    act: "none", deciding: ["y1", "y2"], next: true,
    reason: "None of these lines says something Priyanka did. “Fake” is a word for her, “she was being weird” does not say what she did, and “I just know she talks about me behind my back” is a guess. Feeling stupid is how you felt.",
    need: "To check “fake”, you would need a line about something she said or did, such as ‘she told Dana what I said about the trip’."
  })
]);
})();
