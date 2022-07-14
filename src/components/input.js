function Input({ prop, value, onChange, label, type}) {

    return (
      <div>
        {label && <label htmlFor={prop}>{label}</label>}
          <input
            id={prop}
            name={prop}
            type={type}
            value={value}
            onChange={onChange}
          />
      </div>
    )
  }

  export default Input;