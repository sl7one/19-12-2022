import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import { useEffect } from 'react';
import { useState } from 'react';
import dataJson from '../data.json';

// const data = [
//   { id: '1', title: 'Часы', descr: 'надеждные, как пружина от дивана' },
//   { id: '2', title: 'Золотая цепь', descr: 'за которую не заплатили' },
//   { id: '3', title: 'Роллс-Ройс', descr: 'полоченный ' },

// ];

// const data = [{ id: '1' }, { id: '2' }, { id: '3' }];
const App = () => {
  const [currentItem, setCurrentItem] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataJson);
  }, []);

  const onClickItem = event => {
    const { id } = event.currentTarget;
    setCurrentItem(id);
  };

  return (
    <>
      <ul>
        {data.map(el => (
          <li
            key={el.id}
            onClick={onClickItem}
            id={el.id}
            style={{
              backgroundColor: currentItem === el.id ? 'green' : 'teal',
            }}
          >
            <h2>{el.title}</h2>
            <p>{el.descr}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
