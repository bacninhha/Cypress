import './App.css';
import { quotes, colors } from './constant';
import { useState } from 'react';
import QuoteAuthor from './components/QuoteAuthor';
import Quote from './components/Quote';

function App() {
  const [colorIndex, setColorIndex] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);
  function randomColor() {
    const index = Math.floor(Math.random() * colors.length);
    if (colorIndex === index) {
      randomColor();
      return;
    }
    setColorIndex(index);
  }
  function randomQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    if (quoteIndex === index) {
      randomQuote();
      return;
    }
    setQuoteIndex(index);
  }

  const handleClickNewQuote = () => {
    randomColor();
    randomQuote();
  }

  return (
    <div className='container'
     style={{
      backgroundColor: colors[colorIndex],
    }}>
      <div>
        <div className="quote-box">
          <div
            className="quote-text text-center">
            <i
              class="fa fa-quote-left"
              id="quote"
              style={{
                color: colors[colorIndex],
              }}
            >
              <Quote quote={quotes[quoteIndex].quote} />
            </i>
          </div>
          <div

            id="quote-author"
            class="author-text"
            data-test="quote-author"
            style={{
              color: colors[colorIndex],
            }}
          >
            <QuoteAuthor quoteAuthor={quotes[quoteIndex].author} />
          </div>
          <div class="quote-button">
            <button
              style={{
                background: colors[colorIndex],
              }}
              id="new-quote"
              class="button new-quote"
              onClick={handleClickNewQuote}
            >
              New Quote
            </button>
          </div>
        </div>
        {quotes.map((item) => <div data-test={`quote-of-${item.author}`} className='123'>{item.quote}</div>)}
        <div class="footer">
          by
          <a target="_blank" href="https://facebook.com/nam.hoang.185" rel="noreferrer">Nam Hoang</a>
        </div>
      </div>
    </div>
  );
}

export default App;
