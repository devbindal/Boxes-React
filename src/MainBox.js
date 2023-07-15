import React  from 'react';
import ReactDOM from 'react-dom/client';
import data from './data';
import Box from './Box';
function MainBox(){
    const [boxData,setData]=React.useState(data);

    function toggle(id){

        setData(prevData =>{
           return  prevData.map((item)=> {
                return item.id===id ? {...item,isShown: !item.isShown} : item
           })
        })
    }
    


    const boxElements=boxData.map(item => (
        <Box key={item.id} on={item.isShown} toggle={()=>{toggle(item.id)}}/>
    ))
    
    return(

        <div >
            <section className='mainBox'>
                {boxElements}
            </section>
            
        </div>
    )
}

export default MainBox;