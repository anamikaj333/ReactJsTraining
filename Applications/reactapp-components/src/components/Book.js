import React,{Component} from 'react'

export default class Book extends Component {
  constructor(props){
    super(props)
    this.props=props;
    }
   render(){
    let book_list=[]
    this.props.books.forEach((book)=>{
      book_list.push(<tr>
          <td>{book.bookName}</td>  
          {/* template syntax */}
          <td>{book.authorName}</td>
          <td>{book.price}</td>
      </tr>)
    })
  return (
    <div>
      <h1>books</h1>
      <table>
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Author Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
            {book_list}
      </tbody>
       
      </table>
    </div>
  
  )
}
}


