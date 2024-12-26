import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useUniqueId = (defaultId?: string): string => {
  const { current: uniqueId } = useRef(defaultId ?? uuidv4());
  return uniqueId;
};

export default useUniqueId;
