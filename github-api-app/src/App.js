import { cleanup } from '@testing-library/react'
import { useEffect, useState } from 'react'
import { getSearchUsersURL } from './api'
function App() {
    const [text, setText] = useState('')
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        if(text == '') return
        // get the query
        //const query = text
        //make API call
        const url = getSearchUsersURL(text)
        //console.log(url)
        fetch (    url    )
            .then((response) => response.json())
            //.error((err) => alert(err.message))
            .then((data) => {
                console.log(data)
                if (!data) setUsers([])
                else setUsers(data.items.slice(0,10))
            })

    } , [text]);
    // event driven trigger
    const onSearchSubmit = (event) => {
        event.preventDefault()
    }
    console.log('UI Re-rendered')
    return (
        <div className="mx-24 mt-10 p-2 flex flex-col justify-center content-center">
            
            <div>
                <header className="text-blue-500 text-2xl">
                    GitHub User Search.
                </header>
                <form >
                    <input type="text" 
                    value={text}
                    onChange={(event) => {console.log(event.target.value)
                    setText(event.target.value)
                    }}
                    placeholder="Enter person's name." />
                    <input type="button" value="Clear"
                    onCLick = {() => {
                        setText('') 
                        setUsers([])
                    }}
                    className=" btn btn-dark btn-block" />
                </form>
            </div>
            <div>
                {users.length > 0 && users.map(ele => 
                    <li>
                        <a href={ele.html_url}>{ele.login} <img src={ele.avatar_url} height="100" width="100"></img></a>
                        
                    </li> )}

                <h2>Repositories</h2>
            </div>
        </div>
    )
}

export default App
