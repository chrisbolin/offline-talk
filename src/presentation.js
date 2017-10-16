import React from "react";

import {
  Deck,
	MarkdownSlides,
} from "spectacle";

import createTheme from "spectacle/lib/themes/default";

import slidesMarkdown from "./slides";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("./style.css");

const theme = createTheme({
  primary: "hsl(60, 1%, 16%)", // background
  secondary: "hsl(208, 71%, 96%)", // text
  tertiary: "#03A9FC",
  quarternary: "rgba(255,255,255,0.2)" // progress bar
}, {
  primary: { name: "Work Sans", googleFont: true, styles: [ "400", "700" ] },
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
				transition={["fade", "slide"]}
				transitionDuration={800}
				theme={theme}
				progress="bar"
			>
				{MarkdownSlides(slidesMarkdown)}
      </Deck>
    );
  }
}
