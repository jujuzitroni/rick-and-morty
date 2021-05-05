import './style.css';
import { createElement, removeAllChildren } from './utils/elements';
import { createCharacter } from './components/character';
import { getCharacters } from './utils/api';
import { debounce } from './utils/timer';

const characterSection = createElement('section', {
  className: 'resultsSection',
});

const notFoundText = createElement('p', { innerText: 'Character not found!' });

const mainElement = createElement('main', {
  className: 'mainPage',
  children: [
    createElement('header', {
      className: 'hero',
      children: [
        createElement('h1', { innerText: 'Rick and Morty Fun' }),
        createElement('input', {
          className: 'searchField',
          placeholder: 'search name',
          autofocus: true,
          oninput: debounce((event) => {
            removeAllChildren(characterSection);
            const search = event.target.value;
            getCharacters(search).then((characters) => {
              if (characters.length === 0) {
                characterSection.append(notFoundText);
              }
              characterSection.append(...characters.map(createCharacter));
            });
          }, 300),
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
