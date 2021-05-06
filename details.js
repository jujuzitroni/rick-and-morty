import styles from './details.module.css';
import './style.css';
import { getCharacter } from './utils/api';
import { createElement } from './utils/elements';

const params = new URLSearchParams(location.search);
const characterId = params.get('id');

getCharacter(characterId);

const resultElement = createElement('article', { className: styles.result });

const mainElement = createElement(
  'main',
  {
    className: styles.main,
  },
  resultElement
);

document.querySelector('#app').append(mainElement);
