// Wealth Preservation, Unit Five, part two (first half): the word estate, and the first of the two tax names.

FC.cards('wealth', 'u5', [

  /* ---------- The word the tax names are built on ---------- */
  { id: 'term-estate', kind: 'term', term: 'estate',
    h: 'Everything a person leaves',
    link: 'The papers decide who gets the money. The next two names are about a different loss at the handover: tax taken before anyone receives anything. To see it you need one word.',
    case: 't-estate',
    plain: [
      'Add up what Ruth owns: the house, £700,000; the savings, £350,000; the shares, £150,000. That comes to £1,200,000, and she owes nothing. Everything she owns on the day she dies, added together, is one number. It is what she leaves.',
      'In this country the tax does not take a part of all of it. It takes 40% of whatever is above £500,000. Ruth’s £1,200,000 is £700,000 above that line, and 40% of £700,000 is £280,000. Her children would receive £1,200,000 less £280,000, which is £920,000. The first £500,000 carries no tax at all.'
    ],
    after: [
      'Two things about that number decide whether tax is a problem: how large it is compared with the line, and what is in it. Something in it that grows makes the number larger by the day it is added up.',
      'The line and the rate are invented, and the same ones are used in every case in this unit so that the sums can be followed. Real countries have their own, they differ a great deal, and they change. The ways the tax can bite are the same.'
    ] },

  /* ---------- Give some away each year ---------- */
  { id: 'meet-gifting', kind: 'meet', outcome: 'gifting',
    link: 'You now have the word for the tax. Here is the first of the two names about it, in the plainest case: the estate that is above the line, and nothing about it that is going to change.',
    case: 'm-harold', mark: 'H1',
    strip: [
      'One widower who will leave £1,150,000, and a tax on whatever he leaves above £500,000.',
      'He has more than he needs: his income is £6,000 a year more than he spends, and the savings only grow.',
      'Nothing he owns is expected to rise sharply.',
      'His papers are in order, so nothing here is about paper or about the people.'
    ],
    explain: [
      'First the sum. £1,150,000 less £500,000 is £650,000, and 40% of £650,000 is £260,000. If Harold died today, the tax would take £260,000 and his three grandchildren would receive the rest, £890,000. Nothing is taken from Harold while he lives. The loss comes once, at the handover, and it is a sum that a family would feel.',
      'Now what he can do about it. The tax is charged on what he leaves, so money he no longer owns is not in the sum. Harold has more than he needs: £34,000 comes in and £28,000 goes out, and the savings sit there. He can give some of that away while he is alive. In this country each person may give away £3,000 a year to anyone, and a gift of that size does not count. Three grandchildren at £3,000 each is £9,000 a year. After ten years that is £90,000 that is no longer in his estate, and the tax saved is 40% of £90,000, which is £36,000.',
      'It is small in a year and large in a decade, and the number of years is what does the work, so it starts early. It also needs no structure and costs nothing to run. The country also counts a bigger gift as still the giver’s if the giver dies within seven years, so the small yearly gifts that need no waiting are where this starts. Harold gives only what he truly does not need, because a gift cannot be taken back.',
      'This is one of the places where real rules differ. The size of the yearly gift, the waiting time, and whether a gift counts at all are each set by the country, and each changes. The pattern is the same everywhere: tax on what is left, and spare money that can be given away while the owner is alive.'
    ],
    feature: { step: 'H1', option: 'bigestate' },
    name: 'The name for this is {o:gifting}. It means giving some of the spare money away, a little at a time, every year, while the owner is alive, so that less is left to be taxed.' },

  { id: 'again-gifting', kind: 'again', outcome: 'gifting',
    link: 'Harold’s case gave you what to point to: {needs:gifting}. Here is a second case with a different story: two people, a rented flat, and a larger estate.',
    first: 'm-harold', second: 'a-gwen', step: 'H1',
    instruction: 'Find what the two cases share. Ignore that one is a widower and the other a couple, and that one has rented property. Look at one thing only: what shows that there is more than the owner needs.',
    prompt: { kind: 'phrase', answer: 'The rent and their pensions bring in £62,000 a year, and they spend about £40,000' },
    shared: [
      'Harold takes in £6,000 a year more than he spends, and Gwen and Hugo take in £22,000 more. In both cases the extra is not being used: it piles up in the savings. £1,650,000 less £500,000 is £1,150,000, and 40% of that is £460,000 of tax at the handover. Ten years of £3,000 gifts to each of their two children is £60,000, and 40% of that is £24,000 saved.',
      'In neither case is anything expected to jump in value, and in both the papers are in order. What the two cases share is the estate above the line, money that is not needed, and nothing about to grow. That is what {o:gifting} names.'
    ] },

  { id: 'portrait-gifting', kind: 'portrait', outcome: 'gifting',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:gifting} in real life, where nobody marks the words for you.',
    typical: [
      'It starts from a sum: the owner’s house, savings, shares and business added up, which is {t:estate}, and set against the tax-free limit. Without the sum there is no case.',
      'The owner has more than they will need. That is not the same as having a lot. The test is what is left after the owner’s own spending, for the rest of their life, with a margin.',
      'Nothing in the estate is expected to rise sharply. Something that is would make the rise the larger problem.',
      'The gifts are small and regular, and they work through the number of years. That is why it suits someone who is well, who has time, and who has spare money now.',
      'It costs nothing yearly and needs no structure. A gift cannot be taken back, which is why only spare money is given.',
      'The rules about gifts are set by the country: how much each year, how bigger gifts are counted, and who may receive them.'
    ],
    not: 'Giving money away is not always {o:gifting}. A man who gives each grandchild a present every year out of savings well below the limit is being generous, and no tax would be saved. A woman who gives away money she needs for her own care has not got spare money. The name is for a sum above the limit, with spare money, and nothing about to rise sharply.',
    wild: ['“We give the grandchildren something every Christmas.”', '“The taxman takes forty per cent of everything over the limit.”', '“We’ll never spend what we have.”', '“Better to give it while I’m alive.”'],
    self: 'In your own life it is the question of what you could give away every year without noticing, and the estate it would come out of.',
    ask: '“Does the sum come to more than the tax-free limit, does the owner have spare money, and is anything in it expected to rise sharply?”',
    act: [
      'Add up everything the owner will leave: the house, savings, shares and any business, and set it against the tax-free limit in your country.',
      'Work out what the owner needs to live on for the rest of their life, with a margin. Only what is left over is spare.',
      'Look up the country’s rule for yearly gifts and for bigger gifts, and what counts as a gift.',
      'Give the spare sum in the amounts the rule allows, every year, and write down what was given and to whom.',
      'If something the owner holds is expected to rise sharply, small gifts will not be enough: look at that first.'
    ] },

  { id: 'check-gifting', kind: 'check', after: 'gifting',
    case: 'c-quentin',
    ask: { type: 'option', step: 'H1', among: ['papers', 'inorder', 'bigestate'] } },

  { id: 'look-gifting-simple', kind: 'lookalike', ledger: 'gifting~simple',
    link: 'In both of these names the papers are in order and the owner is comfortable. The difference is a sum. This card puts the two side by side.',
    cases: ['la-estate-high', 'la-estate-low'],
    instruction: 'Both cases are about Ellis, a widower of 74 with current papers. Compare one thing: his estate set against the £500,000 line, and what he has to spare.',
    prompt: { kind: 'which', option: 'H1.bigestate', answer: 'la-estate-high' },
    difference: [
      'In Case A Ellis’s estate is £1,200,000. That is £700,000 above the line, and the tax would be £280,000. His pension also pays him £20,000 a year more than he spends, so there is money to spare. The key’s answer is {a:H1.bigestate}, and the case is {o:gifting}.',
      'In Case B the estate is £430,000, which is £70,000 below the line, so the tax would be £0. His pension pays him just what he spends, so there is nothing to give. The key’s answer is {a:H1.inorder}, and the case is {o:simple}.',
      'Everything else is the same: the age, the widowhood, the papers. Only the size of the estate and what is left over differ.'
    ] }
]);
