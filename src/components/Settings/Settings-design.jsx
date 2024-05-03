import { useState } from 'react';

import '../../styles/settings-design.css';
export default function SettingsDesign({ setFontFamily, setMainColour, setAccentColour, mainColour, accentColour }) {
  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };
  const handleMainColourChange = (e) => {
    setMainColour(e.target.value);
  };
  const handleAccentColourChange = (e) => {
    setAccentColour(e.target.value);
  };

  return (
    <>
      <div className="settings-design-wrapper frame">
        <div className="settings-inline-wrapper">
          <label htmlFor="fontFamily">Font-family:</label>
          <select name="fontFamily" onChange={handleFontFamilyChange}>
            <option value={'Helvetica'}>Helvetica</option>
            <option value={'Fantasy'}>Fantasy</option>
            <option value={'Math'}>Math</option>
            <option value={'Monospace'}>Monospace</option>
          </select>
        </div>
        <div className="settings-inline-wrapper">
          <label className="input-lable" htmlFor="mainColour">
            Main colour:
          </label>
          <input value={mainColour} type="color" name="mainColour" onChange={handleMainColourChange}></input>
        </div>
        <div className="settings-inline-wrapper">
          <label htmlFor="accentColour">Accent colour:</label>

          <input value={accentColour} type="color" name="accentColour" onChange={handleAccentColourChange}></input>
        </div>
      </div>
    </>
  );
}
