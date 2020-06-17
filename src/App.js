import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote:
            "If you don't like the road you're walking, start paving another one.",
          author: "Dolly Parton"
        },
        {
          quote: "Life is a series of baby steps.",
          author: "Hoda Kotb"
        },
        {
          quote:
            "Every man takes the limits of his own field of vision for the limits of the world.",
          author: "Arthur Schopenhauer"
        },
        {
          quote:
            "Believe those who are seeking the truth; doubt those who find it.",
          author: "Andre Gide"
        },
        {
          quote:
            "If I had six hours to chop down a tree, I’d spend the first four sharpening the axe.",
          author: "Abraham Lincoln"
        },
        {
          quote:
            "Millions saw the apple fall, but Newton was the one who asked why.",
          author: "Bernard Baruch"
        },
        {
          quote: "The man on top of the mountain did not fall there.",
          author: "Vince Lombardi"
        },
        {
          quote:
            "Happiness does not depend on what you have or who you are. It solely relies on what you think.",
          author: "Dale Carnegie"
        },
        {
          quote:
            "You don’t drown by falling in the water; you drown by staying there",
          author: "Edwin Louis Cole"
        },
        {
          quote:
            "To live is the rarest thing in the world. Most people exist, that is all.",
          author: "Oscar Wilde"
        },
        {
          quote: "Would you like you, If you met you?",
          author: "Anonymous"
        },
        {
          quote:
            "Science is a way of thinking much more than it is a body of knowledge.",
          author: "Carl Sagan"
        },
        {
          quote:
            "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.",
          author: "Galileo Galilei"
        },
        {
          quote:
            "I learned very early the difference between knowing the name of something and knowing something.",
          author: "Richard Feynman"
        },
        {
          quote: "Life would be tragic if it weren’t funny.",
          author: "Stephen Hawking"
        },
        {
          quote:
            "The feeling of awed wonder that science can give us is one of the highest experiences of which the human psyche is capable.",
          author: "Richard Dawkins"
        },
        {
          quote:
            "If you wish to make an apple pie from scratch, you must first invent the universe.",
          author: "Carl Sagan"
        },
        {
          quote:
            "He is richest who is content with the least, for content is the wealth of nature.",
          author: "Socrates"
        },
        {
          quote:
            "People who think they know everything are a great annoyance to those of us who do.",
          author: "Isaac Asimov"
        },
        {
          quote: "Don't Panic.",
          author: "Douglas Adams"
        },
        {
          quote:
            "Self-education is, I firmly believe, the only kind of education there is.",
          author: "Isaac Asimov"
        }
      ],
      currentQuote: "You have to be odd to be number one.",
      currentAuthor: "Dr. Seuss"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    let random = Math.floor(Math.random() * this.state.quotes.length);
    setTimeout(() => {
      this.setState({
        currentQuote: this.state.quotes[random].quote,
        currentAuthor: this.state.quotes[random].author
      });
    }, 400);
  }

  render() {
    return (
      <div className="container">
        <h1>Quotes ! !</h1>

        <QuoteBox />
      </div>
    );
  }
}

class QuoteBox extends App {
  render() {
    return (
      <div id="quote-box">
        <div className="quote">
          <img
            src="https://img.icons8.com/clouds/100/000000/light-on.png"
            alt="cloud-top"
          />
          <p id="text">"{this.state.currentQuote}"</p>
          <p id="author">- {this.state.currentAuthor}</p>
        </div>
        <div className="buttons">
          <button id="new-quote" onClick={this.handleClick}>
            Change
          </button>
          <button>
            <a
              id="tweet-quote"
              href={
                "https://www.twitter.com/intent/tweet?text=" +
                this.state.currentQuote +
                "-" +
                this.state.currentAuthor
              }
              title="Share this quote on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tweet
            </a>
          </button>
        </div>
      </div>
    );
  }
}
