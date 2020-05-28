import React from 'react';

import Introduction from '../components/Introduction'
import Projects from '../components/Projects'

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {tabs:[{name:"Projects",component:<Projects/>}],selected:0}
    }


    render(){
        return(
            <div style={{height:"100vh",maxHeight:"100vh",minHeight:"100vh"}}>
        
                <div style={{display:"flex",flexDirection:"row",height:"4%",padding:"1%"}}>
                    {
                        this.state.tabs.map((tab,index)=>{
                            
                            return (

                                (this.state.selected === index)?<button style={{border:"none",borderRadius:"20px",padding:"0% 3% 0% 3%",backgroundColor:"#0EED4A",color:"white",margin:"0% 1% 0% 1%"}}>{tab.name}</button>:<button onClick={()=>{this.setState({selected:index})}} style={{border:"none",borderRadius:"20px",padding:"0% 3% 0% 3%",backgroundColor:"white",color:"black",margin:"0% 1% 0% 1%"}}>{tab.name}</button>
                                
                            )
                            
                        })
                    }
                    
                </div>
                
                <div style={{width:"100%",height:"80%"}}>{this.state.tabs[this.state.selected].component}</div>    
                
                
        
            </div>
        );
    }

}

export default Home;