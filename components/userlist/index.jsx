import { useState, useCallback } from 'react';
import Form from './Form';
import List from './List';
import { createUser } from './OneUser';
import { useRef } from 'react';

export default function UserListApp() {
  const
    [list, setList] = useState([]),
    [error, setError] = useState(null),
    addUser = useCallback(newName => setList(old => old.concat(createUser(newName))), []),
    delUser = useCallback(id => setList(old => old.filter(user => id !== user.id)), []),
    ref = useRef([]),
    onClick = async () => {
        async function f() {
          try {
            const
              response = await fetch('https://jsonplaceholder.typicode.com/users/');
            if (!response.ok) throw new Error('fetch ' + response.status);
            setList(await response.json());
            console.debug(list);
          } catch (err) {
            setError(err);
          }
        }
        f();
    };

  ref.current = list;

  return <>
    <button onClick={onClick}>Загрузить пользователей</button>
    <Form addUser={addUser} />
    <List list={list} delUser={delUser} />
  </>;
}