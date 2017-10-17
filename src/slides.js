export default `
# ✨Offline Only✨

### _a weird project I made and what it taught me_

Chris Bolin, [Formidable](https://formidable.com)

[@bolinchris](https://twitter.com/bolinchris)

React Denver, October 2017

---

# What to Expect ✅

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
- Provides a convenient answer to point to
- Reusable, general-interest code? Make a library
- I open-sourced both the website and a library
- Library is simple at first; will ideally grow

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
- Understand the specific platforms
- Press will usually reach largest audience
- Add Open Graph tags for social media previews

---

# Open Graph 🖼

[Meta tags](http://ogp.me/) that provide previews for Twitter, FB, Slack...

\`\`\`
<meta property="og:title" content="Offline Only" />
og:description "Disconnection can be good."
og:url "https://chris.bolin.co/offline/"
og:image "https://chris.bolin.co/offline/preview.png"
\`\`\`

![opengraph](./opengraph.png)

---

# Twitter 🐤

- Use [TweetDeck](https://tweetdeck.twitter.com)
- Search for your URL
- Reach out if someone posts your project

---

# Prepare for the Best 📈

![ga](./ga.png)

- Are you ready if things go well?
- CDNs - domestic & international. (I use [Cloudflare](https://www.cloudflare.com))
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
- Translation is hard, and they aren't professionals
- People are bad at proofreading - expect late revisions
- A multi-language codebase is not trivial
- _But you can reach a whole new audience_

![translation](./translation.gif)

---

# Editing Foreign Text 📝

- Beware of autocorrect
- Editing right-to-left text is very hard
- Google Translate is your friend

---

# Takeaways 🍱

- The web is an amazing place for experimentation
- Use \`create-react-app\` (especially on small projects)
- Usually no one will care about your work
- But be prepared: use Open Graph, HTTPS, and CDNs
- Trolls are real
- Internationalization is hard, but can open doors
- **Have fun, darnit**

---

# Get in Touch 👋

🐤 [@bolinchris](https://twitter.com/bolinchris)

📫 [chris.bolin@formidable.com](mailto:chris.bolin@formidable.com)

🌎 [formidable.com](https://formidable.com)

🖥 slides: [bit.ly/offline-denver](http://bit.ly/offline-denver)

`;
