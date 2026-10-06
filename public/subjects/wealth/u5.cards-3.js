// Wealth Preservation, Unit Five, part two (first half): the word estate, and the first of the two tax names.

FC.cards('wealth', 'u5', [

  /* ---------- The word the tax names are built on ---------- */
  { id: 'term-estate', kind: 'term', term: 'estate',
    h: 'Everything a person leaves',
    link: 'The papers decide who gets the money. The next two names are about a different loss at the handover: tax taken before anyone receives anything. To see it you need one word.',
    case: 't-estate',
    plain: [
      'Add up what Ruth owns: the house, $4,000,000; the investments, $21,000,000; the shares in her family’s firm, $5,000,000. That comes to $30,000,000, and she owes nothing. Everything she owns on the day she dies, added together, is one number. It is what she leaves.',
      'The federal estate tax does not take a part of all of it. It takes 40% of whatever is above a tax-free limit. Congress sets the limit and it is raised each year with prices, and it is so high that only the largest estates pay any estate tax at all. Ruth’s $30,000,000 is above it, so every $1,000,000 of her estate above the limit costs $400,000, and her children receive what is left. The part below the limit carries no tax at all, so a person who left $500,000 would pay none.'
    ],
    after: [
      'Two things about that number decide whether tax is a problem: how large it is compared with the limit, and what is in it. Something in it that grows makes the number larger by the day it is added up.',
      'Because the limit changes every year, the cases in this unit say whether what a person leaves is above it or below it, and use 40% for the part above it. Some states tax estates too, with a much lower limit, and a few tax what heirs inherit; the cases leave those out. The ways the tax can bite are the same.'
    ] },

  /* ---------- Give some away each year ---------- */
  { id: 'meet-gifting', kind: 'meet', outcome: 'gifting',
    link: 'You now have the word for the tax. Here is the first of the two names about it, in the plainest case: the estate that is above the limit, and nothing about it that is going to change.',
    case: 'm-harold', mark: 'H1',
    strip: [
      'One widower who will leave $40,000,000, well above the tax-free limit.',
      'He has more than he needs: his income is $400,000 a year more than he spends, and the savings only grow.',
      'Nothing he owns is expected to rise sharply.',
      'His papers are in order, so nothing here is about paper or about the people.'
    ],
    explain: [
      'First the sum. Harold’s $40,000,000 is far above the limit, so every $1,000,000 he leaves above it costs $400,000. If Harold died today, the tax would take 40% of everything above the limit, and his three grandchildren would receive the rest. Nothing is taken from Harold while he lives. The loss comes once, at the handover, and it is a sum that a family would feel.',
      'Now what he can do about it. The tax is charged on what he leaves, so money he no longer owns is not in the sum. Harold has more than he needs: $1,000,000 comes in and $600,000 goes out, and the savings sit there. He can give some of that away while he is alive. Each year a person may give up to a yearly amount to each of as many people as they like, and a gift within it is not taxed and does not count against the tax-free limit. Harold gives each of his three grandchildren $10,000 a year, well within it: $30,000 a year. After ten years that is $300,000 that is no longer in his estate, and the tax saved is 40% of $300,000, which is $120,000. Tuition or medical bills paid straight to the school or the hospital do not count as gifts at all, so he can pay those too.',
      'It is small in a year and large in a decade, and the number of years is what does the work, so it starts early. It also needs no structure and costs nothing to run. A bigger gift is not taxed when it is made, but the part above the yearly amount is taken off the tax-free limit that applies at his death, so that money is still counted; the small yearly gifts are the ones that leave the estate uncounted. Harold gives only what he truly does not need, because a gift cannot be taken back.',
      'This is one of the places where the rules change. The yearly amount is raised from time to time, and Congress can change the tax-free limit and the rate. The pattern stays the same: tax on what is left, and spare money that can be given away while the owner is alive.'
    ],
    feature: { step: 'H1', option: 'bigestate' },
    name: 'The name for this is {o:gifting}. It means giving some of the spare money away, a little at a time, every year, while the owner is alive, so that less is left to be taxed.' },

  { id: 'again-gifting', kind: 'again', outcome: 'gifting',
    link: 'Harold’s case gave you what to point to: {needs:gifting}. Here is a second case with a different story: two people, a rented building, and a larger estate.',
    first: 'm-harold', second: 'a-gwen', step: 'H1',
    instruction: 'Find what the two cases share. Ignore that one is a widower and the other a couple, and that one has rented property. Look at one thing only: what shows that there is more than the owner needs.',
    prompt: { kind: 'phrase', answer: 'The rent and their investments bring in $900,000 a year, and they spend about $300,000' },
    shared: [
      'Harold takes in $400,000 a year more than he spends, and Gwen and Hugo take in $600,000 more. In both cases the extra is not being used: it piles up in the savings. Gwen and Hugo’s $45,000,000 is far above the limit, so every $1,000,000 above it costs $400,000 at the handover. If each of them gives each of their two children $10,000 a year, that is $40,000 a year; over ten years it is $400,000, and 40% of that is $160,000 saved.',
      'In neither case is anything expected to jump in value, and in both the papers are in order. What the two cases share is the estate above the limit, money that is not needed, and nothing about to grow. That is what {o:gifting} names.'
    ] },

  { id: 'portrait-gifting', kind: 'portrait', outcome: 'gifting',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:gifting} in real life, where nobody marks the words for you.',
    typical: [
      'It starts from a sum: the owner’s house, savings, shares and business added up, which is {t:estate}, and set against the tax-free limit. Without the sum there is no case.',
      'The owner has more than they will need. That is not the same as having a lot. The test is what is left after the owner’s own spending, for the rest of their life, with a margin.',
      'Nothing in the estate is expected to rise sharply. Something that is would make the rise the larger problem.',
      'The gifts are small and regular, and they work through the number of years. That is why it suits someone who is well, who has time, and who has spare money now.',
      'It costs nothing yearly and needs no structure. A gift cannot be taken back, which is why only spare money is given.',
      'The rules about gifts are set by federal law: how much each year, how bigger gifts are counted, and what is not a gift at all, such as tuition paid straight to a school.'
    ],
    not: 'Giving money away is not always {o:gifting}. A man who gives each grandchild a present every year out of savings well below the limit is being generous, and no tax would be saved. A woman who gives away money she needs for her own care has not got spare money. The name is for a sum above the limit, with spare money, and nothing about to rise sharply.',
    wild: ['“We give the grandchildren something every Christmas.”', '“The IRS takes forty percent of everything over the limit.”', '“We’ll never spend what we have.”', '“Better to give it while I’m alive.”'],
    self: 'In your own life it is the question of what you could give away every year without noticing, and the estate it would come out of.',
    ask: '“Does the sum come to more than the tax-free limit, does the owner have spare money, and is anything in it expected to rise sharply?”',
    act: [
      'Add up everything the owner will leave: the house, savings, shares and any business, and set it against the federal tax-free limit, and your state’s limit if your state taxes estates.',
      'Work out what the owner needs to live on for the rest of their life, with a margin. Only what is left over is spare.',
      'Look up this year’s yearly gift amount, the rule for bigger gifts, and what does not count as a gift.',
      'Give the spare sum in the amounts the rule allows, every year, and write down what was given and to whom.',
      'If something the owner holds is expected to rise sharply, small gifts will not be enough: look at that first.'
    ] },

  { id: 'check-gifting', kind: 'check', after: 'gifting',
    case: 'c-quentin',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate'] } },

  { id: 'look-gifting-simple', kind: 'lookalike', ledger: 'gifting~simple',
    link: 'In both of these names the papers are in order and the owner is comfortable. The difference is a sum. This card puts the two side by side.',
    cases: ['la-estate-high', 'la-estate-low'],
    instruction: 'Both cases are about Ellis, a widower of 74 with current papers. Compare one thing: his estate set against the tax-free limit, and what he has to spare.',
    prompt: { kind: 'which', option: 'H1.bigestate', answer: 'la-estate-high' },
    difference: [
      'In Case A Ellis’s estate is $30,000,000, far above the limit, so every $1,000,000 above it would cost $400,000 in tax. His investments also pay him $500,000 a year more than he spends, so there is money to spare. The answer is {a:H1.bigestate}, and the case is {o:gifting}.',
      'In Case B the estate is $430,000, far below the limit, so the tax would be $0. His pension pays him just what he spends, so there is nothing to give. The answer is {a:H1.inorder}, and the case is {o:simple}.',
      'Everything else is the same: the age, the widowhood, the papers. Only the size of the estate and what is left over differ.'
    ] }
]);
