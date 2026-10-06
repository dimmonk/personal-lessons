// Wealth Preservation, Unit Five: the rest of stage four (the cases whose story misleads), the reverse items of stage two (one for each
// name), and the faulty claims of the last stage. echo names a teaching case of a DIFFERENT name whose story the case is built to bring
// back, so that the second look ("does it look like a case you know?") is practiced where the likeness points the wrong way. also
// lists an answer the case shows as well as its own, which loses to its own by a tie-break in the key.
// A reverse item gives the name and asks what you would expect: every choice is what one of the five names sounds like (voice), so no
// choice is a false statement. A claim is something a person might say. ask is either
//   { type: 'missing', name }          "what would you need to see before this name could be used?" (choices: the key's needs lines)
//   { type: 'option', step, answer }   the key's question, asked of what the claim describes
// fault says what is wrong with the claim; corrected puts it right, and is always shown last. Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [

  /* ---------- Stage four, continued: varied ---------- */
  { id: 'h-r-annuity', use: 'drill', tier: 'varied', setting: 'retirement', topic: 'a retiree’s renewed papers and a talk about a gifting plan',
    text: "Marcel, 71, lives on a pension that pays him all he spends and stops when he dies. His home and savings come to $150,000. His will, forms and power of attorney were renewed this year, and his sister is the person named on all three. At a talk, a speaker suggested that everybody with a home should pay $900 for a 'gifting plan' to cut their tax at death. His estate is far below the tax-free limit for estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: "a 'gifting plan' to cut their tax at death", H1: ['His home and savings come to $150,000', 'renewed this year, and his sister is the person named on all three'] },
    reason: { D1: 'The case is about what would happen to his money when he dies, and the speaker’s suggestion is what raises it: {cue:D1}. Nothing here comes out every year or is held in one thing.',
              H1: 'Every paper is current: {cue:H1}. $150,000 is far below the tax-free limit, so the tax would be $0, and his pension pays him only what he spends, so there is nothing to give away. The plan answers a tax bill that does not exist.' },
    not: { outcome: 'gifting', why: 'Gifts reduce a tax bill, and here there is none: the estate is far below the limit. His pension pays him just what he spends, so nothing is spare.' } },

  { id: 'h-r-lettings', use: 'drill', tier: 'varied', setting: 'property', topic: 'six rented buildings and a surplus of rent',
    text: "Sheena and Tom, 70 and 71, own six small apartment buildings that they rent out, worth $40,000,000 together, and have $5,000,000 in savings. After costs the rents bring in $1,600,000 a year, and they spend about $400,000. Their wills, forms and powers of attorney were renewed last fall. They have three daughters, who get on well. Nothing they own is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Sheena has asked what the tax would take when they die.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'Sheena has asked what the tax would take when they die', H1: ['worth $40,000,000 together, and have $5,000,000 in savings', 'the rents bring in $1,600,000 a year, and they spend about $400,000'] },
    reason: { D1: 'The case is about what the tax would take when they die: {cue:D1}. The buildings are rented out, but nothing here is a charge, a loan or a fall in prices.',
              H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $45,000,000 is far above the limit for a couple, and every $1,000,000 above it costs $400,000. They have $1,200,000 a year more than they spend, and nothing is about to rise sharply.' },
    not: { outcome: 'simple', why: 'Their papers are current, and the daughters get on well, but the estate is far above the limit and they have money they do not need.' } },

  /* ---------- Stage four, continued: misleading ---------- */
  { id: 'h-r-brothers', use: 'drill', tier: 'misleading', setting: 'business', topic: 'a boat-hire firm, two sons who will not work together, and a family trust salesman', echo: 'm-anselm',
    text: "Orlando, 78, owns a boat-hire firm worth $300,000. His will leaves it equally to his sons Fritz and Gunnar, and his will, forms and power of attorney were renewed last year. A man who phoned him last week said that anyone with a family firm needs a trust. Fritz has told Orlando he will not work with Gunnar and will sell his half to the first buyer. Gunnar has said he will never allow a stranger into the firm.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'His will leaves it equally to his sons Fritz and Gunnar', H1: 'Fritz has told Orlando he will not work with Gunnar and will sell his half to the first buyer. Gunnar has said he will never allow a stranger into the firm' },
    reason: { D1: 'The case is about who will receive the firm: {cue:D1}. Nothing comes out every year, and nothing is held in one thing that a lawsuit or loan could reach.',
              H1: 'Control will pass to two people who cannot agree: {cue:H1}. One will sell to a stranger and the other will not allow it. The papers are current and $300,000 is far below the limit, so neither is the problem.' },
    not: { outcome: 'trust', why: 'A family trust has been mentioned, and a trustee might be part of the answer. But the case has no tax to answer and nothing expected to rise. What it shows is two people who cannot agree.' } },

  { id: 'h-r-widowfarm', use: 'drill', tier: 'misleading', setting: 'property', topic: 'a farm, a son with a poor record, and {t:poa} naming a dead husband', echo: 'm-wilf',
    also: ['people'],
    text: "Hester, 81, a widow, will leave her farm, worth $420,000, to her son Gareth, who has twice lost money in business and has asked her to sign the farm over to him early. Her will and the beneficiary form on her IRA are current. The power of attorney she signed in 2004 names her husband, who died in 2015, and nobody else. Her estate is far below the tax-free limit for estate tax.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'will leave her farm, worth $420,000, to her son Gareth', H1: 'The power of attorney she signed in 2004 names her husband, who died in 2015, and nobody else' },
    reason: { D1: 'The case is about who will receive the farm and who could act for her: {cue:D1}. Nothing comes out every year, and nothing is held in one thing that a lawsuit or loan could reach.',
              H1: 'One of the three papers names someone who has died: {cue:H1}. If Hester had a stroke, nobody could act for her. Gareth’s record is a risk in a person and is in the case, but a paper comes first. The estate is far below the limit.' },
    not: { outcome: 'governance', why: 'Gareth’s two business losses and his request make the case look like a risk in a person, and they are in the case. When a case shows both, the papers come first, and here the power of attorney names a man who has died.' } },

  { id: 'h-r-golfer', use: 'drill', tier: 'misleading', setting: 'health', topic: 'a rich man with memory loss and no power of attorney', echo: 'm-harold',
    also: ['bigestate'],
    text: "Desmond, 72, plays golf three times a week. His house and investments are worth $30,000,000, and his investments pay him $500,000 a year more than he spends. Nothing he owns is expected to change much in value. His will and the beneficiary forms on his IRA and his life insurance are current. He has never signed a power of attorney, and since last spring his doctor has been treating him for memory loss. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and he is far above it.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'since last spring his doctor has been treating him for memory loss', H1: 'He has never signed a power of attorney' },
    reason: { D1: 'The case is about a time when someone else may have to act for him: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'One of the three papers does not exist: {cue:H1}. The estate is above the limit and he has money to spare, which makes the case look like a large estate, but the papers come first. If he can no longer sign, {t:poa} cannot be made.' },
    not: { outcome: 'gifting', why: 'The estate above the limit and spare income are in the case, so it looks like {o:gifting}. When a case shows both, the papers come first, and here one of the three papers is missing.' } },

  { id: 'h-r-shipyard', use: 'drill', tier: 'misleading', setting: 'business', topic: 'a shipyard which may win a Navy contract', echo: 'm-harold',
    also: ['bigestate'],
    text: "Ingvar, 68, owns a small shipyard worth $2,000,000. If it wins a Navy contract this spring, a banker says it would be worth $20,000,000. His house and investments come to $30,000,000, his investments pay him $500,000 a year more than he spends, and his will, forms and power of attorney are current. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Ingvar has asked his lawyer what his two sons would receive when he dies.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'Ingvar has asked his lawyer what his two sons would receive when he dies', H1: 'If it wins a Navy contract this spring, a banker says it would be worth $20,000,000' },
    reason: { D1: 'The case is about what his sons would receive after the tax: {cue:D1}. No charge, loan, fall in prices or bill is in it.',
              H1: 'Something he holds is expected to rise sharply: {cue:H1}. $2,000,000 would become $20,000,000, which is $18,000,000 more in the estate and $7,200,000 more tax. The estate is already above the limit and he has spare income, as with {o:gifting}, but yearly gifts could not touch the rise.' },
    not: { outcome: 'gifting', why: 'The estate is above the limit and he has money to spare, which fits {o:gifting}. When a case shows both, the rise comes first, because it is the larger problem and has a deadline.' } },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'h-rev-papers', use: 'drill', kind: 'reverse', outcome: 'basicdocs', expect: 'find',
    options: [
      { text: 'The beneficiary form on her IRA names a husband who has died.', voice: 'basicdocs' },
      { text: 'His estate is $30,000,000 and he spends far less than he receives.', voice: 'gifting' },
      { text: 'An appraiser says the land could be worth ten times as much once it is rezoned.', voice: 'trust' },
      { text: 'The three heirs have not spoken since the funeral.', voice: 'governance' }
    ],
    why: 'That detail is a paper that no longer matches the person’s life: a form that names someone who cannot receive the money.' },

  { id: 'h-rev-simple', use: 'drill', kind: 'reverse', outcome: 'simple', expect: 'hear',
    options: [
      { text: '“We did the wills, the forms and the power of attorney in the spring, and we’re well under the limit.”', voice: 'simple' },
      { text: '“I never got around to a will.”', voice: 'basicdocs' },
      { text: '“We have more than we’ll ever spend, and the IRS takes forty percent of everything over the limit.”', voice: 'gifting' },
      { text: '“He’ll have it gone in a year.”', voice: 'governance' }
    ],
    why: 'The speaker says that every paper is current and that the estate is below the limit. Nothing is left in question.' },

  { id: 'h-rev-gifting', use: 'drill', kind: 'reverse', outcome: 'gifting', expect: 'find',
    options: [
      { text: 'Investments that pay far more than the owner spends, and an estate well above the tax-free limit.', voice: 'gifting' },
      { text: 'A will that names someone who has died.', voice: 'basicdocs' },
      { text: 'A buyer who has agreed to pay ten times the present value.', voice: 'trust' },
      { text: 'A son who has borrowed money from his father four times.', voice: 'governance' }
    ],
    why: 'That detail shows {t:estate} above the limit and money the owner does not need, with nothing about to rise sharply.' },

  { id: 'h-rev-trust', use: 'drill', kind: 'reverse', outcome: 'trust', expect: 'hear',
    options: [
      { text: '“The county has zoned it for houses, so it will be worth ten times as much.”', voice: 'trust' },
      { text: '“I haven’t looked at the form since I changed jobs.”', voice: 'basicdocs' },
      { text: '“We have more than we need, and the tax will take a big slice.”', voice: 'gifting' },
      { text: '“Those two will never agree.”', voice: 'governance' }
    ],
    why: 'The speaker expects something they hold to be worth far more soon, and that is what makes the tax on it large. The usual way to move it is {t:trustword}, but the name is for the move and not for the tool.' },

  { id: 'h-rev-people', use: 'drill', kind: 'reverse', outcome: 'governance', expect: 'find',
    options: [
      { text: 'An heir who is about to marry and has said what he will do with the money.', voice: 'governance' },
      { text: 'A will written before the youngest child was born.', voice: 'basicdocs' },
      { text: 'An estate of $40,000,000 and spare income.', voice: 'gifting' },
      { text: 'A small firm that a bidder wants to buy.', voice: 'trust' }
    ],
    why: 'That detail is a risk in the person who will receive the money. Nothing about it is a paper or a sum.' }
]);
