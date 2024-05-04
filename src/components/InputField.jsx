export default function InputField({ type, label, value, inputName, onChange }) {
  return type === 'textarea' ? (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={inputName}>
        {label}
      </label>
      <textarea className="input-field textarea" value={value} name={inputName} onChange={onChange}></textarea>
    </div>
  ) : (
    <div className="input-wrapper">
      <label className="input-label" htmlFor={inputName}>
        {label}{' '}
      </label>
      <input className="input-field" type={type} value={value} name={inputName} onChange={onChange}></input>
    </div>
  );
}
