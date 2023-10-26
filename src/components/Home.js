import { useState } from 'react'

function singleMenuComponent(props){
    console.log('props' , props)
    return 



}





export default function Home() {
    const [menuItems, setMenuItems] = useState(['hot dog', 'burger'])
    // 1. fetch data
    // 2. get array of objects
    // 3. render each object 
    // 3.1 create a state variable
    // 3.2 put inside state variable the array of objects


    console.log('menuItems ->', menuItems)
    const handleBtnClick = () => {
        console.log('hey class from a function')
        fetch('https://codice-boca.web.app/menu')
            .then(res => res.json()) // contacting the API
            .then(data => setMenuItems(data)) // get clean data from res
            .catch(x => console.error(x))



    }







    return (
        <div>

            <h2>I'm Home component</h2>
            <button onClick={() => handleBtnClick()}>get data</button>
            {menuItems && menuItems.map((singleItem) => {
                return (
                    <div>
                        <h2>{singleItem.title}</h2>
                        <p>singleItem.description</p>
                    </div>
                )
            
            
            
            
            })}
        
       
       </div>
       
    )
}