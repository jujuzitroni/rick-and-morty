import { createCharacterDetails } from './components/characterDetails';
import styles from './details.module.css';
import './style.css';
import { getCharacter } from './utils/api';
import { createElement } from './utils/elements';

const params = new URLSearchParams(location.search);
const characterId = params.get('id');

getCharacter(characterId).then((response) => {
  const characterDetailsElement = createCharacterDetails(response);
  mainElement.append(characterDetailsElement);
});

const mainElement = createElement('main', {
  className: styles.main,
});

document.querySelector('#app').append(mainElement);
