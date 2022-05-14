import React from 'react';

function UserGreeting(props) {
    return <h1>{props.name && `${props.name},`} Welcome {props.count ? `It's ${props.count} times`: null} times</h1>
    //삼항연산자를 쓴 이유 : 0값이 들어가면 = falsy이기 때문에 오류를 방지하기 위함(cf. 삼항연산자 대신 Boolean타입으로 감싸줘도 됨)
}
//name이 true면 (존재하면) name + ','까지 보여주고, false면 (없다면) name과 ','를 보여주지마
function GuestGreeting(props) {
    return <h1>please sign up.</h1>
}
function Greeting(props) {
    // if(props.isLoggedIn) {
    //     <UserGreeting name="jimmy" count={0}/>
    // }
    // return <GuestGreeting />

    return props.isLoggedIn ? <UserGreeting name="jimmy" count={0}/> : <GuestGreeting />
}

export default function Condition() {
    const isLoggedIn = true;

    return (
        <div>
            <Greeting isLoggedIn = {isLoggedIn} />
        </div>
    )
}