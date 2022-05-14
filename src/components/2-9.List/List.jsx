import React from 'react';

export default function List() {
    // const numbers = [1,2,3,4,5];
    // return (
    //    <ul>
    //        {numbers.map((item) => (
    //            <li key={item.toString()}>{item}</li>
    //            ))}
    //    </ul>
    // )
    const todos = [
        {id: 1, text: "Drink Water"},
        {id: 2, text: "Wash Car"},
        {id: 3, text: "Listen Lecture"},
        {id: 4, text: "Go to bed"},
    ];

    const Item = (props) => {
        return<li>{props.text}</li>;
    }

    const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);
    //key값은 다른 component로 전달하는 값이 아니기 때문에 만약에 전달하고 싶으면 따로 줘야 함
    //단지 element를 식별하기 위해서만 사용하기 때문

    return <>{todoList}</>;



}