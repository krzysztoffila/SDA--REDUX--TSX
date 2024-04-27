import { useState, useEffect } from 'react';

interface ListItem {
  id: number;
  text: string;
}

const List: React.FC = () => {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    // Fetch data from fake API and update the list state
    // fetch('https://jsonplaceholder.typicode.com/users').then(response => setList(response.data));
  }, []);

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default List;
