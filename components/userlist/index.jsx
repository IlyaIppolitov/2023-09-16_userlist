import { useState, useCallback } from 'react';
import Form from './Form';
import List from './List';
import { createUser } from './OneUser';
import { useRef } from 'react';

export default function UserListApp() {
  const
    [list, setList] = useState([]),
    [error, setError] = useState(null),
    API_URL = 'http://localhost:3333/users/',
    addUser = useCallback(newName => {
      const newUser = createUser(newName);
      setList(old => old.concat(newUser));
      fetch(API_URL,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser)
        });
    }, []),
    delUser = useCallback(id => {
      setList(old => old.filter(user => id !== user.id));
      fetch(API_URL + id, { method: 'DELETE' });
    }, []),
    ref = useRef([]),
    promise = fetch(API_URL),
    onClick = async () => {
        async function f() {
          try {
            const
              response = await promise;
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