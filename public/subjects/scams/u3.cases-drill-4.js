// Scams, Unit Three: the reverse items of stage two (one for each name) and the faulty claims of the last stage.
// A reverse item gives the name and asks what you would expect: every choice is what one of the four names sounds like or looks
// like (voice), so no choice is a false statement. The app words the question from `expect`.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways. ask.type 'missing':
// "what would you need to see before this name could be used?" (the choices are the key's "what you must be able to point to"
// lines). ask.type 'option': the key's question is asked of the claim itself. The fault is shown after the learner commits, and
// the claim put right is always the last thing shown. The first claim is worked for the learner, and is not asked.

FC.cases('scams', 'u3', [

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'rev-realsignin', use: 'drill', kind: 'reverse', outcome: 'realsignin', expect: 'find',
    options: [
      { text: 'He had typed the company\'s address himself, and the page asked for a password and nothing more.', voice: 'realsignin' },
      { text: 'A caller who had phoned her asked her to read out the six digits that had just come to her phone.', voice: 'codescam' },
      { text: 'A text with a link opened a page that asked for her password.', voice: 'phishing' },
      { text: 'A permission screen from an app she had never heard of asked to read, send and delete all her email.', voice: 'appscam' }
    ],
    why: 'A real one began with the person: they opened the app or typed the address, and what it asked was no more than the task needed. In each of the other three, the request came to the person, or asked for far more than the task needed.' },

  { id: 'rev-phishing', use: 'drill', kind: 'reverse', outcome: 'phishing', expect: 'hear',
    options: [
      { text: '"Enter the code we have just sent you."', voice: 'realsignin' },
      { text: '"Your account has been locked. Sign in here to unlock it."', voice: 'phishing' },
      { text: '"I have just sent a code to your phone. Please read it out to me."', voice: 'codescam' },
      { text: '"Press Allow so that the document can open."', voice: 'appscam' }
    ],
    why: 'It is an invitation, from a message that the person did not ask for, to sign in on a page that wants a password. "Enter the code we have just sent you" is what a page you opened yourself says, and the other two ask for a code to be read out, or for an Allow.' },

  { id: 'rev-codescam', use: 'drill', kind: 'reverse', outcome: 'codescam', expect: 'hear',
    options: [
      { text: '"Your mailbox is almost full. Sign in to upgrade."', voice: 'phishing' },
      { text: '"Connect your email to see who has viewed your profile."', voice: 'appscam' },
      { text: '"Choose a new password."', voice: 'realsignin' },
      { text: '"A code went to your number by mistake. Can you send it to me?"', voice: 'codescam' }
    ],
    why: 'A person who reached you first wants a code passed on. No page is copied and no {t:permission} is pressed: the code is the whole request.' },

  { id: 'rev-appscam', use: 'drill', kind: 'reverse', outcome: 'appscam', expect: 'find',
    options: [
      { text: 'A copied page with her bank\'s logo asked for her password.', voice: 'phishing' },
      { text: 'A man rang and asked her to read out the digits of a code.', voice: 'codescam' },
      { text: 'The permission screen listed what the app may do: read, send and delete all her email, for a job that needed a photo.', voice: 'appscam' },
      { text: 'The page asked for a username and password, and she had typed its address from her bill.', voice: 'realsignin' }
    ],
    why: 'That detail is the list in the {t:permission}: an app asked to be allowed to do far more than its job needs. The other three are a copied page, a caller and a sign-in that she started.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'cl-demo', use: 'claim',
    text: '"A text with a six-digit code just came to my phone. That is a one-time code scam."',
    ask: { type: 'missing', name: 'codescam' },
    fault: 'The claim points at a code arriving and stops there. A code arrives every time you sign in or pay online, and many of them are ones you asked for. A code on its own is not {o:codescam}. The name goes with a code and someone who contacted you asking you to read it out or send it on, and nothing in the claim shows anyone asking.',
    corrected: 'A text with a six-digit code just came to my phone. If I have just started a sign-in, it is the code for that, and the case is {o:realsignin}. If I have not, it is a warning that someone is trying to get into my account, and I should change the password. It is {o:codescam} only if someone who contacted me asks me to read it out or send it on.' },

  { id: 'cl-padlock', use: 'claim',
    text: '"It can\'t be phishing. The address has a padlock next to it."',
    ask: { type: 'missing', name: 'phishing' },
    fault: 'The padlock only means that what passes between the browser and the page is scrambled. It says nothing about who runs the page, and copies of sign-in pages get padlocks too. What {o:phishing} needs is a message that came to you, a link, and a page that asks for a password, and a padlock touches none of those.',
    corrected: 'The address has a padlock next to it. That tells me that the connection is scrambled, and nothing about who runs the page. Whether it is {o:phishing} depends on whether a message that I did not ask for brought me here, and whether the page asks for a password.' },

  { id: 'cl-thread', use: 'claim',
    text: '"The text asking for my code came in the same conversation as my bank\'s real texts, so it was real."',
    context: 'Someone said this after reading a code out to a caller who had phoned her.',
    ask: { type: 'option', step: 'A2', answer: 'notfit' },
    fault: 'Where a message sits shows only what the sender chose to show. A text can be sent so that it appears under the bank\'s name and goes into the same conversation as the real ones. What the question looks at is whether she started it, and she did not: a caller rang her, and the code was asked for by him.',
    corrected: 'The text asking for my code sat in the same conversation as my bank\'s real texts. That tells me nothing, because a text can be sent to appear there. A caller rang me and I started nothing, so the answer is {a:A2.notfit}, and I should not read the code out.' },

  { id: 'cl-allow', use: 'claim',
    text: '"It was a real permission screen from my email provider, so it can\'t be an app permission scam."',
    ask: { type: 'missing', name: 'appscam' },
    fault: 'The {t:permission} is real in every one of these scams: it comes from the provider, with the provider\'s name, and that is why the scam works. {o:appscam} goes with an app that came to you, or one that asks for far more than the job needs. The claim never says how she came to the app, or what the {t:permission} asked for.',
    corrected: 'It was a real {t:permission} from my email provider. That is true of the scam as well. To know which it was, I need to know whether I went looking for the app myself, and whether the list asked only for what the job needs.' },

  { id: 'cl-reset', use: 'claim',
    text: '"Any email with a link that asks me to choose a new password is phishing. I never touch them."',
    context: 'Joss said this an hour after he had tapped Forgot password on a shop\'s own website, which he had opened himself.',
    ask: { type: 'option', step: 'A2', answer: 'fits' },
    fault: 'The claim looks at the link in the email and stops there. A link in an email cannot be what decides it: a real reset arrives after you ask for it, and a copy arrives on its own. Joss had tapped "Forgot password" himself an hour earlier, so the email answered something he did, and the answer is {a:A2.fits}.',
    corrected: 'An email with a link that asks me to choose a new password is one to be careful with. If I tapped Forgot password on the real site a minute ago, the email is the answer to that and it is real. If I did not, I should not use the link.' }
]);
