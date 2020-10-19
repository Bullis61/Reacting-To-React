import React, { Component } from 'react'



class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            textOn: true,
            currentText: "This is text. this is also pain.",
            hasLoaded: false,
            textOnValue: this.props.textOnValue
        }
    }
    //#10 below
//get rid of componetDidMount to get it working right. It loads the else statement first before then shows error.  
    componentDidMount() {
        this.setState = true
    }

    handleInputChange = (value) => {
        this.setState({ name: value })
    }

    handleButtonClick = () => {
        this.setState({ hasLoaded: !this.state.hasLoaded })
    }

    render() {
        if (this.state.hasLoaded == true) {
            return (

                <React.Fragment>
                    <h1>Hello, {this.props.name} </h1>
                    <h2>{this.state.currentText}</h2>
                    <input
                        placeholder={this.state.placeholder}
                        value={this.state.name}
                        onChange={(event) => this.handleInputChange}
                    />
                    <button className="button"
                        onClick={this.handleButtonClick}
                    >
                        Click ME!
                </button>
                </React.Fragment>
            )
        } else {
            return (
                <div>
                    <button className="button"
                        onClick={this.handleButtonClick}
                    >
                        Click ME!
            </button>
                    <h1>Loading...</h1> </div>)
               
        }

    }

}

export default App

// let Heading = (props) => {
//     // bestFootballPlays = (`the best football plays are the Pick-Six, Scoop-and-Score, and a nice, clean, Big-Hit`)
//     return (
//         <h1 className="Greeting">
//             {/* {props.name} */}
//             {props.bestFootballPlays}
//             {/* I am a Header. it took me a minute to process breaking rules but am now hackerman. */}
//         </h1>
//     )
// }



// export default Heading