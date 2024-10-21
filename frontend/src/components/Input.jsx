const Input = ({ placeholder, handleInput, name, }) => {
  return (
    <div>
      <input className="input-field" placeholder={placeholder}  onChange={handleInput} name = {name} />
    </div>
  );
};

export default Input;
