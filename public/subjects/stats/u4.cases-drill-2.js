// Statistical Claims, Unit Four: drill cases for the whole-claim stage, first group (clean).

FC.cases('stats', 'u4', [

  { id: 'm4-rt-pledges', use: 'drill', tier: 'clean', setting: 'money', topic: 'a charity bonus on pledges entered',
    text: "A charity gives each fundraiser a bonus per pledge 'received', and the fundraiser enters each pledge in the system after the call. Pledges entered per month rose from 300 to 800 after the bonus began, and the fundraisers began entering a pledge when a donor said 'maybe'. Money actually paid in each month, from the bank's records, was $24,000 before and $24,500 after.",
    outcome: 'proxy', route: { S1: ['measure'], M1: ['pushed'] },
    cues: { S1: "gives each fundraiser a bonus per pledge 'received', and the fundraiser enters each pledge in the system after the call",
            M1: "gives each fundraiser a bonus per pledge 'received', and the fundraiser enters each pledge in the system after the call" },
    reason: { S1: 'The count of pledges can rise with no more money coming in: {cue:S1}. The count rose by 500 a month, and the bank’s records rose by $500.',
              M1: 'The fundraisers are paid on the figure and enter it themselves: {cue:M1}. Entering a "maybe" raises it at once; getting a donor to pay takes work.' },
    not: { outcome: 'detection', why: 'Nobody is looking harder for pledges. The fundraisers gain from the figure and make it, which is a different way for it to move.' } },

  { id: 'm4-rt-safety', use: 'drill', tier: 'clean', setting: 'work', topic: 'a factory with a reporting box on every floor',
    text: "A factory reports: 'Safety incidents reported rose from 24 to 71 this year. Our plant is getting more dangerous.' In January the factory put a reporting box on every floor and held a month of 'report everything' talks. Injuries that sent a worker home, which payroll counts, were 6 last year and 6 this year.",
    outcome: 'detection', route: { S1: ['measure'], M1: ['looked'] },
    cues: { S1: "put a reporting box on every floor and held a month of 'report everything' talks",
            M1: "put a reporting box on every floor and held a month of 'report everything' talks" },
    reason: { S1: 'The count of incidents reported can rise with no more danger: {cue:S1}. Payroll’s count of injuries that sent a worker home stayed at 6.',
              M1: 'Finding incidents became easier and was encouraged: {cue:M1}. Small incidents that were always there now get written down.' },
    not: { outcome: 'proxy', why: 'Nobody is paid by the number of reports. The factory made reporting easier, so more of the incidents that were already happening were found.' },
    wouldChange: 'If staff were paid for each report they filed, the figure could also be pushed, and the claim would show more than one way for the figure to move. The case says nobody is.' },

  { id: 'm4-rt-library', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a school library scanner and loans each October',
    text: "A school library's scanner logs every book checked out, and the same scanner has been used for years. Nobody is paid or ranked by the count, and the loan period did not change. Books checked out in October rose from 1,200 to 1,500. The librarian's note says: 'October loans rose from 1,200 to 1,500.'",
    outcome: 'meas_ok', route: { S1: ['holds'], H1: ['change'] },
    cues: { S1: "the same scanner has been used for years. Nobody is paid or ranked by the count, and the loan period did not change",
            H1: "October loans rose from 1,200 to 1,500" },
    reason: { S1: 'Every part holds: {cue:S1}. One scanner counted the same way, nobody gains from a higher count, and the loan period did not change, so nothing besides the borrowing could move it.',
              H1: 'The claim gives one figure at two times and says it rose: {cue:H1}. Arithmetic: 1,500 − 1,200 = 300 more loans. It sets the figure beside nothing else and says nothing about why.' },
    not: { outcome: 'proxy', why: 'Nobody is paid or ranked on the count, so nobody could raise it without more books being borrowed.' } }
]);
