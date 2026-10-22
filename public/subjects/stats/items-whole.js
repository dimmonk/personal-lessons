// Stats, lesson 9 "The whole claim, unprompted": the ten questions of the group, then the six questions said from memory (listed on the lesson's first
// screen, in the words the answer accepts). Each is a thing as it arrives,
// asked only the standing questions with one prompt for the line ("the number it rests on"), and the size typed in the form its lesson taught wherever
// the claim gives a count, a risk, a test or a change. Which question decides is not said: any of the six can. Invented towns, products and people.
// Where a claim rests on several numbers, they stand in one sentence, so the line to tap is one.
(() => {
  FC.items("stats", [
    // ----- the six questions, from memory -----
    {
      id: "q-moves", strand: "whole", facets: {},
      blocks: [{ kind: "spoken", text: "From memory, without looking back: what are the six questions to put to a claim with a number? Name at least five, a few words each.", show: true }],
      asks: [{ id: "moves", kind: "text", prompt: "Type the questions, one after another, in any order.", count: 5, taught: true, accept: [
        "what (does it claim or it claims or is the claim or is claimed) (and what number does it rest on or and the number it rests on or and its number)",
        "how big (is it or it is or is the change) (really) (out of how many) (over how long)",
        "(compared with what or compared to what or is it fair or is the comparison fair) (and is it fair)",
        "who (was counted or counted or was asked or were counted) (and how)",
        "(could) (anything or what or something) else (could) explain it",
        "(the verdict or what is the verdict) (does the text show it or does it hold up)"] }],
      reason: ["The six questions: what it claims, and the number it rests on; how big it is, out of how many and over what time; compared with what, and is it fair; who was counted, and how; could anything else explain it; then the verdict. A claim can fail at any of them, so put every one of them to it."]
    },

    // ----- the group: ten mixed questions, nothing marked -----
    statsWhole({
      id: "q-elmwood", fit: "holds", line: "s1",
      claim: ["Elmwood had about twice as many bike crashes for its size as usual", [["Biking in Elmwood is more dangerous for its riders than driving is for drivers", "mixed-claim"], ["Car crashes doubled in Elmwood", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Elmwood Echo · Streets",
        headline: statsLine("h", "Bike crashes double in Elmwood"),
        lines: [
          statsLine("s1", "Elmwood police recorded 90 bike crashes this year, in a town of about 30,000 people; in a usual year the town has about 1.5 for every 1,000 people."),
          statsLine("s2", "The police plan a bike safety day in May.", { para: true })] }],
      size: statsWholeCount({ count: 90, whole: 30000, prompt: "About how many bike crashes for every 1,000 people this year?" }),
      deciding: ["h", "s1"],
      reason: ["90 crashes in a town of 30,000 is 3 for every 1,000 people. The usual is 1.5, so this year is twice the usual, as the headline says."],
      need: "Nothing more is needed for the size. The headline does not say why."
    }),
    statsWhole({
      id: "q-pravel", fit: "outruns", line: "s2",
      claim: ["Pravel makes a second stroke half as likely", [["Pravel makes a second stroke half as likely in children", "mixed-who"], ["Pravel makes a first stroke half as likely in healthy adults", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Eastbay Courier · Health",
        headline: statsLine("h", "Pravel pill halves the risk of a second stroke, trial finds"),
        lines: [
          statsLine("s1", "The trial split 10,000 adults who had had a stroke by coin toss, half to Pravel and half to a dummy pill.", { note: "That is how the groups were formed, not the result." }),
          statsLine("s2", "Within five years, 60 in every 1,000 on the dummy pill had a second stroke, against 45 in every 1,000 on Pravel.", { para: true })] }],
      size: statsWholeRisk({ before: 60, after: 45, prompt: "Over five years, how many in every 1,000 had a second stroke, without Pravel and with it?" }),
      deciding: ["h", "s1", "s2"],
      reason: ["The coin toss and 10,000 people, 5,000 in each group, make luck unlikely, so Pravel most likely made a difference. But 60 in 1,000 down to 45 is a quarter less, 15 fewer in every 1,000, not half."],
      need: "You would need the risk to fall by half, from 60 in 1,000 to about 30."
    }),
    statsWhole({
      id: "q-ridge", fit: "holds", line: "s1",
      claim: ["A positive TickCheck test at the clinic almost always means Ridge fever", [["A negative TickCheck test at the clinic is almost always right", "mixed-claim"], ["A positive TickCheck test almost always means Ridge fever for people with no rash", "mixed-who"]]],
      blocks: [{ kind: "article", form: "report", source: "Ridge Valley Clinic · Notes",
        headline: statsLine("h", "At our clinic, a positive TickCheck test is almost always right"),
        lines: [
          statsLine("s2", "The clinic sends patients for the test only when they have a rash after a tick bite."),
          statsLine("s1", "Of these patients, about 500 in every 1,000 have Ridge fever; the test finds 90 of every 100 who have it and wrongly flags 5 of every 100 who do not.", { para: true })] }],
      size: statsWholeTest({ p: 500, sens: 90, fpr: 5, unit: "patients" }),
      deciding: ["h", "s1", "s2"],
      reason: ["Out of 1,000 of these patients, 500 have Ridge fever and the test finds 450. Of the 500 who do not, it wrongly flags 25, so 475 test positive and 450 of them have it, over 9 in 10."],
      need: "Nothing more is needed for patients like these. For people with no rash, far fewer would have it."
    }),
    statsWhole({
      id: "q-brookline", fit: "unclear", line: "s1",
      claim: ["Driving in Brookline is safer than anywhere else in the state", [["Brookline’s drivers are the best in the state", "mixed-claim"], ["Brookline has the fewest crashes in the country", "mixed-who"]]],
      blocks: [{ kind: "article", form: "news", source: "Brookline Bugle · Roads",
        headline: statsLine("h", "Brookline is the safest city in the state for drivers"),
        lines: [
          statsLine("s1", "Brookline had 300 car crashes last year, the fewest of any city in the state."),
          statsLine("s2", "Mayor Jo Kim thanked drivers for taking care.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["300 is a total. The story never says how many people or how much driving each city has, so a small city could have the fewest crashes and the most for its size. You cannot tell."],
      need: "You would need crashes for each city’s size, such as crashes for every 1,000 drivers."
    }),
    statsWhole({
      id: "q-diner", fit: "outruns", line: "s1",
      claim: ["Most people in Fairview like Main Street Diner best", [["Most readers who voted on the website picked Main Street Diner", "mixed-who"], ["Main Street Diner has the best food in Fairview", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Fairview Gazette · Food",
        headline: statsLine("h", "Fairview’s favorite: Main Street Diner wins readers’ poll"),
        lines: [
          statsLine("s1", "Of the 2,300 readers who voted on our website, 64% picked Main Street Diner."),
          statsLine("s2", "Voting was open to anyone, and the diner asked its customers to vote.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["The voters chose to vote, and the diner asked its own customers to. They are not a fair picture of Fairview, however many voted."],
      need: "You would need Fairview residents picked by chance, asked the same question."
    }),
    statsWhole({
      id: "q-yoga", fit: "outruns", line: null,
      claim: ["Doing yoga prevents back pain", [["People who do yoga had less back pain", "heard-link"], ["Yoga cures back pain in a week", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Harbor Ledger · Health",
        headline: statsLine("h", "Yoga keeps back pain away, survey finds"),
        lines: [
          statsLine("s1", "People who do yoga had less back pain, a survey of 1,500 adults found.", { note: "That is how many were asked, not how much less pain." }),
          statsLine("s2", "The yoga group was also younger and less often worked jobs that involve lifting.", { para: true })] }],
      deciding: ["h", "s1", "s2"],
      reason: ["People chose yoga, and the yoga group was younger and lifted less at work. Either could explain less back pain, so the claim that yoga keeps it away goes too far."],
      need: "You would need adults split by chance into yoga and no yoga."
    }),
    statsWhole({
      id: "q-fairfield", fit: "holds", line: null, redraw: "from-zero",
      claim: ["Fairfield sent about a tenth less trash to the dump this year", [["Fairfield recycled a tenth more this year", "mixed-claim"], ["Fairfield sent half as much trash to the dump", "mixed-claim"]]],
      blocks: [
        { kind: "article", form: "post", source: "Town of Fairfield · 1d",
          lines: [
            statsLine("s1", "The trash we send to the dump fell by a tenth this year.", { note: "That repeats the claim; the tons are only on the chart." }),
            statsLine("s2", "Thank you for sorting your bins.")] },
        { kind: "chart", type: "bars", title: "Trash sent to the dump", x: ["Last year", "This year"], y: { from: 420, to: 520, step: 20, unit: "tons" }, series: [{ values: [500, 450] }], labels: true, source: "Town of Fairfield, dump scale" }],
      change: { prompt: "By what percent did the trash sent to the dump change, up or down?", from: 500, to: 450, traps: statsChangeTraps({ from: 500, to: 450, axisFrom: 420 }) },
      deciding: ["s1"],
      reason: ["No sentence gives a number; the chart does. Its scale starts at 420, which makes the drop look bigger, but 500 to 450 tons is down 50: 50 ÷ 500 × 100 = 10, down 10%, a tenth, as the post says."],
      need: "Nothing more is needed for the size. The post does not say why it fell."
    }),
    statsWhole({
      id: "q-harlow", fit: "holds", line: "s1",
      claim: ["About three in four Harlow households have a pet", [["About three in four Harlow households have a dog", "mixed-claim"], ["About three in four Harlow households have two pets or more", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Harlow Herald · Neighbors",
        headline: statsLine("h", "Three in four Harlow households have a pet, county survey finds"),
        lines: [
          statsLine("s1", "The county asked 2,000 households, picked at random from its address list, and 1,500 said they have a pet."),
          statsLine("s2", "Dogs and cats were the most common.", { para: true })] }],
      deciding: ["h", "s1"],
      reason: ["2,000 households picked at random is a fair picture of Harlow, and 1,500 of 2,000 is three in four."],
      need: "Nothing more is needed for Harlow. The headline claims no more."
    }),
    statsWhole({
      id: "q-zentra", fit: "holds", line: "s2",
      claim: ["Zentra spray makes people with hay fever have half as many sneezing days", [["People who use Zentra have fewer sneezing days", "heard-link"], ["Zentra spray cures colds", "mixed-claim"]]],
      blocks: [{ kind: "article", form: "news", source: "Daily Wire Feed · Health",
        headline: statsLine("h", "Zentra spray halves hay fever sneezing days, trial finds"),
        lines: [
          statsLine("s1", "300 adults with hay fever were split by coin toss: half used Zentra, half a dummy spray that looks the same.", { note: "That is how the groups were formed, not the result." }),
          statsLine("s2", "Over the spring, the Zentra group had 10 sneezing days on average, against 20 for the others.")] }],
      change: { prompt: "By what percent did sneezing days differ, from the dummy spray to Zentra, up or down?", from: 20, to: 10, traps: statsChangeTraps({ from: 20, to: 10, axisFrom: 0 }) },
      deciding: ["h", "s1", "s2"],
      reason: ["A coin toss split the groups and the dummy spray takes care of feeling better just from using something, so only luck is left, and with 300 people luck is unlikely to make a gap this big. 20 days to 10 is half, as the headline says."],
      need: "Nothing more is needed. The headline claims only hay fever."
    }),
    statsWhole({
      id: "q-phones", fit: "unclear", line: null,
      claim: ["Most teachers want phones banned in class", [["Most parents want phones banned in class", "mixed-who"], ["Banning phones makes students learn more", "heard-cause"]]],
      blocks: [{ kind: "article", form: "post", source: "Chalk Talk · @chalktalk · 8h",
        lines: [
          statsLine("s1", "Most teachers say phones should be banned in class! 📵", { note: "That repeats the claim; it gives no number." }),
          statsLine("s3", "A new survey says so."),
          statsLine("s2", "Share if you agree.")] }],
      deciding: ["s1"],
      reason: ["The post gives no number, and does not say who ran the survey, who was asked or how many. With nothing to check, you cannot tell."],
      need: "You would need the survey’s numbers and who was asked."
    })
  ]);
})();
