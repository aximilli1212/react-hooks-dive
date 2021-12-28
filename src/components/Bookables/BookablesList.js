import {bookables} from "../../static.json";
import {useState, Fragment} from "react";
import {prop} from 'ramda'
import {FaArrowRight} from "react-icons/fa";

export default function BookablesList () {

const  [group, setGroup] = useState("Rooms")

  const bookablesInGroup = bookables.filter(b => b.group === group);

  const [bookableIndex, setBookableIndex] = useState(1)
  const groups = [...new Set(bookables.map(b => b.group))];

  function nextBookable () {
    setBookableIndex(i => (i + 1) % bookablesInGroup.length);
  }

  function changeBookable(selectedIndex){
    setBookableIndex(selectedIndex)
    console.log(selectedIndex);
  }

  return (
      <div>
      <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}>
      {groups.map(g => <option value={g} key={g}>{g}</option>)}
      </select>
        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
              <li
                  key={b.id}
                  className={i === bookableIndex ? "selected" : null}
              >
                <button
                    className="btn"
                    onClick={()=>changeBookable(i)}
                >
                  {b.title}
                </button>
              </li>
          ))}
        </ul>
        <p>
          <button
              className="btn"
              onClick={nextBookable} autoFocus
          >
            <FaArrowRight/>
            <span>Next</span>
          </button>
        </p>
      </div>
  );
}
