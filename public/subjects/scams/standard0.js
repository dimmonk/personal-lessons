/* ===================== SUBJECT: SCAMS & SOCIAL ENGINEERING ===================== */

const SCAM_OUTCOMES = [
  {id:'pigbutcher',  n:'Investment grooming',            group:'money'},
  {id:'romance',     n:'Romance scam',                   group:'money'},
  {id:'advfee',      n:'Advance fee',                    group:'money'},
  {id:'recovery',    n:'Recovery scam',                  group:'money'},
  {id:'bec',         n:'Invoice redirect',               group:'money'},
  {id:'authority',   n:'Authority impersonation',        group:'money'},
  {id:'overpay',     n:'Overpayment / fake buyer',       group:'money'},
  {id:'legit_money', n:'Legitimate payment request',     group:'money'},
  {id:'phish',       n:'Credential phishing',            group:'access'},
  {id:'otp',         n:'One-time-code interception',     group:'access'},
  {id:'oauth',       n:'App-permission phishing',        group:'access'},
  {id:'legit_access',n:'Legitimate security notice',     group:'access'},
  {id:'techsupport', n:'Tech-support / fake alert',      group:'install'},
  {id:'fakeupdate',  n:'Malicious installer',            group:'install'},
  {id:'refundscam',  n:'Refund scam',                    group:'install'},
  {id:'legit_inst',  n:'Legitimate software prompt',     group:'install'},
  {id:'identity',    n:'Identity harvesting',            group:'info'},
  {id:'recon',       n:'Reconnaissance — no ask yet',    group:'info'},
  {id:'legit_info',  n:'Legitimate information request', group:'info'}
];

const SCAM_GATE = { code:'G1', label:'What is it asking you to do right now?', options:[
  { id:'money',   n:'Move money',              sub:'a transfer, a card, crypto, vouchers',
    keeps:['pigbutcher','romance','advfee','recovery','bec','authority','overpay','legit_money'] },
  { id:'access',  n:'Hand over a credential',  sub:'a password, a code, an app permission',
    keeps:['phish','otp','oauth','legit_access'] },
  { id:'install', n:'Let something onto your device', sub:'an installer, an attachment, a screen-share',
    keeps:['techsupport','fakeupdate','refundscam','legit_inst'] },
  { id:'info',    n:'Give information — or nothing yet', sub:'documents, details, or only conversation',
    keeps:['identity','recon','legit_info'] }
]};

const SCAM_STEPS_BY_GATE = {
  money: [
    { code:'M1', label:'What story carries the ask', options:[
        {id:'relationship', n:'A relationship built over weeks or months', keeps:['pigbutcher','romance']},
        {id:'windfall',     n:'Money owed to you, waiting to be released',  keeps:['advfee','recovery']},
        {id:'invoice',      n:'A routine business payment',                 keeps:['bec']},
        {id:'threat',       n:'An official penalty, arrest or seizure',     keeps:['authority']},
        {id:'transaction',  n:'A purchase or sale you are party to',        keeps:['overpay','legit_money']}
    ]},
    { code:'M2', label:'What actually decides it', options:[
        {id:'platform',  n:'Returns exist only inside their app, and withdrawals stall', keeps:['pigbutcher']},
        {id:'emergency', n:'A crisis at a distance, from someone never met in person',   keeps:['romance']},
        {id:'payfirst',  n:'You must send money before you receive any',                 keeps:['advfee']},
        {id:'priorloss', n:'It targets a loss you have already suffered',                keeps:['recovery']},
        {id:'changed',   n:'Bank details changed late, by message',                      keeps:['bec']},
        {id:'irrevers',  n:'Payment demanded now, in a channel that cannot be reversed', keeps:['authority']},
        {id:'excess',    n:'They send too much and ask for the difference back',         keeps:['overpay']},
        {id:'nothing_m', n:'Nothing — the request is what it appears to be',             keeps:['legit_money']}
    ]}
  ],
  access: [
    { code:'A1', label:'What exactly would leave your hands', options:[
        {id:'password',  n:'A password, on a page reached from their message', keeps:['phish']},
        {id:'code',      n:'A code that just arrived on your own device',      keeps:['otp']},
        {id:'permission',n:'Permission for an app to act on your account',     keeps:['oauth']},
        {id:'nothing_a', n:'Nothing — you are only told something happened',   keeps:['legit_access']}
    ]},
    { code:'A2', label:'What the genuine version of this never does', options:[
        {id:'neverlink', n:'Never routes you to a login page from a message',  keeps:['phish']},
        {id:'nevercode', n:'Never asks you to read a code back to anyone',     keeps:['otp']},
        {id:'neverapp',  n:'Never needs a third-party app to fix your account',keeps:['oauth']},
        {id:'nothing_a2',n:'Nothing is asked — the notice is informational',   keeps:['legit_access']}
    ]}
  ],
  install: [
    { code:'I1', label:'How the need for software appeared', options:[
        {id:'alert',     n:'A warning appeared and gave you a number to call', keeps:['techsupport']},
        {id:'sentfile',  n:'A file or link arrived in a message',              keeps:['fakeupdate']},
        {id:'screen',    n:'They asked to see your screen to sort out a payment', keeps:['refundscam']},
        {id:'youwent',   n:'You went to the vendor yourself',                  keeps:['legit_inst']}
    ]},
    { code:'I2', label:'What happens once it is in', options:[
        {id:'showsfault',n:'You are shown alarming output and sold a fix',     keeps:['techsupport']},
        {id:'silent',    n:'It runs quietly and asks for nothing further',     keeps:['fakeupdate']},
        {id:'banking',   n:'Your banking screen is manipulated and an overpayment claimed', keeps:['refundscam']},
        {id:'normal_i',  n:'An ordinary installation, with nobody watching',   keeps:['legit_inst']}
    ]}
  ],
  info: [
    { code:'F1', label:'What is being collected', options:[
        {id:'docs',    n:'Identity documents, or the numbers on them',     keeps:['identity']},
        {id:'rapport', n:'Nothing yet — conversation and familiarity',     keeps:['recon']},
        {id:'routine', n:'Ordinary details any counterparty would need',   keeps:['legit_info']}
    ]},
    { code:'F2', label:'What justifies the request', options:[
        {id:'onboarding',  n:'A verification step, before anything real has happened', keeps:['identity']},
        {id:'wrongnumber', n:'A wrong number, a stray add, an unusually warm stranger', keeps:['recon']},
        {id:'existing',    n:'A relationship you began and can verify independently',   keeps:['legit_info']}
    ]}
  ]
};

const W1_OPTS = ['Move money','Hand over a credential','Let something onto your device','Give information — or nothing yet'];
const W1_DRILL = [
  {q:'A caller from your bank’s fraud team says a payment is being disputed and asks to walk you through it on a screen-share so they can see what you see.',
   a:'Let something onto your device', w:'The goal is money, but the current ask is a screen-share. Classify the ask you can still refuse, not the outcome they want.'},
  {q:'"Your parcel could not be delivered. Pay the £1.99 redelivery fee at the link below."',
   a:'Move money', w:'The fee is trivially small on purpose — the point is the card details you enter to pay it. It still enters as a payment ask.'},
  {q:'"This is Microsoft support. To verify your account we have sent a code to your phone — please read it back to me."',
   a:'Hand over a credential', w:'A one-time code is a credential. Nothing has been asked for yet except the thing that unlocks everything else.'},
  {q:'A stranger who says they messaged the wrong number keeps up a friendly conversation for three weeks and asks nothing of you.',
   a:'Give information — or nothing yet', w:'No ask is a stage, not an absence. The rapport is the product being built.'},
  {q:'A recruiter for a role you applied to asks you to complete onboarding by uploading your passport and national insurance number before the contract is issued.',
   a:'Give information — or nothing yet', w:'Documents before anything real has happened. Nothing is being paid and nothing is being installed — the documents are the take.'},
  {q:'An email from a supplier you use says their bank has changed and attaches updated details for this month’s invoice.',
   a:'Move money', w:'A payment ask wearing routine clothing.'}
];

const W2_OPTS = ['Investment grooming','Romance scam','Advance fee','Recovery scam','Invoice redirect','Authority impersonation','Overpayment','Legitimate request'];
const W2_DRILL = [
  {q:'Four months of daily messages, then a tip about a trading platform. Small withdrawals work. The large one triggers a "tax" that must be paid before release.',
   a:'Investment grooming', w:'The working small withdrawal is the mechanism, not a reassurance — it exists to justify the larger deposit.'},
  {q:'Eight months of daily messages with someone you have never met in person, who has asked for nothing. His daughter is in hospital and the company advance will not clear until Monday.',
   a:'Romance scam', w:'The eight months of asking for nothing is the investment that makes the ask work. A crisis at a permanent, structurally explained distance is the shape.'},
  {q:'A caller says you have unpaid tax, a warrant is being prepared, and it can be settled today in gift cards.',
   a:'Authority impersonation', w:'No tax authority takes vouchers, and none conducts arrests by phone. Irreversible channel plus manufactured urgency.'},
  {q:'You are told you have won a lottery you never entered; the prize is released once a customs fee is paid.',
   a:'Advance fee', w:'Money must go out before money comes in. The fee is the entire business.'},
  {q:'Someone contacts you about the crypto you lost last year, saying their firm can trace and recover it for an upfront retainer.',
   a:'Recovery scam', w:'It targets a loss you already suffered — which means they know about it, usually from the list you ended up on the first time.'},
  {q:'A buyer for your marketplace listing sends £900 for a £600 item and asks you to refund the difference to a different account.',
   a:'Overpayment', w:'The original payment reverses later; the difference you sent is real money already gone.'},
  {q:'A supplier emails from a lookalike domain in the same thread as a genuine invoice, saying their account details have changed.',
   a:'Invoice redirect', w:'Late change of bank details, delivered by message, inside a thread that is otherwise real.'},
  {q:'Your builder sends the invoice you agreed, to the account on the contract you signed, and is happy for you to ring the office number you already had to confirm.',
   a:'Legitimate request', w:'No change, no urgency, and independent verification is welcomed rather than deflected.'}
];

const W3_OPTS = ['Credential phishing','One-time-code interception','App-permission phishing','Legitimate security notice'];
const W3_DRILL = [
  {q:'"Unusual sign-in detected. Confirm your identity here" — with a link to a page that looks exactly like your email provider’s login.',
   a:'Credential phishing', w:'The whole route forward is inside their message. A real provider does not need you to arrive from their link.'},
  {q:'"To cancel the suspicious transaction, read me the six-digit code we have just sent you."',
   a:'One-time-code interception', w:'The code is being sent by the real system, to authorise what the caller is doing right now. Nobody legitimate ever needs it read back.'},
  {q:'A document-sharing prompt asks you to grant an app ongoing permission to read your mail and contacts.',
   a:'App-permission phishing', w:'No password is stolen and the second factor is never touched — you are asked to authorise access directly, and it survives a password change.'},
  {q:'Your provider’s app shows a new sign-in from a city you were in last week, with no link and nothing to do.',
   a:'Legitimate security notice', w:'Informational, in the app you opened yourself, asking nothing. Learn this shape.'}
];

const W4_OPTS = ['Tech-support / fake alert','Malicious installer','Refund scam','Legitimate software prompt'];
const W4_DRILL = [
  {q:'A full-screen browser warning with an alarm sound says your machine is infected and gives a support number to call.',
   a:'Tech-support / fake alert', w:'Real security software does not ask you to telephone anyone. The alert exists to produce a phone call.'},
  {q:'A recruiter sends a "skills assessment" as an executable to run locally before the interview.',
   a:'Malicious installer', w:'The file is the payload. Nothing is shown to you afterwards, which is the point.'},
  {q:'After a screen-share to process a refund, you are shown a transfer that appears to have overpaid you by £4,000 and asked to send the excess back.',
   a:'Refund scam', w:'The screen was manipulated, often by moving money between your own accounts. The excess never existed; what you send does.'},
  {q:'You open the vendor’s site yourself, download the installer, and it prompts for admin rights during installation with nobody on the phone.',
   a:'Legitimate software prompt', w:'You initiated it, through a route you chose, with no session and no audience.'}
];

const W5_OPTS = ['Identity harvesting','Reconnaissance — no ask yet','Legitimate information request'];
const W5_DRILL = [
  {q:'A "government grant" portal asks for date of birth, national insurance number and a photo of your driving licence to check eligibility.',
   a:'Identity harvesting', w:'Verification before anything real has happened. The documents are not a step toward the grant; they are the grant, to them.'},
  {q:'Someone adds you after a conference, is warm and attentive, asks about your work and your team for a fortnight, and requests nothing.',
   a:'Reconnaissance — no ask yet', w:'Either grooming or targeting. The material gathered is what makes a later approach credible.'},
  {q:'The letting agency you approached asks for references and proof of income before drawing up the tenancy you asked for.',
   a:'Legitimate information request', w:'You started it, the request fits the transaction, and you can verify the agency independently of any message they sent.'},
  {q:'A message from a delivery firm you are expecting a parcel from asks you to confirm your full card number to "verify the address".',
   a:'Identity harvesting', w:'A card number verifies nothing about an address. The stated justification does not match the data requested — that mismatch is the whole tell.'}
];

const SCAM_ERR = [
  {q:'Scam messages are always full of spelling mistakes.',
   w:'Typos were never a signature — they were a filter, cheaply screening out anyone careful enough to be hard work later. Well-resourced operations write clean copy, and generated text has removed the tell entirely.'},
  {q:'It came from my bank’s real number, so it was genuine.',
   w:'Caller ID and SMS sender IDs are trivially spoofed, and a spoofed message lands in the same thread as the real ones. The channel is not evidence; only a route you initiated is.'},
  {q:'The site had a padlock and a valid certificate, so it was the real site.',
   w:'A certificate attests that the connection is encrypted and that whoever holds the domain holds the certificate. It says nothing about who that is. They are free and issued in minutes.'},
  {q:'They knew my address and the last four digits of my card, so they had to be the bank.',
   w:'Breached data is cheap and abundant. Knowledge of stale details authenticates nobody — and it is deployed early precisely because it feels like proof.'},
  {q:'Only greedy or naive people fall for these.',
   w:'Invoice redirect takes finance teams, and grooming scams take educated professionals over months. The reliable risk factors are being busy, being in a transaction where the message is expected, and being alone with the decision.'},
  {q:'I would know, because a scammer would ask for money straight away.',
   w:'Grooming asks for nothing for weeks by design, and the first ask is small and works properly. The absence of an ask is a stage.'},
  {q:'It cannot be a scam — I rang them, they did not ring me.',
   w:'Ask where the number came from. A number in a message, a search advert, or a pop-up is their number whoever dials it. Only a number you already had counts as calling them.'}
];

const SCAM_SPECIMENS = [
  {q:'You matched four months ago. She messages every morning, calls most evenings, and has never been able to make a video call work. In month three she mentioned the trading platform her uncle runs. You put in $500 and withdrew $700 without difficulty. You have now put in $60,000, the dashboard shows $94,000, and the withdrawal has been held pending a 20% "capital gains deposit" payable before release.',
   sub:{G1:['money'],M1:['relationship'],M2:['platform']},outcome:'pigbutcher',
   why:'The small successful withdrawal is not a reassurance that went wrong — it is the mechanism, bought cheaply to justify the deposit that matters. The dashboard is a rendering, not an account, so every figure on it is theirs to choose. The fee to release your own money is where the platform stops pretending.',
   fals:'A genuine platform is one you found independently, is regulated somewhere you can check, and never requires a payment in to get a payment out.'},

  {q:'Eight months of daily messages. He is on a contract offshore, which is why the video never connects. He has never asked you for anything. His daughter has been admitted to hospital and the company advance will not clear until Monday, and he is asking you — apologising the whole time — for £4,000 he will return the moment it lands.',
   sub:{G1:['money'],M1:['relationship'],M2:['emergency']},outcome:'romance',
   why:'A relationship at a permanent, structurally explained distance, followed by a crisis with a deadline. The eight months of asking for nothing is the investment that makes the ask work, and the apology is part of the instrument.',
   fals:'Someone you have met in person, whose circumstances you can verify through anyone other than themselves, is in a different category — people do have real emergencies.'},

  {q:'A letter says a distant relative died intestate in another country and you are the traced heir to £2.1m. The estate can be released once local probate duty of £3,400 is settled. The solicitor’s letterhead, registration number and a scan of the death certificate are attached.',
   sub:{G1:['money'],M1:['windfall'],M2:['payfirst']},outcome:'advfee',
   why:'Money must go out before money comes in, and the documents are free to produce. Every advance fee is this shape, whatever the story on top — lottery, inheritance, a loan approval, a job that needs equipment bought upfront.',
   fals:'Real probate costs are deducted from an estate, not collected from a beneficiary in advance. If it must be paid from the thing it releases, it is not a fee.'},

  {q:'Ten months after you lost money to an investment platform, a firm contacts you. They specialise in tracing crypto, have worked with the regulator, and have partially recovered funds for others in your position. There is a £2,500 retainer, refundable if the trace fails.',
   sub:{G1:['money'],M1:['windfall'],M2:['priorloss']},outcome:'recovery',
   why:'They knew about a loss that is not public. Either they are working the original operation’s list or they bought it, and the same list is sold repeatedly precisely because a previous victim is a proven payer.',
   fals:'Genuine recovery goes through your bank, the police and the regulator, none of whom charge a retainer or make first contact by cold approach.'},

  {q:'Your builder has invoiced monthly for eight months. Today’s email arrives in the same thread, matches the quoted figure, and says their accountant has moved them to a new bank — details attached, please use these from now on. The sender address is off by one character.',
   sub:{G1:['money'],M1:['invoice'],M2:['changed']},outcome:'bec',
   why:'The thread is genuine, the figure is genuine, and the only thing altered is where the money lands. Late-changed bank details delivered by message are the single highest-value pattern in this course, and the one that takes finance departments rather than individuals.',
   fals:'Ring the number on the original contract — not the one in the email — and ask. A real change survives that call; this one does not.'},

  {q:'A caller identifies himself as an officer of the tax authority. There is an unpaid assessment, a warrant has been prepared, and officers will attend today unless it is settled. He will stay on the line while you go to the shop and buy the vouchers, and asks you not to discuss it with staff as the matter is confidential.',
   sub:{G1:['money'],M1:['threat'],M2:['irrevers']},outcome:'authority',
   why:'Three things at once: an irreversible payment channel no tax authority uses, urgency that removes the time to check, and isolation instructions that exist solely to defeat the shop assistant who would otherwise stop it.',
   fals:'Tax authorities write. They do not conduct arrests by telephone, do not take vouchers, and are indifferent to whether you consult someone before paying.'},

  {q:'A buyer for the £600 camera you listed pays without haggling. The transfer that arrives is £1,240. They apologise, explain their assistant entered the wrong figure, and ask you to send the £640 difference to their partner’s account before shipping.',
   sub:{G1:['money'],M1:['transaction'],M2:['excess']},outcome:'overpay',
   why:'The overpayment either reverses later as fraudulent or never cleared at all, while the difference you send is irreversible and immediate. The apologetic error is the entire design — it manufactures a reason for money to flow back out.',
   fals:'A genuine overpayment is fixed by reversing the original payment, not by a second payment from you. Refuse to split the transaction and it evaporates.'},

  {q:'The letting agency you approached last week emails the tenancy agreement you asked for, with the deposit payable to a client account registered with a deposit protection scheme whose number you can check on the scheme’s own site. Nothing is urgent and the office number matches the one on the listing you found independently.',
   sub:{G1:['money'],M1:['transaction'],M2:['nothing_m']},outcome:'legit_money',
   why:'You started the transaction, the details were never changed, the destination is independently verifiable, and there is no time pressure. Every property in this specimen is the negation of one in the others.',
   fals:'If the account details arrived as a late change by email, or the scheme number failed to check out, it moves to invoice redirect immediately.'},

  {q:'"We detected a sign-in to your account from a device in another country. If this was not you, secure your account now" — with a button. The page it opens is a pixel-accurate copy of your provider’s login, at a domain with your provider’s name in it followed by -security.',
   sub:{G1:['access'],A1:['password'],A2:['neverlink']},outcome:'phish',
   why:'The alarming premise exists to make you use their route. Everything forward is inside their message, which is the property that distinguishes phishing from a real security notice regardless of how convincing the page is.',
   fals:'Close it and reach the same account by typing the address yourself or opening the app. If the warning is real it will be there too; if it is not, nothing is lost.'},

  {q:'A caller from your bank’s fraud team says a £900 payment to an electronics retailer is pending and asks whether you authorised it. You did not. To cancel it, he says, he needs the six-digit code the bank has just sent to your phone. The code arrives from the bank’s usual number, in the usual thread.',
   sub:{G1:['access'],A1:['code'],A2:['nevercode']},outcome:'otp',
   why:'The code is genuine, sent by the real bank, and it is authorising what the caller is doing at that moment — which is why it arrives on cue and looks exactly right. This is the pattern that survives every other precaution, because the victim never visits a fake site or installs anything.',
   fals:'There is no legitimate circumstance in which anyone needs a one-time code read back to them. The rule needs no case-by-case judgement, which is what makes it usable under pressure.'},

  {q:'A shared document notification leads to a consent screen asking you to allow "Docs Sync Pro" permanent permission to read your mail, contacts and files. It is a genuine consent screen served by your provider, and the app is genuinely requesting exactly those scopes.',
   sub:{G1:['access'],A1:['permission'],A2:['neverapp']},outcome:'oauth',
   why:'Nothing here is forged, which is what makes it hard. No password is captured and the second factor is never involved — you are asked to grant access directly, and the grant survives a password change and continues after any reset.',
   fals:'A genuine document share needs no standing permission over your mailbox. Check the granted-apps list in your account settings; anything you cannot account for should be revoked there.'},

  {q:'You open your provider’s app and a banner reports a new sign-in from a nearby city on Tuesday, matching a trip you took. There is no link, nothing to confirm, and no time limit — just an entry in a list of sessions you can end yourself.',
   sub:{G1:['access'],A1:['nothing_a'],A2:['nothing_a2']},outcome:'legit_access',
   why:'You arrived through an app you opened, nothing is asked of you, no urgency is manufactured, and any action available is one you take inside a session you already had. This is the shape a real security notice has.',
   fals:'The same text arriving as a message with a button to confirm your identity would be phishing — same words, different route.'},

  {q:'A page opens full-screen with an alarm tone, warns that your machine is infected and your banking details are exposed, and displays a support number. The technician who answers asks you to install a remote-support tool so he can show you the problem.',
   sub:{G1:['install'],I1:['alert'],I2:['showsfault']},outcome:'techsupport',
   why:'No security product asks you to telephone anyone — the alert exists only to produce a call. Once connected he will run ordinary diagnostics and narrate their normal output as catastrophic, then sell a fix for a problem that was never there.',
   fals:'Close the tab. A warning that dies when you close the browser was in the browser, not in the machine.'},

  {q:'A recruiter you have exchanged three emails with sends a "technical assessment" as a file to run before the interview. Running it opens a document, the interview happens as scheduled, and nothing else appears to occur.',
   sub:{G1:['install'],I1:['sentfile'],I2:['silent']},outcome:'fakeupdate',
   why:'The file is the objective and the recruitment is the wrapper. The absence of any visible consequence is the design — unlike every other pattern here, success looks exactly like nothing happening.',
   fals:'Assessments run on the employer’s platform, in a browser. An executable sent by a stranger is the payload no matter how ordinary the covering story.'},

  {q:'A caller from your broadband provider says you are owed £48 for an outage and needs to process it while you watch. He asks you to install a support tool and log into your banking. On screen the credit appears as £4,800. He is audibly distressed, says it will come out of his wages, and asks you to send back the difference.',
   sub:{G1:['install'],I1:['screen'],I2:['banking']},outcome:'refundscam',
   why:'The current ask is device access, which is where it can still be refused; the money comes later. What you saw was manipulated — commonly by moving your own savings into your current account so the balance genuinely rises. His distress is the instrument that converts a technical position into an urgent moral obligation.',
   fals:'End the session and check the balance on a different device. Refunds are made to the card that paid, without a screen-share and without anyone watching you bank.'},

  {q:'You go to the vendor’s website, download the installer, and it asks for administrator rights during installation. Nobody is on the phone, the download came from a site you navigated to yourself, and the prompt is the one the operating system shows for any installation.',
   sub:{G1:['install'],I1:['youwent'],I2:['normal_i']},outcome:'legit_inst',
   why:'You initiated it through a route you chose, there is no session and no audience, and the prompt asks for what an installation genuinely needs. An admin prompt is not itself a warning sign — who put you in front of it is the question.',
   fals:'If a call or a pop-up sent you to that download, the prompt is unchanged and the situation is entirely different.'},

  {q:'You applied to a remote role and got an offer quickly. Before the contract is issued, onboarding asks you to upload a passport scan, your national insurance number, a utility bill and a photograph of yourself holding the passport, through a portal on a domain registered last month.',
   sub:{G1:['info'],F1:['docs'],F2:['onboarding']},outcome:'identity',
   why:'A complete identity package is being assembled before anything real has happened. The selfie-with-document is the giveaway: it exists to defeat the liveness checks banks use, and no employer needs one before a contract.',
   fals:'Legitimate right-to-work checks happen after an offer is accepted, through a named company you can find independently, and never require a photograph of you holding your documents.'},

  {q:'A message arrives from an unknown number: sorry, wrong contact. The conversation is easy and continues for three weeks — your work, your city, your weekends. Nothing has been asked for, nothing has been offered, and no money or link has ever been mentioned.',
   sub:{G1:['info'],F1:['rapport'],F2:['wrongnumber']},outcome:'recon',
   why:'The wrong-number opener is a manufactured coincidence that makes the contact feel unsought, and the weeks of nothing are the investment. What is being gathered is the material that makes a later approach credible — and the familiarity that makes refusing it feel rude.',
   fals:'A real wrong number ends when the mistake is established. Extended warmth from someone who reached you by accident is the pattern, not a coincidence on top of one.'},

  {q:'You rang the number on the back of your card to query a transaction. They ask you to confirm details from your own account to identify you, offer to call you back on the number they hold if you would rather, and add nothing further.',
   sub:{G1:['info'],F1:['routine'],F2:['existing']},outcome:'legit_info',
   why:'You initiated contact through a route that was already in your possession, the details requested are ones the holder of the account would know, and they volunteer independent verification rather than deflecting it. Direction of contact is doing all the work here.',
   fals:'The identical conversation, in a call that came to you, is unverifiable. Hang up and ring the number on your card — the genuine version of this survives that, every time.'}
];

const SCAM_COURSE = [
{ tag:'One', title:'The current ask',
  cards:[
  {h:'Classify the ask, not the story',
   b:`<p class="lead">The stories are infinite and cost nothing to replace. The frozen tax refund, the offshore engineer, the parcel fee, the recruiter — these are surfaces, regenerated as fast as anyone learns them.</p>
      <p>Underneath, there are only four things a stranger can want from you: your money, a credential, a foothold on your device, or information. Every pattern in this course is one of those four with a story wrapped round it, and the story is the part you should ignore first.</p>
      <div class="note">Throughout, a right label reached by the wrong route counts as a miss. If you cannot say <i>which ask</i> you were answering, you have recognised a story you happen to have heard of — which is no protection against the next one.</div>`},
  {h:'The four asks',
   b:`<table class="k">
      <tr><th>G1</th><td><b>Move money</b><br>transfer, card, crypto, vouchers<span class="tell">The only one where the loss is immediate and usually final.</span></td></tr>
      <tr><th>G2</th><td><b>Hand over a credential</b><br>password, one-time code, app permission<span class="tell">Survives being noticed — access persists after the conversation ends.</span></td></tr>
      <tr><th>G3</th><td><b>Let something onto your device</b><br>installer, attachment, screen-share<span class="tell">Converts one contact into standing access.</span></td></tr>
      <tr><th>G4</th><td><b>Give information, or nothing yet</b><br>documents, details, or only conversation<span class="tell">The stage most often mistaken for safety.</span></td></tr>
      </table>`},
  {h:'The ask now, not the goal eventually',
   b:`<p>A caller who wants to screen-share to sort out a refund is after your money. But the thing being asked for <i>now</i> is access to your device, and that is what you can still refuse.</p>
      <p>So the key classifies by the current ask, always. This is not a technicality — it is where the intervention lives. By the time the refund scam reaches the money, you are watching a manipulated screen and being asked to correct someone’s payroll error, which is a much harder moment to think in.</p>
      <div class="warn"><strong>Name the step in front of you.</strong> The goal is what they get if nothing stops it. The ask is what you are being invited to do in the next sixty seconds.</div>`},
  {h:'The channel is not the classification',
   b:`<p>Email, SMS, a phone call, WhatsApp, a dating app, a LinkedIn message, a QR code on a parking meter — these are delivery, and any pattern here arrives down any of them.</p>
      <p>"Smishing" and "vishing" name the pipe, not the mechanism, and sorting by pipe produces a list that grows forever and predicts nothing. Sorting by the ask produces four categories that have stayed stable for decades.</p>
      <p>The same goes for polish. Spoofed sender IDs, cloned websites, correct logos and synthesised voices are all cheap now. Nothing about how a message looks or sounds belongs in the determination.</p>`}
  ],
  drill:{kind:'pick', key:'w1'} },

{ tag:'Two', title:'Money moved by you',
  cards:[
  {h:'Why it is always you who sends it',
   b:`<p class="lead">In almost every pattern here, the victim makes the payment themselves, deliberately, through their own bank, having been given a reason they found convincing at the time.</p>
      <p>That is not incidental. A payment you authorise defeats fraud detection, is hard to reverse, and is much harder to report — because reporting it means describing a decision you made. The persuasion is not decoration on the theft; it is the whole of the theft.</p>`},
  {h:'The seven money patterns',
   b:`<table class="k">
      <tr><th>A</th><td><b>Investment grooming</b> — returns exist only inside their platform<span class="tell">The small successful withdrawal is bait, not evidence.</span></td></tr>
      <tr><th>B</th><td><b>Romance</b> — a crisis at a permanent distance<span class="tell">Months of asking for nothing is the investment.</span></td></tr>
      <tr><th>C</th><td><b>Advance fee</b> — money must go out before money comes in<span class="tell">Lottery, inheritance, loan approval, job equipment.</span></td></tr>
      <tr><th>D</th><td><b>Recovery</b> — it targets a loss you already suffered<span class="tell">They have the list from the first time.</span></td></tr>
      <tr><th>E</th><td><b>Invoice redirect</b> — late change of bank details, by message<span class="tell">Highest value per incident, and it takes finance teams.</span></td></tr>
      <tr><th>F</th><td><b>Authority</b> — pay now, irreversibly, and tell no one<span class="tell">The isolation instruction is diagnostic on its own.</span></td></tr>
      <tr><th>G</th><td><b>Overpayment</b> — they send too much and want the difference<span class="tell">Their payment reverses; yours does not.</span></td></tr>
      </table>`},
  {h:'The three levers, in every one of them',
   b:`<p><b>Urgency</b> removes the interval in which you would have checked. <b>Isolation</b> removes the person who would have said stop — the bank teller, the shop assistant, your daughter. <b>A reason not to verify</b> is supplied in advance: it is confidential, the line is monitored, there is no time, don’t embarrass yourself.</p>
      <div class="warn"><strong>All three are about your access to other people and to time.</strong> Nothing legitimate requires you to decide alone, immediately, without checking. When you notice those three arriving together, you do not need to know which pattern it is.</div>`},
  {h:'The counter-move is the same every time',
   b:`<p>Stop. Use a route you already had — the number on the card, the contract, the app you installed yourself. Verify from that direction, not the one offered.</p>
      <p>Every genuine version of every specimen in this course survives that. That is what makes it usable: you do not have to identify the pattern correctly, or at all. You only have to change direction.</p>
      <div class="note">This course teaches identification because it makes the reflex quicker and lets you warn other people specifically. But the response never depends on getting the name right.</div>`}
  ],
  drill:{kind:'pick', key:'w2'} },

{ tag:'Three', title:'Credentials and codes',
  cards:[
  {h:'What makes this category different',
   b:`<p class="lead">A payment is a loss of a known size. A credential is a loss of unknown size that continues after the conversation ends — the mailbox that resets every other password, the account that vouches for you to your contacts.</p>
      <p>Three mechanisms, distinguished by what actually leaves your hands.</p>`},
  {h:'Password, code, permission',
   b:`<table class="k">
      <tr><th>A</th><td><b>Credential phishing</b> — a password, on a page reached from their message<span class="tell">The route is the tell, not the quality of the copy.</span></td></tr>
      <tr><th>B</th><td><b>One-time-code interception</b> — a real code, read back to a caller<span class="tell">The code is genuine and arrives on cue, because it is authorising them.</span></td></tr>
      <tr><th>C</th><td><b>App-permission phishing</b> — a real consent screen, granting a real app<span class="tell">Nothing is forged, and it survives a password change.</span></td></tr>
      </table>
      <p>Only the first is defeated by a password manager, and only the first two by changing your password.</p>`},
  {h:'One rule that needs no judgement',
   b:`<p>Under pressure, on the phone, with someone plausible narrating an emergency, you will not reliably assess whether a request is legitimate. So the rule has to be one that requires no assessment.</p>
      <div class="warn"><strong>Nobody ever needs a one-time code read back to them. Not the bank, not the police, not support, not ever.</strong> The code exists to prove you are present at your own device. Speaking it aloud is the only way to lose it.</div>
      <p>Its value is that it holds when your judgement is compromised, which is precisely the condition these calls are built to create.</p>`},
  {h:'Permissions are the modern gap',
   b:`<p>App-permission phishing is hard because nothing about it is fake. The consent screen is served by your real provider, the app is a real app, and the permissions it requests are the ones it says.</p>
      <p>What is false is only the pretext for asking — a shared document, an urgent scan, a productivity tool a colleague supposedly uses. The grant then sits there, unaffected by password resets and unnoticed by anything watching for logins.</p>
      <p>Audit the granted-apps list in your main accounts occasionally, and revoke anything you cannot place. It takes two minutes and almost nobody does it.</p>`}
  ],
  drill:{kind:'pick', key:'w3'} },

{ tag:'Four', title:'Access to your device',
  cards:[
  {h:'One contact into standing access',
   b:`<p class="lead">This category converts a single conversation into a position on your machine — remote-control software installed by you, an attachment run by you, a screen-share you agreed to.</p>
      <p>Consent is the point. Nothing has to be broken into, so nothing raises an alarm.</p>`},
  {h:'Three routes in',
   b:`<table class="k">
      <tr><th>A</th><td><b>Tech-support / fake alert</b> — the warning exists to produce a phone call<span class="tell">Real security software never asks you to telephone anyone.</span></td></tr>
      <tr><th>B</th><td><b>Malicious installer</b> — a file arrives with a covering story<span class="tell">Success looks exactly like nothing happening.</span></td></tr>
      <tr><th>C</th><td><b>Refund scam</b> — a screen-share to fix a payment<span class="tell">Ask for access first; the money is asked for later.</span></td></tr>
      </table>`},
  {h:'The refund scam is worth its own card',
   b:`<p>It is the clearest case of the ask-versus-goal distinction, and one of the most effective patterns operating.</p>
      <p>With remote access and your banking open, the operator moves money between your own accounts — savings to current — so the balance genuinely rises. You are then shown an apparent overpayment, told it will come out of the caller’s wages, and asked to put it right. The remorse is real-sounding and entirely scripted.</p>
      <div class="note"><strong>Nothing on a screen someone else controls is evidence about your money.</strong> End the session and check the balance on a different device, through the app you installed yourself.</div>`},
  {h:'An admin prompt is not the warning sign',
   b:`<p>Installers legitimately ask for elevated rights. The question is never what the prompt says — it is how you came to be standing in front of it.</p>
      <p>You navigated to the vendor yourself and downloaded it: ordinary. A call, a pop-up, a message, or a search advert put you there: the identical prompt, an entirely different situation.</p>
      <p>Search adverts deserve a line of their own. The paid result above the real one is bought by whoever pays, routinely including operators buying their target’s brand name — which is how people reach a scam support line by searching for the real one.</p>`}
  ],
  drill:{kind:'pick', key:'w4'} },

{ tag:'Five', title:'Information, and nothing yet',
  cards:[
  {h:'The stage that feels like safety',
   b:`<p class="lead">Nothing has been asked for. No money, no password, no file. This reads as harmless and is the reason grooming works — people wait for the ask before starting to assess, and by the time it comes they have months of relationship arguing on its behalf.</p>
      <p>An absent ask is a stage. It is the only category here defined by what has not happened yet.</p>`},
  {h:'Two shapes',
   b:`<table class="k">
      <tr><th>A</th><td><b>Identity harvesting</b> — documents before anything real has happened<span class="tell">A selfie holding your passport defeats bank liveness checks.</span></td></tr>
      <tr><th>B</th><td><b>Reconnaissance</b> — warmth from a stranger who reached you by accident<span class="tell">Manufactured coincidence, then patience.</span></td></tr>
      </table>
      <p>The first is the take itself: an identity package is worth money without you ever being contacted again. The second is preparation for an ask that has not arrived.</p>`},
  {h:'Does the data match the reason given?',
   b:`<p>The most portable test in this unit. A delivery firm asking for a full card number to "verify an address" fails it — a card number verifies nothing about an address. An employer asking for a photograph of you holding your passport before a contract exists fails it.</p>
      <p>You do not need to know what the data will be used for. You only need to notice that the stated justification does not require it.</p>
      <div class="note"><strong>Direction of contact carries most of the weight here.</strong> A request inside something you started, verifiable independently, is ordinary. The same words arriving unsought are not.</div>`}
  ],
  drill:{kind:'pick', key:'w5'} },

{ tag:'Six', title:'What people believe instead',
  cards:[
  {h:'The tells that stopped working',
   b:`<p class="lead">Most people are carrying a defence assembled around 2010: bad spelling, odd phrasing, obviously wrong logos, a foreign accent, an implausible story. Every one of those has been cheap to fix for years, and generated text and synthesised voice have finished the job.</p>
      <p>A defence built on surface cues does not merely fail — it actively harms, because a message that passes those checks then feels verified.</p>`},
  {h:'And the beliefs that make it worse',
   b:`<p><b>"It came from their real number."</b> Sender IDs and caller ID are spoofable, and a spoofed SMS lands in the same thread as the genuine ones.</p>
      <p><b>"They knew my details, so it was really them."</b> Breach data is abundant and cheap, and is used early precisely because it feels like proof.</p>
      <p><b>"It would never work on me."</b> The reliable risk factors are being busy, being mid-transaction so the message is expected, and being alone with the decision. Invoice redirect takes finance departments, not the careless.</p>
      <div class="warn"><strong>Confidence is a risk factor, not a defence.</strong> People who are sure it could not happen to them do not verify, and verifying is the entire defence.</div>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'Full determination',
  cards:[
  {h:'Running the whole key',
   b:`<p class="lead">Now the categories come without labels. Read the scenario, decide what is being asked for <i>right now</i>, work the two questions under that ask, and name the pattern.</p>
      <p>Four specimens are legitimate. Getting those right matters as much as the rest — a key that flags everything is one you will stop using the first week it makes you insult a real builder.</p>
      <div class="note">Your name and your route are scored separately. Right name from the wrong route counts as a miss, because a pattern you cannot locate is one you will not see in a variant.</div>`}
  ],
  drill:{kind:'det'} }
];

const SCAMS = {
  id:'scams', name:'Scams & Social Engineering', rev:1,
  blurb:'Ignore the story and classify what is actually being asked for right now: money, a credential, device access, or information.',
  intro:'Ignore the story and classify what is being asked for right now — money, a credential, device access, or information. A correct label reached by the wrong route is scored as a miss.',
  outcomes: SCAM_OUTCOMES,
  determination: { gateCode:'G1', steps:[SCAM_GATE], stepsByGate:SCAM_STEPS_BY_GATE },
  determinationIntro:`<p>You are classifying by the ask, not by the story. Decide what is being requested right now, work the two questions under that category, and name the pattern last.</p>
      <ol>
        <li>Read the scenario.</li>
        <li><b>Step 1</b> — what is being asked for <i>at this moment</i>: money, a credential, something onto your device, or information? Classify the current ask, not the eventual goal — a screen-share to arrange a refund is device access, even though the money is what they are after.</li>
        <li><b>Steps 2–3</b> — the two questions specific to that category. They unlock in order and change with your Step 1 answer.</li>
        <li><b>Step 4</b> — now name it, and record your determination.</li>
      </ol>
      <p>The strip between the scenario and step 1 is a readout, not a control. It crosses off patterns your answers have ruled out. Nothing there is tappable.</p>
      <p>Four of the specimens are legitimate, and every category offers a legitimate outcome. Naming one clean is a determination like any other.</p>
      <p>Your name and your route are scored separately. Right name from the wrong steps counts as a miss.</p>`,
  specimens: SCAM_SPECIMENS,
  quickDrills: [
    {key:'w1', title:'Which ask', prompt:'What is being asked for right now?', items:W1_DRILL, opts:W1_OPTS},
    {key:'w2', title:'Money patterns', prompt:'Which money pattern — if any?', items:W2_DRILL, opts:W2_OPTS},
    {key:'w3', title:'Credentials', prompt:'What would actually leave your hands?', items:W3_DRILL, opts:W3_OPTS},
    {key:'w4', title:'Device access', prompt:'How is the device being reached?', items:W4_DRILL, opts:W4_OPTS},
    {key:'w5', title:'Information', prompt:'What is being collected, and why?', items:W5_DRILL, opts:W5_OPTS}
  ],
  errDrill: SCAM_ERR,
  course: SCAM_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'w1', label:'Which ask'}, {key:'w2', label:'Money patterns'}, {key:'w3', label:'Credentials'},
    {key:'w4', label:'Device access'}, {key:'w5', label:'Information'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>The response does not depend on the name.</b> Stop, and verify through a route you already had — the number on your card, the contract, the app you installed yourself. That single move defeats every specimen in this course, including ones invented after it was written. Identification makes the reflex faster; it is not a prerequisite.</li>
    <li><b>The key cannot authenticate a particular message.</b> It tells you a message has the shape of something that warrants checking. Only verification through an independent channel establishes that a specific request is real.</li>
    <li><b>Legitimate organisations do suspicious-looking things.</b> Banks really do call about fraud, couriers really do text about parcels, and real recruiters ask for right-to-work documents. A pattern match is a reason to verify, not grounds to accuse — and treating it as proof is how people end up abusing a support worker doing their job.</li>
    <li><b>Surface cues are finished as evidence.</b> Spelling, grammar, logos, sender IDs, accents and now voices are all cheap to get right. Anything that can be copied is not a tell, in either direction: polish is not reassurance.</li>
    <li><b>These patterns recombine.</b> Real operations run grooming into investment, or authority into remote access, and hand victims between teams. The key names mechanisms because mechanisms are what recur; the scripts are rewritten constantly.</li>
    <li><b>Knowing you are in one does not mean you can stop.</b> Sunk cost, shame, isolation from anyone who would object, and genuine attachment all keep people in long after doubt begins. Recovery scams exist because that state persists after the money has gone.</li>
    <li><b>Not covered here:</b> extortion and blackmail patterns, employment and rental fraud in depth, charity and disaster fraud, and the whole of card-present and ATM fraud, which are physical rather than social. The four-ask frame still applies; the specific tells do not.</li>
    <li><b>If it has already happened:</b> contact your bank immediately — payment recall is sometimes possible within hours — then report it to your national fraud body, preserve the messages, and change credentials from a device you trust. Do not engage with anyone who approaches you offering to recover the funds, which is Unit Two, pattern D, and is often the same operation returning.</li>
  </ul>`
};

FC.legacy('scams', SCAMS);
