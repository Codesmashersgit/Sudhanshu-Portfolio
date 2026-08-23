import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  id?: string;
  size?: 'default' | 'small' | 'large';
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  id = 'contact-me-button',
  size = 'default',
}) => {
  const sizeClasses =
    size === 'small'
      ? 'px-6 py-2.5 text-xs'
      : size === 'large'
      ? 'px-10 py-4 sm:px-12 sm:py-5 text-sm sm:text-lg'
      : 'px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base';

  return (
    <motion.button
      id={id}
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`rounded-full font-medium uppercase tracking-widest text-white cursor-pointer transition-all duration-200 select-none whitespace-nowrap ${sizeClasses} ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid #FFFFFF',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </motion.button>
  );
};
