import React from 'react';
import style from './Home.module.css';

const Form = ({handleChange, data, dirty, handleSubmit}) => (
    <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="">
            Name:
            <input type="text" name="name" value={data.name} onChange={handleChange}/>
            {data.name.length <= 3 && dirty? <span> Hace falta caracteres</span> : ""}
        </label>

        <label htmlFor="">
            Age:
            <input type="number" step="1" name="age" value={data.age} onChange={handleChange}/>
        </label>
        <button type="submit">picale</button>
    </form>
)

export default Form;