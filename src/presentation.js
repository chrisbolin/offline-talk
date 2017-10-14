// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
	MarkdownSlides,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const markdown = `
# Offline Only 🌟

## Some Lessons Learned

Chris Bolin, Formidable

@bolinchris

---

# What to Expect ✨

- Browers' Offline API
- Service Workers
- Promoting a project
- Preparing for the best
- Bracing for the worst [of humanity]
- Internationalization and translation

---

# Demo 💻

---

# Offline API 📵

- \`navigator.onLine\`
- \`online\` and \`offline\` events
- Broad support - 94% worldwide traffic, 98% US

(but there are always exceptions)

---

# Service Workers 🤖

- SWs work in the background of a webpage
- Allow apps to be available 100% offline
- \`create-react-app\` includes a SW by default

---

# Promoting a project

- Find a popular friend to retweet
- Tag the technologies you used
- Engage with others

### Twitter

- Use TweetDeck
- Searching for your URL

---

# Demo

---

# Demo

---

# Demo

---

# Demo



---

# THE REST


WHEN THINGS GO WELL

[Screenshot of Google Analytics] I am not popular on the internet
Are you ready if things go well?
CDNs, servers, HTTPS, international CDNs

TROLLS

some people are just mean [Screenshot of reddit]
people will try to break it, and anything else they find [skycoins screenshot]
some people can be won over (if that’s what your in to)
don’t be afraid to just mute something
r/programming and hacker news can both be a little rough
twitter, facebook, (and even linkedin) are a little friendlier

OPEN SOURCE

sign of good faith
open sourced the demo and the logic
simple at first, develops more complexity as bugs are discovered and troubleshoot

TRANSLATION

- people might want to translate your site (especially if it's open source).
    - you'll need to decide what path to take
Translation is hard
non-professional translators
people don't proofread. you’ll always have people reach out.
beware of autocorrect
Google Translate is awesome
right to left is a nightmare (e.g. trying to select text)

TAKEAWAYS

make the shit you want to make.
most times people won’t notice.
share it if you want
- Why the web is awesome
the web is a place for experimentation
it's much much easier to get someone to visit a website than download an app


`;

// ![alt text](https://media.giphy.com/media/l3fQks9tHELR5JNxS/giphy.gif)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["fade", "zoom"]} transitionDuration={500} theme={theme}>
				{MarkdownSlides(markdown)}
      </Deck>
    );
  }
}
