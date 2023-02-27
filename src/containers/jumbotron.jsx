import React from 'react';
import JumboData from '../fixtures/jumbo.json'

export function JumbotronContainer(){
    return(      
        <section >
            {JumboData.map((item)=>(
                <div key = {item.id} className="component">
                    <div className='text'>
                        <h1>{item.title}</h1>
                        <h2>{item.subTitle}</h2>
                    </div>
                    <img src={item.image} alt = {item.alt} />
                 </ div>   
            )) }
           
        </section>
    )
}
