import React, {Component} from 'react'
//state is accessible within current component only.always defined in constructor. accessed in class component with this.state param.hold key-value pair.
// state property can be modified using setState({}-Object) 

export default class Employee extends Component {
  
    constructor(props){
        super(props)
        this.state= {
            name:"Anamika",
            designation:"Soft engi.",
            company:"cybage",
            exp:0
        }
    }
    incrementExpereience(){
        // console.log("in function");
    //    this.setState({
    //     exp: this.state.exp+1
    //    },()=>{
    //     console.log("Modified value",this.state.exp);
    //    })

    // --------------------------------------------------------------
    //Multiple setstate call result into single update.
    // -this.setstate
    // ((prevState,props)=>({state prop modification}--arg as object)--function call)


    this.setState((prevState,props)=>({
        // exp:prevState.exp+1                          //Increment by 5 when hit incrementbyfive
        // exp:prevState.exp+this.props.incrementValue                      //Increment by 5*3=15 times every time hit incrementbyfive
        exp:prevState.exp+props.incrementValue    //when passing props as an argument with prevState
    }))
    console.log("Modified value",this.state.exp)
    }
    incrementExpereiencebyFive(){
        this.incrementExpereience();
        this.incrementExpereience();
        this.incrementExpereience();
        this.incrementExpereience();
        this.incrementExpereience();
    }
    render(){
    return (
    <div>
     name: {this.state.name}<br/>
     designation: {this.state.designation}<br/>
     company: {this.state.company}<br/>
     Experience: {this.state.exp}<br/>
     <button onClick={()=>{this.incrementExpereience()}}>Increment</button>
     <button onClick={()=>{this.incrementExpereiencebyFive()}}>IncrementByFive</button>
    </div>
  )
}
}