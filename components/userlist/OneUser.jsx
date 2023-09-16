import styles from './OneUser.module.css'

export default function OneUser({ user }) {
  const
    { id, name, username, email,
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
      <tr className='tableRow' key={id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{street},{suite}</td>
          <td>{city}</td>
          <td>{phone}</td>
          <td>{website}</td>
          <td>{cname}</td>
      </tr>
    </>
  );
}