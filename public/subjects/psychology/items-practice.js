// Psychology, lesson 1 "What did they do?": the worked account and the twelve of the two groups. Invented people; every account is one side of a
// story, in one of the three forms it arrives in. About half are ordinary moments; the rest are accounts where a word fits, accounts that say too
// little to tell, and one pattern of control. Each account has one line (or two) that says what the person did, and lines that are only a
// word for them, a guess about why, a feeling, the teller's own side or background.
(() => {
const L = psyLine;
FC.items("psychology", [
  // ----- the worked account: a roommate eats the leftovers -----
  psyItem({
    id: "w-leftovers", kind: "ordinary", form: "friend", from: "Maya", detail: "Text message · 9:41 PM", who: "Dev",
    lines: [
      L("w1", "Dev is such a selfish roommate.", "label"),
      L("w2", "He ate the leftovers I’d saved for lunch.", "act"),
      L("w3", "He doesn’t think about anyone but himself.", "guess"),
      L("w4", "It made me so mad.", "feeling")],
    act: ["w2"],
    say: { prompt: "Maya’s word for Dev is “selfish”. Which line says what he did instead?", ok: "Dev ate the leftovers Maya had saved for lunch.", kept: "Dev never thinks about anyone but himself.",
      soft: "Dev is a little bit selfish.", guess: "Dev ate her lunch because he wanted it.", order: ["kept", "ok", "guess", "soft"] },
    steps: [
      { id: "find", does: "Find the line you could have seen or heard.", working: "“He ate the leftovers I’d saved for lunch.” Anyone there could have seen it.", ask: "act" },
      { id: "rest", does: "Name what the other lines are.", working: "“Selfish” is a word. “He doesn’t think about anyone” is a guess. “It made me so mad” is a feeling. None is something he did." },
      { id: "say", does: "Say it without the word.", working: "Dev ate the leftovers Maya had saved for lunch. Now you can judge whether that is selfish.", ask: "say" }],
    reason: "Only “He ate the leftovers I’d saved for lunch” is something Dev did. The rest is a word, a guess and a feeling."
  }),

  // ----- the first group (the checklist beside the account): a rewrite to pick, a thread, a note, an account with nothing in it -----
  psyItem({
    id: "a-karaoke", kind: "ordinary", form: "friend", from: "Priya", detail: "Text message · Tuesday, 7:12 PM", who: "Marcus",
    lines: [
      L("k1", "Marcus is so rude to me.", "label"),
      L("k2", "At karaoke he looked at his phone while I was singing.", "act"),
      L("k3", "He clearly thinks my singing is boring.", "guess"),
      L("k4", "I felt invisible.", "feeling"),
      L("k5", "We’ve been friends for six years.", "around")],
    act: ["k2"],
    say: { prompt: "Priya’s word for Marcus is “rude”. Which line says what he did instead?", ok: "Marcus looked at his phone while Priya sang.", kept: "Marcus has no manners with Priya.",
      soft: "Marcus is a little rude.", guess: "Marcus looked at his phone because he was bored.", order: ["soft", "guess", "ok", "kept"] },
    reason: "“At karaoke he looked at his phone while I was singing” is the line about something Marcus did. “Rude” is a word for him, “he clearly thinks my singing is boring” is a guess about his mind, and “I felt invisible” is how Priya felt. How long they have been friends is background."
  }),
  psyItem({
    id: "a-cancel", kind: "ordinary", form: "thread", from: "Jonas", detail: "Text thread · Friday, 6:30 PM", who: "Jonas",
    lines: [
      L("j1", "Can’t do Saturday after all. Work called me in.", "act"),
      L("j2", "That’s the third time you’ve flaked on me.", "label", { me: true, note: "That is your word for it. It sums up other times, not what he did this time." }),
      L("j3", "You obviously don’t care about our plans.", "guess", { me: true }),
      L("j4", "I’m wiped.", "feeling", { note: "That is how he says he feels, not what he did." })],
    act: ["j1"],
    say: { prompt: "You called it “flaking”. Which line says what Jonas did instead?", ok: "Jonas canceled Saturday because work called him in.", kept: "Jonas flaked on you again.",
      soft: "Jonas is a little flaky.", guess: "Jonas canceled because he did not want to come.", order: ["ok", "guess", "kept", "soft"] },
    reason: "“Can’t do Saturday after all. Work called me in.” is what Jonas did: he canceled. The two lines in the middle are yours: a word for him and a guess about why. “I’m wiped” is how he says he feels."
  }),
  psyItem({
    id: "a-wedding", kind: "unclear", form: "note", from: "Your note", detail: "Written the night after the argument", who: "Sam",
    lines: [
      L("s1", "Sam is so dismissive.", "label"),
      L("s2", "When I said I wanted to move the wedding date, he told me it was not happening and left the room.", "act"),
      L("s3", "He just wants everything his way.", "guess"),
      L("s4", "I felt like nothing I say matters.", "feeling"),
      L("s5", "We’ve been together four years.", "around")],
    act: ["s2"],
    reason: "“When I said I wanted to move the wedding date, he told me it was not happening and left the room” is what Sam did: something he said and something he did. The other lines are a word for him, a guess about what he wants, a feeling, and background.",
    need: "To say more than what he did, you would need to know whether he has done this before and why the date matters to him. A note written after an argument is one side."
  }),
  psyItem({
    id: "a-toxic", kind: "unclear", form: "friend", from: "Ines", detail: "Text message · Sunday, 8:03 AM", who: "Ines’s manager",
    lines: [
      L("i1", "My manager is toxic. I can’t stand working for her.", "label"),
      L("i2", "She obviously wants me to quit.", "guess"),
      L("i3", "I dread Mondays now.", "feeling"),
      L("i4", "I’ve been at this job for two years.", "around")],
    act: "none", deciding: ["i1", "i2"], next: true,
    reason: "None of these lines says something the manager did. “Toxic” is a word for her, “she obviously wants me to quit” is a guess about her mind, and “I dread Mondays” is how Ines feels. There is nothing yet to check the word against.",
    need: "To check “toxic”, you would need a line about something she said or did, such as ‘she took my name off the schedule’."
  }),

  // ----- the second group (nothing beside the account): ordinary moments, two where the word fits, one with too little, one pattern of control -----
  psyItem({
    id: "b-midnight", kind: "ordinary", form: "friend", from: "Tomás", detail: "Text message · Wednesday, 6:20 PM", who: "Rita",
    lines: [
      L("m1", "Rita is an inconsiderate person.", "label"),
      L("m3", "Her flight got in three hours late.", "around"),
      L("m4", "She should have called first.", "label", { note: "That is your view of what she should have done, not something she did." }),
      L("m5", "I was up until two.", "teller"),
      L("m2", "She rang our bell at midnight and woke the baby.", "act")],
    act: ["m2"],
    write: { prompt: "Say it without the word “inconsiderate”, in your own words.", model: "Rita rang the bell at midnight and woke the baby." },
    reason: "“She rang our bell at midnight and woke the baby” is what Rita did. “Inconsiderate” is Tomás’s word for her, and “she should have called first” is his view of what she should have done. Her late flight is what was going on around it, and “I was up until two” is about Tomás."
  }),
  psyItem({
    id: "b-jacket", kind: "ordinary", form: "thread", from: "Dana", detail: "Text thread · Saturday, 2:15 PM", who: "Dana",
    lines: [
      L("d1", "Here’s your jacket. I spilled coffee on the sleeve, sorry.", "act"),
      L("d2", "You are SO careless.", "label", { me: true }),
      L("d3", "You never respect my stuff.", "label", { me: true }),
      L("d4", "That jacket cost $140.", "around", { me: true }),
      L("d5", "I feel awful about it.", "feeling", { note: "That is how she says she feels, not what she did." })],
    act: ["d1"],
    reason: "“Here’s your jacket. I spilled coffee on the sleeve, sorry.” is what Dana did: she handed back the jacket and said what happened to it. “Careless” and “you never respect my stuff” are your words for her. “I feel awful about it” is how she says she feels."
  }),
  psyItem({
    id: "b-dinner", kind: "ordinary", form: "note", from: "Your note", detail: "Written after dinner", who: "Ana",
    lines: [
      L("e1", "Ana is a flake.", "label"),
      L("e5", "Her train was stuck outside the city.", "around"),
      L("e2", "Ana walked into the restaurant thirty minutes after we sat down.", "act"),
      L("e3", "She doesn’t value my time.", "guess"),
      L("e4", "I sat there feeling like an idiot.", "feeling")],
    act: ["e2"],
    reason: "“Ana walked into the restaurant thirty minutes after we sat down” is what she did. “A flake” is a word for her, and “she doesn’t value my time” is a guess about her mind. Feeling like an idiot is how you felt, and the stuck train is what was going on around it."
  }),
  psyItem({
    id: "b-neighbor", kind: "ordinary", form: "friend", from: "Kayla", detail: "Text message · Thursday, 8:55 AM", who: "the neighbor",
    lines: [
      L("n1", "The man next door is hostile.", "label"),
      L("n2", "This morning I waved and he walked past without a word.", "act"),
      L("n3", "He’s decided he doesn’t like us.", "guess"),
      L("n4", "I felt kind of stupid standing there.", "feeling"),
      L("n5", "We moved in last month.", "around")],
    act: ["n2"],
    write: { prompt: "Say it without the word “hostile”, in your own words.", model: "The neighbor walked past Kayla without a word when she waved." },
    reason: "“This morning I waved and he walked past without a word” is what the neighbor did. “Hostile” is a word for him and “he’s decided he doesn’t like us” is a guess about what he thinks. Feeling stupid is how Kayla felt, and the move is background."
  }),
  psyItem({
    id: "b-money", kind: "word", form: "friend", from: "Nate", detail: "Text message · Monday, 10:02 PM", who: "Cal",
    lines: [
      L("c1", "Cal is such a mooch.", "label"),
      L("c2", "On the 3rd he borrowed $20 from me and hasn’t paid it back.", "act"),
      L("c3", "On the 14th he borrowed $40, and when I brought up the $20 he changed the subject.", "act"),
      L("c4", "He figures I’ll never push.", "guess"),
      L("c5", "I’m sick of feeling like an ATM.", "feeling")],
    act: ["c2", "c3"],
    reason: "“On the 3rd he borrowed $20 from me and hasn’t paid it back” and “On the 14th he borrowed $40, and when I brought up the $20 he changed the subject” are two things Cal did, eleven days apart. “Mooch” is a word for him. “He figures I’ll never push” is a guess and the last line is a feeling."
  }),
  psyItem({
    id: "b-stonewall", kind: "word", form: "thread", from: "Alex", detail: "Text thread · Monday to Wednesday", who: "Alex",
    lines: [
      L("x1", "We need to talk about the move.", "teller", { me: true }),
      L("x2", "I’m not discussing this. Drop it.", "act"),
      L("x3", "You always shut down when it gets hard.", "label", { me: true }),
      L("x4", "Stop texting me about it.", "act"),
      L("x5", "You just want to make me feel small.", "guess", { me: true })],
    act: ["x2", "x4"],
    reason: "“I’m not discussing this. Drop it.” and “Stop texting me about it.” are the two things Alex did: he shut the talk down, and later in the thread he did it again. “You always shut down when it gets hard” is your word for it, and “you just want to make me feel small” is your guess about why he does it."
  }),
  psyItem({
    id: "b-trip", kind: "unclear", form: "note", from: "Your note", detail: "Written on the plane home", who: "Chris",
    lines: [
      L("u1", "Chris is being passive-aggressive about my trip.", "label"),
      L("u3", "He wants me to feel guilty.", "guess"),
      L("u4", "I can’t stop going over it.", "feeling"),
      L("u5", "My mom has been sick since January.", "around")],
    act: "none", deciding: ["u1", "u3"], next: true,
    reason: "None of these lines says something Chris said or did. “Passive-aggressive” is a word for him, “he wants me to feel guilty” is a guess about his mind, and “I can’t stop going over it” is how you feel. There is nothing yet to check the word against.",
    need: "To check “passive-aggressive”, you would need a line about something he said or did, such as ‘he said we’ll see and changed the channel’."
  }),
  psyItem({
    id: "b-humiliate", kind: "ordinary", form: "friend", from: "Dara", detail: "Text message · Wednesday, 7:30 PM", who: "Kofi",
    lines: [
      L("v1", "Kofi humiliated me in front of the whole team by reading my mistakes out loud.", "act"),
      L("v2", "Everyone saw it, and nobody said a word.", "around"),
      L("v3", "He does it to look smart.", "guess"),
      L("v4", "I wanted to disappear.", "feeling"),
      L("v5", "He’s a bully.", "label")],
    act: ["v1"],
    write: { prompt: "Say it without the word “humiliated”, in your own words.", model: "Kofi read Dara’s mistakes out loud in front of the whole team." },
    reason: "“Kofi humiliated me in front of the whole team by reading my mistakes out loud” mixes what he did with Dara’s reading of it. What anyone could have seen is that he read her mistakes out loud in front of the team. “A bully” is a word for him, “he does it to look smart” is a guess about why, and “I wanted to disappear” is how it felt."
  }),
  psyItem({
    id: "b-ignored", kind: "word", form: "friend", from: "Mina", detail: "Text message · Sunday, 9:05 PM", who: "Leah",
    lines: [
      L("ig1", "Leah ignored my texts for three days.", "act"),
      L("ig2", "Then she posted photos from the beach party I wasn’t invited to.", "act"),
      L("ig3", "She’s a fake friend.", "label"),
      L("ig4", "She clearly wants me out of her life.", "guess"),
      L("ig5", "I cried in the car.", "feeling")],
    act: ["ig1", "ig2"],
    reason: "“Leah ignored my texts for three days” and “Then she posted photos from the beach party I wasn’t invited to” are two things she did. The first mixes what she did with a reading: what could be seen is that she did not answer for three days. “A fake friend” is a word for her, “she clearly wants me out of her life” is a guess about her mind, and the last line is a feeling."
  }),
  psyItem({
    id: "b-phone", kind: "control", form: "friend", from: "Hannah", detail: "Text message · Friday, 11:48 PM", who: "Cole",
    lines: [
      L("h1", "Don’t laugh, but I think Cole is a little controlling.", "label"),
      L("h2", "He just likes to know where I am.", "guess"),
      L("h3", "He checks my phone every night and reads my messages.", "act"),
      L("h4", "He told me not to see Alyssa anymore, so I haven’t.", "act"),
      L("h5", "He’s stressed about money, that’s all.", "guess"),
      L("h6", "I’m probably overreacting.", "feeling")],
    act: ["h3", "h4"],
    reason: "“He checks my phone every night and reads my messages” and “He told me not to see Alyssa anymore, so I haven’t” are two things Cole did. The other lines are Hannah’s word for it, her guesses about why (“he just likes to know where I am”, “he’s stressed about money”) and her doubt about herself. Here you only tap what he did. One message cannot say what it adds up to, but being watched, being told who to see, and doubting yourself, all together, are a safety matter and not only a word to check.",
    notice: ["If you are in danger now, call 911.", "If this sounds like your life or a friend’s: in the US, the National Domestic Violence Hotline is free and private, at any hour. Call 1-800-799-7233, or text START to 88788. A friend can call too. If someone checks your phone, use a phone or computer they cannot see. Outside the US, look for a domestic violence helpline in your country."]
  })
]);
})();
