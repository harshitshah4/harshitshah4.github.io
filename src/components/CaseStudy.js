import React from 'react';

import { Link } from 'react-router-dom';

class CaseStudy extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{width:"100%",height:"100vh",minHeight:"100vh",maxHeight:"100vh"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"row",backgroundColor:"#0EED4A",color:"white",height:"10%",minHeight:"10%",maxHeight:"10%",overflow:"auto"}}>
                    <Link to="/" style={{alignSelf:"center"}}><i style={{color:"white"}} class="fas fa-times"></i></Link>
                    
                    <p style={{textAlign:"center",fontWeight:"bold",fontSize:"medium"}}>{this.props.title}</p>
                    
                    <div></div>
                </div>
                
                <iframe style={{width:"100%",height:"85%",minHeight:"85%",maxHeight:"85%",border:"none"}} src={this.props.link} />
            </div>

        )
    }

}

export default CaseStudy;