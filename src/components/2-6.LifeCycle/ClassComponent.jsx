import React, {Component} from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {date: new Date()};
        // this.handleClick = this.handleClick.bind(this);
        //여기 (this)는 바깥에 있는 handleClick 함수에게 this를 알게 해줘 라는 의미
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
        clearInterval(this.timerID);
    }

    tick() {
        // console.log('tick')
        this.setState({
            date: new Date()
        });
    }

    handleClick = () => {
        alert(this.state.date);

    }
    //위에 this 바인딩을 안시키려면 handleClick함수에서 에러function처리를 해주면 됨

    render() {
        console.log('render')
        return (
            <div>
                <h1 onClick={this.handleClick}>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default ClassComponent;