import { useEffect, useState } from "react";
import OneUser from "./OneUser";

export default function FetchUsers() {
  const
    [users, setUsers] = useState(null),
    [error, setError] = useState(null);

  useEffect(() => {
    async function f() {
      try {
        const
          response = await fetch('https://jsonplaceholder.typicode.com/users/');
        if (!response.ok) throw new Error('fetch ' + response.status);
        setUsers(await response.json());
        //setError(null)
      } catch (err) {
        setError(err);
      }
    }
    f();
  }, []);


  if (error)
    return <>Error={error.message}</>;
  if (users){
      const usersMap = users.map((user) => <OneUser user={user} key={user.id} />);
      return<>{usersMap}</>
  }

  return <>loading...</>;
}