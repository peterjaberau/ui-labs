import { memo } from 'react';


import UserAvatar from '../../user-avatar';

const Avatar = memo(() => {
  return (
      <UserAvatar clickable={"false"} />
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
