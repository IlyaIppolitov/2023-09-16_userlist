import { memo } from 'react';

export default memo(function Button({ onClick, children }) {
  console.debug('Button render');
  return <button onClick={onClick}>{children}</button>;
});