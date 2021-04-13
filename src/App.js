import React from 'react';

function Food({name, picture}) //props.fav = {fav} 
{
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
  );
}

const foodILike = [
  {
    name : "kimchi",
    image : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.imweb.me%2Fthumbnail%2F20200415%2F6b6e035658bac.png&imgrefurl=https%3A%2F%2Fwww.ffd.co.kr%2Fshop-constant%2F%3Fidx%3D41&tbnid=uDdIaJQ0fdYYvM&vet=12ahUKEwiyprWYj_rvAhUKUJQKHXRrBLcQMygAegUIARDZAQ..i&docid=qjF76-128-DOTM&w=750&h=750&q=%EA%B9%80%EC%B9%98&ved=2ahUKEwiyprWYj_rvAhUKUJQKHXRrBLcQMygAegUIARDZAQ"
  },
  {
    name : "samgyopsal",
    image : "https://www.google.com/imgres?imgurl=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F222d88e5c7dc496c8e8a8a56c3452e52.JPG&imgrefurl=https%3A%2F%2F1boon.kakao.com%2Fdailylife%2F181214_1&tbnid=uiCwBwFCULxa2M&vet=12ahUKEwjipMnGj_rvAhWISJQKHR0QDigQMygJegUIARDQAQ..i&docid=xEJro_sWJLFxRM&w=600&h=600&q=%EC%82%BC%EA%B2%B9%EC%82%B4&ved=2ahUKEwjipMnGj_rvAhWISJQKHR0QDigQMygJegUIARDQAQ"
  }
];

function App() {
  return <div>
    {foodILike.map(dish => (
    <Food name = {dish.name} picture = {dish.image}/>
    ))}
  </div>;
}

export default App;
