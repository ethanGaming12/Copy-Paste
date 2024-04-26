import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function User() {
    let [user, setUser]=useState([]);
    let [data, setdata]=useState([]);
    const getdata=()=>{
        axios.get("https://randomuser.me/api/?results=30")
        .then((res)=>{
            console.log(res.data.results);
            setUser(res.data.results);
            setdata(res.data.results);
            setdata(res.data.results);
        })
        .catch((error)=>{
            console.log(error);
            alert("Something Wrong on Fetching Data")
        })
    }
    const filterData=(event)=>{
        if(event.target.value==='male'){
            setUser(data.filter((usr)=> usr.gender === 'male'))
        }
        else if(event.target.value==='female'){
            setUser(data.filter((usr)=> usr.gender === 'female'))
        }
        else{
            setUser(data);
        }
    }
  return (
    <div>
      <h2>User Infromation</h2>
      <p>There is a list of Infromation..</p>
      <button onClick={getdata}>Get DATA</button>
    {
        user.length>0  && (
        <div>
            <input type="radio" name="gender" defaultChecked value="all" onChange={filterData}/>ALL
            <input type="radio" name="gender" value="male" onChange={filterData}/>MALE
            <input type="radio" name="gender" value="female" onChange={filterData}/>FEMALE
        </div>
        )
    }

      {
        user.length>0 ?
        <div>
            <table cellPadding={10} border={1} style={{margin: "10px auto"}}>
                <thead style={{
                    backgroundColor:'black',
                    color:"white"
                }}>
                    <tr>
                        <th>ID</th>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>EMAIL</th>
                        <th>CITY</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((element, index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td><img src={element.picture.medium} height={80} width={80}></img></td>
                                    <td>{element.name.first}</td>
                                    <td>{element.gender}</td>
                                    <td>{element.email}</td>
                                    <td>{element.location.city}</td>
                                    <td>{element.dob.age}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
         </div>:<h2 style={{color:"red"}}>No User Infromation</h2>
      }
    </div>
  )
}

export default User
