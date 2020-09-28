import React from 'react';
import { Button, DatePicker } from 'antd';
import '../Styles/SignIn.scss';
import flower from '../Assets/flower.png'
 
function FloatingLabel(props) {
   let GlobalConst = global.const;
  return (
    <div class="floating">
    <input id="inputId" class="floating__input" name="input name" placeholder="Placeholder" />
    <label for="inputId" class="floating__label" data-content="Placeholder">
      <span class="hidden--visually">Placeholder</span>
    </label>
  </div>
  );
}

export default FloatingLabel;
