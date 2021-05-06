import './character.css';
import { createElement } from '../utils/elements';

export function createCharacter({ id, image, name, status, species, origin }) {
  return createElement('div', {
    className: 'characterCard',
    children: [
      createElement('img', { src: image }),
      createElement('a', {
        href: `/details.html?id=${id}`,
        innerText: 'Character Details',
        className: 'characterCard__link',
      }),
      createElement('h2', { innerText: name }),
      createElement('h3', { innerText: status }),
      createElement('p', { innerText: species }),
      createElement('p', { innerText: origin.name }),
    ],
  });
}
