/* ===================== SUBJECT: SCAMS & SOCIAL ENGINEERING ===================== */

const SCAM_OUTCOMES = [
  {id:'pigbutcher',  n:'Fake investment friend (pig butchering)', group:'money'},
  {id:'romance',     n:'Romance scam',                            group:'money'},
  {id:'advfee',      n:'Fee to unlock a payout (advance fee)',    group:'money'},
  {id:'recovery',    n:'Fake recovery service',                   group:'money'},
  {id:'bec',         n:'Changed bank details (invoice fraud)',    group:'money'},
  {id:'authority',   n:'Fake official demanding payment',         group:'money'},
  {id:'overpay',     n:'Overpayment trick (fake buyer)',          group:'money'},
  {id:'legit_money', n:'Real payment request',                    group:'money'},
  {id:'phish',       n:'Fake login page (phishing)',              group:'access'},
  {id:'otp',         n:'Code read-out scam',                      group:'access'},
  {id:'oauth',       n:'App permission trap',                     group:'access'},
  {id:'legit_access',n:'Real security notice',                    group:'access'},
  {id:'techsupport', n:'Fake virus alert (tech-support scam)',    group:'install'},
  {id:'fakeupdate',  n:'Harmful file (malware)',                  group:'install'},
  {id:'refundscam',  n:'Refund scam',                             group:'install'},
  {id:'legit_inst',  n:'Real software installation',              group:'install'},
  {id:'identity',    n:'Identity grab (identity theft)',          group:'info'},
  {id:'recon',       n:'Friendly chat before the ask',            group:'info'},
  {id:'legit_info',  n:'Real request for details',                group:'info'}
];

const SCAM_GATE = { code:'G1', label:'What is it asking you to do right now? If nothing, what is it about?', options:[
  { id:'money',   n:'Send money',                         sub:'a transfer, a card payment, crypto, gift cards, or new bank details to pay into',
    keeps:['pigbutcher','romance','advfee','recovery','bec','authority','overpay','legit_money'] },
  { id:'access',  n:'Give a way into your account',       sub:'a password, a code, an app’s permission, or a notice about a sign-in',
    keeps:['phish','otp','oauth','legit_access'] },
  { id:'install', n:'Put something on your device',       sub:'an installer, a file to open, or a screen-share',
    keeps:['techsupport','fakeupdate','refundscam','legit_inst'] },
  { id:'info',    n:'Give details, or only chat so far',  sub:'documents, personal details, or just conversation',
    keeps:['identity','recon','legit_info'] }
]};

const SCAM_STEPS_BY_GATE = {
  money: [
    { code:'M1', label:'What reason is given for paying?', options:[
        {id:'relationship', n:'A friendship or romance that has built up over weeks or months',            keeps:['pigbutcher','romance']},
        {id:'windfall',     n:'Money you are told is waiting for you: a prize, an inheritance, or funds you lost', keeps:['advfee','recovery']},
        {id:'invoice',      n:'A bill from someone you already pay',                                       keeps:['bec']},
        {id:'threat',       n:'A threat from someone official: a fine, arrest or frozen account',          keeps:['authority']},
        {id:'transaction',  n:'A deal you are part of: a sale, a purchase or a rental',                    keeps:['overpay','legit_money']}
    ]},
    { code:'M2', label:'What is the odd part of the request?', options:[
        {id:'platform',  n:'Your profits show only on their own app or site, and you cannot take them out', keeps:['pigbutcher']},
        {id:'emergency', n:'A crisis you are asked to pay for, from someone you have never met in person',  keeps:['romance']},
        {id:'payfirst',  n:'You must pay a fee before you get any of the money',                           keeps:['advfee']},
        {id:'priorloss', n:'They offer to get back money you already lost',                                keeps:['recovery']},
        {id:'changed',   n:'The bank details changed late, and you were told by message',                  keeps:['bec']},
        {id:'irrevers',  n:'You must pay right now, in a way that cannot be undone',                       keeps:['authority']},
        {id:'excess',    n:'They paid you too much and want the difference sent back',                     keeps:['overpay']},
        {id:'nothing_m', n:'Nothing odd: you started it, nothing changed, and you can check it',           keeps:['legit_money']}
    ]}
  ],
  access: [
    { code:'A1', label:'What would you be handing over?', options:[
        {id:'password',  n:'A password, typed into a page you reached from their message', keeps:['phish']},
        {id:'code',      n:'A code that just arrived on your own phone',                   keeps:['otp']},
        {id:'permission',n:'Permission for an app to use your account',                    keeps:['oauth']},
        {id:'nothing_a', n:'Nothing: you are only told something happened',                keeps:['legit_access']}
    ]},
    { code:'A2', label:'What would a real one never do?', options:[
        {id:'neverlink', n:'Never send you to a login page through a link in a message',                   keeps:['phish']},
        {id:'nevercode', n:'Never ask you to read a code out to anyone',                                   keeps:['otp']},
        {id:'neverapp',  n:'Never ask you to give an unfamiliar app standing access to your account',      keeps:['oauth']},
        {id:'nothing_a2',n:'None of these: it only tells you, and asks for nothing',                       keeps:['legit_access']}
    ]}
  ],
  install: [
    { code:'I1', label:'How did the software or access come up?', options:[
        {id:'alert',     n:'A warning on your screen told you to call a number',        keeps:['techsupport']},
        {id:'sentfile',  n:'A file or link arrived in a message',                       keeps:['fakeupdate']},
        {id:'screen',    n:'Someone asked to see your screen to sort out a payment',    keeps:['refundscam']},
        {id:'youwent',   n:'You went to the company’s own website yourself',            keeps:['legit_inst']}
    ]},
    { code:'I2', label:'What happens next?', options:[
        {id:'showsfault',n:'They show you “problems” on your own screen',                                keeps:['techsupport']},
        {id:'silent',    n:'Nothing visible happens; it runs quietly',                                   keeps:['fakeupdate']},
        {id:'banking',   n:'Your bank screen shows too much money, and you are asked to send it back',   keeps:['refundscam']},
        {id:'normal_i',  n:'It just installs, with nobody watching',                                     keeps:['legit_inst']}
    ]}
  ],
  info: [
    { code:'F1', label:'What are they collecting?', options:[
        {id:'docs',    n:'Identity papers, or full ID and card numbers',                           keeps:['identity']},
        {id:'rapport', n:'Nothing yet: just conversation and trust',                               keeps:['recon']},
        {id:'routine', n:'A few ordinary details the other side needs for a deal you started',     keeps:['legit_info']}
    ]},
    { code:'F2', label:'Who started it, and why do they need it?', options:[
        {id:'onboarding',  n:'They did, for a “checking” reason that does not really need the details', keeps:['identity']},
        {id:'wrongnumber', n:'They did, as a wrong number or a chance message from a stranger',         keeps:['recon']},
        {id:'existing',    n:'You did, with someone you can check independently',                       keeps:['legit_info']}
    ]}
  ]
};

const W1_OPTS = ['Send money','Give a way into your account','Put something on your device','Give details, or only chat so far'];
const W1_DRILL = [
  {q:'Someone rings who calls himself part of your bank’s fraud team. A payment looks wrong, he says, and he wants to “watch your screen” while you look at your account so that he can see what you see.',
   a:'Put something on your device',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? He wants to watch your screen, which is a screen-share. The words “watch your screen” give it away. The payment is only the story, so the answer is not Send money.'},
  {q:'A text says: “Your toll road payment is overdue. Pay £4.80 now at this link to avoid a £90 penalty.”',
   a:'Send money',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? The words “Pay £4.80 now” are a payment. The small amount and the threatened penalty are the story, and the ask is to pay.'},
  {q:'A message in your email app says: “To keep your mailbox, confirm that it is you. Reply with the six-digit code we have just texted to you.”',
   a:'Give a way into your account',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? The giveaway is “six-digit code”. A code that proves it is you is a way into your account, so nothing is being paid and nothing is being installed.'},
  {q:'A man messages you on a hobby forum: “Great photos! I’m new to the area and looking for people to go walking with.” After two weeks of chat about your life he has still asked for nothing.',
   a:'Give details, or only chat so far',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? The giveaway is “still asked for nothing”: there is no payment, login or file, so it is about you and the chat. That is the answer Give details, or only chat so far.'},
  {q:'An email from a company you pay every month says: “We have changed banks. For this month’s invoice, please pay into the new account below.”',
   a:'Send money',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? The words “please pay into the new account” ask you to pay somewhere new. New bank details to pay into belong under Send money.'},
  {q:'A notice inside your email app, which you opened yourself, says: “Your recovery phone number was changed today. If this was you, there is nothing more to do.”',
   a:'Give a way into your account',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? It asks nothing, so you place it by what it is about: “recovery phone number was changed” is about how you get into your account. That is Give a way into your account.'},
  {q:'An email that looks as if it comes from your accountant says: “Please run the attached file, TaxPack.exe, before Friday so that your return can be filed.”',
   a:'Put something on your device',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? The words “run the attached file” ask you to open a file on your device. The tax return is only the story.'},
  {q:'A pop-up on a shopping site says: “You have won a free gift! Enter your full name, home address, date of birth and mother’s maiden name to claim it.” Nothing is charged.',
   a:'Give details, or only chat so far',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? Nothing is being charged, nothing is being installed and there is no login. The words “date of birth and mother’s maiden name” ask for facts about you, so the answer is Give details, or only chat so far.'},
  {q:'A website you are using asks: “Allow SlotBook to read and change your email and calendar so we can book your interview?”',
   a:'Give a way into your account',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? The words “read and change your email” are a permission for an app. A permission is a way into your account.'},
  {q:'A man you have been messaging for three months says his lorry has broken down abroad and asks you to send £450 to the garage this week.',
   a:'Send money',
   w:'The question that decides it is: What is it asking you to do right now? If nothing, what is it about? The words “send £450 to the garage” are a payment. The three months of friendship is the story, and the ask in front of you is money.'}
];

const W2_OPTS = ['Fake investment friend (pig butchering)','Romance scam','Fee to unlock a payout (advance fee)','Fake recovery service','Changed bank details (invoice fraud)','Fake official demanding payment','Overpayment trick (fake buyer)','Real payment request'];
const W2_DRILL = [
  {q:'A woman you met on a language-learning app three months ago says her cousin runs a crypto exchange. Your account there shows £11,000 of profit, but the site says you must pay a £1,500 “liquidity charge” before you can withdraw anything.',
   a:'Fake investment friend (pig butchering)',
   w:'What reason is given for paying? Three months of friendship. What is the odd part of the request? Your profit shows only on their site, and you cannot take it out until you pay. That second answer separates it from a Romance scam, which asks you to pay for a crisis.'},
  {q:'A man you have been writing to for six months says he is an army doctor posted overseas. He has never managed a video call because “the base blocks them”. He now asks you for £900 so that his leave papers can be signed.',
   a:'Romance scam',
   w:'What reason is given for paying? Six months of romance. What is the odd part of the request? A crisis you are asked to pay for (the leave papers) from someone who has never been on a video call. No website is showing you profits, so it is not a Fake investment friend (pig butchering).'},
  {q:'An email says a law firm is holding £340,000 left to you by a man you have never heard of. To release it, you must first pay £1,200 for a “transfer certificate”.',
   a:'Fee to unlock a payout (advance fee)',
   w:'What is the odd part of the request? You must pay £1,200 before you get any of the money. The legacy from a stranger is the reason given for paying, and the “transfer certificate” fee is the giveaway.'},
  {q:'A man phones to say his firm has found the £6,000 you lost to a fake online shop last winter. For an upfront “release deposit” of £400, he says, they can pay it back into your account.',
   a:'Fake recovery service',
   w:'What is the odd part of the request? They offer to get back money you already lost, and they ask for a deposit first. The reason given is money waiting for you, but it is money you lost, not a prize you never had, so it is not a Fee to unlock a payout (advance fee).'},
  {q:'You pay a landscaper every month. Today a message in the same thread as the earlier ones says: “Our account number has changed, please pay this month’s £1,350 into the one below.”',
   a:'Changed bank details (invoice fraud)',
   w:'What reason is given for paying? A bill from someone you already pay. What is the odd part of the request? The account number changed, and you were told by message. Nothing threatens you, so it is not a Fake official demanding payment.'},
  {q:'A caller says criminals are using your bank account. A “police officer” tells you to move all your savings into a “safe account” today, and not to tell the staff at your branch because one of them is under investigation.',
   a:'Fake official demanding payment',
   w:'What reason is given for paying? A threat from someone official. What is the odd part of the request? You must pay right now, into an account you cannot get back from, and you are told to keep it from the bank staff. The order to keep it secret gives it away.'},
  {q:'You sell a games console for £220. The buyer’s payment of £440 arrives, and he says his banking app doubled the amount by mistake. He asks you to send £220 to his brother, who will collect the console.',
   a:'Overpayment trick (fake buyer)',
   w:'What is the odd part of the request? They paid you too much and want the difference sent back: £440 for a £220 console, with half going to someone else. The sale is the reason for paying, and the “app doubled it” story is the giveaway.'},
  {q:'You ask a tiler for a price. She emails a written quote that you accept, and after the job an invoice that matches the quote, with the account details that were on the quote. Her note says: “Ring the number on the quote if you want to check.”',
   a:'Real payment request',
   w:'What is the odd part of the request? Nothing. You asked for the quote, the invoice matches it, the details are the ones from the start, and she invites you to check by ringing the number on the quote. Nothing was changed, rushed or hidden.'},
  {q:'You buy a second-hand sofa from a seller on a local website. You agree the price in a message, view the sofa at his house, and pay the agreed £150 by bank transfer on the day, into the details he gives you there.',
   a:'Real payment request',
   w:'What reason is given for paying? A deal you are part of, a purchase. What is the odd part of the request? Nothing odd: you started it, you saw the sofa, and nothing changed or was rushed. A seller who gives you his bank details face to face passes the check.'},
  {q:'A man you have played online chess with for two months says he makes “steady money” on a gold-trading app and invites you to join. Your first £300 grows quickly and £100 comes out fine. Now he says you must pay £2,000 to “upgrade to the VIP tier” before you can withdraw more.',
   a:'Fake investment friend (pig butchering)',
   w:'What reason is given for paying? A friendship built over two months. What is the odd part of the request? Your profits show only on their app, and the next withdrawal is blocked until you pay. The £100 that came out fine is the bait.'},
  {q:'An automated call says a parcel in your name was stopped at customs with illegal items, and you will be arrested unless you pay a £950 “clearance fine” in crypto at a machine today.',
   a:'Fake official demanding payment',
   w:'What reason is given for paying? A threat from someone official: arrest. What is the odd part of the request? You must pay right now, in crypto, which cannot be undone. A real customs office writes to you and never takes crypto by phone.'},
  {q:'The agent who collects your rent every month texts: “Our rent account is changing from next month. Please use the new details below for the next payment.”',
   a:'Changed bank details (invoice fraud)',
   w:'What is the odd part of the request? The bank details changed late, and you were told by message. The reason given for paying is a bill from someone you already pay. Ring the agent on a number you already had before you pay a penny into the new account.'},
  {q:'You order a jacket from an overseas shop. On the day it is due, a text from the courier says an import charge of £6.20 must be paid before delivery, and gives a link. You do not tap it. You open the courier’s own app, where your parcel is listed with the same £6.20 charge, and you pay it there.',
   a:'Real payment request',
   w:'What reason is given for paying? A deal you are part of: a purchase you made yourself. What is the odd part of the request? Nothing odd: you started it, nothing changed, and you can check it. The telling detail is that the same £6.20 charge was waiting in the courier’s own app, so you checked it without using the link. A charge that exists only in the text, and nowhere else, would be a scam.'}
];

const W3_OPTS = ['Fake login page (phishing)','Code read-out scam','App permission trap','Real security notice'];
const W3_DRILL = [
  {q:'A text says your bank card has been blocked and gives a link. Following it takes you to a page that asks for your online-banking username and password. It looks just like your bank’s page, but the web address is not the one printed on your card.',
   a:'Fake login page (phishing)',
   w:'What would you be handing over? A password, typed into a page you reached from their message. That is the giveaway: you arrived through their link. A real bank never sends you to a login page through a link in a message, so the name is Fake login page (phishing).'},
  {q:'A woman rings from what she says is your email provider’s help desk. Someone is trying to reset your password, she says. A text arrives: “Your reset code is 705184. Do not share it.” She asks you to read the code out so that she can “block the attempt”.',
   a:'Code read-out scam',
   w:'What would you be handing over? A code that just arrived on your own phone. What would a real one never do? Never ask you to read a code out to anyone. The text itself says “Do not share it”, and the caller asks you to share it, which is the giveaway.'},
  {q:'A website offers a free CV checker if you “continue with your email account”. Your email provider’s own screen then asks you to let “CVBoost” open, send and erase every message in your mailbox and see your contacts.',
   a:'App permission trap',
   w:'What would you be handing over? Permission for an app to use your account: nobody has asked for a password or a code. What would a real one never do? Never ask you to give an unfamiliar app standing access to your account. A CV checker has no need to erase your messages.'},
  {q:'You open your online-banking app and see a line at the top: “Your password was changed today at 14:02.” It asks you for nothing and has no link.',
   a:'Real security notice',
   w:'What would you be handing over? Nothing: you are only told something happened. The giveaway is that it sits inside an app you opened yourself and has no link, code or number. It does none of the scam moves, so it is a Real security notice. If you did not change your password, change it from the app.'},
  {q:'An email says: “Your parcel is waiting. Sign in with your online-shop account to choose a delivery time.” The link goes to a page asking for your shop password. It is the first email you have ever had from this “courier”.',
   a:'Fake login page (phishing)',
   w:'What would you be handing over? A password, typed into a page you reached from their message. The words “Sign in … to choose a delivery time” send you to a login page through a link, which a real one never does. Go to the shop’s own website yourself instead.'},
  {q:'You advertise a sofa for sale. A “buyer” messages that they want to check you are a real person, and that they have just sent you a code by text. They ask you to send the code back to them as proof.',
   a:'Code read-out scam',
   w:'What would you be handing over? A code that just arrived on your own phone. What would a real one never do? Never ask you to read a code out to anyone. “Send the code back as proof” is the giveaway: the code was meant to be typed into a site, not sent to a stranger.'},
  {q:'An email says you have a voicemail waiting. Opening it shows your real provider’s screen asking you to allow “VoiceNote Player” to read and send your email. There is an Allow button, and no password is requested.',
   a:'App permission trap',
   w:'What would you be handing over? Permission for an app to use your account, since nothing asks for a password. What would a real one never do? Never ask you to give an unfamiliar app standing access to your account. A voicemail player has no need to send email as you.'},
  {q:'A text from your phone provider says: “We have added a new device to your account. If this was not you, open the app and review it.” It has no link and asks for no code or password.',
   a:'Real security notice',
   w:'What would you be handing over? Nothing: you are only told something happened. The message sends you to the app you already have, not to a link, and asks for nothing. That fits None of these: it only tells you, and asks for nothing. Opening the app yourself is the check.'}
];

const W4_OPTS = ['Fake virus alert (tech-support scam)','Harmful file (malware)','Refund scam','Real software installation'];
const W4_DRILL = [
  {q:'While you browse a shopping site, a pop-up fills the screen with a flashing red banner: “3 viruses found! Call Support now.” A phone number is shown. When you try to close it, it jumps to a new spot.',
   a:'Fake virus alert (tech-support scam)',
   w:'How did the software or access come up? A warning on your screen told you to call a number. That is the giveaway: real security software never asks you to telephone anyone. What happens next, if you call, is that they show you “problems” on your own screen.'},
  {q:'A woman on a networking site says she is hiring. She sends a “short project brief” as a file ending in .exe and asks you to open it on your computer before you reply.',
   a:'Harmful file (malware)',
   w:'How did the software or access come up? A file arrived in a message. The ending .exe shows it is a program, not a brief. What happens next is that nothing visible happens, because it runs quietly. A real employer would not ask you to run a program.'},
  {q:'A caller says your car insurer has overcharged you £75 and he is refunding it. During a screen-share, your bank page appears to show an extra £7,500, and he says he will lose his job unless you return £7,425.',
   a:'Refund scam',
   w:'What happens next? Your bank screen shows too much money, and you are asked to send it back. The detail that gives it away is the extra £7,500 and the request to return it. The screen-share was set up to sort out a payment, which is the answer to how the access came up.'},
  {q:'Your printer stops working. You open the printer maker’s website using the bookmark in your browser, download the newest driver and run it. The computer shows a box asking whether you want to allow changes. You have spoken to nobody.',
   a:'Real software installation',
   w:'How did the software or access come up? You went to the company’s own website yourself, using a bookmark you already had. What happens next? It just installs, with nobody watching. The box asking you to allow changes is on every real installation, so it is not a warning.'},
  {q:'A screen-wide message with a siren sound claims your photos and bank details are being copied. It shows a “Windows Support” number and says you must call within five minutes.',
   a:'Fake virus alert (tech-support scam)',
   w:'How did the software or access come up? A warning on your screen told you to call a number. The siren and the five-minute deadline are the pressure, and the phone number is the point of the page. Close the browser and do not call.'},
  {q:'An email says: “Your payslip is attached.” The attachment is called Payslip.docx.exe, and when you open it nothing seems to happen.',
   a:'Harmful file (malware)',
   w:'How did the software or access come up? A file arrived in a message. The giveaway is the double ending .docx.exe: it is a program dressed up as a document. What happens next is nothing visible, which is how this one works. Delete it, and if you were expecting a payslip, ring your employer on a number you already had.'},
  {q:'A caller says an airline owes you £120 compensation for a cancelled flight. To pay it, he asks you to download a free app and share your screen while you log in to your bank. Your account soon shows £1,200 more than before. He says he slipped, and asks you to send £1,080 back.',
   a:'Refund scam',
   w:'How did the software or access come up? Someone asked to see your screen to sort out a payment: the free app he asked you to download is a screen-share. What happens next? Your bank screen shows too much money, and you are asked to send it back. The £1,200 against a £120 refund is the giveaway.'},
  {q:'You type your accounting-software maker’s web address into your browser, download this year’s update from its Downloads page, and run it. Windows asks whether you want to allow changes. Nobody has contacted you.',
   a:'Real software installation',
   w:'How did the software or access come up? You went to the company’s own website yourself, by typing the address. Nobody rang, messaged or advertised to you. What happens next? It just installs, with nobody watching, so it is a Real software installation.'}
];

const W5_OPTS = ['Identity grab (identity theft)','Friendly chat before the ask','Real request for details'];
const W5_DRILL = [
  {q:'A message says: “Congratulations, you have been shortlisted for a customer-service job at Brightlane. To move to the next stage, upload a photo of your passport and your national insurance number by Friday.” You do not remember applying for anything at Brightlane.',
   a:'Identity grab (identity theft)',
   w:'What are they collecting? Identity papers: a passport photo and a national insurance number. Who started it, and why do they need it? They did, and you never applied, so there is no job. A shortlist does not need your passport. That mismatch is the giveaway.'},
  {q:'A man comments kindly on every photo you post in a hiking group, then messages you privately every evening for ten days. He asks about your job, your flat and who lives with you, and asks for nothing.',
   a:'Friendly chat before the ask',
   w:'What are they collecting? Nothing yet: just conversation and trust, although the questions about your flat and household are gathering information. Who started it? He did, as a chance contact from a group. No payment, login or file is asked for yet.'},
  {q:'You phone your energy company using the number printed on your latest bill, to ask about a meter reading. The adviser asks for your account number and the first line of your address so that she can find you, and offers to call you back.',
   a:'Real request for details',
   w:'Who started it, and why do they need it? You did, using a number you already had, and she offers a call-back. What are they collecting? A few ordinary details she needs to find your account. The reason needs exactly what she asks for.'},
  {q:'A caller says you have won a £50 supermarket voucher in a survey. To send it, he needs your date of birth, your full card number and the three digits on the back. Nothing is to be paid.',
   a:'Identity grab (identity theft)',
   w:'What are they collecting? A full card number and the three digits on the back, with your date of birth: full ID and card numbers. Who started it, and why do they need it? He rang you, and a free voucher does not need your card details, because nothing is being paid. The reason does not fit the details, and that is the giveaway.'},
  {q:'A stranger on a professional networking site writes: “I saw your post about warehouse software, I am setting up in the same field.” For three weeks he writes every few days. He asks about your employer, your suppliers and who you report to, and asks for nothing.',
   a:'Friendly chat before the ask',
   w:'Who started it, and why do they need it? He did, with a chance message from a stranger. What are they collecting? Nothing yet: just conversation and trust, although his questions about your employer and suppliers are gathering information. A real contact in your field could be checked through people you both know.'},
  {q:'You sign up for a gym at its front desk. The staff member takes your name, address and bank details for the monthly payment and gives you a printed form with the gym’s phone number.',
   a:'Real request for details',
   w:'Who started it? You did, in person at the gym, and you can check the gym through the number on the form. What are they collecting? A few ordinary details that a monthly payment needs. The reason needs exactly these details and nothing wider.'},
  {q:'An email from “the tax office” says you are due a refund. To process it, you must send in a scan of your passport and your full bank card details through a link.',
   a:'Identity grab (identity theft)',
   w:'What are they collecting? Identity papers and full card numbers. Who started it, and why do they need it? They did, and a refund does not need your passport. The “refund” is the checking reason that does not really need the details, which gives it away.'},
  {q:'You visit an estate agent’s office and ask about flats. The agent asks for your name, your phone number and the area you want to live in, so that she can send you listings.',
   a:'Real request for details',
   w:'Who started it, and why do they need it? You did, by visiting the office, and you can check the agency independently. What are they collecting? A few ordinary details for the job of sending you listings, and not one paper that proves who you are.'},
  {q:'A call comes in from someone who says she is from your car insurer and that your latest payment failed. You say you will ring back, hang up, wait ten minutes and ring the number printed on your policy documents. The adviser there asks for your policy number and your date of birth, so that she can find your account.',
   a:'Real request for details',
   w:'Who started it, and why do they need it? You did, in the end: you rang the number printed on your policy documents, which you already had. What are they collecting? A few ordinary details she needs to find your account. The first call could not be checked. Ringing back on a number you already had turned it into a call you started.'}
];

const SCAM_ERR = [
  {q:'The message was written perfectly, so it cannot have been a scam.',
   w:'Perfect writing proves nothing, because clean text is cheap to produce now, including text written by software. The question this claim skips is: What is it asking you to do right now? If nothing, what is it about? Look at the ask, then do the check, and ignore how polished the message is.'},
  {q:'The text appeared in the same thread as my bank’s real messages, so it must have been real.',
   w:'A faked message can slip into the same thread as the real ones, so the thread is not proof. The question this claim skips is: Who started it, and why do they need it? They did, and you cannot check them from the screen. Open your bank’s app or ring the number on your card instead.'},
  {q:'The address began with https and showed a locked padlock, so I knew the site was safe.',
   w:'A padlock means the connection is private. It does not mean the site is honest, and anyone can get one in minutes. The question this claim skips is: What would you be handing over? If it is a password typed into a page you reached from their message, how you arrived is what matters. Open the site yourself instead.'},
  {q:'She read out my full name and my old address, so she had to be from the council.',
   w:'Names and addresses leak in data breaches and are sold cheaply, so knowing them proves nothing. The question this claim skips is: Who started it, and why do they need it? She did. Ring the council on a number you already had and ask whether anyone called you.'},
  {q:'The letter had a company registration number and a signed certificate, so the firm was real.',
   w:'Registration numbers and certificates are easy to make up or copy, and a real firm’s number can be pasted into any document. The question this claim skips is: What is the odd part of the request? If you must pay a fee first, the paperwork changes nothing. Look the firm up yourself on the regulator’s register.'},
  {q:'I am a sensible person who reads everything twice, so a scam could not catch me out.',
   w:'Careful people are caught as often as anyone, because the scam fits their week: a bill they expect, a deal they started, a friend they know. The question this claim skips is: What reason is given for paying? Being sure it cannot happen to you is a risk, because you stop checking. Make the check a habit, not a mood.'},
  {q:'We have chatted every day for six weeks and she has never mentioned money, so she cannot be a scammer.',
   w:'An absent ask is a stage. Long scams ask for nothing for months, and then ask. The question this claim skips is: What are they collecting? One of the answers is Nothing yet: just conversation and trust, and it is the early stage of the long scams. Give no money or details to someone you have never met, and ask for a live video call.'},
  {q:'I found the helpline number with a quick search and rang it myself, so I was the one who made contact.',
   w:'A number from a search advert, a message or a pop-up is theirs, even if you dial it. The question this claim skips is: Who started it, and why do they need it? You only started it with a number you already had. Hang up, and use the number on your card, bill or contract.'},
  {q:'If this were a scam, my bank’s fraud system would have blocked the payment.',
   w:'A payment you approve yourself looks like your own wish, so the bank’s checks usually let it through, and it is hard to get back. The question this claim skips is: What is it asking you to do right now? If nothing, what is it about? If the answer is Send money, you are the one who has to stop it. Read the warning screen and do the check.'},
  {q:'The man on the phone was so polite and so patient with me that he could not have been a scammer.',
   w:'Calm and kindness are tools: they build trust and keep you on the line. Manner says nothing about the ask. The question this claim skips is: What is it asking you to do right now? If nothing, what is it about? Judge the request instead, and hang up and ring back on a number you already had.'}
];

const SCAM_SPECIMENS = [
  {q:'You matched four months ago. She messages every morning, calls most evenings, and has never been able to make a video call work. In month three she mentioned the trading platform her uncle runs. You put in $500 and withdrew $700 without difficulty. You have now put in $60,000, the dashboard shows $94,000, and the withdrawal has been held pending a 20% "capital gains deposit" payable before release.',
   sub:{G1:['money'],M1:['relationship'],M2:['platform']},outcome:'pigbutcher',
   why:'What is it asking you to do right now? If nothing, what is it about? You are being asked to pay a 20% “capital gains deposit”. Answer: Send money. What reason is given for paying? Four months of daily messages and evening calls with someone you matched with. Answer: A friendship or romance that has built up over weeks or months. What is the odd part of the request? The dashboard shows $94,000, yet the withdrawal is held until you pay. Answer: Your profits show only on their own app or site, and you cannot take them out. The $700 that came out of your first $500 was the bait. So the name is Fake investment friend (pig butchering).',
   fals:'Stop paying, including the 20% deposit. A real platform never charges you to take out your own money. Tell someone you trust today, ring your bank, and look the platform up on your regulator’s register by typing the address in yourself. The real look-alike is an investment you found independently, on a regulated platform, where withdrawals work and cost no deposit.'},

  {q:'Eight months of daily messages. He is on a contract offshore, which is why the video never connects. He has never asked you for anything. His daughter has been admitted to hospital and the company advance will not clear until Monday, and he is asking you — apologising the whole time — for £4,000 he will return the moment it lands.',
   sub:{G1:['money'],M1:['relationship'],M2:['emergency']},outcome:'romance',
   why:'What is it asking you to do right now? If nothing, what is it about? He asks you for £4,000. Answer: Send money. What reason is given for paying? Eight months of daily messages. Answer: A friendship or romance that has built up over weeks or months. What is the odd part of the request? A hospital emergency, from someone whose video “never connects” and whom you have never met. Answer: A crisis you are asked to pay for, from someone you have never met in person. No website is showing you profits, so it is not a Fake investment friend (pig butchering). So the name is Romance scam.',
   fals:'Ask for a live video call and see what happens, and tell a friend before you send anything. Never send money to someone you have not met in person. The real look-alike is a partner you have met, whose emergency someone else can confirm.'},

  {q:'A letter says a distant relative died intestate in another country and you are the traced heir to £2.1m. The estate can be released once local probate duty of £3,400 is settled. The solicitor’s letterhead, registration number and a scan of the death certificate are attached.',
   sub:{G1:['money'],M1:['windfall'],M2:['payfirst']},outcome:'advfee',
   why:'What is it asking you to do right now? If nothing, what is it about? The letter asks you to settle £3,400 of “probate duty”. Answer: Send money. What reason is given for paying? You are told £2.1m is waiting for you as an heir. Answer: Money you are told is waiting for you: a prize, an inheritance, or funds you lost. What is the odd part of the request? You must pay before you get any of it. Answer: You must pay a fee before you get any of the money. The letterhead, registration number and certificate cost the sender nothing to produce. So the name is Fee to unlock a payout (advance fee).',
   fals:'Do not pay and do not reply. Real probate costs come out of the estate and are never collected from the heir in advance. Look up the solicitor’s firm on the regulator’s register yourself, and ring it on a number you find there. If you never knew of the relative, treat it as a scam.'},

  {q:'Ten months after you lost money to an investment platform, a firm contacts you. They specialise in tracing crypto, have worked with the regulator, and have partially recovered funds for others in your position. There is a £2,500 retainer, refundable if the trace fails.',
   sub:{G1:['money'],M1:['windfall'],M2:['priorloss']},outcome:'recovery',
   why:'What is it asking you to do right now? If nothing, what is it about? They want a £2,500 retainer. Answer: Send money. What reason is given for paying? They say they can bring back funds. Answer: Money you are told is waiting for you: a prize, an inheritance, or funds you lost. What is the odd part of the request? They offer to recover a loss you suffered ten months ago, and they contacted you first about a loss that was never public. Answer: They offer to get back money you already lost. So the name is Fake recovery service.',
   fals:'Do not pay or reply. Real help is your bank, the police and the regulator, who do not charge a retainer and do not make a cold approach. Report the first loss there. If you have already paid anything, tell your bank, because the same people often come back.'},

  {q:'Your builder has invoiced monthly for eight months. Today’s email arrives in the same thread, matches the quoted figure, and says their accountant has moved them to a new bank — details attached, please use these from now on. The sender address is off by one character.',
   sub:{G1:['money'],M1:['invoice'],M2:['changed']},outcome:'bec',
   why:'What is it asking you to do right now? If nothing, what is it about? The email asks you to pay into new account details. Answer: Send money. What reason is given for paying? It is this month’s invoice from a builder you already pay. Answer: A bill from someone you already pay. What is the odd part of the request? New details announced by email, in a thread that is otherwise real, with a sender address that is one character wrong. Answer: The bank details changed late, and you were told by message. So the name is Changed bank details (invoice fraud).',
   fals:'Ring the builder on the number on your contract or an old invoice, not the one in the email, and ask. A real change survives that call and this one will not. Do not pay into the new account until they have confirmed it out loud.'},

  {q:'A caller identifies himself as an officer of the tax authority. There is an unpaid assessment, a warrant has been prepared, and officers will attend today unless it is settled. He will stay on the line while you go to the shop and buy the vouchers, and asks you not to discuss it with staff as the matter is confidential.',
   sub:{G1:['money'],M1:['threat'],M2:['irrevers']},outcome:'authority',
   why:'What is it asking you to do right now? If nothing, what is it about? He wants you to buy vouchers and pay today. Answer: Send money. What reason is given for paying? An officer is threatening a warrant and a visit. Answer: A threat from someone official: a fine, arrest or frozen account. What is the odd part of the request? Vouchers, today, with him on the line. Answer: You must pay right now, in a way that cannot be undone. The order not to tell the shop staff is the secrecy that exists to stop anyone stopping you. So the name is Fake official demanding payment.',
   fals:'Hang up. Tax authorities write first, give you time and a way to appeal, and never take vouchers or send officers on the day they ring. If you want to check, ring the real tax office on a number you already had. Do not buy anything.'},

  {q:'A buyer for the £600 camera you listed pays without haggling. The transfer that arrives is £1,240. They apologise, explain their assistant entered the wrong figure, and ask you to send the £640 difference to their partner’s account before shipping.',
   sub:{G1:['money'],M1:['transaction'],M2:['excess']},outcome:'overpay',
   why:'What is it asking you to do right now? If nothing, what is it about? He asks you to send £640 to his partner’s account. Answer: Send money. What reason is given for paying? You are selling a camera. Answer: A deal you are part of: a sale, a purchase or a rental. What is the odd part of the request? The buyer paid £1,240 for a £600 camera and wants the difference sent back. Answer: They paid you too much and want the difference sent back. The “assistant’s error” is the reason for money to flow out. So the name is Overpayment trick (fake buyer).',
   fals:'Send nothing and do not ship. Return the whole £1,240 to the account it came from, or cancel the sale, and wait until any payment has fully cleared before you hand over the camera. A real buyer who overpays by mistake asks for the original payment back, never for a second payment to someone else.'},

  {q:'The letting agency you approached last week emails the tenancy agreement you asked for, with the deposit payable to a client account registered with a deposit protection scheme whose number you can check on the scheme’s own site. Nothing is urgent and the office number matches the one on the listing you found independently.',
   sub:{G1:['money'],M1:['transaction'],M2:['nothing_m']},outcome:'legit_money',
   why:'What is it asking you to do right now? If nothing, what is it about? It asks you to pay a tenancy deposit. Answer: Send money. What reason is given for paying? A rental you started. Answer: A deal you are part of: a sale, a purchase or a rental. What is the odd part of the request? Nothing: you asked for the agreement, the account is registered with a deposit protection scheme you can check, nothing is urgent, and the office number matches the listing you found yourself. Answer: Nothing odd: you started it, nothing changed, and you can check it. So the name is Real payment request.',
   fals:'Do the check once, because a real request passes it: look the scheme number up on the scheme’s own site, ring the office on the number from the listing, and then pay. If the account details ever arrive as a late change by email, or the scheme number does not check out, start again from the first question: it has become Changed bank details (invoice fraud).'},

  {q:'"We detected a sign-in to your account from a device in another country. If this was not you, secure your account now" — with a button. The page it opens is a pixel-accurate copy of your provider’s login, at a domain with your provider’s name in it followed by -security.',
   sub:{G1:['access'],A1:['password'],A2:['neverlink']},outcome:'phish',
   why:'What is it asking you to do right now? If nothing, what is it about? The message wants you to use its button to “secure your account”, which means signing in. Answer: Give a way into your account. What would you be handing over? Your password, typed into the page the button opens. Answer: A password, typed into a page you reached from their message. What would a real one never do? Send you to a login page through a link in a message. Answer: Never send you to a login page through a link in a message. The page is a perfect copy, but the address has “-security” added to your provider’s name. So the name is Fake login page (phishing).',
   fals:'Close it. Open the provider’s website or app yourself, by typing the address in or using the app you already have, and look for the warning there. If it is real it will be there too. If you typed your password into the page, change it from the real site at once and switch on two-step sign-in.'},

  {q:'A caller from your bank’s fraud team says a £900 payment to an electronics retailer is pending and asks whether you authorised it. You did not. To cancel it, he says, he needs the six-digit code the bank has just sent to your phone. The code arrives from the bank’s usual number, in the usual thread.',
   sub:{G1:['access'],A1:['code'],A2:['nevercode']},outcome:'otp',
   why:'What is it asking you to do right now? If nothing, what is it about? He asks you to read out a code. Answer: Give a way into your account. What would you be handing over? The six-digit code that has just arrived on your phone. Answer: A code that just arrived on your own phone. What would a real one never do? Ask you to read a code out to anyone. Answer: Never ask you to read a code out to anyone. The code is real and comes from the real bank, because he is making a payment from your account at that moment and the bank is asking you to approve it. So the name is Code read-out scam.',
   fals:'Do not read the code out. Hang up, ring the number on your card, and read the text that carried the code: it says what it would approve. Nobody ever needs a code read to them, whoever they say they are.'},

  {q:'A shared document notification leads to a consent screen asking you to allow "Docs Sync Pro" permanent permission to read your mail, contacts and files. It is a genuine consent screen served by your provider, and the app is genuinely requesting exactly those scopes.',
   sub:{G1:['access'],A1:['permission'],A2:['neverapp']},outcome:'oauth',
   why:'What is it asking you to do right now? If nothing, what is it about? The screen asks you to allow an app into your account. Answer: Give a way into your account. What would you be handing over? No password is asked for and no code arrives, so it is a permission. Answer: Permission for an app to use your account. What would a real one never do? Ask you to give an unfamiliar app standing access to your mail, contacts and files just to open a shared document. Answer: Never ask you to give an unfamiliar app standing access to your account. Nothing here is forged, which is why it is hard to spot. So the name is App permission trap.',
   fals:'Press Deny and close the page. A document share needs no standing permission over your mailbox. Look in your account’s connected-apps list and remove any app you cannot place. Removing it works at once, while a password change would not.'},

  {q:'You open your provider’s app and a banner reports a new sign-in from a nearby city on Tuesday, matching a trip you took. There is no link, nothing to confirm, and no time limit — just an entry in a list of sessions you can end yourself.',
   sub:{G1:['access'],A1:['nothing_a'],A2:['nothing_a2']},outcome:'legit_access',
   why:'What is it asking you to do right now? If nothing, what is it about? It asks nothing, so you place it by what it is about: a sign-in to your account. Answer: Give a way into your account. What would you be handing over? Nothing. Answer: Nothing: you are only told something happened. What would a real one never do? It does none of the scam moves: no link to a login page, no code to read out, no app to approve. Answer: None of these: it only tells you, and asks for nothing. You saw it inside an app you opened yourself. So the name is Real security notice.',
   fals:'Look at the sessions list in the app and end any you do not recognise. Here it matches your trip, so there is nothing to do. The same words arriving in a message with a button to confirm your identity would be a Fake login page (phishing): the words are the same, and the difference is where it sends you.'},

  {q:'A page opens full-screen with an alarm tone, warns that your machine is infected and your banking details are exposed, and displays a support number. The technician who answers asks you to install a remote-support tool so he can show you the problem.',
   sub:{G1:['install'],I1:['alert'],I2:['showsfault']},outcome:'techsupport',
   why:'What is it asking you to do right now? If nothing, what is it about? The technician asks you to install remote-support software. Answer: Put something on your device. How did the software or access come up? A full-screen alarm gave you a number to call. Answer: A warning on your screen told you to call a number. What happens next? He wants to show you the problem on your own screen, and normal technical screens will be described as a disaster before a fix is sold. Answer: They show you “problems” on your own screen. So the name is Fake virus alert (tech-support scam).',
   fals:'Close the tab or restart the browser. A warning that disappears when you close the browser was only a web page. Do not call the number. If you have already installed the software, uninstall it, switch off the internet connection, change your passwords from another device and ring your bank.'},

  {q:'A recruiter you have exchanged three emails with sends a "technical assessment" as a file to run before the interview. Running it opens a document, the interview happens as scheduled, and nothing else appears to occur.',
   sub:{G1:['install'],I1:['sentfile'],I2:['silent']},outcome:'fakeupdate',
   why:'What is it asking you to do right now? If nothing, what is it about? The recruiter wants you to run a file. Answer: Put something on your device. How did the software or access come up? The file arrived in a message, as a “technical assessment”. Answer: A file or link arrived in a message. What happens next? A document opens and nothing else seems to happen. Answer: Nothing visible happens; it runs quietly. That quiet is how it works. So the name is Harmful file (malware).',
   fals:'Real employers set assessments on their own website, in a browser, and never send you a program to run. If you have already run it, switch off the internet connection, run a full scan, change your passwords from another device and tell your bank.'},

  {q:'A caller from your broadband provider says you are owed £48 for an outage and needs to process it while you watch. He asks you to install a support tool and log into your banking. On screen the credit appears as £4,800. He is audibly distressed, says it will come out of his wages, and asks you to send back the difference.',
   sub:{G1:['install'],I1:['screen'],I2:['banking']},outcome:'refundscam',
   why:'What is it asking you to do right now? If nothing, what is it about? He asks you to install support software and share your screen, even though the money only comes later. Answer: Put something on your device. How did the software or access come up? He wanted to see your screen to process a refund. Answer: Someone asked to see your screen to sort out a payment. What happens next? The screen shows £4,800 instead of £48, and you are asked to send the difference back. Answer: Your bank screen shows too much money, and you are asked to send it back. The extra was most likely your own savings moved across by him. So the name is Refund scam.',
   fals:'End the session and switch off the internet connection. Check your balance on a different device, in your own banking app, and ring your bank on the number on your card. Real refunds go to the card that paid, with nobody watching you bank.'},

  {q:'You go to the vendor’s website, download the installer, and it asks for administrator rights during installation. Nobody is on the phone, the download came from a site you navigated to yourself, and the prompt is the one the operating system shows for any installation.',
   sub:{G1:['install'],I1:['youwent'],I2:['normal_i']},outcome:'legit_inst',
   why:'What is it asking you to do right now? If nothing, what is it about? It asks you to run an installer you chose. Answer: Put something on your device. How did the software or access come up? You went to the vendor’s website yourself. Answer: You went to the company’s own website yourself. What happens next? A normal installation, with the usual box asking to allow changes, and nobody on the phone. Answer: It just installs, with nobody watching. The admin prompt is on every real installation, so it is not a warning. So the name is Real software installation.',
   fals:'Carry on. Keep downloading from the company’s own website, typed in yourself. If a call, a pop-up or a message ever sent you to that download, the same prompt would mean something very different, so stop and do the check.'},

  {q:'You applied to a remote role and got an offer quickly. Before the contract is issued, onboarding asks you to upload a passport scan, your national insurance number, a utility bill and a photograph of yourself holding the passport, through a portal on a domain registered last month.',
   sub:{G1:['info'],F1:['docs'],F2:['onboarding']},outcome:'identity',
   why:'What is it asking you to do right now? If nothing, what is it about? It asks you to upload documents. Answer: Give details, or only chat so far. What are they collecting? A passport scan, your national insurance number, a utility bill and a photo of you holding the passport. Answer: Identity papers, or full ID and card numbers. Who started it, and why do they need it? They did, as “onboarding”, but no contract exists, no employer needs a photo of you holding your passport, and the portal’s domain was registered last month. Answer: They did, for a “checking” reason that does not really need the details. So the name is Identity grab (identity theft).',
   fals:'Do not upload anything. A real employer checks your right to work after you accept an offer, through a named company you can look up independently. If you have already uploaded, tell your bank, ask a credit reference agency to put a fraud warning on your file, and watch your accounts.'},

  {q:'A message arrives from an unknown number: sorry, wrong contact. The conversation is easy and continues for three weeks — your work, your city, your weekends. Nothing has been asked for, nothing has been offered, and no money or link has ever been mentioned.',
   sub:{G1:['info'],F1:['rapport'],F2:['wrongnumber']},outcome:'recon',
   why:'What is it asking you to do right now? If nothing, what is it about? Nothing is asked, so you place it by what it is about: you and the chat. Answer: Give details, or only chat so far. What are they collecting? Nothing yet, only your time and trust. Answer: Nothing yet: just conversation and trust. Who started it, and why do they need it? They did, by a “wrong number”, and three weeks later the conversation is still going. Answer: They did, as a wrong number or a chance message from a stranger. So the name is Friendly chat before the ask.',
   fals:'A real wrong number ends once the mistake is clear. Stop replying, and do not share your work, family or money. If the chat turns to an investment, a favour or money, it has become the next stage of a Fake investment friend (pig butchering) or a Romance scam.'},

  {q:'You rang the number on the back of your card to query a transaction. They ask you to confirm details from your own account to identify you, offer to call you back on the number they hold if you would rather, and add nothing further.',
   sub:{G1:['info'],F1:['routine'],F2:['existing']},outcome:'legit_info',
   why:'What is it asking you to do right now? If nothing, what is it about? They ask you to confirm a few details so they can identify you. Answer: Give details, or only chat so far. What are they collecting? Only details the holder of the account would know. Answer: A few ordinary details the other side needs for a deal you started. Who started it, and why do they need it? You did, by ringing the number on the back of your card, and they offer to call you back on the number they hold. Answer: You did, with someone you can check independently. So the name is Real request for details.',
   fals:'Carry on, and keep the habit. If you want to be extra sure, hang up and ring the card number again yourself. The same conversation in a call that came to you could not be checked, so you would hang up and ring the number on your card.'}
];

const SCAM_COURSE = [
{ tag:'One', title:'What it is asking you to do',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">After this unit you can read a message, a call or a request and say what it is asking you to do right now. That one answer sorts almost every scam into one of four groups, and it tells you which questions to ask next.</p>
      <p>You will meet these in texts, phone calls, emails, dating apps, job offers and parcel notices. This unit answers the first question of the key, in the key’s exact words: <b>What is it asking you to do right now? If nothing, what is it about?</b></p>`},
  {h:'The key, once through',
   b:`<p class="lead">Scams change their story every month, but the questions that catch them stay the same. The key is a short list of those questions. You ask the first one, and its answer sends you to two more that fit what you found. The questions end in a name for what you are looking at.</p>
      <p>Here is one case run once through the whole key, so you can see where the course is going. A caller says he is from your mobile provider. Someone has ordered a new phone on your account, he says, and to cancel the order you must read out the code that has just come by text.</p>
      <ol>
      <li><b>What is it asking you to do right now? If nothing, what is it about?</b> He wants you to read out a code. A code is a way into your account. The answer is <b>Give a way into your account</b>.</li>
      <li><b>What would you be handing over?</b> The code that has just arrived on your phone. The answer is <b>A code that just arrived on your own phone</b>.</li>
      <li><b>What would a real one never do?</b> A real company never asks you to read a code out to anyone. The answer is <b>Never ask you to read a code out to anyone</b>.</li>
      <li>The name the questions lead to is <b>Code read-out scam</b>.</li>
      </ol>
      <p>Four short words keep the same meaning all the way through the course.</p>
      <ul>
      <li><b>The ask</b> is what they want you to do right now.</li>
      <li><b>The key</b> is the questions, asked in order.</li>
      <li><b>The name</b> is what the key ends in. Fifteen names are kinds of scam. Four are the real thing that can look like a scam, such as a real payment request or a real security notice.</li>
      <li><b>The check</b> is the move that works against all of them. The next card teaches it.</li>
      </ul>
      <p>After the first question, the key asks two more about that ask. The first of them usually narrows it down, and the second usually confirms: it asks what a real one would never do, or what happens next, or who started it. In the moment you may only be able to answer part of the key. That is fine, because the check does not depend on the key.</p>
      <p>Why learn the names if the check always works? Because a name lets you spot the move faster, warn someone else exactly what you saw, and know what to do if it has already happened.</p>`},
  {h:'The check',
   b:`<p><b>What it is.</b> The check is the one move that works against every scam in this course: stop, then contact the real organisation yourself, using a phone number, app or website you already had. A number you already had is the one on the back of your bank card, on your contract or your last paper bill, or inside an app you installed from the store yourself. It is never a number, link or app that arrived with the message.</p>
      <p>It works because a scammer controls everything inside their own message: the number to call back, the link, even the name that shows on your screen. They do not control the number printed on your card. A real organisation passes the check without any trouble. Your real bank is happy for you to hang up and ring the number on your card.</p>
      <p><b>Example.</b> A text says it is from your phone company: your bill is overdue, pay now at the link. You do not tap the link. You open the phone company’s own app, the one already on your phone, and look at your account. There is no overdue bill. The check took a minute and cost nothing.</p>
      <p><b>Sounds like.</b> The things a scammer says to stop you doing it. “Don’t hang up, this is urgent.” “Don’t call your bank, one of their staff may be involved.” “You can ring this number to confirm.” “There is no time for that.” Each one is the scammer telling you not to check, which is an answer in itself.</p>
      <p><b>Catch it.</b> Ask yourself: did the number, link or app I am about to use come with the message, or was it already mine? If it came with the message, it is theirs.</p>
      <p><b>What to do.</b></p>
      <ol>
      <li>Stop. Do not reply, click, pay, read out a code or install anything yet.</li>
      <li>Hang up, or close the message. After a phone call, wait a few minutes or use a different phone before you ring out, because a scammer can keep the line open and answer your call to “the bank”.</li>
      <li>Ring the number you already had, or open the app you already had, and ask whether they contacted you.</li>
      <li>If you cannot reach them, do nothing until you can. A real request will still be there tomorrow.</li>
      </ol>
      <p>For a person you only know online there is no number to ring. The check there is a live video call that works, and a friend you trust giving a second opinion.</p>
      <p><b>Don’t confuse it with.</b> Replying to the message to ask “is this real?”, because the scammer will say yes. Ringing the number in the message, because it is theirs even if you dial it. Searching for the company’s name and ringing the first result, because a paid advert can put a scam number at the top (Unit Four explains).</p>`},
  {h:'Send money',
   b:`<p><b>What it is.</b> They want you to pay: a bank transfer, a card payment, crypto, gift cards or vouchers, or a payment into new bank details they have just given you. Of the four asks, this is the one where the loss is quickest and usually final. A payment you sent yourself is hard for your bank to take back, and the bank’s fraud checks usually let it through because you were the one who sent it.</p>
      <p><b>Example.</b> An email says your streaming subscription has lapsed. It asks you to pay £8.99 at a link to keep your account. The amount is small and believable, and the ask is to pay.</p>
      <p><b>Sounds like.</b> “Pay the fee today.” “Buy gift cards and read me the numbers.” “Our bank details have changed, please pay into this account.” “Send me the difference back.”</p>
      <p><b>Catch it.</b> Ask: are they asking me to send money, or to send it somewhere new? If yes, that is the key’s answer <b>Send money</b>.</p>
      <p><b>What to do.</b> Do not pay from the message. Do the check, then pay only through the company’s own app or website, or into details you already had. Treat gift cards, crypto and “move your money to a safe account” as warnings in themselves, because no real organisation needs them. If you have already paid, ring your bank straight away (Unit Six says exactly what to do).</p>
      <p><b>Don’t confuse it with.</b> <b>Give details, or only chat so far</b>. If they want you to pay an amount, it is money. If they only want you to “confirm” a card number and nothing is charged, it is details. The real look-alike is a bill you were expecting from a shop or company you started with, paid through their own website. The difference is that you started it and you can check it.</p>`},
  {h:'Give a way into your account',
   b:`<p><b>What it is.</b> A way into your account is anything that lets someone sign in as you or act for you. There are three. A <i>password</i>. A <i>one-time code</i>, which is the six-digit number a bank or other service texts you to prove it is really you signing in or paying; it works once and runs out within minutes. And <i>permission for an app</i>, which is a screen where you press Allow so that an app can read your mail or files without ever knowing your password.</p>
      <p>A way into your account can be worse to lose than money, because the damage carries on after the conversation ends. A stolen mailbox can reset every other password you have, and your contacts start getting messages that look as if they came from you.</p>
      <p><b>Example.</b> An email says your supermarket delivery account has been locked after a suspicious order. “Sign in here to unlock it,” it says, with a button.</p>
      <p><b>Sounds like.</b> “Confirm your identity here.” “Read me the code we have just sent you.” “Press Allow to continue.”</p>
      <p><b>Catch it.</b> Ask: would what they want let someone sign in as me, or act on my account? If yes, that is the key’s answer <b>Give a way into your account</b>. The same answer covers a message that asks you nothing and only tells you about a sign-in, because that is what it is about. The card called “When nothing is asked” explains.</p>
      <p><b>What to do.</b> Never type a password into a page you reached from a message: open the website or app yourself. Never read a code out to anyone, ever. Do not press Allow on a permission screen unless you went looking for that app. Then do the check.</p>
      <p><b>Don’t confuse it with.</b> <b>Send money</b>: a password is not a payment, even if a page says you must pay to unlock your account. And <b>Put something on your device</b>: a permission lets an app into your account, while an installer puts a program on your phone or computer. The real look-alike is a bank or provider telling you about a new sign-in inside its own app, asking nothing.</p>`},
  {h:'Put something on your device',
   b:`<p><b>What it is.</b> They want a program, a file or a view of your screen on your phone or computer. That means an <i>installer</i> (a program you run to put new software on your device), a file to open, or a <i>screen-share</i> (a tool that lets another person see, or even control, your screen from far away). Nothing has to be hacked, because you do the work yourself. Once the software is on, it stays: it can watch you type passwords and open your bank app long after the call has ended.</p>
      <p><b>Example.</b> A “technician” rings about your broadband and asks you to install a free “support” app so he can see what is wrong.</p>
      <p><b>Sounds like.</b> “Download this and tell me the number on the screen.” “Open the attachment.” “I just need to see what you see.” “Open this web page and type in the number I read out.” That last one is a screen-share too: the number you type in is what lets him see your screen.</p>
      <p><b>Catch it.</b> Ask: do they want me to download something, open a file or share my screen? If yes, that is the key’s answer <b>Put something on your device</b>.</p>
      <p><b>What to do.</b> Do not install, open or share. End the call and do the check. If you have already installed something, uninstall it, switch off the internet connection, and change your passwords from a different device. Unit Four goes through it step by step.</p>
      <p><b>Don’t confuse it with.</b> <b>Send money</b>. A scam can be after your money and still begin by asking for access; the ask you answer is the one in front of you, and the card “Look at the ask, not the story or the goal” explains that. The real look-alike is software you chose and downloaded from the company’s own website, with nobody on the phone.</p>`},
  {h:'Give details, or only chat so far',
   b:`<p><b>What it is.</b> They want information about you: documents, personal details, or for now only your time and trust. No money is asked for, there is nothing to log into and nothing to install. That is why it feels safe. But details are valuable. They can be used to open accounts or loans in your name, to get past a bank’s security questions, or to make a later request sound believable. And chat is how a scammer builds trust before the real ask, which can arrive weeks later.</p>
      <p><b>Example.</b> A message request arrives from someone you do not know: “Hi! Jess gave me your name, I have just moved here.” You do not know a Jess, but they are so warm that you answer. They write every evening for a week, asking about your day, and ask you for nothing.</p>
      <p><b>Sounds like.</b> “Please upload a photo of your passport to complete onboarding.” “Please confirm your full card number so we can check your address.” “Oh sorry, wrong number! But you sound lovely.”</p>
      <p><b>Catch it.</b> Ask: do they want facts about me, or just my attention, with nothing else asked yet? If yes, that is the key’s answer <b>Give details, or only chat so far</b>.</p>
      <p><b>What to do.</b> Give out only what the other side really needs for something you started, and check who they are first (the check). With a chatty stranger you do not owe a reply: do not share your job, family or money, and stop answering if the chat starts heading somewhere. Unit Five goes through it.</p>
      <p><b>Don’t confuse it with.</b> <b>Send money</b>: a card number to “confirm” with nothing charged is details, while being told to pay an amount is money. And <b>Give a way into your account</b>: a password is a way in, not a detail. The real look-alike is a few ordinary details asked for something you started.</p>`},
  {h:'Look at the ask, not the story or the goal',
   b:`<p><b>What it is.</b> The ask is what they want you to do in the next minute. It is not the <i>goal</i> (what they get if nothing stops them), not the <i>story</i> (the reason they give you), and not the <i>channel</i> (text, call, email or dating app). Scam texts are sometimes called smishing and scam calls vishing, but those words only name the channel, and every ask can arrive by any channel. Polish does not count either: logos, correct spelling and even voices are cheap to copy now.</p>
      <p>The ask is the part you can still refuse. By the time a scam reaches its goal, you are usually looking at a screen the scammer controls, and that is the worst moment to start thinking.</p>
      <p><b>Example.</b> An email says the tax office owes you a £340 refund and tells you to sign in to your bank at a link “so the money can be paid in”. The goal is your money. The story is a refund. The channel is email. The ask right now is to sign in at their link, so the answer is <b>Give a way into your account</b>.</p>
      <p><b>Sounds like.</b> “Your refund is ready, just sign in to receive it.” “There is nothing to pay, I just need you to open this.”</p>
      <p><b>Catch it.</b> Ask: what do they want me to do before they will give me anything else? Answer that, not what you think the end goal is.</p>
      <p><b>What to do.</b> Stop at the ask. Say no, or do the check, at that moment, while it is still only a request.</p>
      <p><b>Don’t confuse it with.</b> Ignoring the story for good. The story does matter later: once you know the ask, the story helps tell you which scam it is, and the next four units use it. You just do not let the story, the goal or the channel decide what the ask is.</p>`},
  {h:'When nothing is asked',
   b:`<p><b>What it is.</b> Some messages do not ask you to do anything, and some ask in an unusual way. That is why the first question has two halves: what is it asking you to do right now, and if nothing, what is it about? If nothing is asked, you place the case by what it is about.</p>
      <p><b>Example.</b> Five awkward cases and where each one goes.</p>
      <table class="k">
      <tr><td>A notice says a new device signed in to your account. It asks nothing.</td><td><b>Give a way into your account</b>, because it is about your sign-in</td></tr>
      <tr><td>A supplier says their bank details have changed and asks you to pay the next bill there.</td><td><b>Send money</b>, because the ask is to pay somewhere new</td></tr>
      <tr><td>An email has an attachment you are asked to open.</td><td><b>Put something on your device</b>, because opening a file runs it on your device</td></tr>
      <tr><td>A message asks you to confirm your card number so it can “verify your address”. Nothing is charged.</td><td><b>Give details, or only chat so far</b></td></tr>
      <tr><td>A stranger chats warmly for weeks and asks for nothing.</td><td><b>Give details, or only chat so far</b>, because nothing has been asked yet</td></tr>
      </table>
      <p><b>Sounds like.</b> “We noticed a new sign-in to your account.” “Lovely to hear about your week!” Nothing is demanded, and that is the point.</p>
      <p><b>Catch it.</b> Ask: is anything being asked? If not, what is the message about: money, your login, your device, or you? The topic is your answer.</p>
      <p><b>What to do.</b> Nothing asked does not mean nothing wrong. Anything about your account or money that reaches you unasked gets the check: open the app yourself and look. With a chatty stranger, the move is not to share and not to be drawn on.</p>
      <p><b>Don’t confuse it with.</b> A real security notice and a fake one can use the same words. The difference is where it appears. A real notice tells you inside the app you opened yourself and asks nothing. A fake one comes in a message with a button or a number. Unit Three goes through that.</p>`},
  {h:'Real ones that look like scams: a bank call and a delivery text',
   b:`<p class="lead">Real banks and real couriers do contact you, and some of what they send looks like a scam for a moment. If you treat every real message as a scam, you stop reading the real warnings. This card shows what the real versions look like, so you can tell them from the scam versions.</p>
      <p><b>What it is.</b> Two real things that people mistake for scams, or the other way round.</p>
      <ul>
      <li>A <b>real bank call</b>: your bank rings because a payment on your account looks unusual. A real adviser asks whether you made the payment, and may ask you to confirm one detail only you would know, such as your date of birth. A real adviser is also happy for you to hang up and ring back on the number on your card.</li>
      <li>A <b>real delivery text</b>: a courier or a shop texts about a parcel you are expecting. It names the shop you ordered from, says when the parcel will arrive or that it was missed, and points to the courier’s own app or website, where you can see the parcel yourself. Sometimes it says a small import or redelivery charge is due, and for a parcel from abroad that can be real.</li>
      </ul>
      <p><b>Example.</b> Your bank rings to say that a £420 payment at an electronics shop looks unusual. Did you make it? You did not. She offers to block your card, and says that if you would rather, you can hang up and ring the number on the back of the card. Two days later a text from a courier says: “Your parcel from the shoe shop you ordered from is out for delivery today. Track it in the courier’s app.” It asks you for nothing.</p>
      <p><b>Sounds like.</b> A real bank: “Did you make this payment?” “If you would rather, hang up and call the number on your card.” A real delivery text: “Your order is out for delivery today.” “We missed you, rebook in the courier’s app.”</p>
      <p><b>Catch it.</b> Ask two things. First, is it asking for something a real one would never ask for? A real bank never asks you to read out a code, give your PIN or your full password, move your money to a “safe account”, install anything, or keep the call secret. A real courier never needs your card number or your password. Second, can I check it myself, without using anything that came with the call or the text? A real one passes that check, and a scam does not.</p>
      <p>The key is for messages that ask you for something. A delivery text that asks for nothing needs no name. If it asks you to pay, to sign in or to confirm your card number, put it through the key like any other message. A bank call that you did not start cannot be shown to be real until you ring back (Unit Five explains why).</p>
      <p><b>What to do.</b> Do not use the number or the link in the call or the text, even when it looks right. Hang up and ring the number on your card, or open the courier’s or the shop’s own app and look for the parcel there. If the real one exists, it is there when you look. Ringing back turns a call that came to you into one you started, and that is what makes it safe.</p>
      <p><b>Don’t confuse it with.</b> The scam versions. A scam “bank” call asks for a code, a PIN or a move to a “safe account”, tells you to stay on the line, and tells you to keep it secret. A scam delivery text asks you to pay a small fee, sign in, or confirm your card number, at a link that arrived in the text. The words can be almost the same. The difference is what it asks you to do, and whether it survives the check.</p>`},
  {h:'The four answers side by side',
   b:`<p class="lead">The first question of the key is <b>What is it asking you to do right now? If nothing, what is it about?</b> It has four answers, and each one leads to its own set of names.</p>
      <table class="k">
      <tr><td><b>Send money</b></td><td>Fake investment friend (pig butchering), Romance scam, Fee to unlock a payout (advance fee), Fake recovery service, Changed bank details (invoice fraud), Fake official demanding payment, Overpayment trick (fake buyer), Real payment request. Unit Two.</td></tr>
      <tr><td><b>Give a way into your account</b></td><td>Fake login page (phishing), Code read-out scam, App permission trap, Real security notice. Unit Three.</td></tr>
      <tr><td><b>Put something on your device</b></td><td>Fake virus alert (tech-support scam), Harmful file (malware), Refund scam, Real software installation. Unit Four.</td></tr>
      <tr><td><b>Give details, or only chat so far</b></td><td>Identity grab (identity theft), Friendly chat before the ask, Real request for details. Unit Five.</td></tr>
      </table>
      <p>Every group has a real look-alike at the end of its list. A key that treats everything as a scam is one you stop using the first time it makes you insult a real builder or a real bank.</p>
      <p><b>What to do.</b> Choose the answer that matches what is being asked right now, then go to that group’s two questions. If you cannot decide, or the questions will not come, do the check.</p>`},
  {h:'Worked example: a refund call',
   b:`<p class="lead">A man rings and says he works for your electricity supplier. Your meter has been over-reading, he says, and you are owed £312. To process it he asks you to open a web page and type in the number he reads out, so that he can “see your account”.</p>
      <p><b>Step one: what is it asking you to do right now? If nothing, what is it about?</b></p>
      <ul>
      <li>The story is a refund for a faulty meter. The goal is money. Neither is the ask.</li>
      <li>The ask right now is “open a web page and type in the number I read out”. Typing in a number so that someone can “see your account” is how a screen-share starts: it gives him a view of everything you see.</li>
      <li>Nobody has asked you to pay anything yet, so the answer is not <b>Send money</b>. Nobody wants a password or a code, so it is not <b>Give a way into your account</b>. The answer is <b>Put something on your device</b>.</li>
      </ul>
      <p><b>What to do.</b> Do not type the number. End the call. Ring your electricity supplier on the number on your last bill and ask whether they called you. Unit Four takes this same case the rest of the way, through its two questions, to the name <b>Refund scam</b>.</p>`}
  ],
  drill:{kind:'pick', key:'w1'} },

{ tag:'Two', title:'Requests to send money',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">After this unit you can look at a request to send money and say which of eight things it is: seven kinds of scam, or a real payment request. It turns up as a new friend with an investment tip, a prize that needs a fee, a bill with new bank details, a caller threatening arrest, or a buyer who pays too much.</p>
      <p>The unit answers two questions of the key, in the key’s exact words. First: <b>What reason is given for paying?</b> Then: <b>What is the odd part of the request?</b> Together they lead to a name.</p>`},
  {h:'Why a payment you send yourself is hard to get back',
   b:`<p><b>What it is.</b> In nearly every scam in this unit you make the payment yourself, on purpose, through your own bank, because you were given a reason that seemed convincing. That is not a side detail. It is the whole design. When you authorise a payment (you approve it in your banking app, or type in the transfer yourself), your bank sees an instruction from you. Its fraud checks are built to catch someone else using your account, so they usually let your own instruction through. The money is also hard to get back, because it has left, and the account it went to is often emptied within hours. And it is hard to report, because reporting means describing a decision you made, which many people find embarrassing.</p>
      <p><b>Example.</b> Take two payments of £300. In the first, a thief copies your card details and spends £300 in an online shop. Your bank sees a payment you did not make, often stops it, and refunds you. In the second, a caller talks you into typing a £300 transfer into your own banking app. Your bank sees you doing what you chose, and sends it. The money is gone within hours, and getting it back is much harder.</p>
      <p><b>Sounds like.</b> “I did it myself, so the bank can’t help.” “It went through without a problem, so it must have been fine.” “I’m too embarrassed to ring them.”</p>
      <p><b>Catch it.</b> Ask: am I the one about to type in or approve this payment? If yes, the bank’s checks will mostly leave the decision to you. That is the key’s answer <b>Send money</b>, and it is the ask to slow down on.</p>
      <p><b>What to do.</b> Treat this as the reason to be slow at the moment of paying, not afterwards. A new payee (someone you have not paid before), a large sum, or a reason you cannot check are each a moment to stop and do the check. If you have already paid, speed matters more than shame: ring your bank at once (Unit Six says exactly what to do).</p>
      <p><b>Don’t confuse it with.</b> A payment taken from your account without your say-so, such as a stolen card used in a shop. Banks are set up to catch and refund those. A payment you were tricked into sending yourself is different, and your bank may still help, but it is not automatic, so tell it at once.</p>`},
  {h:'Fake investment friend (pig butchering)',
   b:`<p><b>What it is.</b> Someone you have got to know, through a dating app, a wrong-number message or a social-media chat, tells you how they make money on a trading or crypto website and helps you open an account. The site looks real. Your balance grows every day, and you can even take out a small amount in the first week. But the numbers are made up, and every pound you pay in goes straight to the scammers. When you try to take out a large amount, a fee or “tax” appears that you must pay first, and then another. Crews call it “pig butchering”: the person is fattened with trust and fake profits before the big loss.</p>
      <p><b>Example.</b> Priya gets a message from a stranger who says she meant to text a friend. They chat every day for two months. The new friend mentions that she makes steady money on a trading site and offers to show her how. Priya puts in £200 and sees £260 a week later. She takes out £100 without any trouble, so she pays in £15,000. Now the site says she must pay 15% in “tax” before it will release anything.</p>
      <p><b>Sounds like.</b> “I couldn’t have afforded my flat without it.” “Start small, you can withdraw any time.” “You made £2,400 this week, you should put in more while the rate is good.” “To release your profits you need to pay the withdrawal tax first.”</p>
      <p><b>Catch it.</b> Ask: what reason is given for paying? A friendship that has built up over weeks or months is the key’s answer <b>A friendship or romance that has built up over weeks or months</b>. Then ask: what is the odd part of the request? If your profits show only on their site and you cannot take them out, the answer is <b>Your profits show only on their own app or site, and you cannot take them out</b>. Read “cannot take them out” as “cannot take out the amount that matters”: a small first withdrawal often works, and that is part of the trap.</p>
      <p><b>What to do.</b> Stop paying, including the “tax” or “fee”. A real platform never makes you pay to take out your own money. Do the check on the platform: look it up on the register kept by your country’s financial regulator (the government body that licenses investment firms), typing the register’s address in yourself. Tell a friend or relative now, because secrecy is part of how this works. If you have already paid, ring your bank at once and follow Unit Six.</p>
      <p><b>Don’t confuse it with.</b> <b>Romance scam</b>. That also starts with a long friendship, but the money goes to one person’s emergency, not into a website that shows fake profits. The real look-alike is an investment you found yourself through a regulated firm, where you can withdraw at any time and nobody makes you pay a fee to take out your own money.</p>`},
  {h:'Romance scam',
   b:`<p><b>What it is.</b> A person you meet online, usually on a dating app, becomes your partner in everything except in person. They are always far away: working on an oil rig, serving overseas, working as an engineer abroad. They never manage a live video call, because the camera is broken or the signal is bad. For weeks or months they ask for nothing. Then comes a crisis, such as a hospital bill, a customs fee or a flight home, and a reluctant, apologetic request for money. The months of asking for nothing were the investment that makes the request work.</p>
      <p><b>Example.</b> Tom has been messaging Elena for five months. She is a nurse working abroad, she says, and she loves him. Her flight to visit him has been cancelled, and rebooking costs £600 that she cannot reach because her card has been blocked. She is embarrassed to ask.</p>
      <p><b>Sounds like.</b> “I hate asking you this.” “I’ll pay you back the day I land.” “Please don’t tell your family, they won’t understand.” “The camera on the rig is broken again.”</p>
      <p><b>Catch it.</b> Ask: what reason is given for paying? A love or friendship built over weeks or months is the answer <b>A friendship or romance that has built up over weeks or months</b>. Then ask: what is the odd part of the request? It is a crisis, from someone you have never met, so the answer is <b>A crisis you are asked to pay for, from someone you have never met in person</b>.</p>
      <p><b>What to do.</b> Ask for a live video call and watch what happens. If it fails every time, treat the person as a scammer. Run their photos through a reverse image search, which finds the same pictures used under other names. Tell a friend, even if the person has asked you not to. Never send money to someone you have not met in person, however sorry you feel for them.</p>
      <p><b>Don’t confuse it with.</b> <b>Fake investment friend (pig butchering)</b>. That has the same slow friendship, but the money goes into a website showing fake profits instead of one person’s emergency. The real look-alike is a partner you have met in person, who can video-call you, and whose emergency a friend or relative of theirs can confirm.</p>`},
  {h:'Fee to unlock a payout (advance fee)',
   b:`<p><b>What it is.</b> You are told that money is waiting for you: a prize you never entered for, an inheritance from a stranger with your surname, a grant, a loan that has been approved, or a job that needs you to buy equipment first. To get it, you must pay a fee: customs, tax, legal costs, insurance. There is no payout. Once you have paid, there is another fee, and another. “Advance” means the fee is paid in advance, before the money you were promised.</p>
      <p><b>Example.</b> A message on social media says you have been picked for a £5,000 community grant. To receive it, you must first pay a £90 processing fee.</p>
      <p><b>Sounds like.</b> “Your prize is ready for release.” “Only the customs duty remains.” “The fee is refundable once the transfer clears.” “Pay today or the offer is withdrawn.”</p>
      <p><b>Catch it.</b> Ask: what reason is given for paying? Money waiting for you is the answer <b>Money you are told is waiting for you: a prize, an inheritance, or funds you lost</b>. Then ask: what is the odd part of the request? If you must pay before you get anything, the answer is <b>You must pay a fee before you get any of the money</b>.</p>
      <p><b>What to do.</b> Do not pay. Real prizes, grants, loans and inheritances take their costs out of the money, and never ask you to send money first. If you never entered a draw, you did not win it. Look up the organisation yourself, by typing its address in or using a number you already had, and ask whether they sent the message. Delete it, and warn anyone it was also sent to.</p>
      <p><b>Don’t confuse it with.</b> <b>Fake recovery service</b>. That offers to get back money you already lost, while this promises money you never had. The real look-alike is a prize you entered yourself, or a solicitor’s fee that is taken out of an estate and billed in writing, never asked for up front by a stranger.</p>`},
  {h:'Fake recovery service',
   b:`<p><b>What it is.</b> After you lose money to a scam, someone gets in touch (or you find them in a search) and says they can get it back. They may say they trace crypto, work with the regulator, or are lawyers. They ask for a fee up front: a retainer, an admin charge, a “release” payment. They know about your loss because victims’ details are sold on between criminals, or because they are the same people who took the first payment, coming back for more. A person who has been scammed once is a proven payer.</p>
      <p><b>Example.</b> Dan lost £1,800 to a fake concert-ticket seller in March. In June an email arrives from a “claims specialist”. They have found his money, they say, and will release it for a £120 administration fee.</p>
      <p><b>Sounds like.</b> “We have already traced your funds.” “We work with the regulator.” “Our fee is fully refundable.” “No recovery, no fee” (and then a fee is asked for anyway).</p>
      <p><b>Catch it.</b> Ask: what reason is given for paying? Money coming back to you counts as money waiting for you, and the key’s answer is <b>Money you are told is waiting for you: a prize, an inheritance, or funds you lost</b>. Then ask: what is the odd part of the request? They offer to recover your loss, so the answer is <b>They offer to get back money you already lost</b>.</p>
      <p><b>What to do.</b> Do not pay or reply. Report the first loss to your bank and to your country’s fraud-reporting service. Those are the real places to get help, and they do not charge you or cold-contact you. Anyone who approaches you first about your loss is a warning in itself. If you did pay, tell your bank, because the same people often return.</p>
      <p><b>Don’t confuse it with.</b> <b>Fee to unlock a payout (advance fee)</b>. That promises a prize or an inheritance you never had, while this targets money you lost. The real look-alike is your bank, the police or the financial ombudsman working on a loss you reported to them: they do not charge a fee to start, and they do not ring you first with an offer.</p>`},
  {h:'Changed bank details (invoice fraud)',
   b:`<p><b>What it is.</b> You are about to pay a real bill to someone you already deal with: a builder, a solicitor, a supplier, a landlord. A message arrives that looks as if it is from them, often in the same email thread as before, saying their bank details have changed. You pay the new account, and the money goes to a criminal. The criminal got in by breaking into the real person’s mailbox, or by registering an email address that differs from the real one by a single letter. The change is “late”: the arrangement was already running and the bill was already agreed. It happens to individuals (a house deposit, a builder) as well as to company finance teams.</p>
      <p><b>Example.</b> You are buying a flat. Your solicitor’s email, in the same thread as all the earlier ones, says their bank has changed and asks you to send the £18,000 deposit to a new account.</p>
      <p><b>Sounds like.</b> “Please note our bank details have changed with immediate effect.” “Please disregard the previous account.” “Our auditor has asked us to move banks.”</p>
      <p><b>Catch it.</b> Ask: what reason is given for paying? A bill from someone you already pay is the key’s answer <b>A bill from someone you already pay</b>. Then ask: what is the odd part of the request? New details announced by message is the answer <b>The bank details changed late, and you were told by message</b>.</p>
      <p><b>What to do.</b> Before you pay into new details, ring the person on a number you already had (on the contract, on an earlier paper invoice, or on their website, typed in by yourself) and ask them out loud. Never use the number in the email that announced the change. If the change is real they will confirm it in thirty seconds. In a business, make it a rule that every change of bank details needs a call-back and a second person to approve it.</p>
      <p><b>Don’t confuse it with.</b> <b>Real payment request</b>, which is the same bill with the same details as before. A real change survives the check, and a fake one does not. And not <b>Fake official demanding payment</b>: that one is loud and threatening, while this one is calm, polite and looks like routine admin.</p>`},
  {h:'Fake official demanding payment',
   b:`<p><b>What it is.</b> Someone claims to be an official: the tax office, the police, immigration, a court, or your bank’s fraud department. They say you owe money or are in trouble, with a warrant, a frozen account or a cancelled visa. They tell you to pay immediately, in a way that cannot be undone: gift cards, crypto, a wire, or a transfer to a “safe account”. They tell you to keep it secret, because staff might be involved. The secrecy exists because a bank teller or a shop assistant would stop you.</p>
      <p><b>Example.</b> A recorded voice says your visa has been cancelled and a warrant has been issued. A man then comes on the line and says you can clear it today by buying $800 of gift cards and reading out the codes.</p>
      <p><b>Sounds like.</b> “This is your last warning.” “Do not tell the bank, they may be involved.” “Stay on the line while you buy them.” “Move your money to this safe account.”</p>
      <p><b>Catch it.</b> Ask: what reason is given for paying? Someone official threatening you is the key’s answer <b>A threat from someone official: a fine, arrest or frozen account</b>. Then ask: what is the odd part of the request? If you must pay at once in a way that cannot be reversed, the answer is <b>You must pay right now, in a way that cannot be undone</b>.</p>
      <p><b>What to do.</b> Hang up and do the check: ring the agency or your bank on a number you already had. Real agencies write first, give you time and a way to appeal, and take payment on their own website or by an ordinary transfer to a published account. They never take gift cards or crypto, and they never ask you to lie to bank staff. If someone tells you not to talk to anyone, the instruction is the warning.</p>
      <p><b>Don’t confuse it with.</b> <b>Changed bank details (invoice fraud)</b>, which is calm and routine and sits inside a real thread. There are two real look-alikes. One is an official letter that gives you weeks, names a case you can look up, and lets you pay on the organisation’s own website. The other is a real bank call: your bank may ring about a payment that looks wrong and ask whether you made it, but a real adviser never asks you to move your money to a “safe account”, never tells you to keep it secret, and is happy for you to hang up and ring the number on your card.</p>`},
  {h:'Overpayment trick (fake buyer)',
   b:`<p><b>What it is.</b> You are selling something online. A buyer pays without haggling but sends more than the price, then says it was a mistake (a typing slip, an assistant’s error) and asks you to send the difference to another account, or to a “shipping agent”. Their payment is fake or will be reversed: a stolen card, a cheque that bounces, a transfer that is recalled. Your payment is real and immediate. When theirs disappears, you have lost the item or the money, or both.</p>
      <p><b>Example.</b> You advertise a bike for £400. A buyer sends £800, writes that his wife typed the wrong amount, and asks you to send £400 back to her account.</p>
      <p><b>Sounds like.</b> “Oops, I added an extra zero.” “Just send the balance to my shipping agent and he will collect.” “I can’t wait, please do it today.”</p>
      <p><b>Catch it.</b> Ask: what reason is given for paying? A sale is the key’s answer <b>A deal you are part of: a sale, a purchase or a rental</b>. Then ask: what is the odd part of the request? If they paid too much and want money back, the answer is <b>They paid you too much and want the difference sent back</b>.</p>
      <p><b>What to do.</b> Do not send anything, and do not hand over the item. Return the whole payment to the account it came from, or cancel the sale. Wait until a payment has fully cleared before you ship or hand anything over. “Cleared” means the money is really yours and can no longer be taken back, and a payment can show in your balance days before that, so ask your bank when it is safe. Never send the difference as a separate payment.</p>
      <p><b>Don’t confuse it with.</b> <b>Real payment request</b>, where the amount is right and nothing needs fixing. A real buyer who overpays by accident fixes it by asking for the original payment back, in full, to the account it came from. A real buyer never asks for a second payment to somebody else.</p>`},
  {h:'Real payment request',
   b:`<p><b>What it is.</b> A real payment request is the ordinary kind. You started the deal, the bank details are the ones you were given at the start, nothing has been changed late, nobody is rushing you, and you can check it using contact details you already had. The key needs this answer because a key that flags everything is one you stop using.</p>
      <p><b>Example.</b> You find a holiday cottage on a website and contact the owner yourself. She sends a written booking confirmation giving the deposit, the bank details and the date the balance is due. The phone number on it matches the one on the website you found, and she is happy for you to ring it.</p>
      <p><b>Sounds like.</b> “Here are the account details, as on the booking confirmation. Do ring the office if you want to check.” “No rush, the deposit is due by the end of the month.” “The deposit is protected in a scheme you can look up.”</p>
      <p><b>Catch it.</b> Ask: what reason is given for paying? A deal you started is the answer <b>A deal you are part of: a sale, a purchase or a rental</b>. Then ask: what is the odd part of the request? There is none, so the answer is <b>Nothing odd: you started it, nothing changed, and you can check it</b>.</p>
      <p><b>What to do.</b> Pay in the normal way, and still do the check once if the sum is large, because a real request passes it. Pay by a method that protects you where you can, such as a card or the platform’s own payment system. Keep the confirmation. If any of the three things changes (the details move late, someone starts rushing you, or checking is discouraged), start again from the first question. A small charge from a courier is real only if the same charge also appears in the courier’s own app or on the shop’s order page. Never pay it from the text.</p>
      <p><b>Don’t confuse it with.</b> <b>Changed bank details (invoice fraud)</b>, where the details move late by message, and <b>Overpayment trick (fake buyer)</b>, where a payment arrives that is bigger than it should be. A normal bill from someone you already pay, with the same details as before, is simply a normal bill: the key is for requests that made you wonder.</p>`},
  {h:'Hurry, secrecy and no checking',
   b:`<p class="lead">Most money scams lean on one or more of three pressures. A real request leans on none of them.</p>
      <p><b>What it is.</b> Three pressures that exist to stop you doing the check.</p>
      <ul>
      <li><b>Hurry</b> (urgency) takes away the time you would have used to check.</li>
      <li><b>Secrecy</b> (isolation) takes away the person who would have said stop: the bank teller, the shop assistant, your daughter.</li>
      <li><b>A reason not to check</b> is handed to you in advance, so that when you think of checking, it already feels pointless or rude.</li>
      </ul>
      <p><b>Example.</b> A new friend you met online messages: the trading offer closes at midnight (hurry). Please do not tell your family, he says, because they will only talk you out of it (secrecy). And the platform’s helpdesk is not allowed to discuss offers, so there is no point asking them (a reason not to check). All three arrive in one message.</p>
      <p><b>Sounds like.</b> Hurry: “Pay today.” “The offer closes at midnight.” “Your account will be frozen within the hour.” Secrecy: “Do not tell the bank, they may be involved.” “Don’t tell your family, they won’t understand.” A reason not to check: “This line is monitored, so only ring me on this number.” “It is confidential.” “Don’t embarrass yourself by asking.”</p>
      <p><b>Catch it.</b> Ask: is anyone making it hard for me to stop, to ask someone, or to check? Any one of the three is enough. Hurry that demands a payment right now, in a way that cannot be undone, is the key’s answer <b>You must pay right now, in a way that cannot be undone</b>.</p>
      <p>Not every scam uses all three. Fake official demanding payment usually uses all three. Romance scam leans on secrecy and a deadline. Fake investment friend (pig butchering) leans on secrecy and an offer that “won’t last”. Overpayment trick (fake buyer) leans on hurry. Changed bank details (invoice fraud) leans mostly on looking routine, so it needs very little hurry. A pressure you see is a reason to do the check. A pressure you do not see is not a reason to skip it.</p>
      <p><b>What to do.</b> When you notice even one of the three, stop and do the check. Tell someone you trust, even if you were told not to.</p>
      <p><b>Don’t confuse it with.</b> A real deadline. A real bill can have a due date, and a real offer can end. The difference is that a real request can wait while you check it, and never asks you to keep it secret.</p>`},
  {h:'Telling the look-alikes apart',
   b:`<p class="lead">Some pairs of names look alike until you ask the right question. Each pair below shares a first answer, and the second question splits them.</p>
      <table class="k">
      <tr><td><b>Fake investment friend (pig butchering)</b> or <b>Romance scam</b>: both begin with a friendship that has built up over weeks or months</td><td>What is the odd part of the request? A website that shows profits you cannot take out, or a crisis you are asked to pay for from someone you have never met</td></tr>
      <tr><td><b>Fee to unlock a payout (advance fee)</b> or <b>Fake recovery service</b>: both say money is waiting for you</td><td>What is the odd part of the request? A fee before money you never had, or an offer to get back money you already lost</td></tr>
      <tr><td><b>Changed bank details (invoice fraud)</b> or <b>Real payment request</b>: both look like a normal bill</td><td>What is the odd part of the request? The details changed late by message, or nothing changed and you can check it</td></tr>
      <tr><td><b>Overpayment trick (fake buyer)</b> or <b>Real payment request</b>: both are a deal you are part of</td><td>What is the odd part of the request? They paid too much and want the difference sent back, or nothing odd</td></tr>
      <tr><td><b>Fake official demanding payment</b> or <b>Changed bank details (invoice fraud)</b>: both ask you to pay</td><td>What reason is given for paying? A threat from someone official, or a bill from someone you already pay</td></tr>
      </table>
      <p><b>What to do.</b> When two names fit, do not guess. Run the check, because it works on both, and look for the one detail in the table that separates them.</p>`},
  {h:'The two questions side by side',
   b:`<p class="lead">The first question is <b>What reason is given for paying?</b> The second is <b>What is the odd part of the request?</b> In each row the answer to the first question comes first, the answer to the second comes after it, and the pair leads to one name.</p>
      <table class="k">
      <tr><td><b>First:</b> A friendship or romance that has built up over weeks or months<br><b>Then:</b> Your profits show only on their own app or site, and you cannot take them out</td><td><b>Fake investment friend (pig butchering)</b></td></tr>
      <tr><td><b>First:</b> A friendship or romance that has built up over weeks or months<br><b>Then:</b> A crisis you are asked to pay for, from someone you have never met in person</td><td><b>Romance scam</b></td></tr>
      <tr><td><b>First:</b> Money you are told is waiting for you: a prize, an inheritance, or funds you lost<br><b>Then:</b> You must pay a fee before you get any of the money</td><td><b>Fee to unlock a payout (advance fee)</b></td></tr>
      <tr><td><b>First:</b> Money you are told is waiting for you: a prize, an inheritance, or funds you lost<br><b>Then:</b> They offer to get back money you already lost</td><td><b>Fake recovery service</b></td></tr>
      <tr><td><b>First:</b> A bill from someone you already pay<br><b>Then:</b> The bank details changed late, and you were told by message</td><td><b>Changed bank details (invoice fraud)</b></td></tr>
      <tr><td><b>First:</b> A threat from someone official: a fine, arrest or frozen account<br><b>Then:</b> You must pay right now, in a way that cannot be undone</td><td><b>Fake official demanding payment</b></td></tr>
      <tr><td><b>First:</b> A deal you are part of: a sale, a purchase or a rental<br><b>Then:</b> They paid you too much and want the difference sent back</td><td><b>Overpayment trick (fake buyer)</b></td></tr>
      <tr><td><b>First:</b> A deal you are part of: a sale, a purchase or a rental<br><b>Then:</b> Nothing odd: you started it, nothing changed, and you can check it</td><td><b>Real payment request</b></td></tr>
      </table>
      <p><b>What to do.</b> If you can answer only the first question, that is enough to stop and do the check. The name helps you describe what you saw, and the check protects your money whichever name it turns out to be.</p>`},
  {h:'Worked example: a message about lost crypto',
   b:`<p class="lead">A message arrives from “TraceBack Recovery”. It says you lost money in a crypto scam last year, that they have located your funds in a wallet, and that they can release them to you once you pay a £250 “verification fee”.</p>
      <p><b>Step one: what is it asking you to do right now? If nothing, what is it about?</b> The words “once you pay a £250 verification fee” are a payment. The answer is <b>Send money</b>.</p>
      <p><b>Step two: what reason is given for paying?</b> There is no friendship, no bill and no official threat, and you have not started any deal. The reason is that your funds have been found and are waiting to be released. That is <b>Money you are told is waiting for you: a prize, an inheritance, or funds you lost</b>. This answer leaves two names: Fee to unlock a payout (advance fee), and Fake recovery service.</p>
      <p><b>Step three: what is the odd part of the request?</b> The message says “you lost money in a crypto scam last year”, and the offer is to get that money back. That is <b>They offer to get back money you already lost</b>, not a fee before a prize you never had.</p>
      <p><b>The name.</b> <b>Fake recovery service</b>.</p>
      <p><b>What to do.</b> Do not reply or pay. Tell your bank and your country’s fraud-reporting service about the first loss. Real help with a loss comes from them, and nobody real contacts you first to sell it.</p>`}
  ],
  drill:{kind:'pick', key:'w2'} },

{ tag:'Three', title:'Ways into your account',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">After this unit you can tell apart four things that all involve your account’s sign-in: three scams that try to get a way in, and the real security notice. They turn up as a “suspicious sign-in” text, a call about a code, a permission pop-up, or an alert inside your banking app.</p>
      <p>The unit answers two questions of the key, in the key’s exact words. First: <b>What would you be handing over?</b> Then: <b>What would a real one never do?</b> Together they lead to a name.</p>`},
  {h:'Three ways in, and what each one is worth',
   b:`<p class="lead">Each of the three ways in gives someone a different power over your account, and each is beaten by a different defence.</p>
      <ul>
      <li>A <b>password</b> lets someone sign in as you from anywhere. You lose it by typing it into a page that is not the real one.</li>
      <li>A <b>one-time code</b> lets someone finish a sign-in or a payment that they have already started. A bank or other service sends the code to your own phone to prove it is you. The code is real and arrives on cue, because the person on the phone is doing something at that moment and the system is asking you to approve it. That is why it feels so real.</li>
      <li>A <b>permission for an app</b> lets a program read your mail, files or contacts, or send mail as you, without ever seeing your password. It stays in place when you change your password.</li>
      </ul>
      <p>The first question of this unit asks which of these you would be handing over, or whether you would be handing over nothing at all. The second question is a check: it asks what a real one would never do. If the case does one of those things, you have confirmed your answer. If it does none of them, it is probably the real security notice. In a live moment you may only be able to answer the first question, and that is enough to stop and do the check.</p>`},
  {h:'Fake login page (phishing)',
   b:`<p><b>What it is.</b> A message says something is wrong with your account (an unusual sign-in, a full mailbox, a parcel waiting) and gives you a button or link. The link opens a page that looks exactly like your bank, your email provider or a shop, with the right logo and layout. You type your username and password, and the page sends them to the scammer, who signs in as you. The page can be perfect. What gives it away is not how it looks but how you got there: through their message. “Phishing” means fishing for your details with a lure.</p>
      <p><b>Example.</b> A text says: “Your mailbox is almost full. Click to upgrade or your emails will be deleted.” The link opens a page that looks like your email provider’s sign-in page. The web address is a slightly different spelling of the provider’s name.</p>
      <p><b>Sounds like.</b> “Unusual sign-in detected. Confirm your identity.” “Your account will be closed in 24 hours.” “Click here to keep your account active.”</p>
      <p><b>Catch it.</b> Ask: what would you be handing over? If it is a password typed into a page that you reached from their message, the key’s answer is <b>A password, typed into a page you reached from their message</b>. Then ask: what would a real one never do? The answer is <b>Never send you to a login page through a link in a message</b>.</p>
      <p><b>What to do.</b> Do not click the link. Open the website or app yourself, by typing the address in or using the app already on your phone, and look for the same warning there. If it is real it will be there too, and if it is not, nothing is lost. A password manager helps: it will not offer your saved password on a page with the wrong address, which is a free warning. If you have already typed your password in, change it at once from the real site, on a different device if you can, and switch on two-step sign-in (a second check, such as a code sent to your phone, as well as your password).</p>
      <p><b>Don’t confuse it with.</b> <b>Real security notice</b>, which can use the same words (“unusual sign-in”) but sits inside the app you opened yourself and asks for nothing. And <b>Code read-out scam</b>, which has no fake page: the code is real. The real look-alikes are a link you asked for yourself a minute ago, such as a password reset you started, and a real delivery text, which tells you where your parcel is and never needs your password. If you did not just ask for the link, it is theirs.</p>`},
  {h:'Code read-out scam',
   b:`<p><b>What it is.</b> Someone rings you, pretends to be your bank, phone company or an online shop, and says something is wrong: a suspicious payment, a new phone ordered, an account in use somewhere else. While you are on the phone, they are actually trying to sign in to your account or make a payment from it. The service sends a one-time code to your phone to check it is you. The caller then asks you to read the code out loud, “to cancel the payment” or “to verify your identity”. The code is real, it arrives on cue, and giving it away lets them finish what they started. No fake page is needed, which is why this scam beats people who would never type a password into a fake site.</p>
      <p><b>Example.</b> A caller says he is from your streaming service’s security team. Someone in another country is trying to sign in, he says, and to block them he needs the code that has just arrived on your phone.</p>
      <p><b>Sounds like.</b> “I’m sending you a code now, please read it back to me.” “It is only to cancel the payment.” “Don’t share it with anyone else, only with me.”</p>
      <p><b>Catch it.</b> Ask: what would you be handing over? A code that has just come to your phone is the key’s answer <b>A code that just arrived on your own phone</b>. Then ask: what would a real one never do? The answer is <b>Never ask you to read a code out to anyone</b>.</p>
      <p><b>What to do.</b> Never read a code out to anyone, whoever they say they are: not the bank, not the police, not a company’s “security team”. A real code is for you to type into a screen you opened yourself, and nobody else needs to hear it. Hang up. Read the text that carries the code, which often says what it is for (“to approve a payment of …”). Then do the check by ringing the real number. If you have already read a code out, ring your bank straight away and change your passwords.</p>
      <p><b>Don’t confuse it with.</b> <b>Fake login page (phishing)</b>, which steals a password through a fake page, where this scam uses a real code from a real text. The real look-alike is a code you asked for yourself: you press “sign in” on a site you opened, the code arrives, and you type it into that same site. The difference is that you type it, and nobody on a phone asks for it.</p>`},
  {h:'App permission trap',
   b:`<p><b>What it is.</b> An app asks for permission to use your account. The permission screen is real: it comes from your actual email or cloud provider, shows the real logo, and lists real permissions such as “read and send your email” or “see all your files”. What is false is the reason you were given for pressing Allow: a shared document, an “urgent scan”, a “productivity tool” a colleague supposedly uses. Once you press Allow, the app can read your mail and files, and often send mail as you, until you remove it. That is what “standing access” means: access that stays in place until you take it away, instead of one visit. It carries on after you change your password, and nothing that watches for sign-ins sees it, because the app never signs in.</p>
      <p><b>Example.</b> A photo-printing website offers 20 free prints if you “sign in with your email account”. The screen your provider shows asks you to allow “PrintPal” to “read, send and delete all your email”.</p>
      <p><b>Sounds like.</b> “Click Allow to open the document.” “Grant access so we can scan your inbox for threats.” “Approve this app to continue.”</p>
      <p><b>Catch it.</b> Ask: what would you be handing over? Permission for an app is the key’s answer <b>Permission for an app to use your account</b>. Then ask: what would a real one never do? The answer is <b>Never ask you to give an unfamiliar app standing access to your account</b>.</p>
      <p><b>What to do.</b> Press Deny or close the page, unless you went looking for that app and the permissions match what it needs. A photo-printing site has no need to read, send and delete all your email. Once or twice a year, look at the permissions list: in your account’s security or privacy settings, look for “third-party apps”, “connected apps” or “apps with access”, and remove anything you do not recognise. Removing an app takes effect at once, which a password change does not.</p>
      <p><b>Don’t confuse it with.</b> <b>Fake login page (phishing)</b>: there the page is fake and takes your password, while here the screen is real and no password is taken. The real look-alike is a permission you went looking for. You opened a calendar app yourself, and it asks only for the calendar access it needs.</p>`},
  {h:'Real security notice',
   b:`<p><b>What it is.</b> A real security notice tells you that something happened on your account: a new sign-in, a changed password, a payment made. It tells you inside the app or website you opened yourself, or in a message that asks you for nothing: no link to sign in, no code to read out, no number to ring. If something is wrong, you fix it in the app yourself. The key needs this answer because a key that treats every security message as a scam leaves you ignoring the real warnings.</p>
      <p><b>Example.</b> You switch on two-step sign-in for your email account. A minute later a banner in the app says: “Two-step sign-in was turned on for your account. If this was you, there is nothing to do.” There is no link to confirm anything, and the app’s security page shows what changed, so you can undo it yourself.</p>
      <p><b>Sounds like.</b> “A new sign-in to your account was detected. If this was you, you can ignore this.” “Your password was changed today.”</p>
      <p><b>Catch it.</b> Ask: what would you be handing over? Nothing, so the key’s answer is <b>Nothing: you are only told something happened</b>. Then ask: what would a real one never do? It does none of the three scam moves, so the answer is <b>None of these: it only tells you, and asks for nothing</b>.</p>
      <p><b>What to do.</b> Look, and act only inside the app. If you did not do it, change your password from the app and end the sessions you do not recognise. If you want to be sure, open the app yourself and check, which is the check. Do not use any link or number that came with the message.</p>
      <p><b>Don’t confuse it with.</b> <b>Fake login page (phishing)</b>. A real notice and a fake one can say exactly the same thing, and the difference is where it sends you: a real notice asks for nothing and sends you nowhere. Real companies do sometimes add a “review activity” link, and you never need to use it, because you can open the app yourself and see the same thing.</p>`},
  {h:'What stops what',
   b:`<p class="lead">Different habits beat different ways in. Knowing which is which stops you trusting the wrong one.</p>
      <table class="k">
      <tr><td><b>A password manager</b> (an app that stores your passwords and fills them in for you)</td><td>Stops a Fake login page (phishing), because it will not fill in your password on a page with the wrong address. It does nothing against a Code read-out scam or an App permission trap.</td></tr>
      <tr><td><b>Changing your password</b></td><td>Stops a stolen password. It does not take back a code you read out, and it does not remove an app you gave permission to.</td></tr>
      <tr><td><b>Removing an app’s permission</b> in your account’s security settings</td><td>Stops an App permission trap. It is the only thing that does.</td></tr>
      <tr><td><b>Never reading out a code</b></td><td>Stops a Code read-out scam completely, and needs no judgement in the moment.</td></tr>
      </table>
      <p><b>What to do.</b> Use all four habits. Add two-step sign-in (a code or approval as well as your password) so that a stolen password on its own is not enough, and remember that two-step sign-in does not protect you from a code you read out yourself.</p>`},
  {h:'The two questions side by side',
   b:`<p class="lead">The first question is <b>What would you be handing over?</b> The second is <b>What would a real one never do?</b> In each row the answer to the first question comes first, the answer to the second comes after it, and the pair leads to one name.</p>
      <table class="k">
      <tr><td><b>First:</b> A password, typed into a page you reached from their message<br><b>Then:</b> Never send you to a login page through a link in a message</td><td><b>Fake login page (phishing)</b></td></tr>
      <tr><td><b>First:</b> A code that just arrived on your own phone<br><b>Then:</b> Never ask you to read a code out to anyone</td><td><b>Code read-out scam</b></td></tr>
      <tr><td><b>First:</b> Permission for an app to use your account<br><b>Then:</b> Never ask you to give an unfamiliar app standing access to your account</td><td><b>App permission trap</b></td></tr>
      <tr><td><b>First:</b> Nothing: you are only told something happened<br><b>Then:</b> None of these: it only tells you, and asks for nothing</td><td><b>Real security notice</b></td></tr>
      </table>
      <p><b>What to do.</b> If you can answer only the first question, that is enough to stop. Do not use anything that came with the message, and open the website or app yourself to look.</p>`},
  {h:'Worked example: a meeting invitation',
   b:`<p class="lead">An email arrives in a name you recognise: a friend has sent you a meeting invitation. The link takes you to your real email provider’s page, which says: “MeetSync would like to read and send your email and see your contacts.” There is an Allow button. No password is asked for.</p>
      <p><b>Step one: what is it asking you to do right now? If nothing, what is it about?</b> It asks you to press Allow. That lets an app into your account, so the answer is <b>Give a way into your account</b>. Nothing is being paid, installed or confirmed as a detail.</p>
      <p><b>Step two: what would you be handing over?</b> No password is asked for and no code has arrived. You would be giving an app permission, so the answer is <b>Permission for an app to use your account</b>.</p>
      <p><b>Step three: what would a real one never do?</b> A real meeting invitation only needs to show you a date and a time. It never needs an unfamiliar app to read and send all your email for as long as it likes. The answer is <b>Never ask you to give an unfamiliar app standing access to your account</b>.</p>
      <p><b>The name.</b> <b>App permission trap</b>.</p>
      <p><b>What to do.</b> Press Deny and close the page. Message your friend on a channel you already use and ask whether they sent an invitation. Then look at the connected-apps list in your account settings in case you pressed Allow on something like it before.</p>`}
  ],
  drill:{kind:'pick', key:'w3'} },

{ tag:'Four', title:'Getting onto your device',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">After this unit you can tell apart four things that all end with a program or a view of your screen on your device: three scams and a real software installation. They turn up as a scary pop-up with a phone number, a file from a “recruiter”, a refund call, or a download you went and got yourself.</p>
      <p>The unit answers two questions of the key, in the key’s exact words. First: <b>How did the software or access come up?</b> Then: <b>What happens next?</b> Together they lead to a name.</p>`},
  {h:'Words you need, and the two questions',
   b:`<p class="lead">Five words come up in this unit. Each one has an ordinary meaning.</p>
      <ul>
      <li><b>Remote-support software</b> is a program that lets another person see or control your screen from far away. IT departments use it for real, which is why scammers copy the idea.</li>
      <li>A <b>screen-share</b> is the same thing seen from your side: someone else is looking at your screen, or driving it.</li>
      <li>An <b>executable</b> is a file that runs a program when you open it. On a Windows computer it often ends in .exe. A harmless-looking name does not make it harmless: a file called Payslip.docx.exe looks like a document, but only the last ending counts, and that one is a program.</li>
      <li>An <b>admin prompt</b> is the box your computer shows asking whether you allow a program to make changes. Every real installation shows one, so seeing it proves nothing either way.</li>
      <li><b>Standing access</b> is access that stays after the call ends. It is what the scammer is really after.</li>
      </ul>
      <p>The first question of this unit, how the software or access came up, is the one you can answer in the moment. Did a warning tell you to call, did a file arrive in a message, did someone ask to see your screen, or did you go to the company’s own website yourself? The second question, what happens next, is a check. It describes what the scam does once you have gone along with it, which you would rather not find out the hard way. So the rule is simple: unless you went to the company’s own website yourself, stop at the first question and do the check.</p>`},
  {h:'Fake virus alert (tech-support scam)',
   b:`<p><b>What it is.</b> A page takes over your browser with a loud alarm and a message: your computer is infected, your bank details are exposed, call this number now. It is hard to close. The number reaches a “technician” who asks you to install remote-support software so that he can “see the problem”. He then shows you normal technical screens and describes them as proof of disaster, and sells you an expensive “fix” or a “year of protection”, or goes into your bank. The alert was only a web page. It never knew anything about your computer.</p>
      <p><b>Example.</b> While you read a news site, a red page fills your screen and a recorded voice says: “Your device has been locked. Call the helpline immediately.”</p>
      <p><b>Sounds like.</b> “Do not restart your computer or you will lose your data.” “Call Microsoft support now.” “This is a security alert from your internet provider.”</p>
      <p><b>Catch it.</b> Ask: how did the software or access come up? A warning that tells you to call is the key’s answer <b>A warning on your screen told you to call a number</b>. Then ask: what happens next? The answer is <b>They show you “problems” on your own screen</b>.</p>
      <p><b>What to do.</b> Close the tab or restart the browser. If it will not close, hold down the power button, or force-quit the browser. Do not call the number. A warning that disappears when you close the browser was only a web page. Real security software never asks you to telephone anyone. If you have already let someone in, uninstall the remote-support software, switch off the internet connection, change your passwords from another device, and ring your bank.</p>
      <p><b>Don’t confuse it with.</b> <b>Harmful file (malware)</b>, where the file does the harm and nobody rings you. And <b>Real software installation</b>: a real company’s support never appears by taking over your screen, and a real security product shows its warnings in its own window.</p>`},
  {h:'Harmful file (malware)',
   b:`<p><b>What it is.</b> A file or link arrives in a message with a covering story: a job “assessment”, an invoice, a “photo”, a “software update”. When you run it, it installs a program that works quietly. It may copy your passwords, watch your screen, lock your files or give someone else control of the computer. Nothing visible happens, or only an ordinary-looking document opens, and that is what makes it work: success looks exactly like nothing happening. “Malware” is the general word for harmful software.</p>
      <p><b>Example.</b> A message from an unknown “supplier” says your order is delayed and attaches “Order-Details.zip”. When you open it, a blank window flickers and closes.</p>
      <p><b>Sounds like.</b> “Please run the attached assessment before the interview.” “Open the invoice to see the charge.” “Your browser needs this update, click to install.”</p>
      <p><b>Catch it.</b> Ask: how did the software or access come up? A file or link in a message is the key’s answer <b>A file or link arrived in a message</b>. Then ask: what happens next? The answer is <b>Nothing visible happens; it runs quietly</b>.</p>
      <p><b>What to do.</b> Do not open the file or the link, and delete the message. Get updates only from your device’s own settings or from the company’s own website, typed in yourself. Real employers run tests on their own website, in a browser, and do not send you a program to run. If you have already opened it, switch off the internet connection, run a full scan with your security software, change your passwords from another device, and tell your bank.</p>
      <p><b>Don’t confuse it with.</b> <b>Fake virus alert (tech-support scam)</b>, which is a scare page that gets you to phone someone, where here nobody rings. And <b>Real software installation</b>, which you went and got yourself. A real update comes from your device’s own settings, not from a message.</p>`},
  {h:'Refund scam',
   b:`<p><b>What it is.</b> Someone rings and says you are owed a refund, for an outage, a faulty meter or an overcharge. To process it, they ask you to install remote-support software, or to type in a code, so that they can see your screen, and then to log in to your online bank. While they control your screen they move money between your own accounts, from savings to current, so your balance really does rise. Then they show you an apparent overpayment, far more than the refund, tell you it will come out of their wages, and ask you to send the difference back. The extra money was only your own savings moved across, and what you send back is your real money.</p>
      <p><b>Example.</b> A woman says she is from your gym’s billing team and that you have been charged twice, so she is refunding £40. During the screen-share, your bank page shows that £4,000 has been paid in. She says the extra was her typing mistake, that she will lose her job, and asks you to send £3,960 back from your own account.</p>
      <p><b>Sounds like.</b> “I’ll just process the refund while you watch.” “Oh no, I typed an extra zero, I’ll lose my job.” “Please put it right before my manager sees.”</p>
      <p><b>Catch it.</b> Ask: how did the software or access come up? Someone wanting to see your screen to sort out a payment is the key’s answer <b>Someone asked to see your screen to sort out a payment</b>. Then ask: what happens next? The answer is <b>Your bank screen shows too much money, and you are asked to send it back</b>.</p>
      <p><b>What to do.</b> End the session and switch off the internet connection. Check your real balance on a different device, through your own banking app: the screen on the first device was controlled by someone else and means nothing. Ring your bank on the number on your card and tell them. Real refunds go back to the card or account that paid, and never need a screen-share.</p>
      <p><b>Don’t confuse it with.</b> <b>Fake virus alert (tech-support scam)</b>, which begins with a pop-up where this begins with a refund. And not <b>Send money</b> in the first question: the goal of a refund scam is money, but the ask in front of you is the screen-share, as Unit One explained. The real look-alike is a refund that simply arrives in your account after you asked for it, with nobody on the phone.</p>`},
  {h:'Real software installation',
   b:`<p><b>What it is.</b> A real installation is software you chose and got from the company’s own website. You typed the address yourself, or used a bookmark, or opened the store app on your phone. Nobody rang you or messaged you. When you run it, it may show an admin prompt asking permission to make changes, which every real installation does. The key needs this answer so that you do not become afraid of every installer.</p>
      <p><b>Example.</b> You decide to try a video-calling program. You type its company’s web address into your browser, press Download, and run the file. The computer asks whether you want to allow it to make changes. Nobody is on the phone.</p>
      <p><b>Looks like.</b> A Download button on the company’s own site, and the box that says “Do you want to allow this app to make changes to your device?”</p>
      <p><b>Catch it.</b> Ask: how did the software or access come up? If you went to the company’s own website yourself, typing the address or using a bookmark you already had, the key’s answer is <b>You went to the company’s own website yourself</b>. Then ask: what happens next? The answer is <b>It just installs, with nobody watching</b>.</p>
      <p><b>What to do.</b> Carry on. Download only from the company’s own website, typed in yourself, or from your device’s official store, and do the same for updates. If anything about the installation changes, such as a phone call starting, a person asking to see your screen, or a code being requested, stop.</p>
      <p><b>Don’t confuse it with.</b> <b>Harmful file (malware)</b> and <b>Fake virus alert (tech-support scam)</b>. The installer and the admin prompt can look identical to a scam’s. The difference is not the prompt but how you came to be standing in front of it: in a scam a call, a pop-up, a message or a search advert put you there.</p>`},
  {h:'Search adverts: how people reach fake support',
   b:`<p><b>What it is.</b> When you search for a company’s support number or download page, the first result is often a paid advert. Anyone can buy that spot, including a scammer who uses the company’s name, and the advert can look just like the real result. It leads to a copy of the company’s website with a scam phone number, or to a download page for the wrong program. You think you chose the company, but you chose an advert.</p>
      <p><b>Example.</b> Someone searches “airline baggage helpline”, rings the top result, and reaches a “support agent” who asks to take control of her phone to “trace” the bag.</p>
      <p><b>Looks like.</b> A result with a small “Sponsored” or “Ad” label above the real one; a web address that is the company’s name plus an extra word; a freephone number that does not match the one on the company’s own cards or bills.</p>
      <p><b>Catch it.</b> Ask: did I type the company’s address, use my bookmark or open its app, or did a search result get me here? Only the first three give the key’s answer <b>You went to the company’s own website yourself</b>. A search advert does not count.</p>
      <p><b>What to do.</b> Use a bookmark, type the address in, or use the number on your card, bill or contract. If you must search, skip anything marked “Sponsored” or “Ad”, and check the address letter by letter before you download or ring.</p>
      <p><b>Don’t confuse it with.</b> A pop-up that tells you to call a number. With a pop-up you never searched at all, which is <b>Fake virus alert (tech-support scam)</b>. With an advert you did search, and you still ended up in the same place.</p>`},
  {h:'The two questions side by side',
   b:`<p class="lead">The first question is <b>How did the software or access come up?</b> The second is <b>What happens next?</b> In each row the answer to the first question comes first, the answer to the second comes after it, and the pair leads to one name.</p>
      <table class="k">
      <tr><td><b>First:</b> A warning on your screen told you to call a number<br><b>Then:</b> They show you “problems” on your own screen</td><td><b>Fake virus alert (tech-support scam)</b></td></tr>
      <tr><td><b>First:</b> A file or link arrived in a message<br><b>Then:</b> Nothing visible happens; it runs quietly</td><td><b>Harmful file (malware)</b></td></tr>
      <tr><td><b>First:</b> Someone asked to see your screen to sort out a payment<br><b>Then:</b> Your bank screen shows too much money, and you are asked to send it back</td><td><b>Refund scam</b></td></tr>
      <tr><td><b>First:</b> You went to the company’s own website yourself<br><b>Then:</b> It just installs, with nobody watching</td><td><b>Real software installation</b></td></tr>
      </table>
      <p><b>What to do.</b> If you can answer only the first question, that is enough. Unless you went to the company’s own website yourself, do not install, open or share anything. End the call or close the page, and do the check.</p>`},
  {h:'Worked example: the refund call, finished',
   b:`<p class="lead">This is the electricity-supplier call from Unit One. A man says your meter has been over-reading and you are owed £312. He asks you to open a web page and type in a number so that he can “see your account”. Suppose you go along with it. Then he asks you to log in to your bank “to see where to send the refund”, and the bank page shows a credit of £3,120.</p>
      <p><b>Step one: what is it asking you to do right now? If nothing, what is it about?</b> Typing in a number so that he can see your screen is the start of a screen-share. The answer is <b>Put something on your device</b>.</p>
      <p><b>Step two: how did the software or access come up?</b> No warning appeared and no file arrived. You did not go to anyone’s website yourself. He rang you and asked to see your screen so that he could sort out a payment. The answer is <b>Someone asked to see your screen to sort out a payment</b>.</p>
      <p><b>Step three: what happens next?</b> The bank page shows £3,120 instead of £312, and he will tell you it was a mistake and ask you to send the rest back. The answer is <b>Your bank screen shows too much money, and you are asked to send it back</b>.</p>
      <p><b>The name.</b> <b>Refund scam</b>.</p>
      <p><b>What to do.</b> In the moment you only have step two, and that is enough: the answer is not <b>You went to the company’s own website yourself</b>, so stop there. End the call, do not type the number, and ring your electricity supplier on the number on your last bill.</p>`}
  ],
  drill:{kind:'pick', key:'w4'} },

{ tag:'Five', title:'Details, and chat before the ask',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">After this unit you can tell apart three things that involve you giving information or only chatting: two scams and a real request for details. They turn up as an “onboarding” form, a delivery message asking you to confirm your card, a stranger who is just very friendly, or a bank adviser checking who you are.</p>
      <p>The unit answers two questions of the key, in the key’s exact words. First: <b>What are they collecting?</b> Then: <b>Who started it, and why do they need it?</b> Together they lead to a name.</p>`},
  {h:'Identity grab (identity theft)',
   b:`<p><b>What it is.</b> A request for the papers or numbers that prove who you are: a photo of your passport or driving licence, your national insurance or social security number, a full card number, sometimes a photo of you holding your passport. It comes with an official-sounding reason: onboarding for a new job, eligibility for a grant, verifying a delivery address, checking you are real. Nothing real has happened yet: no contract, no purchase. The complete set is the prize, because someone can use it to open bank accounts, take out loans or pass a bank’s identity check in your name. A photo of you holding your passport is used to get past the “liveness check” that banks run to confirm a real person is there. The harm may not show for weeks, until the first bill or refusal arrives.</p>
      <p><b>Example.</b> A website that says it pays a £400 cost-of-living grant asks you to upload a photo of your driving licence, your date of birth and your national insurance number “to check you qualify”.</p>
      <p><b>Sounds like.</b> “To complete onboarding, please upload your passport.” “Please confirm your full card number to verify your identity.” “For security, send a selfie holding your ID.”</p>
      <p><b>Catch it.</b> Ask: what are they collecting? Identity papers or full numbers is the key’s answer <b>Identity papers, or full ID and card numbers</b>. Then ask: who started it, and why do they need it? The answer is <b>They did, for a “checking” reason that does not really need the details</b>.</p>
      <p><b>What to do.</b> Do not send it. Ask what the details are for and whether the same task can be done without them. A real employer checks your right to work after you accept an offer, through a named company you can look up. If you have already sent documents, tell your bank, ask a credit reference agency (a company that keeps the record lenders check before they give you credit) to put a fraud warning on your file, and change any password that matches what you sent.</p>
      <p><b>Don’t confuse it with.</b> <b>Real request for details</b>, which is a few ordinary details for a deal you started, from someone you can check. And <b>Friendly chat before the ask</b>, where nothing is collected yet.</p>`},
  {h:'Friendly chat before the ask',
   b:`<p><b>What it is.</b> A stranger gets in touch by what looks like accident (a wrong-number text, a request from someone you do not know, a comment on your post) and is warm, friendly and attentive. They ask about your day, your job, your family. They ask for nothing. Over days or weeks they learn about you, you start to trust them, and you look forward to the messages. When the ask comes, whether an investment tip, a crisis or a favour, it comes from someone who feels like a friend. People wait for the ask before they start being careful, and here the ask arrives after the trust has been built. Scam crews call this building rapport (trust), and the stage before the ask is sometimes called reconnaissance, because they are gathering information about you.</p>
      <p><b>Example.</b> You accept a request on a social-media app from someone with a friendly profile you do not recognise. She comments on your holiday photos, then messages every day about your job, your flat and your weekends.</p>
      <p><b>Sounds like.</b> “Sorry, wrong number! But you seem lovely.” “I never talk to strangers, you are different.” “What do you do for work?” “Tell me about your family.”</p>
      <p><b>Catch it.</b> Ask: what are they collecting? Nothing yet is the key’s answer <b>Nothing yet: just conversation and trust</b>. Then ask: who started it, and why do they need it? The answer is <b>They did, as a wrong number or a chance message from a stranger</b>.</p>
      <p><b>What to do.</b> You do not owe a stranger a reply. Do not share your workplace, your family, your money or your plans. If the chat turns to money, investments, a “favour” or moving to a private app, treat it as the start of a Fake investment friend (pig butchering) or a Romance scam (both in Unit Two) and stop. A real wrong number ends once the mistake is clear.</p>
      <p><b>Don’t confuse it with.</b> A real wrong number, which is one polite exchange and then nothing. And <b>Identity grab (identity theft)</b>, where papers are asked for, while here nothing is asked yet. The real look-alike for a chat is simply someone you met through a friend, a club or work, whom you can check through the people you both know.</p>`},
  {h:'Real request for details',
   b:`<p><b>What it is.</b> A real request for details is a few ordinary facts that the other side needs for something you started: your name and address for a delivery you ordered, your date of birth to check your account when you ring your bank, references for a flat you applied for. You started it, the details fit the job, and you can check that the organisation is who it says it is, using contact details you already had.</p>
      <p><b>Example.</b> You order a birthday present online. The shop asks for your delivery address and a phone number for the courier.</p>
      <p><b>Sounds like.</b> “We need your delivery address and a phone number for the courier.” “To get into your account, can you confirm your date of birth?” “You can call us back on the number on our website if you prefer.”</p>
      <p><b>Catch it.</b> Ask: what are they collecting? A few ordinary details is the key’s answer <b>A few ordinary details the other side needs for a deal you started</b>. Then ask: who started it, and why do they need it? The answer is <b>You did, with someone you can check independently</b>.</p>
      <p><b>What to do.</b> Give what is needed for the task and no more. If you want to be sure, hang up and ring back on a number you already had, or do it inside the app. A real organisation is glad to be checked.</p>
      <p><b>Don’t confuse it with.</b> <b>Identity grab (identity theft)</b>, which asks for papers or full numbers, for a “checking” reason, before any real deal. A real request is small, fits the deal and starts with you. Sometimes a real organisation does ask for a lot, such as proof of identity for a mortgage, and the test is the same: did you start it, and can you check it?</p>`},
  {h:'Does the reason need the details?',
   b:`<p><b>What it is.</b> A simple test. Whenever someone asks for details, note the reason they give, then ask whether that reason really needs what they have asked for. You do not need to know what they will do with the details. You only need to see whether the reason requires them.</p>
      <p><b>Example.</b> Four requests, with the test applied.</p>
      <table class="k">
      <tr><td>A delivery firm asks for your full card number to “verify your address”.</td><td><b>No.</b> A card number says nothing about an address.</td></tr>
      <tr><td>An employer asks for a photo of you holding your passport before there is a contract.</td><td><b>No.</b> No employer needs that before a contract.</td></tr>
      <tr><td>Your bank asks for your date of birth when you ring about a payment.</td><td><b>Yes.</b> It has to know it is really you.</td></tr>
      <tr><td>A shop asks for your address to post something you ordered.</td><td><b>Yes.</b> It cannot deliver without it.</td></tr>
      </table>
      <p><b>Sounds like.</b> “To verify your address.” “For security purposes.” “To check you qualify.” Neat reasons attached to requests that are wider than the reason needs.</p>
      <p><b>Catch it.</b> Ask: does the reason given really need these details? If it does not, the key’s answer to who started it, and why do they need it, is <b>They did, for a “checking” reason that does not really need the details</b>.</p>
      <p><b>What to do.</b> Say “I’ll do that another way.” Refuse the extra detail, or end the contact, and do the check. Never give more than the reason needs.</p>
      <p><b>Don’t confuse it with.</b> Being asked for a lot of detail for a big, real thing you started, such as a mortgage or a passport application. The test is the same, and there the reason really does need the details.</p>`},
  {h:'Who started it?',
   b:`<p><b>What it is.</b> The most useful single question in the whole course: did you start this contact, using a way you already had? When you ring the number on the back of your card, you started it, so the person who answers is almost certainly your bank. When someone rings you, you cannot tell who they are, because anyone can say anything, and caller names and numbers can be faked (this is called spoofing). The same words can be real or a scam depending only on who started it.</p>
      <p><b>Example.</b> You ring your pharmacy on the number printed on the label of your last medicine. The pharmacist asks you to confirm your date of birth so that she can find your record. That is real. The next day someone rings you, says he is from the pharmacy, and asks for your date of birth. You cannot tell who he is, so you hang up and ring the number on the label.</p>
      <p><b>Sounds like.</b> “Thank you for calling” (you started it), compared with “I’m calling from your bank’s fraud team” (they started it).</p>
      <p><b>Catch it.</b> Ask: who started this, and could I check them using something I already had? If you did, with someone you can check, the key’s answer is <b>You did, with someone you can check independently</b>. If they did, treat the details with care.</p>
      <p><b>What to do.</b> If they started it, hang up and start it yourself using a number or an app you already had. One exception matters: a number that came in a message, an advert or a pop-up is theirs even if you dial it. “I rang them” only counts if the number was already yours.</p>
      <p><b>Don’t confuse it with.</b> Ringing the number in the message, or a number from a search advert (Unit Four). You did the dialling, but you did not start from something you already had.</p>`},
  {h:'The two questions side by side',
   b:`<p class="lead">The first question is <b>What are they collecting?</b> The second is <b>Who started it, and why do they need it?</b> In each row the answer to the first question comes first, the answer to the second comes after it, and the pair leads to one name.</p>
      <table class="k">
      <tr><td><b>First:</b> Identity papers, or full ID and card numbers<br><b>Then:</b> They did, for a “checking” reason that does not really need the details</td><td><b>Identity grab (identity theft)</b></td></tr>
      <tr><td><b>First:</b> Nothing yet: just conversation and trust<br><b>Then:</b> They did, as a wrong number or a chance message from a stranger</td><td><b>Friendly chat before the ask</b></td></tr>
      <tr><td><b>First:</b> A few ordinary details the other side needs for a deal you started<br><b>Then:</b> You did, with someone you can check independently</td><td><b>Real request for details</b></td></tr>
      </table>
      <p><b>What to do.</b> If you can answer only the second question, answer it honestly: did you start this, using a number or an app you already had? If not, do not hand over anything, and start it yourself.</p>`},
  {h:'Worked example: a pre-approved loan',
   b:`<p class="lead">A message says that a mortgage broker has pre-approved you for a loan you never applied for. To continue, it asks you for a photo of your passport, your date of birth, and a selfie of you holding the passport.</p>
      <p><b>Step one: what is it asking you to do right now? If nothing, what is it about?</b> It asks you to send a passport photo, a date of birth and a selfie. That is documents, not money, a login or a file, so the answer is <b>Give details, or only chat so far</b>.</p>
      <p><b>Step two: what are they collecting?</b> A passport photo, a date of birth and a selfie holding the passport are the papers that prove who you are. The answer is <b>Identity papers, or full ID and card numbers</b>.</p>
      <p><b>Step three: who started it, and why do they need it?</b> They did: you never applied for anything. The reason is that you have been “pre-approved”, and a loan you never asked for does not need a selfie holding your passport. The answer is <b>They did, for a “checking” reason that does not really need the details</b>.</p>
      <p><b>The name.</b> <b>Identity grab (identity theft)</b>.</p>
      <p><b>What to do.</b> Do not send anything. Look up the broker yourself, on the regulator’s register, with the address typed in, and ask it whether it sent this. A real lender asks for identity papers after you have applied to it.</p>`}
  ],
  drill:{kind:'pick', key:'w5'} },

{ tag:'Six', title:'What people wrongly believe',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">After this unit you can spot ten comforting beliefs that make people lower their guard, say what is wrong with each one, and say what to check instead. This unit adds no new question to the key. Each belief skips one question of the key, and each card names the question it skips, in the key’s exact words.</p>
      <p>The practice at the end shows you a belief and asks you to say what is wrong with it. The app calls the question you name a “diagnostic question”. All that means here is: which question of the key does the belief skip?</p>`},
  {h:'“It would be full of spelling mistakes”',
   b:`<p><b>What it is.</b> Most people carry a defence from about 2010: bad spelling, odd phrasing, a blurry logo, a foreign accent, an unlikely story. Every one of those is cheap to fix now. Software writes clean text in any language, logos are copied in seconds, and voices can be imitated. Some scams even kept their typos on purpose, to filter out careful people who would waste the scammer’s time later. A defence built on how a message looks does worse than nothing: a message that passes the look test then feels checked.</p>
      <p><b>Example.</b> Jo gets a perfectly written email from “her bank”, with the right logo, asking her to confirm a payment at a link. Because it reads so well, she relaxes and clicks.</p>
      <p><b>Sounds like.</b> “It was far too well written to be a scam.” “The logo was spot on.” “He had a perfectly ordinary accent.”</p>
      <p><b>Catch it.</b> The belief skips the first question of the key: <b>What is it asking you to do right now? If nothing, what is it about?</b> A message that asks for money, a code, access or details is a reason to check, however it reads.</p>
      <p><b>What to do.</b> Throw away the look test in both directions: a clumsy message may be real and a polished one may be a scam. Look at the ask, then do the check.</p>
      <p><b>Don’t confuse it with.</b> The polish of a real organisation, which proves nothing either, because real banks make mistakes too. Neither clean writing nor clumsy writing tells you anything. The ask and the check do.</p>`},
  {h:'“It came from my bank’s real number”',
   b:`<p><b>What it is.</b> The name or number shown on your phone or in your text messages can be faked. A faked text can even land in the same conversation as the real ones from your bank. So the way a message arrived is not proof of who sent it. Only a number or an app that you chose yourself is.</p>
      <p><b>Example.</b> A text, apparently from your bank, appears in the same thread as last month’s real bank texts. It says a payment to a jeweller needs urgent confirmation and gives a number to call.</p>
      <p><b>Sounds like.</b> “It showed my bank’s name.” “It was in the same thread as the real ones.” “The caller ID said Bank.”</p>
      <p><b>Catch it.</b> The belief skips the question <b>Who started it, and why do they need it?</b> If they started it, you cannot confirm who they are, however the name appears on your screen. The answer you can trust is <b>You did, with someone you can check independently</b>.</p>
      <p><b>What to do.</b> Treat the name on the screen as decoration. Open your bank’s app, or ring the number on your card, and ask whether the message was theirs.</p>
      <p><b>Don’t confuse it with.</b> A real bank text that you were expecting because you had just done something, such as a code after you pressed “sign in”. Even then, type the code only into the place where you started.</p>`},
  {h:'“The site had a padlock”',
   b:`<p><b>What it is.</b> The padlock in your browser means the connection between you and the site is scrambled, so that other people cannot read it. It does not mean the site is honest. Anyone can get a padlock for a site they own, free and in minutes, including a site whose name looks like your bank’s. The padlock says “this connection is private”. It does not say “this site is who you think”.</p>
      <p><b>Example.</b> A message about a “parcel fee” opens a page with a padlock and a clean design that asks for your card number. The web address is the courier’s name with an extra word.</p>
      <p><b>Sounds like.</b> “It had the little padlock.” “It started with https.” “The site looked secure.”</p>
      <p><b>Catch it.</b> The belief skips the question <b>What would you be handing over?</b> If the answer is <b>A password, typed into a page you reached from their message</b>, then how you got there matters, and the padlock does not.</p>
      <p><b>What to do.</b> Check how you arrived, not the padlock. Open the site by typing its address in or using a bookmark. A password manager helps, because it will not fill in your password on the wrong address.</p>
      <p><b>Don’t confuse it with.</b> A missing padlock. That is a real warning on any page where you enter private details, because it means the connection is not private. The padlock is needed, but it is not enough.</p>`},
  {h:'“They knew my details”',
   b:`<p><b>What it is.</b> Stolen and leaked data is cheap and plentiful: names, addresses, phone numbers, old passwords, the last four digits of a card, even your recent orders. Scammers use it early in a call because it feels like proof. But knowing details about you proves only that they have bought a list. It does not prove they work for your bank.</p>
      <p><b>Example.</b> A caller says: “Am I speaking to Mr Okafor of 14 Alder Road? We have found a payment on your card ending 4417.” All of that came from a leaked database. He then says you are in danger and must move your money.</p>
      <p><b>Sounds like.</b> “She knew my address.” “He even had the last four digits of my card.” “They knew my mother’s maiden name.”</p>
      <p><b>Catch it.</b> The belief skips the question <b>Who started it, and why do they need it?</b> Details prove nothing about a caller who rang you. Only <b>You did, with someone you can check independently</b> is checkable.</p>
      <p><b>What to do.</b> Do not let details count as proof. Say you will call back, and ring the number on your card. A real bank can find the same details when you ring it.</p>
      <p><b>Don’t confuse it with.</b> A real organisation asking you for details to check it is you, after you rang them. That is the <b>Real request for details</b>: the details go to them to prove it is you, and you started it.</p>`},
  {h:'“It looked official”',
   b:`<p><b>What it is.</b> Letterheads, registration numbers, logos, scanned certificates and signed documents are all free to produce. A scammer can paste any number into a document in seconds, and a real company number belonging to a real firm is easy to copy from a public register. A document is a picture of a promise, not proof.</p>
      <p><b>Example.</b> A message from a “trading firm” shows a certificate of registration, a photo of a smiling manager and a licence number. It asks you to put £5,000 into a “starter account”.</p>
      <p><b>Sounds like.</b> “They sent me their licence.” “It had the company number on it.” “They emailed a signed contract.”</p>
      <p><b>Catch it.</b> The belief skips the question <b>What is the odd part of the request?</b> If you must pay a fee before any money, or profits cannot be taken out, the paperwork does not change the answer.</p>
      <p><b>What to do.</b> Look the firm up yourself. Type the regulator’s register address in, and check that the number belongs to the firm and that its contact details match the ones you were given. Then do the check.</p>
      <p><b>Don’t confuse it with.</b> A real company that proves itself by letting you check: it gives its number, welcomes a call-back, and stands up to a search you started yourself.</p>`},
  {h:'“Only greedy or careless people get caught”',
   b:`<p><b>What it is.</b> People who think they are too careful to be caught are caught as often as anyone. The risk factors are not greed or low intelligence. They are being busy, being in the middle of something where the message is expected (a house purchase and an email from the solicitor, a payroll run and a message from a supplier), and being alone with the decision. Professionals, finance teams and well-educated people lose large sums to these scams every year. The belief that it could not happen to you is itself a risk, because people who are sure of it do not check, and checking is the whole defence.</p>
      <p><b>Example.</b> A finance manager is closing the month-end accounts when an email from a regular supplier arrives with new bank details. She is tired and busy, and the email looks exactly like the earlier ones.</p>
      <p><b>Sounds like.</b> “I’d never fall for that.” “Only desperate people go for these.” “I’m too sensible.”</p>
      <p><b>Catch it.</b> The belief skips the question <b>What reason is given for paying?</b> The best scams give you a reason that fits your week: a bill you expect, a deal you started, a friend you know. That is why they work on careful people.</p>
      <p><b>What to do.</b> Make the check a habit that does not depend on how you feel: any change of bank details, any code, any unexpected request gets the check, even when you are sure. Tell someone you trust when you are in the middle of a money decision.</p>
      <p><b>Don’t confuse it with.</b> Being sensibly careful. Caution that you act on, by checking, is a defence. Confidence that you could not be caught is not.</p>`},
  {h:'“They would have asked for money by now”',
   b:`<p><b>What it is.</b> Many people think a scammer would ask for money straight away. Some do. But the most damaging ones ask for nothing for weeks, build a friendship and only then ask: the Fake investment friend (pig butchering), the Romance scam and the Friendly chat before the ask. The first ask is often small and works properly, such as a small withdrawal that really pays out, so that the big ask feels safe. The absence of an ask is a stage, not a sign of safety.</p>
      <p><b>Example.</b> A man you met on a hobby site has chatted warmly for four months and has never asked for money. One evening he mentions a trading app that has been very good to him.</p>
      <p><b>Sounds like.</b> “He’s never asked me for anything.” “If he wanted money he’d have asked by now.” “It’s been months and nothing.”</p>
      <p><b>Catch it.</b> The belief skips the question <b>What are they collecting?</b> One real answer is <b>Nothing yet: just conversation and trust</b>, and it is the early stage of the long scams in Unit Two.</p>
      <p><b>What to do.</b> Enjoy the conversation if you like, but give no money, no documents and no private details to anyone you have never met in person or cannot check. Do the live video-call test early.</p>
      <p><b>Don’t confuse it with.</b> A real friendship, where you have met in person and know people in common. The check there is: can someone else vouch for them?</p>`},
  {h:'“I rang them, they did not ring me”',
   b:`<p><b>What it is.</b> “I rang them” is only safe if the number was already yours. A number from a message, an advert, a search result or a pop-up is theirs, even if you dial it. A scammer is glad to be rung: you have done the work, and you are calmer and less suspicious because you think you chose them.</p>
      <p><b>Example.</b> A text says your parcel is delayed and gives a helpline number. You ring it, speak to a helpful “agent”, and are asked for a small fee.</p>
      <p><b>Sounds like.</b> “I called them, they didn’t call me.” “I found the number myself on the first page.”</p>
      <p><b>Catch it.</b> The belief skips the question <b>Who started it, and why do they need it?</b> You only started it if the number came from something you already had, and then the answer is <b>You did, with someone you can check independently</b>.</p>
      <p><b>What to do.</b> Ask yourself where the number came from. If it came from the message, an advert or a pop-up, hang up. Use the number on your card, bill or contract, or a bookmark you made earlier.</p>
      <p><b>Don’t confuse it with.</b> Ringing the number on your card, or the number in a contract you signed. That is the check.</p>`},
  {h:'“My bank would have stopped it”',
   b:`<p><b>What it is.</b> A bank’s fraud checks are built to catch someone else using your account. When you send a payment yourself, by typing the transfer or approving it in your app, the check sees you. It may show a warning, but it will usually let the payment through, because you have told it that you want it. A payment you approved is also hard to get back. So the bank is the second line of defence, and you are the first.</p>
      <p><b>Example.</b> You are told to move £8,000 into a “safe account”. Your bank shows a warning screen. The caller says to ignore it because the bank is part of the problem. You press continue, and the money goes.</p>
      <p><b>Sounds like.</b> “My bank would have stopped it.” “It went through, so it must have been fine.”</p>
      <p><b>Catch it.</b> The belief skips the first question: <b>What is it asking you to do right now? If nothing, what is it about?</b> If the answer is <b>Send money</b>, you are the one who has to stop it, before the payment.</p>
      <p><b>What to do.</b> Treat every bank warning screen as a real stop sign. Read it, and do the check before you press continue. If a caller tells you to ignore it or to lie to the bank, that tells you the answer.</p>
      <p><b>Don’t confuse it with.</b> A bank that blocks an unusual payment and asks you to ring it. That is the bank’s system doing its job. Ring the number on your card and say whether it was you.</p>`},
  {h:'“He was so calm and helpful”',
   b:`<p><b>What it is.</b> A pleasant, patient, well-spoken person is not a safer person. Scammers are trained to be calm, warm and helpful, because patience and kindness build trust and keep you on the line. The caller who spends an hour helping you is working for a reason.</p>
      <p><b>Example.</b> A caller from “your bank” stays on the line for an hour, speaks kindly, apologises for the trouble, and talks you through each step.</p>
      <p><b>Sounds like.</b> “He was so kind and patient.” “She sounded exactly like a real adviser.” “They stayed on the phone with me the whole time.”</p>
      <p><b>Catch it.</b> The belief skips the first question: <b>What is it asking you to do right now? If nothing, what is it about?</b> Manner tells you nothing about the ask. Their kindness and the ask are separate things.</p>
      <p><b>What to do.</b> Judge the request, not the voice. A real adviser will happily let you hang up and ring back, and will not stay on the line to stop you doing it.</p>
      <p><b>Don’t confuse it with.</b> Real good service, which is just as pleasant and survives being checked.</p>`},
  {h:'If it has already happened',
   b:`<p><b>What it is.</b> Speed matters more than shame. In the first hours, money can sometimes still be recalled, and an account can be locked before the damage spreads. Scammers rely on embarrassment to keep people quiet.</p>
      <p><b>Example.</b> Maya realises an hour after sending £2,000 that the email with the “new account” was fake. She rings her bank straight away.</p>
      <p><b>Sounds like.</b> The thoughts that cost people time. “I’m so stupid.” “I’ll sort it out myself.” “If I pay one more fee, I’ll get it back.”</p>
      <p><b>Catch it.</b> Ask: did anything leave my hands that I cannot get back by myself? That could be a payment, a code, a password, a permission, a program on my device, or papers and numbers.</p>
      <p><b>What to do.</b> Start with whichever of these applies.</p>
      <ul>
      <li><b>Money sent.</b> Ring your bank straight away on the number on your card. Say it was a scam payment, and ask them to try to recall it. Then report it to your country’s fraud-reporting service, and keep the messages.</li>
      <li><b>Password.</b> Change it from the real site, on a different device if you can, change it anywhere else you used it, and switch on two-step sign-in.</li>
      <li><b>Code or app permission.</b> Tell your bank or provider, remove the app in your account’s connected-apps list, and change your password.</li>
      <li><b>Something installed or a screen-share.</b> Uninstall it, switch off the internet connection, and change your passwords from another device.</li>
      <li><b>Papers or numbers.</b> Tell your bank, ask a credit reference agency (a company that keeps the record lenders check) to put a fraud warning on your file, and watch your accounts.</li>
      </ul>
      <p>Whatever happened, do not engage with anyone who contacts you offering to get your money back. That is the Fake recovery service, and it is often the same people returning.</p>
      <p><b>Don’t confuse it with.</b> Waiting and hoping it is fine. A call that turns out to be unnecessary costs ten minutes. A call you put off can cost the money.</p>`},
  {h:'The beliefs side by side',
   b:`<p class="lead">Each belief skips a question of the key. Put the question back, and the belief stops working.</p>
      <table class="k">
      <tr><td>“It would be full of spelling mistakes”</td><td>What is it asking you to do right now? If nothing, what is it about?</td></tr>
      <tr><td>“It came from my bank’s real number”</td><td>Who started it, and why do they need it?</td></tr>
      <tr><td>“The site had a padlock”</td><td>What would you be handing over?</td></tr>
      <tr><td>“They knew my details”</td><td>Who started it, and why do they need it?</td></tr>
      <tr><td>“It looked official”</td><td>What is the odd part of the request?</td></tr>
      <tr><td>“Only greedy or careless people get caught”</td><td>What reason is given for paying?</td></tr>
      <tr><td>“They would have asked for money by now”</td><td>What are they collecting?</td></tr>
      <tr><td>“I rang them, they did not ring me”</td><td>Who started it, and why do they need it?</td></tr>
      <tr><td>“My bank would have stopped it”</td><td>What is it asking you to do right now? If nothing, what is it about?</td></tr>
      <tr><td>“He was so calm and helpful”</td><td>What is it asking you to do right now? If nothing, what is it about?</td></tr>
      </table>
      <p><b>What to do.</b> When you hear yourself or someone else say one of these, put the missing question back. Every one of them also skips the check: stop, and contact the real organisation yourself, using contact details you already had.</p>`},
  {h:'Worked example: “They knew my details”',
   b:`<p class="lead">A friend says: “A man rang and knew my date of birth, my employer and the name of my last landlord, so I was sure he was from my bank’s fraud team. He told me to move my savings into a ‘safe account’ he gave me, and I did.”</p>
      <p><b>Step one: what does the belief rely on?</b> It relies on one thing: the caller knew details about her. The belief is that knowing details means he is who he says.</p>
      <p><b>Step two: which question of the key does it skip?</b> It skips <b>Who started it, and why do they need it?</b> He rang her, so the answer is not <b>You did, with someone you can check independently</b>. Leaked details can be bought, so they prove nothing about who is speaking.</p>
      <p><b>Step three: what should she have checked instead?</b> Whatever he asked for, which here was a payment into a “safe account”. A real bank never asks you to move your money to a safe account, and she could have hung up and rung the number on her card.</p>
      <p><b>The fault, in one sentence.</b> Knowing details about her proves only that he has a list, and the question that matters is who started the call.</p>
      <p><b>What to do.</b> If this has already happened, follow the card “If it has already happened”: ring the bank on the card number at once, say that savings were moved to a “safe account”, and ask them to try to recall the payment.</p>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'Putting it all together',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">After this unit you can take any message, call or request from start to finish: ask what it is asking you to do, answer the two questions that fit that answer, and name it, scam or real, with what to do next. The practice uses every question of the key, in the key’s order.</p>
      <p>This unit answers every question of the key, beginning with the first: <b>What is it asking you to do right now? If nothing, what is it about?</b> The app shows nineteen cases without labels. For each one, answer the first question, then the two that open up under your answer, then choose the name. At the end it marks two things: whether the name is right, and whether your answers to the questions were right (the app calls those answers your route). Four of the nineteen cases are real, and naming one of those correctly counts as much as naming a scam. The app calls the cases specimens.</p>`},
  {h:'The whole key on one page',
   b:`<p class="lead">The first question is always <b>What is it asking you to do right now? If nothing, what is it about?</b> Your answer decides which two questions come next.</p>
      <table class="k">
      <tr><td><b>Send money</b><br>What reason is given for paying?<br>What is the odd part of the request?</td><td>Fake investment friend (pig butchering), Romance scam, Fee to unlock a payout (advance fee), Fake recovery service, Changed bank details (invoice fraud), Fake official demanding payment, Overpayment trick (fake buyer), Real payment request</td></tr>
      <tr><td><b>Give a way into your account</b><br>What would you be handing over?<br>What would a real one never do?</td><td>Fake login page (phishing), Code read-out scam, App permission trap, Real security notice</td></tr>
      <tr><td><b>Put something on your device</b><br>How did the software or access come up?<br>What happens next?</td><td>Fake virus alert (tech-support scam), Harmful file (malware), Refund scam, Real software installation</td></tr>
      <tr><td><b>Give details, or only chat so far</b><br>What are they collecting?<br>Who started it, and why do they need it?</td><td>Identity grab (identity theft), Friendly chat before the ask, Real request for details</td></tr>
      </table>
      <p><b>What to do.</b> Start at the first question every time. If a later question will not come, stop there and do the check: it works whether or not you reach a name.</p>`},
  {h:'When you cannot answer everything',
   b:`<p class="lead">In real life you will often have only part of the answer. The key is built so that part is enough to act on.</p>
      <p><b>What to do.</b></p>
      <ol>
      <li>You can always answer the first question. Do that first, and do not let the goal, the story or the polish change your answer.</li>
      <li>The second question usually comes from what you have been told so far, so answer it if you can.</li>
      <li>The third question is often a check, and what it describes may not have happened yet. If you cannot answer it, that is fine.</li>
      <li>A real name needs one of four answers: <b>Nothing odd: you started it, nothing changed, and you can check it</b>, <b>Nothing: you are only told something happened</b>, <b>You went to the company’s own website yourself</b>, or <b>You did, with someone you can check independently</b>. If none of your answers is one of those four, treat the case as a scam until the check says otherwise.</li>
      <li>If you cannot answer the second question at all, do not guess. Do the check.</li>
      </ol>
      <p>A real organisation never minds being checked, so doing the check costs a real one nothing.</p>`},
  {h:'Worked example: a restaurant deposit',
   b:`<p class="lead">You book a table for ten people on a restaurant’s own website, which you reached from your bookmarks. At the checkout it asks for a £50 deposit by card. You get a confirmation email with the restaurant’s phone number, which matches the one on the website. The email says the deposit is taken off your bill on the night.</p>
      <p><b>Step one: what is it asking you to do right now? If nothing, what is it about?</b> It asks you to pay £50, so the answer is <b>Send money</b>.</p>
      <p><b>Step two: what reason is given for paying?</b> You booked a table, which is a purchase you started. The answer is <b>A deal you are part of: a sale, a purchase or a rental</b>.</p>
      <p><b>Step three: what is the odd part of the request?</b> Nothing. You started it, no details have changed, nobody is rushing you, and you can check it by ringing the number on the restaurant’s website. The answer is <b>Nothing odd: you started it, nothing changed, and you can check it</b>.</p>
      <p><b>The name.</b> <b>Real payment request</b>.</p>
      <p><b>What to do.</b> Pay, keep the confirmation email, and carry on. The key is not there to make you suspicious of everything, and a real request that passes every question is exactly what it should let through.</p>`}
  ],
  drill:{kind:'det'} }
];

const SCAMS = {
  id:'scams', name:'Scams & Social Engineering', rev:1,
  blurb:'Work out what a message or call is asking you to do, tell a scam from the real thing, and know what to do next.',
  intro:'Ask what it is asking you to do right now, answer the two questions that fit, and name it: a scam, or the real thing. The check works whatever the name: stop, and contact the real organisation yourself, using contact details you already had.',
  outcomes: SCAM_OUTCOMES,
  determination: { gateCode:'G1', steps:[SCAM_GATE], stepsByGate:SCAM_STEPS_BY_GATE },
  determinationIntro:`<p>You are working out what a case is, one question at a time. Start with what it is asking you to do right now, then answer the two questions that open up under your answer, and name it last.</p>
      <ol>
        <li>Read the case.</li>
        <li><b>First question</b>: what is it asking you to do right now? If nothing, what is it about? Go by what is asked now, not by the goal or the story. A screen-share to arrange a refund is <b>Put something on your device</b>, even though the money is what they are after.</li>
        <li><b>Second and third questions</b>: they open up in order and change with your first answer.</li>
        <li><b>Name it</b>, and record your answer.</li>
      </ol>
      <p>The list between the case and the first question is a readout, not a control. It crosses off the names your answers have ruled out. Nothing there can be tapped.</p>
      <p>Four of the cases are real, and every group has a real name. Naming one correctly counts like any other answer.</p>
      <p>Your name and your route are scored separately. Your route is your answers to the questions. A right name reached by the wrong answers counts as a miss.</p>`,
  specimens: SCAM_SPECIMENS,
  falsLabel:'What to do next',
  quickDrills: [
    {key:'w1', title:'The ask', prompt:'What is it asking you to do right now? If nothing, what is it about?', items:W1_DRILL, opts:W1_OPTS},
    {key:'w2', title:'Money requests', prompt:'Which name fits? What reason is given for paying? What is the odd part of the request?', items:W2_DRILL, opts:W2_OPTS},
    {key:'w3', title:'Your account', prompt:'Which name fits? What would you be handing over? What would a real one never do?', items:W3_DRILL, opts:W3_OPTS},
    {key:'w4', title:'Your device', prompt:'Which name fits? How did the software or access come up? What happens next?', items:W4_DRILL, opts:W4_OPTS},
    {key:'w5', title:'Details and chat', prompt:'Which name fits? What are they collecting? Who started it, and why do they need it?', items:W5_DRILL, opts:W5_OPTS}
  ],
  errDrill: SCAM_ERR,
  course: SCAM_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'The full key'},
    {key:'w1', label:'The ask'}, {key:'w2', label:'Money requests'}, {key:'w3', label:'Your account'},
    {key:'w4', label:'Your device'}, {key:'w5', label:'Details and chat'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>The check does not depend on the name.</b> Stop, and contact the real organisation yourself, using contact details you already had: the number on your card, your contract, or the app you installed yourself. That one move beats every case in this course, including ones invented after it was written. Knowing the name makes you quicker, and it is not needed to be safe.</li>
    <li><b>The key cannot prove that one particular message is real.</b> It tells you whether a request is the kind of thing that needs checking. Only the check shows that a specific request is real.</li>
    <li><b>Real organisations sometimes do things that look suspicious.</b> Banks really do ring about fraud, couriers really do text about parcels, and real recruiters do ask for right-to-work documents. A match with a scam name is a reason to check, not a reason to accuse. Treating it as proof is how people end up shouting at a support worker who is doing their job. The Unit One card “Real ones that look like scams” shows what a real bank call and a real delivery text look like.</li>
    <li><b>How a message looks no longer tells you anything.</b> Spelling, grammar, logos, caller names, accents and now voices are all cheap to get right. Anything that can be copied is not evidence in either direction, and a polished message is not a reassuring one.</li>
    <li><b>The names combine.</b> Real operations run a Friendly chat before the ask into a Fake investment friend (pig butchering), or a Fake official demanding payment into a Refund scam, and pass victims between teams. The key names the moves because the moves are what repeat. The scripts are rewritten all the time.</li>
    <li><b>Knowing you are in one does not mean you can stop.</b> Money already spent, shame, being cut off from people who would object, and real attachment all keep people going long after doubt begins. The Fake recovery service exists because that state carries on after the money has gone.</li>
    <li><b>Not covered here:</b> blackmail and extortion, employment and rental fraud in depth, charity and disaster fraud, and card-present and cash-machine fraud, which are physical rather than social. The first question of the key still applies. The specific questions after it do not.</li>
    <li><b>If it has already happened:</b> ring your bank straight away on the number on your card, because a payment can sometimes be recalled within hours. The Unit Six card “If it has already happened” has the steps for each kind of loss.</li>
  </ul>`
};

FC.legacy('scams', SCAMS);
