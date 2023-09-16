import styles from './List.module.css'

import OneUser from './OneUser';

export default function List({ list, delUser}) {
  console.debug('List render');
  return <fieldset>
    <legend>List</legend>
      <div className={styles.container}>
        <table>
          <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Company name</th>
              <th>Del Button</th>
          </tr>
          {list.map(user =>
            <OneUser key={user.id} user={user} delUser={delUser}/>)}
        </table>
      </div>
  </fieldset>;
}