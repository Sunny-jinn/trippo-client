import {useState} from 'react';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const show = () => {
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  return {isVisible, show, hide};
};
