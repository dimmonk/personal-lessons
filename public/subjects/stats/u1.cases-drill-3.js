// Statistical Claims, Unit One: drill cases, second stage, misleading (the most noticeable thing in the story is not what decides it).
// echo names a teaching case of a DIFFERENT answer whose story this one is built to bring back, so that the second look
// ("does it look like a case you know?") is practised where the likeness points the wrong way. also lists an answer the case shows
// as well as its own, which loses to its own by a tie-break in the key. Field guide: see u1.cases-drill-1.js.

FC.cases('stats', 'u1', [

  { id: 'gate-r-streak', use: 'drill', tier: 'misleading', setting: 'money', topic: 'model portfolios and the ones that stopped being shown', echo: 'gate-music',
    also: ['cause'],
    text: "A trading newsletter says: 'Our stock-picking method makes money: every one of our model portfolios from 2015 is up an average of 90%.' The newsletter published 40 model portfolios in 2015 and has quietly stopped showing the 28 that lost money. Stock markets rose strongly in all those years.",
    route: { S1: ['counted'] },
    cues: { S1: 'has quietly stopped showing the 28 that lost money' },
    reason: { S1: 'The number comes only from the 12 portfolios still shown, because the newsletter {cue:S1}. That comes before the claim of cause, which rising markets could explain anyway.' },
    not: { outcome: 'cause', why: 'Rising markets could explain the gains, so a cause is claimed. But when a story shows two answers, the earlier part wins, and who is counted comes first.' },
    wouldChange: 'If the newsletter had shown all 40 portfolios and the average were still up 90%, the answer would be {a:S1.cause}: rising markets would still explain it.' },

  { id: 'gate-r-scores', use: 'drill', tier: 'misleading', setting: 'learning', topic: 'a bonus for rising test scores', echo: 'gate-music',
    also: ['cause'],
    text: "A school district says: 'Since we began paying teachers a bonus for rising test scores, scores have risen 15 points, so the bonus has raised learning.' Teachers now spend most of the term drilling last year's test questions.",
    route: { S1: ['measure'] },
    cues: { S1: "Teachers now spend most of the term drilling last year's test questions" },
    reason: { S1: 'Teachers are paid on the score, so it can rise with no more learning: {cue:S1}. That comes before the claim that the bonus raised learning.' },
    not: { outcome: 'cause', why: 'The bonus is said to have raised learning, but that cannot hold if the score could rise without learning. When a story shows two answers, the earlier part wins.' } },

  { id: 'gate-r-crash', use: 'drill', tier: 'misleading', setting: 'money', topic: 'an insurer’s test of a lane alert',
    text: "A car insurer ran a 'test' of a lane-keeping alert. It offered the alert free to 10,000 customers, and 4,000 accepted. Over the next year the customers with the alert had 80 crashes per 5,000 drivers and the others had 110 per 5,000. The insurer says: 'The alert prevents crashes.' Customers who accepted the alert were mostly older drivers who drive fewer miles.",
    route: { S1: ['cause'] },
    cues: { S1: ['The alert prevents crashes', 'Customers who accepted the alert were mostly older drivers who drive fewer miles'] },
    reason: { S1: 'The insurer claims this: {cue:S1}. The customers chose their own group, so the safer drivers may simply be the ones who accepted.' },
    not: { outcome: 'holds', why: 'It is called a test, but the customers chose their group. Only groups formed by chance would make it sound.' } },

  { id: 'gate-r-survey', use: 'drill', tier: 'misleading', setting: 'community', topic: 'trash pickup and the households that did not reply', echo: 'gate-golf',
    text: "A town hall mailed a survey about trash pickup to every one of the 9,000 households in town. Of these, 5,400 returned it. The town then phoned 300 households picked from those that had not replied and found that they answered much the same way. Seventy-two percent said they are happy with the pickup. The town says: 'About seven in ten households are happy with trash pickup.'",
    route: { S1: ['holds'] },
    cues: { S1: 'phoned 300 households picked from those that had not replied and found that they answered much the same way' },
    reason: { S1: 'Many households did not reply, but the town did something about it: {cue:S1}. The ones who did not reply answered the same way, so the people in the number are a fair picture of the town.' },
    not: { outcome: 'counted', why: 'Four in ten households did not reply, which would be a problem if nothing were done. But the town phoned some of them, and they answered much the same way.' } }
]);
