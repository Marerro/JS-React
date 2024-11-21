import { useState } from "react";

function Exercise1() {

    const [checkedItems, setCheckedItems] = useState([]);

    const handleChange = (event) => {
        const bob = event.target;

        if(bob.checked) {
            setCheckedItems([...checkedItems, bob.value])
        } else {
            setCheckedItems(checkedItems.filter((item) => item!==bob.value));
        }

    }

  return (
    <>
      <form>
        <p>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onClick={handleChange}/>
          <label htmlFor="vehicle1"> I have a bike</label>
        </p>
        <p>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onClick={handleChange}/>
          <label htmlFor="vehicle2"> I have a car </label>
        </p>
        <p>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onClick={handleChange}/>
          <label htmlFor="vehicle3"> I have a boat </label>
        </p>
      </form>

      <div>
        {checkedItems.map((item, index) => 
            <p key={index} className="border bg-stonne-400 p-3">{item}</p>
        )}
      </div>
    </>
  );
}

export default Exercise1;
