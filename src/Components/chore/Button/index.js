import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ variant, className, children, ...props }) => {
  const baseStyle = 'font-size-16 font-semibold py-2 px-4 relative overflow-hidden';

  const variants = {
    primary: 'bg-cyan-500 text-white rounded-full',
    secondary: 'bg-transparent text-slate-800',
  };

  const handleClick = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    ripple.style.top = `${e.clientY - button.offsetTop - radius}px`;
    ripple.classList.add('ripple');

    const rippleEffect = button.getElementsByClassName('ripple')[0];
    if (rippleEffect) {
      rippleEffect.remove();
    }

    button.appendChild(ripple);
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
