import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { createCharacter } from './components/character';
import { getCharacters } from './utils/api';

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
        createElement('input', {
          placeholder: 'search name',
          oninput: (event) => {
            removeAllChildren(characterSection);
            const search = event.target.value;
            getCharacters(search).then((characters) => {
              characterSection.append(...characters.map(createCharacter));
            });
          },
        }),
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
