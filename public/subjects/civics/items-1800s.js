// Civics, lesson 12: The 1800s to 1877 (part 12). Questions 90 to 99 of the 2025 civics test (USCIS form M-1778, 09/25: the subject record's refs), in the
// list's wording and with its accepted answers, and one timeline from the Louisiana Purchase to the 15th Amendment (dates from M-1778, the Office of the
// Historian, the National Park Service and the National Archives, docs/research/civics.md C23). Each question is a topic of its own; so is the timeline.
// Checked against the list by tests/civics-pure.mjs.
(() => {
  const SAY_IT = "Say your answer out loud, then type it.";
  const question = (n, words, accept, reason, extra = {}) => ({ id: "q" + n, strand: "q" + n, facets: {}, blocks: [{ kind: "spoken", text: words }],
    asks: [{ id: "say", kind: "text", prompt: SAY_IT, accept, ...extra }], reason });
  FC.items("civics", [
    question(90, "What territory did the United States buy from France in 1803?",
      ["Louisiana Territory", "Louisiana"],
      "In 1803 the United States bought the Louisiana Territory from France. It doubled the size of the country."),
    question(91, "Name one war fought by the United States in the 1800s.",
      ["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"],
      "Name any one. The War of 1812, the war with Mexico from 1846 to 1848, the Civil War from 1861 to 1865, and the war with Spain in 1898."),
    question(92, "Name the U.S. war between the North and the South.",
      ["The Civil War"],
      "The Civil War was fought between the North and the South, from 1861 to 1865."),
    question(93, "The Civil War had many important events. Name one.",
      ["(Battle of) Fort Sumter", "Emancipation Proclamation", "(Battle of) Vicksburg", "(Battle of) Gettysburg", "Sherman’s March", "(Surrender at) Appomattox", "(Battle of) Antietam/Sharpsburg", "Lincoln was assassinated."],
      "Name any one. It began with shots at Fort Sumter in April 1861, and the fighting ended at Appomattox in April 1865."),
    question(94, "Abraham Lincoln is famous for many things. Name one.",
      ["Freed the slaves (Emancipation Proclamation)", "Saved (or preserved) the Union", "Led the United States during the Civil War", "16th president of the United States", "Delivered the Gettysburg Address"],
      "Name any one. He was the president who led the country through the Civil War and kept it one country."),
    question(95, "What did the Emancipation Proclamation do?",
      ["Freed the slaves", "Freed slaves in the Confederacy", "Freed slaves in the Confederate states", "Freed slaves in most Southern states"],
      "Lincoln’s proclamation of January 1, 1863 freed the slaves in the states that had left the Union. Slavery in the loyal border states was left alone until the 13th Amendment ended it everywhere in 1865."),
    question(96, "What U.S. war ended slavery?",
      ["The Civil War"],
      "The Civil War ended slavery. The 13th Amendment, added in 1865 as the war ended, wrote it into the Constitution."),
    question(97, "What amendment says all persons born or naturalized in the United States, and subject to the jurisdiction thereof, are U.S. citizens?",
      ["14th Amendment"],
      "The 14th Amendment, added in 1868, makes everyone born or naturalized here a citizen."),
    question(98, "When did all men get the right to vote?",
      ["After the Civil War", "During Reconstruction", "(With the) 15th Amendment", "1870"],
      "The 15th Amendment of 1870 said no man could be kept from voting because of his race. That was the law on paper. In practice, poll taxes and literacy tests that many southern states adopted after the war kept many Black men from voting."),
    question(99, "Name one leader of the women’s rights movement in the 1800s.",
      ["Susan B. Anthony", "Elizabeth Cady Stanton", "Sojourner Truth", "Harriet Tubman", "Lucretia Mott", "Lucy Stone"],
      "Name any one. They worked for women’s rights in the 1800s; women won the vote across the country in 1920."),
    { id: "t-1800s", strand: "t-1800s", facets: {}, blocks: [{ kind: "prose", text: "From a purchase of land to the end of the war and the vote for every man." }],
      asks: [{ id: "order", kind: "order", prompt: "Tap them in the order they happened, the first one first.", scored: "whole",
        steps: [{ id: "louisiana", text: "The United States buys Louisiana from France." }, { id: "mexico", text: "The United States declares war on Mexico." },
          { id: "sumter", text: "Shots are fired at Fort Sumter." }, { id: "proclamation", text: "Lincoln issues the Emancipation Proclamation." },
          { id: "fifteenth", text: "The 15th Amendment: no man kept from voting because of his race." }],
        right: ["louisiana", "mexico", "sumter", "proclamation", "fifteenth"],
        then: "Louisiana in 1803; war with Mexico in 1846; Fort Sumter in 1861; the proclamation on January 1, 1863; the 15th Amendment in 1870." }],
      reason: "The proclamation came in the middle of the war, and the vote for every man came after it was over." }
  ]);
})();
