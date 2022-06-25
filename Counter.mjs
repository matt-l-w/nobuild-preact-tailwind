import { useState } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module'
import { html } from 'https://unpkg.com/htm@3.0.4/preact/index.module.js?module'

export const Counter = ({ start = 0 }) => {
  const [counter, setCounter] = useState(start);
  return  html`
    <span onClick=${() => setCounter(c => c+1)}>${counter}</span>
  `
}