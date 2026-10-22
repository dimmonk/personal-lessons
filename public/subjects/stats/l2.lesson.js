// Stats, lesson 2: How big it is: out of how many (part B). Move 2 of the way of thinking, for a count: set it against how many people it is out of
// and say it as so many in 1,000 (a sum of money: for each person, for one year), then against the usual the text gives. One worked example (1,200
// cases that are 3 in 1,000); percentage points turned back into people; a first group of four with the numbers marked; a second group of five with questions of lesson 1 mixed in; a third
// group with fresh numbers; and the check: five new questions, no help, 4 of 5 to pass.
FC.lesson("stats", {
  id: "l2", part: "B", title: "How big it is: out of how many", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan (a count turned into so many in 1,000, set against the usual; percentage points turned back into people)." }],
  why: [
    "A count means little until you know out of how many. 1,200 sounds like a lot; in a city of 400,000 it is 3 in every 1,000 people.",
    "People who read numbers for a living turn a count into “so many in 1,000” before they decide whether it is big. Here you learn to do that in a few seconds."
  ],
  flow: [
    { title: "Out of how many",
      show: [
        { kind: "prose", text: [
          "To size a count, find how many it is out of, then say it as so many in every 1,000.",
          "First, find the count and the total it is out of: 1,200 people with the flu, in a city of 400,000. Second, divide the count by the total and multiply by 1,000: 1,200 ÷ 400,000 × 1,000 = 3. That is 3 in every 1,000.",
          "It works the same when the total is not whole thousands: 75 loaves returned out of 1,500 baked is 75 ÷ 1,500 × 1,000 = 50 in every 1,000.",
          "Tap the sentence that gives both the count and what it is out of. If no sentence gives both, tap Not given.",
          "Then compare it with the usual, which the text often gives in the same form: “about 6 in every 1,000 in a usual winter”. A claim of more than usual holds up when your number is clearly above the usual (a strong word such as “soar”, “boom” or “surge” needs a big rise, half again or more); a little above the usual is an ordinary year, and the same or below does not show it either. A claim of fewer than usual holds up when your number is clearly below the usual. If the text says in words that it is a usual level, that shows it too, even with no total. If the text gives no total or no usual, you cannot tell."] },
        { kind: "prose", tone: "wrong", text: [
          "“A big number means a big problem.”",
          "1,200 sounds like a lot until you see it is 3 in every 1,000. A count is big only against how many it is out of."] }
      ] },
    { title: "Percentage points",
      show: [
        { kind: "prose", text: [
          "A rate that goes “up 2 points” or “down 2 percentage points” moved by 2 in every 100 people.",
          "From 8% to 6% is down 2 points. As people, that is from 80 in 1,000 to 60 in 1,000: 20 fewer in every 1,000. Turn percents into people in 1,000 and the change is easy to see."] }
      ] },
    { title: "A sum of money",
      show: [
        { kind: "prose", text: [
          "Size a sum of money, or any amount, the same way: for each person, and for one year.",
          "$6 million over 10 years, in a city of 300,000 people: $6,000,000 ÷ 300,000 = $20 for each person, and $20 ÷ 10 years = $2 a year. A sum that sounds huge can be a few dollars each."] }
      ] },
    { worked: "w-flu" },
    { set: { items: ["p-fires", "p-potholes", "p-clinic", "p-bites"], order: "listed", support: { shown: true } } },
    { set: { items: ["q-insure", "q-bus", "q-library", "q-crash", "q-lunch", "q-cards"], order: "shuffle", mix: { from: ["l1"], share: 0.3 } } },
    { set: { items: [{ gen: "g-count-over", n: 2 }, { gen: "g-count-under", n: 2 }, "q-sweaters", "q-vote"], order: "shuffle", mix: { from: ["l1"], share: 0.3 } } }
  ],
  check: {
    items: ["k-pets", "k-flights", "k-stadium", "k-bread", "k-compost"],
    feedback: "at-end", order: "shuffle",
    pass: [{ right: { min: 4 } }, { slip: "doubted", max: 1 }]
  }
});
