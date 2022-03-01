const Radio = ({ date, name, onChange, value, check }) => {


  return (
    <>
      <div className="form-check form-check-inline m-2">
        <input
          name={name}
          type="radio"
          value={value}
          checked={value === check}
          onChange={onChange}
          className="form-check-input"
        />
        <label> {date}</label>
      </div>
    </>
  );
};

export default Radio;
