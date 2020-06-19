import React from 'react';
import Character from './Character';

const App = ({ side }) => {
  if (!side) {
    side = 'light'
  }

  const characters = [
    { name: 'Иван царевич', side: 'light' },
    { name: 'Емеля', side: 'light' },
    { name: 'Кащей Бессмертный', side: 'dark' },
    { name: 'Баба Яга', side: 'dark' },
    { name: 'Змей Горыныч', side: 'dark' },
  ]

  const filteredChars = characters.filter(char => char.side === side)

  return (
    <ul>
      {filteredChars.map((char, index) => (
        <Character key={char.name + index} name={char.name} side={char.side} />
      ))}
    </ul>
  );
}

export default App;
