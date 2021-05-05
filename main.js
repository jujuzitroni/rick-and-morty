import './style.css';
import { createElement } from './utils/elements';
import { createCharacter } from './components/character';
import { getCharacters } from './utils/api';

getCharacters().then((characters) => {
  characterSection.append(...characters.map(createCharacter));
});

const characterSection = createElement('section', {
  className: 'resultsSection',
});

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
    characterSection,

    createElement('footer', {
      className: 'footerSection',
      children: [
        createElement('p', { innerText: "look at me, I'm a footer!" }),
      ],
    }),
  ],
});

document.querySelector('#app').append(mainElement);
