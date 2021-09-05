import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['abhi','idli','abhishek','abhi']
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Abhi',
    //         age: 20,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Idli',
    //         age: 25,
    //         skill: 'React'
    //     },
    //     {
    //         id: 3,
    //         name: 'Abhishek',
    //         age: 21,
    //         skill: 'React'
    //     }
    // ]
    const nameList = names.map((name, index )=> <h2 key = {index}>{index} {name}</h2> )
    return (
        <div>
            {nameList} 
        </div>
    )
}

export default NameList
