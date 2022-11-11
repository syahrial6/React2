import React from 'react';
import Card from './Card';
import Input from './Input';
import { getInitialData } from '../utils'
 
 
 
class Catatan extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes : getInitialData(),
        }
 
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddContactHandler = this.onAddContactHandler.bind(this);
    console.log(this.state.notes)
      }
 
 
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
 
    onAddContactHandler({judul,isi}){
        this.setState((prevState)=>{
          return {
            notes : [
              ...prevState.notes,
              {
                id : +new Date(),
                judul,
                isi,
              }
            ]
          }
        })
      }
    render(){
 
      
        return(
          <div className='induk'>
      <Input addNote={this.onAddContactHandler}/>
      { this.state.notes.length !== 0 && <Card notes={this.state.notes} onDelete={this.onDeleteHandler}/> }
      { this.state.notes.length === 0 && <p>Catatan Kosong</p> }
    </div>
        )
      
 
 
 
 
 
        };
}
export default Catatan;