import './style.css';
import { createElement } from './utils/elements';
import { createCharacter } from './components/character';

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
      children: [
        createCharacter({
          imgSrc: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
          name: 'Morty Smith',
          status: 'Alive',
          Species: 'Human',
          origin: {
            name: 'Earth',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
        }),
      ],
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
