import React from 'react';

class Hero extends React.Component {
    // name = 'Marina'; XXXXX
    constructor() {
        super();
        console.log('CONST')
        this.state = {
            name: 'Marina',
            title: "frontend developer",
            age: 29,
            tools: ['HTML', 'css', 'JS']
        }
    }
    componentDidMount() {
        console.log('Did mount')
        // API 
    }

    componentDidUpdate(prevProps , prevState) {
        console.log('Did update' , prevState , this.state)
    }

    componentWillUnmount() {
        //clean up method
    }

    changeName = (newName) => {
        //  this.state.name = name XXXXX
        this.setState({
            name: newName
        })
    }

    render() {
        return (
            <>
                <h1>Hello from hero class</h1>
                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <button onClick={() => this.changeName('Ahmed')}>Change name</button>
            </>
        )
    }
}

export default Hero;