/* ===================== SUBJECT: PSYCHOLOGICAL PATTERNS ===================== */

const PSYCH_OUTCOMES = [
  {id:'dissonance', n:'Cognitive dissonance reduction', group:'reasoning'},
  {id:'confbias',   n:'Confirmation bias',               group:'reasoning'},
  {id:'motivated',  n:'Motivated reasoning',              group:'reasoning'},
  {id:'sunkcost',   n:'Sunk cost / escalation of commitment', group:'reasoning'},
  {id:'revision',   n:'Genuine belief revision (not a bias)', group:'reasoning'},
  {id:'gaslight',   n:'Gaslighting',                      group:'tactic'},
  {id:'darvo',      n:'DARVO',                            group:'tactic'},
  {id:'lovebomb',   n:'Love-bombing → devaluation',   group:'tactic'},
  {id:'projection', n:'Projection',                        group:'tactic'},
  {id:'notactic',   n:'Not a tactic',                      group:'tactic'},
  {id:'narc_grand', n:'Grandiose narcissistic pattern',   group:'pattern'},
  {id:'narc_vuln',  n:'Vulnerable narcissistic pattern',  group:'pattern'},
  {id:'bpd',        n:'Borderline pattern',                group:'pattern'},
  {id:'hpd',        n:'Histrionic pattern',                group:'pattern'},
  {id:'aspd',       n:'Antisocial pattern / psychopathy',  group:'pattern'},
  {id:'traits',     n:'Traits only — not a disorder',  group:'pattern'}
];

const PSYCH_GATE = { code:'D1', label:'What kind of thing is this?', options:[
  { id:'reasoning', n:'A mind justifying itself',  sub:'reasoning in the moment', keeps:['dissonance','confbias','motivated','sunkcost','revision'] },
  { id:'tactic',    n:'A move in an interaction',  sub:'a specific tactic',       keeps:['gaslight','darvo','lovebomb','projection','notactic'] },
  { id:'pattern',   n:'A stable way someone is',   sub:'an enduring pattern',     keeps:['narc_grand','narc_vuln','bpd','hpd','aspd','traits'] }
]};

const PSYCH_STEPS_BY_GATE = {
  reasoning: [
    { code:'R1', label:'Timing of the conclusion', options:[
        {id:'before',   n:'Conclusion fixed before the reasoning began',            keeps:['motivated']},
        {id:'after',    n:'Belief or action came first; discomfort followed',       keeps:['dissonance','confbias','sunkcost']},
        {id:'evidence', n:'Reasoning is honestly responding to new evidence',       keeps:['revision']}
    ]},
    { code:'R2', label:'What gives, to relieve it', options:[
        {id:'addstory', n:'A justification is added; belief and behavior stay the same', keeps:['dissonance']},
        {id:'scrutiny', n:'New evidence gets scrutinized harder than confirming evidence', keeps:['confbias']},
        {id:'backward', n:'Further commitment is justified by what’s already been spent', keeps:['sunkcost']},
        {id:'updates',  n:'The belief itself updates, without defensiveness',       keeps:['revision']},
        {id:'fixed',    n:'The conclusion was never really in doubt',               keeps:['motivated']}
    ]}
  ],
  tactic: [
    { code:'T1', label:'What the move is doing', options:[
        {id:'denyreality',      n:'Denying the other person’s memory or perception, repeatedly', keeps:['gaslight']},
        {id:'denyattackreverse',n:'Deny the act, attack the accuser, reverse victim and offender',    keeps:['darvo']},
        {id:'idealizewithdraw', n:'Fast idealization now, conditional withdrawal later',              keeps:['lovebomb']},
        {id:'ownfeeling',       n:'Placing an unacceptable feeling of their own onto the other person', keeps:['projection']},
        {id:'singlemoment',     n:'A single defensive reaction, no larger sequence',                  keeps:['notactic']}
    ]},
    { code:'T2', label:'How much evidence do you have', options:[
        {id:'pattern',     n:'Repeats, escalates, or has a clear before/after arc', keeps:['gaslight','darvo','lovebomb','projection']},
        {id:'oneinstance', n:'One instance only',                                   keeps:['notactic']}
    ]}
  ],
  pattern: [
    { code:'P1', label:'Core fear or need being protected', options:[
        {id:'shame_out',   n:'Shame or inadequacy, defended by outward grandiosity',            keeps:['narc_grand']},
        {id:'shame_in',    n:'Same shame, presenting as fragility or quiet resentment',         keeps:['narc_vuln']},
        {id:'abandonment', n:'Terror of abandonment',                                            keeps:['bpd']},
        {id:'attention',   n:'Need to be noticed — the center of attention',                keeps:['hpd']},
        {id:'norule',      n:'No particular fear — rules and others’ claims don’t weigh much', keeps:['aspd']},
        {id:'normal',      n:'None of these dominate — normal-range behavior under stress', keeps:['traits']}
    ]},
    { code:'P2', label:'Response when challenged or criticized', options:[
        {id:'rage',          n:'Rage or contempt toward the critic',                keeps:['narc_grand']},
        {id:'withdraw',      n:'Hurt withdrawal, covert resentment, self-pity',      keeps:['narc_vuln']},
        {id:'panic',         n:'Panic, frantic repair attempts, or sudden devaluation', keeps:['bpd']},
        {id:'dramatic',      n:'Escalated dramatics aimed at an audience',           keeps:['hpd']},
        {id:'flat',          n:'Flat, strategic, unbothered — no emotional escalation', keeps:['aspd']},
        {id:'proportionate', n:'A normal, proportionate reaction',                   keeps:['traits']}
    ]}
  ]
};

const U1_OPTS = ['A mind justifying itself','A move in an interaction','A stable way someone is','None of these — a proportionate reaction'];
const U1_DRILL = [
  {q:'"I know I said I’d never date someone who does that again, but he’s different" — said while listing three of the exact behaviors she swore off.',
   a:'A mind justifying itself', w:'Reasoning family. The contradiction is between her stated rule and her current choice — watch for this to resurface as dissonance reduction in Lesson 2.'},
  {q:'A coworker denies ever agreeing to the deadline, then says you’re the one who’s always disorganized — in the same conversation where the email trail says otherwise.',
   a:'A move in an interaction', w:'Tactics family: deny + attack. Watch for the reversal that would confirm DARVO in Lesson 5.'},
  {q:'Ten years, every job, every friendship: he is the misunderstood genius, and everyone else eventually turns out to be an idiot or an enemy.',
   a:'A stable way someone is', w:'Pattern family: consistent across a decade and multiple contexts.'},
  {q:'"I’ve put four years into this degree, I can’t switch majors now" — said about a major she dislikes every class of.',
   a:'A mind justifying itself', w:'Reasoning family, specifically sunk cost.'},
  {q:'She’s withdrawn and short-tempered this week. She just found out her father is sick.',
   a:'None of these — a proportionate reaction', w:'A proportionate reaction to a real external stressor. Not everything needs this course’s vocabulary — that’s the point of D2.'}
];

const U3_OPTS = ['Healthy confidence/self-esteem','Narcissistic traits (non-clinical)','Grandiose narcissistic pattern','Vulnerable narcissistic pattern','Insufficient evidence','Not narcissism at all'];
const U3_DRILL = [
  {q:'She’s proud of the promotion, thanks the people who helped her get it, and is visibly happy for a colleague who got promoted the same week.',
   a:'Healthy confidence/self-esteem', w:'Pride without diminishing others; genuine happiness at someone else’s success.'},
  {q:'He redirects every conversation back to his own achievements within about ninety seconds, regardless of topic, and has for as long as anyone’s known him.',
   a:'Narcissistic traits (non-clinical)', w:'Pervasive and cross-context (D2 satisfied), but the evidence covers only one criterion — admiration-seeking. Empathy, entitlement, and reaction-to-threat aren’t shown yet.'},
  {q:'Passed over for a role he wanted, he tells people privately that the company "isn’t ready for someone like him," and that the person who got it will fail within a year.',
   a:'Grandiose narcissistic pattern', w:'Narcissistic injury: preserving grandiosity by devaluing both the decision and the person who benefited.'},
  {q:'A new employee snaps at a reasonable correction in her first stressful week on the job, then apologizes the next day.',
   a:'Insufficient evidence', w:'First week, high stress, self-corrected with an apology — D2 fails on both counts: not pervasive, not unprovoked.'},
  {q:'He never raises his voice and never asks for anything — and has spent fifteen years quietly certain nobody has ever appreciated what he’s actually capable of, growing colder toward anyone who seems to be doing better than him.',
   a:'Vulnerable narcissistic pattern', w:'No overt grandiosity, but the same structure — unrecognized specialness — turned inward, over fifteen years.'},
  {q:'"That’s such a narcissistic thing to say" — about a friend who mentioned being proud of finishing a marathon.',
   a:'Not narcissism at all', w:'Pride in a personal accomplishment is not narcissism. The faulty-claim case.'}
];

const U4_OPTS = ['Narcissistic','Borderline','Histrionic','Antisocial/psychopathic','Not a disorder — a hard moment'];
const U4_DRILL = [
  {q:'Ghosted after two dates, someone spirals into "I always ruin everything, please just tell me what I did," texts eleven times in an hour, then sends one furious message calling the other person evil.',
   a:'Borderline', w:'Abandonment terror, rapid escalation, and the swing from self-blame to fury inside one episode is the classic shape.'},
  {q:'A salesman lies fluidly and without visible discomfort about a product’s safety record, has done so at every job he’s held, and shrugs when confronted: "that’s just business."',
   a:'Antisocial/psychopathic', w:'Fluent, comfortable deceit, repeated across jobs, zero discomfort, explicit instrumental justification.'},
  {q:'Interrupts every meeting to redirect focus to a personal story, dresses more dramatically than the context calls for, is delighted by any attention and wounded by none.',
   a:'Histrionic', w:'Attention-seeking, theatrical presentation, delight at any attention rather than admiration for superiority specifically.'},
  {q:'A partner is warm and attentive as long as they’re the one being praised, and goes cold and dismissive for days after their partner gets praised for something instead.',
   a:'Narcissistic', w:'Warmth is conditional on being the one admired; coldness is triggered by someone else’s success. The "mirror, not audience" tell.'},
  {q:'Someone snapped at a friend after a genuinely awful week at work, apologized the next morning — and it hasn’t happened before or since.',
   a:'Not a disorder — a hard moment', w:'A single instance, an identifiable stressor, an apology, no recurrence. D2 fails cleanly.'}
];

const U5_OPTS = ['Gaslighting','DARVO','Love-bombing / devaluation','Projection','Not a tactic'];
const U5_DRILL = [
  {q:'Confronted with a text message proving he said it, he says "you’re twisting my words like you always do" — and by the end of the call, she’s the one apologizing.',
   a:'DARVO', w:'Deny ("twisting my words"), attack (implies she always does this), reverse (she ends up apologizing) — all three, in sequence.'},
  {q:'Three days into dating, he’s talking about their future together and says she’s "not like anyone else" he’s met. Two months later, once she’s turned down plans with friends for him twice, the compliments have turned into comments about how she "used to be more fun."',
   a:'Love-bombing / devaluation', w:'Speed and intensity of idealization relative to actual knowledge, followed by conditional withdrawal once dependency was established.'},
  {q:'A roommate forgets to pay their share of rent twice, gets called out, and says "I don’t know why you’re being so aggressive about this."',
   a:'Not a tactic', w:'A single instance of a reasonable person being annoyed at being reasonably confronted; no denial of the fact, no reversal, no repeated pattern.'},
  {q:'For the third year running, whenever an old disagreement gets brought up, he insists it never happened at all — not "I don’t remember it that way," but that it definitely never occurred — until she now checks her phone to confirm her own memories before raising anything.',
   a:'Gaslighting', w:'Repeated, escalated to flat factual denial rather than a memory disagreement, with the definitional functional effect: she no longer trusts her own memory.'},
  {q:'Someone who is chronically jealous accuses their partner, unprompted and without evidence, of flirting with a coworker.',
   a:'Projection', w:'The accusation, made without evidence by the jealous party, reads more as their own feeling than as a report about the partner.'},
  {q:'Caught lying about an expense, someone immediately brings up an unrelated mistake their accuser made months ago, and the conversation ends up being about that instead.',
   a:'DARVO', w:'Deny is implicit (changing the subject rather than addressing it) and attack is present. A DARVO-adjacent move — the honest call is "attack and deflect," missing an explicit reversal.'},
  {q:'A friend cancels plans once, apologizes, and reschedules.',
   a:'Not a tactic', w:'A single cancellation with an apology and a reschedule is just normal life.'}
];

const PSYCH_ERR = [
  {q:'"He disagreed with my version of events, that’s such gaslighting."',
   w:'Disagreement about a single fact is not gaslighting; gaslighting requires a pattern that functions to make someone doubt their own judgment generally, not one contested memory.'},
  {q:'"She’s a total narcissist, she posted a selfie."',
   w:'Category error — posting a selfie is not diagnostic of anything. No pervasiveness, no lack-of-empathy evidence, nothing beyond a normal act read as pathology.'},
  {q:'"That’s literally DARVO" — about someone who calmly explained their side after being wrongly accused.',
   w:'DARVO specifically requires denying the act and reversing victim and offender. Calmly explaining your side after being wrongly accused is just defending yourself accurately.'},
  {q:'"Everyone has narcissistic traits, so the word doesn’t mean anything."',
   w:'True that many people show narcissistic traits sometimes — that’s exactly why the word needs the pervasive/impairing distinction, not a reason to discard it.'},
  {q:'"My coworker is a sociopath" — based on one blunt email.',
   w:'One blunt email is a single data point. "Sociopath" isn’t even a clinical term, and its real-world analogue needs a pervasive disregard for others’ rights, not one terse message.'},
  {q:'"He love-bombed me" — about a partner who was consistently affectionate for two years before a difficult breakup.',
   w:'Sustained, consistent affection for two years is not love-bombing — love-bombing is disproportionate to actual relationship depth. Two years of consistency is evidence of genuine investment.'}
];

const PSYCH_SPECIMENS = [
  {q:'"I know I promised myself I’d leave if it happened again, but this time really is different — he explained why it wasn’t his fault."',
   sub:{D1:['reasoning'],R1:['after'],R2:['addstory']}, outcome:'dissonance',
   why:'D1: a mind justifying itself. D3: the contradiction between her prior resolution and her current inaction is resolved by exempting this instance, not by changing behavior.',
   fals:'If "this time is different" is true by some independent, checkable criterion — not just his explanation — this stops being dissonance reduction and becomes an accurate update.'},
  {q:'He’d already decided to invest before he asked anyone’s opinion. Every "due diligence" conversation after that was really just him listening for agreement, and getting irritated at anyone who raised a concern.',
   sub:{D1:['reasoning'],R1:['before'],R2:['fixed']}, outcome:'motivated',
   why:'The decision-before-reasoning timing is explicit in the text itself — unusually clean.',
   fals:'If he’d genuinely have walked away given strong enough disconfirming evidence, and can name what that evidence would have been, this is closer to ordinary — if biased — diligence.'},
  {q:'The report cites six analysts who back her thesis and dismisses the two who don’t as "not understanding the sector" — a phrase she doesn’t apply to any of the six, several of whom have less sector experience than the two she dismissed.',
   sub:{D1:['reasoning'],R1:['after'],R2:['scrutiny']}, outcome:'confbias',
   why:'Unequal scrutiny, applied by a stated criterion that, checked, doesn’t actually track who got dismissed.',
   fals:'If the two dismissed analysts had some other real, specific, checkable methodological flaw, the dismissal could be earned rather than biased.'},
  {q:'Three years into a PhD she no longer wants, she tells her advisor she’ll finish anyway: "I can’t have wasted three years for nothing."',
   sub:{D1:['reasoning'],R1:['after'],R2:['backward']}, outcome:'sunkcost',
   why:'The stated reason points backward at time already spent, not forward at whether two more years is worth it.',
   fals:'If finishing genuinely unlocks something forward-looking she independently wants — not just avoiding the feeling of waste — continuing could be a reasoned choice.'},
  {q:'For years he assumed the new manufacturing process was more expensive. When the plant finally ran the actual numbers, it was cheaper — he was the first to say so in the meeting, and asked for the analysis to be circulated.',
   sub:{D1:['reasoning'],R1:['evidence'],R2:['updates']}, outcome:'revision',
   why:'Evidence arrived, belief updated, no defensive move, no resistance.',
   fals:'If he’d been quietly blocking that analysis from being run for years beforehand, this would look more like reluctant capitulation than genuine openness.'},
  {q:'Every time she brings up something he said, he tells her it never happened — not "I don’t remember it that way," but that she’s making it up. It’s happened often enough that she now records important conversations, just for herself.',
   sub:{D1:['tactic'],T1:['denyreality'],T2:['pattern']}, outcome:'gaslight',
   why:'Repeated, escalated to flat factual denial rather than a memory disagreement, and the functional effect — she no longer trusts her memory enough to skip recording — is the definitional tell.',
   fals:'A documented memory condition, or this having happened exactly once, would substantially weaken the "pattern" claim.'},
  {q:'Caught having lied on his expense report, he told HR the real problem was that his manager had been targeting him for months — and somehow the meeting ended with HR asking the manager to explain themselves.',
   sub:{D1:['tactic'],T1:['denyattackreverse'],T2:['pattern']}, outcome:'darvo',
   why:'Deny is implicit in the reframe, attack is present (accusing the manager of targeting him), and the reversal — HR investigating the manager — completes the sequence.',
   fals:'If the manager actually had a documented history of unfair treatment before this incident, the "attack" would be a legitimate grievance rather than a reversal tactic.'},
  {q:'The first month, he called her his soulmate, learned her whole family’s names, and said no one had ever understood him the way she did. By the third month, once she’d stopped seeing her college friends most weekends to be with him, the compliments had turned into comments about how she "used to be more fun."',
   sub:{D1:['tactic'],T1:['idealizewithdraw'],T2:['pattern']}, outcome:'lovebomb',
   why:'Speed and intensity of idealization relative to actual time known, followed by conditional withdrawal once dependency — reduced outside friendships — was in place.',
   fals:'If the reduced friend time was mutual and voluntary, and the "used to be more fun" comment was an isolated remark rather than the start of a pattern, this reads as an ordinary rocky patch instead.'},
  {q:'He’s never once, in twenty years, said "I was wrong." When a project he championed fails, it’s always because the team executed poorly. When it succeeds, he tells the story of his original vision to anyone who’ll listen, unprompted.',
   sub:{D1:['pattern'],P1:['shame_out'],P2:['rage']}, outcome:'narc_grand',
   why:'Pervasive (twenty years), cross-context, entitlement to credit without accountability for failure, admiration-seeking.',
   fals:'Real, private accountability that simply never surfaces publicly would point toward image management rather than a genuine empathy/entitlement deficit.'},
  {q:'She never asks for anything and never complains out loud. But she’s kept a mental ledger for a decade of every time she trained someone who then got promoted over her, and she’s quietly stopped speaking to three of them, one by one, without ever telling them why.',
   sub:{D1:['pattern'],P1:['shame_in'],P2:['withdraw']}, outcome:'narc_vuln',
   why:'No overt grandiosity or demand, but a decade-long, cross-relationship pattern organized around unrecognized specialness, expressed as silent withdrawal.',
   fals:'If she has, in fact, raised these concerns directly and been repeatedly and genuinely dismissed by a dysfunctional workplace, this could be a proportionate response to real unfairness instead.'},
  {q:'Any time he seems even slightly less available, she calls him nonstop until he answers, alternates between "I’m sorry, I’m the worst" and "you clearly don’t care about me" within the same conversation, and has done this with every partner she’s had since her teens.',
   sub:{D1:['pattern'],P1:['abandonment'],P2:['panic']}, outcome:'bpd',
   why:'Abandonment-driven, splitting — "worst" and "don’t care about me" in the same breath — pervasive across relationships and time.',
   fals:'If this intensity were new and followed one specific, recent, identifiable trauma rather than "every partner since her teens," it might be a situational reaction instead of a stable pattern.'},
  {q:'He’s warm, funny, and the first to offer help — right up until a favor isn’t returned fast enough, at which point he’ll casually mention, to mutual friends, something private and embarrassing you told him in confidence months earlier. He doesn’t seem angry when he does it. He seems entertained.',
   sub:{D1:['pattern'],P1:['norule'],P2:['flat']}, outcome:'aspd',
   why:'Instrumental warmth, a breach of confidence used as casual leverage, and — the key tell — no emotional charge behind the betrayal, which argues against an ordinary grudge or a narcissistic-injury reaction.',
   fals:'Real, consistent remorse afterward, and a one-time lapse rather than a repeated move, would drop this out of "pattern" territory.'},
  {q:'She cried at her coworker’s small mistake in a meeting once. Someone on the team called her "obviously borderline" in the group chat afterward.',
   sub:{D1:['pattern'],P1:['normal'],P2:['proportionate']}, outcome:'traits',
   why:'One emotional reaction in one meeting establishes nothing — not pervasiveness, not the defining feature of borderline (abandonment-driven instability across relationships), nothing. The correct move is to refuse the label.',
   fals:'None needed — the point of this item is that no classification should have been made in the first place.'},
  {q:'He explains, calmly and specifically, why the criticism of his proposal is factually wrong, citing the actual numbers. Two people on the thread reply that he’s "being defensive" and "can’t take feedback."',
   sub:{D1:['pattern'],P1:['normal'],P2:['proportionate']}, outcome:'traits',
   why:'Calm, specific, evidence-based disagreement is being mislabeled as a "defensiveness pattern" by people who dislike being contradicted. This is the horseshoe error: mistaking the discomfort of being disagreed with for evidence of a disorder in the other person.',
   fals:'None needed — again, the lesson is to withhold the label, not find one.'}
];

const PSYCH_COURSE = [
{ id:'u1', tag:'One', title:'The diagnostic mindset',
  cards:[
  {h:'Classify by pattern, never by a single moment',
   b:`<p class="lead">Most misreads in this territory happen because someone skips straight to a label. A tense exchange becomes "he's gaslighting me." One boastful moment becomes "total narcissist."</p>
      <p>What actually discriminates isn't how uncomfortable the moment felt. It's a small set of questions about kind, pervasiveness, and function. This course teaches five of them, then drills them.</p>
      <div class="note">Throughout, a right label reached by the wrong route counts as a miss. If you can't say <i>which question</i> decided it, you've recognised a vibe, not identified a pattern.</div>`},
  {h:'The five diagnostic questions',
   b:`<table class="k">
      <tr><th>D1</th><td><b>What kind of thing is this?</b><br>a moment of reasoning / a move in an interaction / a stable way someone is<span class="tell">The fastest discriminator — decides which key you even need.</span></td></tr>
      <tr><th>D2</th><td><b>Pervasive and stable, or situational and reactive?</b><span class="tell">Separates a trait or disorder from an ordinary bad day.</span></td></tr>
      <tr><th>D3</th><td><b>What need, fear, or contradiction does it resolve?</b><br>reveals the function, not just the behaviour</td></tr>
      <tr><th>D4</th><td><b>What's the nearest look-alike — and what separates them?</b></td></tr>
      <tr><th>D5</th><td><b>What would falsify this read?</b><br>keeps the label falsifiable instead of sticky</td></tr>
      </table>
      <p>D1 and D2 do most of the work. The other three usually confirm rather than decide.</p>`},
  {h:'D1 routes you to a key',
   b:`<p>Answer D1 and you've already picked which part of this course applies:</p>
      <ul>
        <li><b>A mind justifying itself</b> → the reasoning / self-justification family (Lesson 2)</li>
        <li><b>A move in an interaction</b> → the tactics family (Lesson 5)</li>
        <li><b>A stable way someone consistently is</b> → the personality-pattern family (Lessons 3–4)</li>
      </ul>
      <p>These are genuinely different kinds of things. A single confusing moment with someone is not evidence of a personality disorder, and a personality disorder is not just "someone who did a manipulative thing once." Conflating the three is the single most common error in casual psychological talk.</p>`},
  {h:'The trap: pathologizing a moment',
   b:`<p>Everyone rationalizes sometimes. Everyone gets defensive sometimes. Everyone wants to be noticed sometimes.</p>
      <div class="warn"><strong>D2 exists specifically to stop you from taking one data point and naming a disorder.</strong> A pattern needs to be pervasive — across time, across relationships, across contexts — before "disorder" language is earned. One bad night is a moment. The same shape for five years, in every relationship, is a pattern.</div>
      <p>Run D2 before you reach for any label in Lessons 3–5.</p>`}
  ],
  drill:{kind:'pick', key:'u1'} },

{ id:'u3', tag:'Three', title:'The narcissism spectrum',
  cards:[
  {h:'Not one dial',
   b:`<p class="lead">Confidence, self-esteem, and narcissism get used interchangeably. They are three different things.</p>
      <ul>
        <li><b>Confidence</b> — situational belief in your ability to do a specific thing.</li>
        <li><b>Self-esteem</b> — a general, stable sense of your own worth. Compatible with genuine warmth and real empathy.</li>
        <li><b>Narcissism</b> — a self-concept organised around being exceptional, requiring external admiration, structurally low in empathy for anyone whose function isn't to supply that admiration.</li>
      </ul>
      <div class="note">The discriminator is not confidence level. It's what happens to the person's regard for <i>other people</i> once the confidence gets tested.</div>`},
  {h:'Grandiose narcissism',
   b:`<p>The stereotype, and the easier one to spot: overt, entitled, dominance-seeking, requires admiration, name-drops achievements unprompted, reacts to criticism with contempt or rage (<b>narcissistic injury</b>), treats relationships instrumentally.</p>
      <span class="tell">Tell: the mask cracks outward, as aggression toward whoever threatened it.</span>`},
  {h:'Vulnerable narcissism',
   b:`<p>The one people miss constantly, because it doesn't look like the stereotype at all: covert, hypersensitive to any perceived slight, chronically feels under-appreciated and wronged, avoids risk rather than seeking dominance — but still fundamentally organised around the self, still low in empathy for others' independent reality.</p>
      <span class="tell">Tell: the mask cracks inward, as withdrawal, self-pity, and quiet resentment — the same structure as the grandiose form, turned in on itself.</span>`},
  {h:'The actual clinical criteria, stated plainly',
   b:`<p>A pervasive pattern, present by early adulthood and across contexts, of: grandiosity, need for excessive admiration, and lack of empathy — typically alongside several of: entitlement, exploitation, envy, arrogance, fantasies of unlimited success, belief in being special.</p>
      <div class="warn"><strong>The two words that matter most: pervasive and impairing.</strong> Most people show two or three of these sometimes. That is not the disorder. The disorder requires the pattern to be the person's stable operating mode, not their behaviour under stress, threat, or grief.</div>`}
  ],
  drill:{kind:'pick', key:'u3'} },

{ id:'u4', tag:'Four', title:'Look-alikes and false friends',
  cards:[
  {h:'Narcissistic vs. borderline pattern',
   b:`<table class="k">
      <tr><th></th><th>Narcissistic</th><th>Borderline</th></tr>
      <tr><td>Core fear</td><td>Being ordinary / unadmired</td><td>Being abandoned</td></tr>
      <tr><td>Self-image</td><td>Fixed grandiosity (or its vulnerable mirror)</td><td>Unstable — swings, often within one relationship</td></tr>
      <tr><td>View of others</td><td>Instrumental — a supply of admiration</td><td>Idealized, then devalued, then sometimes re-idealized</td></tr>
      <tr><td>Reaction to conflict</td><td>Contempt, dismissal, cutting off</td><td>Panic, frantic repair, or sudden devaluation</td></tr>
      </table>
      <span class="tell">Tell: "don't leave me" pulls toward borderline. "How dare you not admire me" pulls toward narcissistic.</span>`},
  {h:'Narcissistic vs. histrionic pattern',
   b:`<p>Histrionic is about being <i>noticed</i>, not necessarily admired for superiority. More emotionally expressive and theatrical in the moment; less overt entitlement; often genuinely warm and suggestible, where narcissism resists influence that doesn't flatter it.</p>
      <span class="tell">Tell: histrionic wants an audience. Narcissistic wants a mirror. Watch what happens when attention shifts to someone else — histrionic escalates for attention; narcissistic devalues whoever now has it.</span>`},
  {h:'Narcissistic vs. antisocial pattern / psychopathy',
   b:`<p>Antisocial centers on disregard for rules and others' rights — impulsivity, routine deceit, no remorse for concrete harm. It doesn't require grandiosity at all. Psychopathy adds a more totalizing absence of empathy — not the <i>selective</i> withholding narcissism shows, but a flatter, more instrumental view of people generally.</p>
      <span class="tell">Tell: a narcissist wants you to see them as superior. An antisocial/psychopathic pattern usually doesn't care what you think — only what you can be used for.</span>`},
  {h:'Unpleasantness is not a diagnosis',
   b:`<div class="warn"><strong>A genuinely selfish, unkind, or difficult person is not automatically narcissistic</strong> — and someone shy, avoidant, or prone to occasional self-pity is not automatically anything either. Diagnose the <i>structure</i> (self-other model, what's feared, what happens under threat) — never the severity of how much you dislike them.</div>
      <p>This is the psychological equivalent of the political-ideology horseshoe error: judging by how uncomfortable the behaviour makes you, instead of by its actual content.</p>`},
  {h:'Words that are not diagnoses',
   b:`<p>"Toxic," "narc," "sociopath" (not a clinical term), "gaslighting" applied to any disagreement, "main character energy." These are increasingly used as pure insults.</p>
      <div class="note">Analytic use and insult use are different activities — the same warning the ideology course gives about "fascist" and "socialist."</div>`}
  ],
  drill:{kind:'pick', key:'u4'} },

{ id:'u5', tag:'Five', title:'Manipulation tactics & defense mechanisms',
  cards:[
  {h:'Defense mechanisms, briefly',
   b:`<p>Everyone uses defense mechanisms; the question is which ones, how rigidly, and how much reality-distortion they require.</p>
      <ul>
        <li><b>Denial</b> — refusing to register a fact at all.</li>
        <li><b>Projection</b> — attributing your own unacceptable feeling to someone else.</li>
        <li><b>Rationalization</b> — a plausible but false reason, built after the fact (dissonance reduction's usual delivery mechanism).</li>
        <li><b>Displacement</b> — redirecting an emotion toward a safer target.</li>
        <li><b>Intellectualization</b> — draining the emotion out of something by discussing it purely abstractly.</li>
      </ul>
      <p>None of these, alone, is pathological. Everyone does all five sometimes. The question is always D2: occasional, or the person's only mode?</p>`},
  {h:'Gaslighting',
   b:`<p>Specifically: a <i>pattern</i>, over time, of denying another person's memory, perception, or feelings in order to make them distrust their own judgment — not a single instance of being wrong, and not ordinary disagreement.</p>
      <span class="tell">Tell: repetition + escalation + the functional effect that the other person starts pre-emptively doubting themselves. A single "that's not what happened" is not gaslighting. Years of it, until you stop trusting your own memory, is.</span>`},
  {h:'DARVO',
   b:`<p><b>D</b>eny, <b>A</b>ttack, <b>R</b>everse <b>V</b>ictim and <b>O</b>ffender — deny the act happened, attack the accuser's credibility, reframe the accuser as the real aggressor. Named and studied by psychologist Jennifer Freyd.</p>
      <span class="tell">Tell: it's the sequence, not just defensiveness. All three parts, in that order, in one exchange, is the signature.</span>`},
  {h:'Love-bombing → devaluation',
   b:`<p>Rapid, intense idealization and attention early on — disproportionate to how long or how well the person is actually known — that creates dependency, followed by withdrawal or criticism once the attachment is secured.</p>
      <span class="tell">Tell: speed and intensity relative to actual depth of knowledge, and its conditionality. Genuine early enthusiasm is common and not a red flag by itself; the tell is that it functions as an investment called in later.</span>`},
  {h:'The trap: everything becomes manipulation',
   b:`<p>Most defensiveness in an argument is not a tactic. Most disagreement is not gaslighting. Most early-relationship excitement is not love-bombing.</p>
      <div class="warn"><strong>The discriminator is pattern + function, not a single uncomfortable moment.</strong> Calling every instance of someone being wrong about a shared memory "gaslighting" empties the word of the thing it was built to name.</div>`}
  ],
  drill:{kind:'pick', key:'u5'} },

{ id:'u6', tag:'Six', title:'Mixed identification drill',
  cards:[
  {h:'Running the whole key',
   b:`<p class="lead">Everything so far has drilled one family at a time. Now you run the full sequence on unlabelled scenarios.</p>
      <p>For each specimen: answer D1 (the domain), then the two questions specific to that domain, then name it. A readout between the scenario and the questions crosses off outcomes your answers have eliminated.</p>
      <h3>How this is scored</h3>
      <p>Your <b>name</b> and your <b>route</b> are counted separately. Getting the right pattern from the wrong domain or wrong sub-answers is flagged and counts as a miss, because a label you cannot derive from the questions will not survive an unfamiliar situation.</p>
      <div class="note">Two of the fourteen are traps for over-diagnosis: the honest answer is that there isn't enough here to name a pattern at all. Withholding is a skill, not a failure — probably the more important skill in this entire course.</div>`}
  ],
  drill:{kind:'det'} }
];

const PSYCHOLOGY = {
  id:'psychology',
  topics:'Self-justification · Narcissism spectrum · Manipulation tactics',
  intro:'Run each scenario through the diagnostic questions before naming it. A correct label reached by the wrong route is scored as a miss.',
  outcomes: PSYCH_OUTCOMES,
  determination: { gateCode:'D1', steps:[PSYCH_GATE], stepsByGate:PSYCH_STEPS_BY_GATE },
  determinationIntro:`<p>You are running each scenario through the diagnostic key. Answer the domain first, then the two questions specific to it, and only then name it.</p>
      <ol>
        <li>Read the scenario.</li>
        <li><b>Step 1</b> — is this a moment of reasoning, a move in an interaction, or a stable pattern? The later steps unlock in order, and change depending on this answer.</li>
        <li><b>Steps 2–3</b> — the two questions specific to that domain.</li>
        <li><b>Step 4</b> — now name it, and record your determination.</li>
      </ol>
      <p>The strip between the scenario and step 1 is a readout, not a control. It crosses off outcomes your answers have ruled out. Nothing there is tappable.</p>
      <p>Your name and your route are scored separately. Right name from the wrong steps counts as a miss.</p>`,
  specimens: PSYCH_SPECIMENS,
  quickDrills: [
    {key:'u1', title:'Pattern or moment', prompt:'What kind of thing is this (D1)?', items:U1_DRILL, opts:U1_OPTS},
    {key:'u3', title:'Where on the spectrum', prompt:'Where does this fall?', items:U3_DRILL, opts:U3_OPTS},
    {key:'u4', title:'Which pattern', prompt:'Which pattern, if any, fits best?', items:U4_DRILL, opts:U4_OPTS},
    {key:'u5', title:'Name the tactic', prompt:'Name the tactic, or say it’s not one', items:U5_DRILL, opts:U5_OPTS}
  ],
  errDrill: PSYCH_ERR,
  course: PSYCH_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'u1', label:'Pattern or moment'}, {key:'u3', label:'Spectrum'},
    {key:'u4', label:'Which pattern'}, {key:'u5', label:'Name the tactic'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>This is not a diagnostic tool, and it does not make you one.</b> Real diagnosis needs a licensed clinician, a structured interview, and ruling out other explanations — medical conditions, substance use, an acute stressor, trauma responses that mimic personality pathology.</li>
    <li><b>Pervasiveness, early onset, and impairment are required</b> for any disorder label. A handful of matching traits is not a disorder — treat the marker lists as family resemblances, not a checklist.</li>
    <li><b>The categories are contested even among clinicians.</b> The DSM-5's own alternative model treats personality pathology as dimensional, not categorical. Comorbidity is common, and trained clinicians disagree on borderline cases.</li>
    <li><b>These words are also weapons.</b> "Narcissist," "gaslighting," "toxic," "sociopath" are used constantly online to condemn rather than describe.</li>
    <li><b>Diagnosing at a distance is unreliable.</b> Public figures, exes, coworkers you've never had a clinical conversation with — confidence should scale down with distance, not up.</li>
    <li><b>Watch your own motivated reasoning while using this key</b> — especially about people you already have strong feelings about.</li>
    <li><b>Cultural and contextual variation is real.</b> Don't let this key turn cultural difference into pathology.</li>
    <li><b>None of this replaces professional help</b> — for yourself, or for a relationship that matches the manipulation-tactics section.</li>
  </ul>`
};

FC.legacy('psychology', PSYCHOLOGY);
