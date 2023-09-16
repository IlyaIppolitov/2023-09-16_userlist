import styles from './OneUser.module.css'
import { memo } from 'react';

export function createUser(newName) {
  const user = {
    id:Math.random(), 
    name : newName,
    username : "newUserName",
    email : "newEmail",
    address: { street : "newStreet", suite : "newSuite", city : "newCity", zipcode : "newZipcode", geo: { lat:"123", lng:"123" } },
    phone : "newPhone",
    website : "newwebsite",
    company: {
      name: "newCompanyName",
      catchPhrase: "newCatchPhrase",
      bs:"newBs"
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