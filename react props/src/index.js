import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tele}</p>
      <p>{props.mail}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Luffy"
      img="https://th.bing.com/th/id/OIP.NMMon_rNbUmjJPTaRFFCEwHaEK?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      tele="+123 456 789"
      mail="b@beyonce.com"
    />
    <Card
      name="Zoro"
      img="https://th.bing.com/th/id/OIP.sWm9peiIUj6K8KtY5UGLwQHaEo?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      tele="+123 456 789"
      mail="b@beyonce.com"
    />
    <Card
      name="Sanji"
      img="https://th.bing.com/th/id/OIP.WPwg5zhb5Q_B_2mBBhBvFAHaEB?w=250&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
      tele="+123 456 789"
      mail="b@beyonce.com"
    />
    <input name="fName" />
  </div>,
  document.getElementById("root")
);
