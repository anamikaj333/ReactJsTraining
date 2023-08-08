import React, { Component } from 'react'

export default class Customer extends Component {
   constructor(props){
        super(props)
        this.state ={
            cust_name:"",
            cust_email:"",
            cust_address:""
        }
    }

    handleCustomerNameChange(event){
            // console.log(event.target.value);
           
    }
    nameChangeHandler(event){
        this.setState({
           
                cust_name:event.target.value
        
        })
    }

    emailChangeHandler(event){
        this.setState({
           
                cust_email:event.target.value
        
        })
    }
   
    addressChangeHandler(event){
        this.setState({
           
                cust_address:event.target.value
        
        })
    }

    addCustomer(){
        console.log(this.state)
    }
    
    render(){
  return (
    <div>
      <div>
        <table>
            <tr>
                <td><label>Name</label></td>
                <td><input type='text'value={this.state.cust_name}
                onChange={(e)=>this.nameChangeHandler(e)}></input></td>
            </tr>
            <tr>
                <td><label>Email</label></td>
                <td><input type='email' value={this.state.cust_email}
                onChange={(e)=>this.emailChangeHandler(e)}></input></td>
            </tr>
            <tr>
                <td><label>Address</label></td>
                <td><textarea cols={23} rows={7} value={this.state.cust_address}
                 onChange={(e)=>this.addressChangeHandler(e)}></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td><button onClick={()=>this.addCustomer()}>AddCustomer</button></td>
            </tr>
        </table>
      </div>
    </div>
  )
    }
}
