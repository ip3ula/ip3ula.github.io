import { useState } from 'react';

const Toggleable = ({ children, showButtonLabel, cancelButtonLable }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
    <div style={{ display: visible ? 'none' : '' }}>
      <button onClick={toggleVisibility}>{showButtonLabel}</button>
      {visible && children}
    </div>
    <div style={{display: visible ? '' : 'none'}}>
      <button onClick={toggleVisibility}>{cancelButtonLable}</button>
      {visible && children}
      </div>
    </>
    
  );
}

export default Toggleable;