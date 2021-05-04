import './style.css';
import { createElement } from './utils/elements';

const mainElement = createElement('main', {
  className: 'mainPage',
  children: [
    createElement('header', {
      className: 'hero',
      children: [
        createElement('h1', { innerText: 'Rick and Morty Fun' }),
        createElement('input', { placeholder: 'search name' }),
      ],
    }),
    createElement('section', {
      className: 'resultsSection',
      children: [createElement('div', { innerText: 'No results' })],
    }),
    createElement('footer', {
      className: 'footerSection',
      children: [
        createElement('p', { innerText: "look at me, I'm a footer!" }),
      ],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
