export default `
# Offline Only 🌟

### _a weird project I made and what it taught me_

Chris Bolin, Formidable

@bolinchris

---

# What to Expect ✨

- Browsers' Offline API
- Service Workers
- Open sourcing your work
- Promoting a project
- Prepare for the best (Traffic)
- Brace for the worst (Trolls)
- Internationalization

---

# Offline Only 💻

[bolin.co/offline](https://chris.bolin.co/offline)

---

# Offline API 🔌

- \`navigator.onLine\`
- \`online\` and \`offline\` [events](https://developer.mozilla.org/en-US/docs/Online_and_offline_events)
- Broad support - 94% worldwide traffic, 98% US

(but there are always exceptions)

---

# Service Workers 🤖

- Workers are background scripts
- Allow applications to be available offline
- Acts as a proxy, controlling how requests are handled
- [\`create-react-app\`](https://github.com/facebookincubator/create-react-app) projects include a worker

---

# Open Source Your Work 📖

- Sign of good faith
- Provides an easy answer to point to
- Have reusable, general-interest code? Make a library
- I open-sourced both the website and a library
- Library simple at first, then ideally grow

---

# Simple React Library ⚛

- Published [react-detect-offline](https://github.com/chrisbolin/react-detect-offline)
- React libraries should ideally be *declarative*

![react-detect-offline](./react-detect-offline.png)

---

# Promoting a Project 📰

- Find a popular friend to post or retweet
- Tag the technologies you used
- Engage with others
- Understand the platform
- Add Opengraph html tags for social media previews

---

# Opengraph 🖼

![opengraph](./opengraph.png)

\`\`\`
<meta property="og:type" content="article" />

og:title "Offline Only"
og:description "Disconnection can be good."
og:url "https://chris.bolin.co/offline/"
og:image "https://chris.bolin.co/offline/preview.png"
\`\`\`


---

# Twitter 🐤

- Use TweetDeck
- Search for your URL
- Reach out if someone posts your project

---

# Prepare for the Best 📈

![ga](./ga.png)

- Are you ready if things go well?
- CDNs (domestic and international)
- Scaling servers and databases
- HTTPS

---

# Brace for the Worst 👹

![reddit](./reddit.png)

- Trolls are real
- Whatever you make, they'll try to berate or break it
- Try joking or ignoring. Don't be afraid to mute.
- *Usually supportive:* Twitter, Facebook, LinkedIn
- *Sometimes caustic:* r/programming, Hacker News

---

## If you build it
## they will break it 💔

![skycoins](./skycoins-before.png) ![skycoins](./skycoins-after.jpg)

---

# Internationalization 🌍

- People might volunteer to translate your work
- Translation is hard (and they aren't professionals)
- People are bad at proofreading (expect late revisions)
- A multi-language codebase is not trivial
- _But you can reach a whole new audience_

![translation](https://media.giphy.com/media/l1J9IyGIVkqCg0k80/giphy.gif)

---

# Editing Foreign Text 🌏

- Beware of autocorrect
- Editing right-to-left is very hard
- Google Translate is your friend

---

# Takeaways 🍱

- The web is an amazing playground for experimentation
- Use \`create-react-app\` (especially on small projects)
- Usually no one will care about your work
- But be prepared: use opengraph, HTTPS, and CDNs
- Trolls are real
- Internationalization is hard, but can open doors
- Have fun, darnit

---

# Get in Touch 👋

🐤 [@bolinchris](https://twitter.com/bolinchris)

📫 [chris.bolin@formidable.com](mailto:chris.bolin@formidable.com)

🖥 [formidable.com](https://formidable.com)

`;

/*
NOTES

Understand the platform (e.g. don't make too many comments on HN)

HTTPS is good for SEO, possibly social media

Translated into 9 languages


*/
