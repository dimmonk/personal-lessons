// Wealth Preservation, Unit Five: the faulty claims of the last stage. A claim is something a person might say. ask is either
//   { type: 'missing', name }          "what would you need to see before this name could be used?" (choices: the key's needs lines)
//   { type: 'option', step, answer }   the key's question, asked of what the claim describes
// fault says what is wrong with the claim; corrected puts it right, and is always shown last. The first claim is worked for the learner.

FC.cases('wealth', 'u5', [

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'h-c-demo', use: 'claim',
    text: '"Everyone with money should have a trust. It’s what rich families do."',
    ask: { type: 'missing', name: 'trust' },
    fault: 'The claim names a structure before it names a problem. The arrangement the claim names, {t:trustword}, is a tool, and it is the answer {o:trust} only when something the owner holds is expected to rise sharply and the tax on the rise would be large. Nothing in the claim shows that, or anything else, and it costs money to set up and every year to run. “What rich families do” is not a reason that a particular case needs one.',
    corrected: 'The arrangement is worth looking at when something I hold could be worth many times more soon and the tax on the rise would be larger than the cost. It would be {o:trust} only if I could point to this: {needs:trust}. If I cannot, it answers nothing in my case.' },

  { id: 'h-c-seventy', use: 'claim',
    text: '"Seventy percent of wealthy families lose their money by the second generation, so the only thing that matters is family rules for the money."',
    ask: { type: 'missing', name: 'governance' },
    fault: 'The claim gives a percentage and names no way the money was lost. Money can go to tax, to papers that were never put right, to a business that failed, to the people who inherited it, or to something else, and each has a different cure. A figure that does not say which has been counted cannot tell you what to do. It also leaves out who counted, what counted as lost, and which families were counted. The question the claim skips is {q:H1}, and {o:governance} needs words in a case that show a risk in the people.',
    corrected: 'If the figure is right, the first thing to ask is how the money was lost, and who counted. For my own case I ask what could go wrong: the papers, the tax, or the people. I use family rules only if I can point to a risk in a person.' },

  { id: 'h-c-will', use: 'claim',
    text: '"I’m 41 and healthy, so I’ll get my will done when I’m older. Nothing can go wrong before then."',
    ask: { type: 'missing', name: 'basicdocs' },
    fault: 'The claim treats the papers as something for the old. A handover does not wait for old age: an illness or an accident can leave someone unable to act at any age, and a form can name a former partner at 41 as easily as at 81. “Nothing can go wrong” is true only if all three papers exist and still name the right person, and the claim does not say that.',
    corrected: 'I’m 41 and healthy, and that tells you nothing about my papers. It would be {o:basicdocs} if I had no will, no power of attorney, or a form that names someone it should not. So the question is whether each paper exists and still names the right person.' },

  { id: 'h-c-safe', use: 'claim',
    text: '"I’m 70, my house and savings are $300,000, and my will, forms and power of attorney were all renewed in March. My adviser says everyone needs a trust to be safe. A trust protects against everything."',
    ask: { type: 'option', step: 'H1', answer: 'inorder' },
    fault: 'The claim treats a family trust as protection against everything. It answers one thing, tax on a rise in something the owner holds, and nothing in what is described raises that. The estate is far below the tax-free limit, every paper is current, and nothing is said about the people. So there is nothing for a family trust to answer, and it would cost money to set up and every year to run.',
    corrected: 'My house and savings are $300,000 and all three papers were renewed in March. Nothing in that raises a problem for a family trust to answer. I would ask what could go wrong in my case that it answers, in numbers. If the answer is nothing, the case is {a:H1.inorder}.' }
]);
