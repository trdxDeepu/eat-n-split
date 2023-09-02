/* eslint-disable react/prop-types */

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriend/>
        <Button>Add Friend</Button>
      </div>
    </div>
  );
}

export default App;

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend, key }) {
  return (
    <li key={key}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p>You and {friend.name} your friend are even.</p>
      )}

      <Button>Select</Button>
    </li>
  );
}

function Button({children}){
  return <button className="button">{children}</button>
}

function FormAddFriend(){
  return(
    <form className="form-add-friend">
      <label> 👨‍👩‍👧‍👦 Friend Name</label>
      <input type="text" />
      <label> 😬Image URL</label>
      <input type="text" />
     <Button>Add Friend</Button>
    </form>
  )
}

