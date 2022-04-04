import React from 'react'
import Test from './Test';

function QuoteAuthor(props) {
  return (
    <div data-test="quote-author-container">
      {props.quoteAuthor}
    </div>
  )
}

export default QuoteAuthor;
