// Civics, lesson 12: The 1800s to 1877 (part 12). Questions 90 to 99 of the list, read the historian's way (C11, C12): the century in its order, the Civil
// War cause by cause (new land, the fight over slavery in it, Lincoln's election, secession: C24), and one claim checked against the paper it comes from (the Emancipation Proclamation: whom it freed, and when slavery ended
// everywhere). Dates from M-1778 and docs/research/civics.md C23. Then the questions from memory in three groups, with the timeline, and a recall check
// of all 11, 10 to pass.
FC.lesson("civics", {
  id: "l12", part: "12", title: "The 1800s to 1877", rev: 1, status: "live",
  history: [{ rev: 1, date: "2026-10-22", change: "First version, built to the plan in docs/subjects/civics/plan.md. Not tried on a phone yet." }],
  why: [
    "Ten questions are about the 1800s: the country grows, splits in a civil war, and writes the end of slavery and the vote for every man into the Constitution.",
    "Use the same three moves as before: put each event in its time, find what led to it, and find where a claim comes from."
  ],
  flow: [
    { title: "The century in order",
      show: [
        { kind: "document", form: "table", title: "From a purchase of land to the Civil War, cause by cause", head: ["When", "What happened, and what it led to"], rows: [
          { id: "e-1803", cells: ["1803", "The United States buys the Louisiana Territory from France. Jefferson doubles the size of the country."] },
          { id: "e-1812", cells: ["1812", "The War of 1812, with Madison as president"] },
          { id: "e-1846", cells: ["1846 to 1848", "The Mexican-American War. Mexico gives up about 525,000 square miles to the United States."] },
          { id: "e-land", cells: ["After 1848", "All this new land led to the question that split the country: could the national government keep slavery out of the territories that were not yet states? Free states and slave states would not give way."] },
          { id: "e-1860", cells: ["1860 and 1861", "Abraham Lincoln, against letting slavery spread into the territories, is elected president. Seven slave states of the deep South leave the Union and form the Confederate States of America."] },
          { id: "e-1861", cells: ["April 1861", "Shots at Fort Sumter start the Civil War, the war between the North and the South"] },
          { id: "e-1863", cells: ["1863", "January 1: the Emancipation Proclamation"] },
          { id: "e-1865", cells: ["April 1865", "The surrender at Appomattox ends the fighting"] }] },
        { kind: "prose", text: "Lincoln was the 16th president. He led the United States during the Civil War, saved the Union, freed the slaves and delivered the Gettysburg Address. Other events of the war: the battles of Gettysburg, Vicksburg and Antietam (also called Sharpsburg), Sherman’s March, and Lincoln was assassinated." }
      ] },
    { title: "After the war: three amendments",
      show: [
        { kind: "document", form: "table", title: "What the Civil War led to", head: ["When", "Amendment", "What it says"], rows: [
          { id: "a-13", cells: ["1865", "13th", "Slavery ends everywhere. The Civil War is the war that ended slavery."] },
          { id: "a-14", cells: ["1868", "14th", "All persons born or naturalized in the United States are citizens."] },
          { id: "a-15", cells: ["1870", "15th", "No man can be kept from voting because of his race. On paper, all men got the right to vote after the Civil War, during Reconstruction."] }] },
        { kind: "prose", text: "In the 1800s, women such as Susan B. Anthony, Elizabeth Cady Stanton, Sojourner Truth, Harriet Tubman, Lucretia Mott and Lucy Stone led the women’s rights movement." }
      ] },
    { title: "Where a claim comes from",
      show: [
        { kind: "pair",
          a: { kind: "prose", text: "The claim: “Lincoln freed the slaves with the Emancipation Proclamation.” The interview accepts it." },
          b: { kind: "prose", text: "The paper itself, issued January 1, 1863, freed the slaves in the Confederate states, the states that had left the Union. Slavery in the loyal border states ended only with the 13th Amendment, in 1865." },
          compare: "Go to the paper and its date. The short claim is the interview’s answer; the paper tells you whom it freed and when slavery ended everywhere." }
      ] },
    { set: { items: ["q90", "q91", "q92"], order: "listed" } },
    { set: { items: ["q93", "q95", "q96", "q94"], order: "listed" } },
    { set: { items: ["q97", "q98", "q99", "t-1800s"], order: "shuffle", mix: { from: ["l11"], share: 0.25 } } }
  ],
  check: {
    items: ["q90", "q91", "q92", "q93", "q94", "q95", "q96", "q97", "q98", "q99", "t-1800s"],
    recall: true, order: "shuffle", feedback: "at-end",
    pass: [{ right: { min: 10 } }]
  }
});
