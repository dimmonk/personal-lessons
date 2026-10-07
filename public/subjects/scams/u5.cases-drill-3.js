// Scams, Unit Five: drill cases for the whole-case stage, second group: the ones that look like another name.

FC.cases('scams', 'u5', [

  { id: 'u5-r-callback', use: 'drill', tier: 'misleading', setting: 'money', topic: 'calling the insurer back at the number on the policy',
    echo: 'u5-bankcall',
    text: "A caller says he is from Mrs. Idowu's car insurer and that her latest payment has failed. She says she will call back, ends the call, waits ten minutes and calls the number printed on her policy documents. The adviser there asks for her policy number and her date of birth, so that she can find the account.",
    outcome: 'realdetails', route: { D1: ['details'], F1: ['identify'], F2: ['fits'] },
    cues: { D1: 'asks for her policy number and her date of birth', F1: 'her policy number and her date of birth', F2: ['calls the number printed on her policy documents', 'so that she can find the account'] },
    reason: { D1: 'The adviser asks Mrs. Idowu for facts about herself: {cue:D1}.',
              F1: 'A policy number and a date of birth identify her: {cue:F1}.',
              F2: 'The first call came to her, and she gave it nothing. Then she made a call of her own, to a number she already had: {cue:F2}.' },
    not: { outcome: 'identitytheft', why: 'The story begins with a call that came to her, which does not fit. But the call whose request she answered is the one she made herself.' },
    wouldChange: 'If she had given her date of birth to the caller who rang her, the answer would be {o:identitytheft}.' },

  { id: 'u5-r-ticket', use: 'drill', tier: 'misleading', setting: 'relationships', topic: 'a chat, then a passport photo for an invitation',
    echo: 'u5-wrongno',
    text: "A man who texted Fay by mistake last week has chatted with her every day since. Today he writes: 'I would love to visit you. To book my flight I need a photo of your passport and your date of birth for the invitation letter.'",
    outcome: 'identitytheft', route: { D1: ['details'], F1: ['identify'], F2: ['notfit'] },
    cues: { D1: 'I need a photo of your passport and your date of birth for the invitation letter', F1: 'a photo of your passport and your date of birth', F2: 'texted Fay by mistake last week' },
    reason: { D1: 'Today he asks Fay for facts about herself: {cue:D1}. The week of chat before it is only the lead-up.',
              F1: 'A passport photo and a date of birth identify her: {cue:F1}. Once papers are asked for, it is no longer about her life.',
              F2: 'Fay started nothing: he is a stranger who {cue:F2}. Booking his own flight needs nothing from her passport.' },
    not: { outcome: 'friendlychat', why: 'The week of friendly chat is the stage before the request. But today’s message asks for papers, and then it is no longer just a chat.' } },

  { id: 'u5-r-adviser', use: 'drill', tier: 'misleading', setting: 'money', topic: 'an adviser who messages out of nowhere on retirement',
    echo: 'u5-bank',
    text: "A man who describes himself as a financial adviser messages Neve out of nowhere after reading her post about moving: 'I help people plan for retirement. May I ask what you do, whether you own your home and what you hope to do at 60?' They write most days for two weeks. He asks about her 401(k), her savings and her plans. He has not asked her for anything.",
    outcome: 'friendlychat', route: { D1: ['details'], F1: ['life'], F2: ['notfit'] },
    cues: { D1: 'He asks about her 401(k), her savings and her plans', F1: ['messages Neve out of nowhere', 'He asks about her 401(k), her savings and her plans'], F2: 'messages Neve out of nowhere' },
    reason: { D1: 'The man asks Neve about herself, and for nothing else: {cue:D1}.',
              F1: 'A stranger who came out of nowhere asks about her work, her 401(k) and her plans, with no paper or number: {cue:F1}.',
              F2: 'Neve started nothing: {cue:F2}. A real adviser is one she asks for, or can check.' },
    not: { outcome: 'realdetails', why: 'A real adviser asks about your savings and plans too. But here a stranger started it, and nothing Neve started needs the answers.' } }
]);
