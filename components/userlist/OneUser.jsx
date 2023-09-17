import styles from './OneUser.module.css'
import { memo } from 'react';

export function createUser(newName) {
  const user = {
    id:Math.random(),
    name: {newName},
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
      }
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models"
    }
  }
  
  return {id: user.id, user};
}

export default memo(function OneUser({ user, delUser }) {
  const
    { id = {}, name, username, email,
      address: { street, suite, city, zipcode, geo: { lat, lng } },
      phone, website,
      company: {
        name: cname,
        catchPhrase,
        bs
      }
    } = user;

  return (
    <>
      <tr key={id} className={styles.tableRow} >
          <td>{name}</td>
          <td>{email}</td>
          <td>{street},{suite}</td>
          <td>{city}</td>
          <td>{phone}</td>
          <td>{website}</td>
          <td>{cname}</td>
          <td><button onClick={() => delUser(id)}>❌</button></td>
      </tr>
    </>
  );
});