// juego/utils/objectTypes.js
import churro1 from '../imagenes/churrospixel.png'
import churro2 from '../imagenes/churroplatopix.png'
import churro3 from '../imagenes/tortafritapix.png'
import churro4 from '../imagenes/bombapix.png'

export const objectTypes = [
  {
    image: churro1,
    points: 10,
    style: { width: '70px', height: '90px' },
    effect: 'grow',
  },
  {
    image: churro2,
    points: 20,
    style: { width: '70px', height: '70px' },
    effect: null,
  },
  {
    image: churro3,
    points: 30,
    style: { width: '70px', height: '70px' },
    effect: 'grow',
  },
  {
    image: churro4,
    points: -15,
    style: { width: '70px', height: '70px' },
    effect: 'shrink',
  },
]
