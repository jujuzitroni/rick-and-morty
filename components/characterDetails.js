import './characterDetails.module.css';
import { createElement } from '../utils/elements';

export function createCharacterDetails({
  image,
  name,
  status,
  species,
  origin,
  location,
  episode,
}) {
  return createElement('div', {
    className: 'characterCard__detail',
    children: [
      createElement('img', { src: image }),
      createElement('h2', { innerText: name }),
      createElement('h3', { innerText: status }),
      createElement('p', { innerText: species }),
      createElement('p', { innerText: origin.name }),
      createElement('p', { innerText: location.name }),
      createElement('p', { innerText: 'First appearance: ' + episode[0] }),
    ],
  });
}
