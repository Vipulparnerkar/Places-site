import React from 'react'
import UserList from '../components/UserList'


const Users  = ()=>{
    const USERS = [{id:'1',name:"Vipul Parnerkar",places:2,image:"https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"}];
    return(
        <h2><UserList  items={USERS}/></h2>
    )
}
export default Users;