import acadYears from "../acad-year";

function Options() {
  function Option(data) {
    return (
      <div class="radio-input">
        <input type="radio" name={data.name} id={data.id} />
        <label for={data.id}>{data.option}</label>
      </div>
    );
  }

  return(
    acadYears.map(Option)
  );
}

export default Options;