import { useState, Fragment } from 'react'
import { Transition } from '@headlessui/react'

import quotes from '../data/quotes.json'
import random from '../utils/random'
import { fade } from '../utils/transition'
import { useId } from 'react'

export default function Quote({ isExpanded }) {
  const [quoteIndex, setQuoteIndex] = useState(random(quotes.length))
  const id = useId()

  function randomizeQuote() {
    setQuoteIndex(random(quotes.length))
  }

  return (
    <Transition as={Fragment} show={!isExpanded} {...fade}>
      <header className="flex items-start gap-4  w-full max-w-[445px] md:max-w-[573px]">
        <div
          className="w-full text-xs leading-[1.375rem] flex flex-col gap-2 md:text-body-1 md:leading-body-1 md:gap-3"
          role="region"
          aria-live="polite"
          id={id}
        >
          <p>“{quotes[quoteIndex].en}”</p>
          <p className="font-bold">{quotes[quoteIndex].author}</p>
        </div>
        <button
          aria-label="Refresh quote"
          onClick={randomizeQuote}
          aria-controls={id}
          className="opacity-50 hover:opacity-100 transition-opacity"
        >
          <img src="/desktop/icon-refresh.svg" alt="" aria-hidden="true" />
        </button>
      </header>
    </Transition>
  )
}
