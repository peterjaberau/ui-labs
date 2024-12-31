import { memo } from 'react';


import UserAvatar from '~/internals/development/vidol/features/UserPanel/UserAvatar.tsx';

const Avatar = memo(() => {
  return (
      <UserAvatar clickable={"false"} />
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
