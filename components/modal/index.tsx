import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {

};

export const Modal: React.FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ref.current = document.querySelector('#modal');
    setMounted(true);
  }, [ref]);

  return (mounted ? createPortal(children, ref.current) : null);
};
