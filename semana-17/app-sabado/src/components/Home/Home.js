import React, {Component} from 'react';
import Item from './Item';
import Corona from './Corona';
import Form from './Form';
import Selected from './Selected';
import styles from './Home.module.css';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            dirty: false,
            form: {
                name:"",
                age:""
            },
            show: false,
            selection: {
                name: ""
            },
            data: [
                {
                    name:"David",
                    age: 21
                },
                {
                    name:"Peter",
                    age:19
                },
                {
                    name: "Mike",
                    age:5
                }
            ]
        }
    }

    handleClick = (selection) => {
        this.setState({selection})
    };

    toggleBlock = () => {
        let {show} = this.state;
        show = !show;
        this.setState({show});
    }

    deleteItem = (index) => {
        let {data} = this.state;
        data = data.filter((i,inx)=> index != inx);
        this.setState({data});
    }

    handleChange = (e) => {
        let {form, dirty} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        dirty = true;
        this.setState({form, dirty});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let {form, dirty, data} = this.state;
        data.push(form);
        dirty = false;
        form = {name:"", age:""};
        this.setState({form, dirty, data});
        console.log(form);
    }
    render(){
        const {form, data, dirty} = this.state
        return(
            <div className={styles.container}>
                <ul>
                    {data.map( (item,index) => <Item 
                    deleteItem={this.deleteItem}
                    handleClick={this.handleClick} 
                    key={index}
                    index={index}
                    item={item}/> )}
                </ul>
                <div>
                    <Selected selection={this.state.selection}/>
                </div>
                <button onClick={this.toggleBlock} >Picale</button>
                {this.state.show ? <Corona/>:'no hay data'}
                <div >
                    <Form dirty={dirty} data={form} 
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}/>
                </div>
            </div>
        )
    }

}

export default Home;