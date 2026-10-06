// Scams, Unit Four: cases shown inside cards, part one (the two names about someone you know only online, and the two about
// money that is waiting for you or was lost). use 'teach' = shown in a card; 'check' = asked between cards; neither appears in the
// drill. Every case here carries the whole route (the gate, then the two questions of this unit) because the key gives every case
// one name by one route, but only the marked words of the question a card shows are used by that card.
// cues[STEP] is the exact phrase that decides that question; segments are the tappable pieces; note says why a piece is not the answer.

FC.cases('scams', 'u4', [

  /* ---------- Romance scam ---------- */
  { id: 'm-romance-engineer', use: 'teach', tier: 'clean', setting: 'relationships', topic: 'a dating site and a daughter in the hospital', name: 'The engineer abroad',
    text: "Ana is a retired teacher in Tulsa. In February she accepted a message on a dating site from a man called Daniel, who said he was a widower working as an engineer on a pipeline abroad. They wrote to each other every day, and by the summer she thought of him as her partner. Whenever she suggested a video call, the connection failed or he had to go. In October he wrote: 'My daughter has been in a car accident, and the hospital will not treat her until $4,200 is paid. Can you send it to the hospital's account today? I will pay you back when I land.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: "Can you send it to the hospital's account today?",
            M1: 'My daughter has been in a car accident, and the hospital will not treat her until $4,200 is paid',
            M2: 'the hospital will not treat her until $4,200 is paid' } },

  { id: 'm-romance-ticket', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a gardening forum and a stolen bag', name: 'The nurse with no camera',
    text: "Hugh, a retired bus driver, joined a gardening forum last winter, and a woman called Elena began writing to him privately. For five months they swapped photographs of their gardens, and she told him she was a nurse on a short contract abroad. Her camera never worked on the calls they planned. Last week she wrote: 'My bag was stolen at the airport, with my passport and my card. I just need $900 for a ticket, and then I can finally come and meet you.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: 'I just need $900 for a ticket', M1: 'My bag was stolen at the airport, with my passport and my card', M2: 'My bag was stolen at the airport, with my passport and my card' },
    segments: [
      { text: 'For five months they swapped photographs of their gardens', note: 'This is how Hugh knows her: only through messages. It matters, but it is not the trouble the money is for.' },
      { text: 'Her camera never worked on the calls they planned', note: 'This shows that he has never seen her live. It is part of the picture, and it is not the words that say what the money is for.' },
      { text: 'My bag was stolen at the airport, with my passport and my card' },
      { text: 'I just need $900 for a ticket, and then I can finally come and meet you', note: 'This is the request itself. The words to tap are the trouble she gives as the reason for it.' }
    ] },

  { id: 'm-romance-check', use: 'check', tier: 'clean', setting: 'money', topic: 'a language app and a stolen bag in Lisbon',
    text: "Craig has chatted with a woman called Ioana for five months on a language-learning app and has never seen her on a live call. She writes: 'My phone and wallet were taken in Lisbon, and my bank has blocked my card. Please send $1,100 to my friend's account so that I can fly home and finally meet you.'",
    reason: { M1: 'The money is for trouble that the writer says is hers: {cue:M1}. Craig knows her only through an app, and has never seen her on a live call.' },
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: "Please send $1,100 to my friend's account", M1: 'My phone and wallet were taken in Lisbon, and my bank has blocked my card', M2: 'My phone and wallet were taken in Lisbon, and my bank has blocked my card' },
    segments: [
      { text: 'Craig has chatted with a woman called Ioana for five months on a language-learning app', note: 'This is how Craig knows her. It is not what the money is for.' },
      { text: 'has never seen her on a live call', note: 'This shows that he has never met or seen her live. It is not what the money is for either.' },
      { text: 'My phone and wallet were taken in Lisbon, and my bank has blocked my card' },
      { text: "Please send $1,100 to my friend's account", note: 'This is the request. What it is for comes in the sentence before it.' }
    ] },

  /* ---------- Pig-butchering scam ---------- */
  { id: 'm-pig-wrongnumber', use: 'teach', tier: 'clean', setting: 'money', topic: 'a wrong-number text and a trading app', name: 'The wrong number',
    text: "In March a stranger texted Lena: 'Sorry, wrong number! But you sound nice.' She replied politely, and they began to chat every day. The man, who gave his name as Kai, said he was a surveyor who traded currencies in his spare time. After six weeks he showed her how much he had made on a trading app and told her to download it. She put in $200 as a test, watched it grow to $260 in a week, and took out $100 without any trouble. Then Kai wrote: 'The platform has an offer for larger accounts this week. Put in $6,000 and your profits will triple.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { D1: 'Put in $6,000 and your profits will triple',
            M1: 'After six weeks he showed her how much he had made on a trading app and told her to download it',
            M2: 'Put in $6,000 and your profits will triple' } },

  { id: 'm-pig-crypto', use: 'teach', tier: 'clean', setting: 'work', topic: 'a new friend and a crypto platform', name: 'The jeweler and her uncle',
    text: "Femi drives a taxi. A woman called Priya, who said she designed jewelry, sent him a friend request on social media, and over two months they chatted most evenings. She said her uncle ran a cryptocurrency platform and could get him in early. She sent screenshots of her own profits and talked him through opening an account. Femi put in $500 and was shown $640 the next day. Priya wrote: 'Open the platform's premium account with $3,000 and you can earn that back every month.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { D1: "Open the platform's premium account with $3,000", M1: 'She said her uncle ran a cryptocurrency platform and could get him in early', M2: "Open the platform's premium account with $3,000" },
    segments: [
      { text: 'over two months they chatted most evenings', note: 'This shows that Femi knows her only through messages. It does not show where the money is to go.' },
      { text: 'Femi put in $500 and was shown $640 the next day', note: 'This is the small deposit that went well. It is how the scam builds trust, and it is not the new request.' },
      { text: "Open the platform's premium account with $3,000" },
      { text: 'and you can earn that back every month', note: 'This is the promise that goes with the request. The words to tap are the ones that say where the money is to go.' }
    ] },

  { id: 'm-pig-check', use: 'check', tier: 'clean', setting: 'relationships', topic: 'a match and a fund her friend manages',
    text: "Dev matched with a woman called Amelia on a dating app. After three months of messages she told him about a fund she traded in, which he could see in a link she sent. 'Move your savings into it this week,' she wrote, 'and I will guide you through every step.' They have never met.",
    reason: { M2: 'Dev is asked to put his savings into a fund that she showed him: {cue:M2}.' },
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { D1: 'Move your savings into it this week', M1: 'she told him about a fund she traded in, which he could see in a link she sent', M2: 'Move your savings into it this week' },
    segments: [
      { text: 'Dev matched with a woman called Amelia on a dating app', note: 'This is how Dev knows her. It does not say where the money is to go.' },
      { text: 'Move your savings into it this week' },
      { text: 'and I will guide you through every step', note: 'This is her offer of help. It is not where she asks him to put the money.' },
      { text: 'They have never met', note: 'This is something to point to for the first question, but it is not the request.' }
    ] },

  /* ---------- Pig-butchering scam against Romance scam: the same man, two requests ---------- */
  { id: 'm-theo-app', use: 'teach', tier: 'clean', setting: 'money', topic: 'savings into a trading app he showed her',
    text: "Mara has chatted with a man called Theo for four months on a photo-sharing app, and they have never met. He writes: 'I have been using a trading app that has doubled my money. Put $3,000 of your savings into it today, and you will see the same.'",
    outcome: 'pigbutcher', route: { D1: ['money'], M1: ['online'], M2: ['site'] },
    cues: { D1: 'Put $3,000 of your savings into it today', M1: 'I have been using a trading app that has doubled my money', M2: 'Put $3,000 of your savings into it today' } },

  { id: 'm-theo-surgery', use: 'teach', tier: 'clean', setting: 'health', topic: 'surgery for his sister',
    text: "Mara has chatted with a man called Theo for four months on a photo-sharing app, and they have never met. He writes: 'My sister needs an operation today, and the hospital wants $3,000 before it will start. Please pay it into this account. I will repay you as soon as I am back.'",
    outcome: 'romance', route: { D1: ['money'], M1: ['online'], M2: ['crisis'] },
    cues: { D1: 'Please pay it into this account', M1: 'My sister needs an operation today, and the hospital wants $3,000 before it will start', M2: 'the hospital wants $3,000 before it will start' } },

  /* ---------- Advance-fee scam ---------- */
  { id: 'm-adv-lottery', use: 'teach', tier: 'clean', setting: 'money', topic: 'a prize drawing she never entered', name: 'The drawing nobody entered',
    text: "Marta, who has never entered a competition in her life, opens an email from the 'Continental Prize Office': 'Your email address was drawn in our monthly drawing and you have won $250,000. To release your prize, you must first pay a $340 insurance and handling fee by wire transfer to the account below. The prize will be paid out within 24 hours of receipt.'",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] },
    cues: { D1: 'pay a $340 insurance and handling fee by wire transfer to the account below',
            M1: 'Your email address was drawn in our monthly drawing and you have won $250,000',
            M2: 'you must first pay a $340 insurance and handling fee' } },

  { id: 'm-adv-loan', use: 'teach', tier: 'clean', setting: 'home', topic: 'a loan approved after one form', name: 'The approved loan',
    text: "Dennis is behind on his gas bill, and he filled in a form on a website that promised loans with no credit check. An email comes back the same day: 'Congratulations, your loan of $5,000 is approved. Before we can release it, you must pay a $250 insurance deposit by wire transfer. The full amount will be in your account within the hour.'",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] },
    cues: { D1: 'you must pay a $250 insurance deposit by wire transfer', M1: 'your loan of $5,000 is approved', M2: 'Before we can release it, you must pay a $250 insurance deposit' },
    segments: [
      { text: 'filled in a form on a website that promised loans with no credit check', note: 'This is how the loan came about. It is not the payment that is asked for.' },
      { text: 'Congratulations, your loan of $5,000 is approved' },
      { text: 'Before we can release it, you must pay a $250 insurance deposit', note: 'This is the fee that comes first. The words to tap are the ones that say what is said to be waiting.' },
      { text: 'The full amount will be in your account within the hour', note: 'This is the promise that goes with the fee. It is not the fee itself.' }
    ] },

  { id: 'm-adv-check', use: 'check', tier: 'clean', setting: 'government', topic: 'a grant for new businesses',
    text: "Sade runs a small bakery. A text arrives: 'You have been selected for a $9,000 grant for small businesses. To receive it, pay a $180 registration fee to the account in this message.'",
    reason: { M1: 'The text says that a grant is waiting for Sade, which she never applied for: {cue:M1}.' },
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] },
    cues: { D1: 'pay a $180 registration fee to the account in this message', M1: 'You have been selected for a $9,000 grant for small businesses', M2: 'To receive it, pay a $180 registration fee' } },

  /* ---------- Recovery scam ---------- */
  { id: 'm-rec-trading', use: 'teach', tier: 'clean', setting: 'money', topic: 'a trading site taking his savings', name: 'The recovery email',
    text: "Malik lost $3,000 to a fake trading website in March, and he told nobody. In November an email arrives from a 'fund recovery service': 'We have traced the money you lost and can have it returned to your account. Our fee is $450, payable in advance by wire transfer, and refundable once your funds are released.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] },
    cues: { D1: 'payable in advance by wire transfer', M1: 'We have traced the money you lost and can have it returned to your account', M2: 'Our fee is $450, payable in advance by wire transfer' } },

  { id: 'm-rec-tickets', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'concert tickets never delivered', name: 'The lawyer from a search',
    text: "Grace paid $1,800 for concert tickets to a seller on social media, and the tickets never came. Looking for help, she searched online and called the number on the top ad, for a firm of 'consumer lawyers'. A man said they worked with the courts and could get her money back: 'Our retainer is $600, paid today, and we start work as soon as it arrives.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] },
    cues: { D1: 'Our retainer is $600, paid today', M1: 'they worked with the courts and could get her money back', M2: 'Our retainer is $600, paid today, and we start work as soon as it arrives' },
    segments: [
      { text: 'Grace paid $1,800 for concert tickets to a seller on social media', note: 'This is the loss. The words to tap are what the firm says it can do about it.' },
      { text: 'could get her money back' },
      { text: 'Our retainer is $600, paid today, and we start work as soon as it arrives', note: 'This is the fee they ask for. The words to tap are what they offer in return.' }
    ] },

  { id: 'm-rec-check', use: 'check', tier: 'clean', setting: 'relationships', topic: 'a man she met online who took her savings',
    text: "A year after a man she met online took $7,500 from her, Nora gets a message from a firm that says it hunts down fraudsters. 'Your money has been found,' it says. 'A release fee of $700 will unlock it.'",
    reason: { M1: 'The firm says that money that Nora lost to a man she met online has been found: {cue:M1}. The money was hers, and it was taken from her.' },
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] },
    cues: { D1: 'A release fee of $700 will unlock it', M1: 'Your money has been found', M2: 'A release fee of $700 will unlock it' } },

  /* ---------- Advance-fee scam against Recovery scam: the same man, the same sum ---------- */
  { id: 'm-imran-owed', use: 'teach', tier: 'clean', setting: 'money', topic: 'compensation he never claimed',
    text: "Imran gets an email: 'You are owed $6,000 in compensation, held for you by our claims office. It will be released once you pay a $150 release fee.' He has never made a claim of any kind.",
    outcome: 'advancefee', route: { D1: ['money'], M1: ['prize'], M2: ['fee'] },
    cues: { D1: 'once you pay a $150 release fee', M1: 'You are owed $6,000 in compensation, held for you by our claims office', M2: 'It will be released once you pay a $150 release fee' } },

  { id: 'm-imran-lost', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a fake insurance broker',
    text: "Imran lost $6,000 last year to a fake car-insurance broker. Now an email arrives: 'We have recovered the $6,000 you lost. It will be released once you pay a $150 release fee.'",
    outcome: 'recovery', route: { D1: ['money'], M1: ['lost'], M2: ['fee'] },
    cues: { D1: 'once you pay a $150 release fee', M1: 'We have recovered the $6,000 you lost', M2: 'It will be released once you pay a $150 release fee' } }
]);
