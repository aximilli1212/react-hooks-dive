import {users} from "../../static.json";


export default function UserPicker () {
  return (
    <select>
        {
            users.map((user, index) =>{
                return <option key={user.id}>{user.name}</option>
            })
        }
    </select>
  );
}
