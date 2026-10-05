// Scams, Unit Two: the faulty claims of the last stage. A claim is something a person might say. ask is the key's
// question, asked of what the claim itself describes. fault says what is wrong with the claim; corrected puts it right,
// and is always shown last. context gives the situation the claim is about, so that the question can be answered from it.
// The first claim is worked for the learner and is not asked. One of the four asked claims is about the real installation:
// treating every request to install as a scam is a mistake too.

FC.cases('scams', 'u2', [

  { id: 'dv-claim-demo', use: 'claim',
    context: 'A woman’s laptop will not connect. She types her broadband company’s name into a search page and rings the first number, which has “Ad” beside it. The man who answers asks her to let him see her laptop, and she does.',
    text: '"I found the number myself, with a search. Nobody rang me and nobody sent me anything, so it was my own call, and it was safe."',
    ask: { type: 'option', step: 'I1', answer: 'support' },
    fault: 'The claim treats a number she found in a search as one that was hers. She chose the words to search for, but the number at the top of the page was bought by someone, and a number that came from a search was not hers before she searched. It also hides the real point: a person offered to fix a problem with her laptop, and asked to see it.',
    corrected: 'I searched, and the number I rang was a paid result, so it was not {t:already}. Someone then offered to fix a problem with my laptop and asked to see it. That is {a:I1.support}. I should have put the phone down and phoned the number on my bill, which is {t:check}.' },

  { id: 'dv-claim-wontclose', use: 'claim',
    context: 'A page fills a man’s laptop with a loud alarm and a number to ring. It will not close when he presses the X. He rings the number.',
    text: '"The warning would not go away however many times I pressed the X, so it had to be coming from my own computer. That is why I rang the number."',
    ask: { type: 'option', step: 'I1', answer: 'support' },
    fault: 'The claim treats a warning that will not close as proof that it comes from the computer. A web page can fill the window, play a sound and ignore the X, because it was built to, and it knows nothing about the computer it is shown on. What it asked is also the point: it gave him a number to ring so that someone would fix the device.',
    corrected: 'The warning would not close, and that tells me nothing. What it did was give me a number to ring so that someone would fix my device, and that is {a:I1.support}. I can say so before I ring. To get rid of the page I close the browser through the computer’s own menu, and if I want to be sure I use {t:check}.' },

  { id: 'dv-claim-box', use: 'claim',
    context: 'A woman receives an email from an address she does not know, with an installer attached and a reason to run it. When she runs it, her computer shows the usual box that asks whether to allow changes.',
    text: '"The computer asked me whether to allow changes, so the program must have been checked. A harmful program would not be allowed to ask."',
    ask: { type: 'option', step: 'I1', answer: 'file' },
    fault: 'The claim treats the box as a sign that the program is safe. The box appears for every installation, real or harmful: it is the computer asking whether she agrees, and it says nothing about the program. What counts is how the program reached her, and it arrived in an email.',
    corrected: 'The box tells me nothing about the program. What tells me is that the installer came to me in an email, with a reason to run it and nobody on a call. That is {a:I1.file}, and the thing to do was not to run it.' },

  { id: 'dv-claim-everything', use: 'claim',
    context: 'A man’s phone offers an update for an app that he installed himself from the phone’s own app store, a year ago. He opens the app store, and the update is there. Nobody has contacted him about it.',
    text: '"Anything that asks me to install something is a scam. I was going to update the app from the app store this morning, and I refused. You never know."',
    ask: { type: 'option', step: 'I1', answer: 'own' },
    fault: 'The claim treats every request to install as a scam. The update was in the app store of his own phone, reached through a way he already had, and nobody had contacted him. That is the one name in this unit where nothing is wrong, and refusing it leaves him with old software that has had its faults found.',
    corrected: 'The update was in the app store on my phone, which I already had, and nobody had contacted me about it. That is {a:I1.own}, and there was nothing to stop. Not every request to install is a scam. What I look at is how it came to me.' },

  { id: 'dv-claim-refund', use: 'claim',
    context: 'A caller says that a man’s bank owes him £120 after a mistake, and asks him to press Share in the meeting app so that she can put it right. He presses Share. His banking page then shows £1,200 more than he had.',
    text: '"My banking page showed the money, so it was a real refund, and the extra must have been a real mistake. I sent the difference back."',
    ask: { type: 'option', step: 'I1', answer: 'refund' },
    fault: 'The claim trusts a balance that appeared on a device that someone else was watching and controlling. While she was sharing it, the page could show any number. The money he sent back was his own. And the answer that mattered was clear before any of this: a caller said that he was owed a refund, and asked to see his device.',
    corrected: 'A caller said that I was owed a refund and asked me to let her see my device. That is {a:I1.refund}, and that was the moment to stop and use {t:check}. The balance on a page that someone else is watching tells me nothing, and I should never send money back because of it.' }
]);
