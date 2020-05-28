import React from 'react';




class Introduction extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{height:"100vh",minHeight:"100vh",maxHeight:"100vh"}}>
                <div style={{height:"100%",overflow:"auto"}}>
                    
                    <div style={{height:"20%",maxHeight:"20%",minHeight:"20%",margin:"0% 5% 2% 5%",overflow:"auto"}}>
                        <h2>HARSHIT BIREN SHAH</h2>
                        <p>Developer . Architect . Bug Hunter</p>
                        
                        
                    </div>

                    <div style={{display:"flex",height:"5%",maxHeight:"5%",minHeight:"5%",width:"15%",justifyContent:"space-between",margin:"0% 5% 0% 5%",overflow:"auto"}}>
                         <a href="https://github.com/harshitshah4" target="_blank"><i class="fab fa-github"></i></a>
                         <a href="https://twitter.com/harshitsh4h" target="_blank"><i class="fab fa-twitter"></i></a>
                    </div>
                    
                    
                    
                    <div style={{maxHeight:"60%",margin:"2% 5% 2% 5%",overflow:"auto",textAlign:"justify",fontSize:"small"}}>
                            <p>
                            I have keen interest in building and architecting web and internet applications .  I have been experimenting with cloud solutions to develop a fully scalable and highly reliable system , that helps in tackling latest Big Data problems . I also practice Security Researching in my free time . I run with the motto of Security First , Internet is not secure by default , it requires great effort to making it secure , and that is what I like to do.
                            </p>
                            <p>
                            I am really fanatic about technology and implementing them in real life applications.
                            </p>
                            <p>
                            But the most important of all , I am a <b>Learner</b> , We as humans underestimate ourselfs by only exploring/learning limited fields , I believe that any concept or field , is just a Google Search and few books away.
                            </p>
                    </div>
                    <div style={{display:"flex",justifyContent:"center",height:"10%",maxHeight:"10%"}}>
                        <a href="mailto:harshitshah4@gmail.com">
                            <button style={{border:"none",borderRadius:"20px",padding:"20%",color:"white",fontWeight:"bold",backgroundColor:"#0EED4A"}}>CONTACT</button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Introduction;