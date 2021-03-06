import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/Project.css"


function ProjectCardWrapper(props){
    return(
    (props.action.external)?<a href={props.action.link} target="_blank" className={props.className} style={props.style}>{props.children}</a>:<Link to={props.action.link} className={props.className} style={props.style}>{props.children}</Link>
    )
}

function Project(props){

    return (

        <ProjectCardWrapper action={props.action} className="project-card" style={{display:"flex",flexDirection:"column",height:"98%",margin:"2%",padding:"2%",backgroundColor:"white"}}>
            <h3 style={{textAlign:"center"}}>{props.title}</h3>
            <div style={{display:"flex",minHeight:"10%",maxHeight:"10%",flexWrap:"wrap",justifyContent:"space-between",overflowY:"auto"}}>
                {
                    
                        props.tags.map((tag)=>{
                            return (
                                <button style={{cursor:"default",backgroundColor:"transparent",border:"1px solid grey",borderRadius:"10px",maxHeight:"50%",fontSize:"small"}}>{tag}</button>
                            )
                        
                        })
                        
                    
                }
            </div>
            <p style={{height:"55%",minHeight:"55%",maxHeight:"55%",overflowX:"auto",textAlign:"justify",fontSize:"small"}}>
                {props.description}
            </p>
            
                {
                    props.action.external === true ? <a href={props.action.link} target="_blank"><button style={{border:"none",borderRadius:"20px",padding:"2% 15% 2% 15%",backgroundColor:"#F5F5F5",color:"black",fontWeight:"lighter"}}>{props.action.text}</button></a> : <Link to={props.action.link}>
                    <button style={{border:"none",borderRadius:"20px",padding:"2% 15% 2% 15%",backgroundColor:"#F5F5F5",color:"black",fontWeight:"lighter"}}>{props.action.text}</button>
                </Link>
                }
  
        </ProjectCardWrapper>

    )

}


class Projects extends React.Component{
    constructor(props){
        super(props);

        this.state =  {projects:[{title:"JainSaraswati",description:"It is an Android App that focuses on making life easier for Jains , this app have various features including Panchang , being one of the most important. Various astronomical calculations are performed within Panchang fragment ,Some informations such as Sunrise , Sunset are taken from SwissEph . This app communicates to Apache Server written in PHP , which fetches data such as music  , books , etc and link to media files. I didn't knew anything about astronmical calcluations , so I started doing my own research , I read articles , blogs , and got deep into history of it . This teaches us that , we can almost learn anything if we set our mind to it.",tags:["Android","PHP","MySQL"],action:{text:"View",link:"https://play.google.com/store/apps/details?id=com.saraswati.jain.jainsaraswati",external:true}},{title:"Twitter Sentiment Analysis",description:"Twitter generates a lot of data , as much as an average of 6000 tweets per second , and these tweets hold valuable information too . The aim of this project is to aggregate the valuable information from raw data , convert it into structured data and then , visualize it . It is challenging to do all this in real-time and at scale, While buildiing this project we also consider into architectural decisions that we take.",tags:["Spark Streaming","React","Mongo","Node js","IBM Watson Tone Analyzer"],action:{text:"View",link:"/project/TwitterSentimentAnalysis",external:false}},{title:"Whose picture is this ?",description:"This Web app provides a platform for the user/organization to train/re-train and test theirs ML/AI Image recognition . User could upload images , get predictions , relabel or fix those predictions and then re-train and get predictions again . The app is hosted on cloud , and consists of Frontend , A backend server  and a model server . Backend server talks with model server and get predictions . This was a custom made model , where in an image could lie within given categories . ",tags:["React","Node js","Mongo","Flask","AI","AWS","Websockets","REST"],action:{text:"View",link:"/project/YeTasveerKiskiHai"}},{title:"Pothole Problem",description:"It provides an end to end to solution for Authorties and Users  , to track ,filter, montior a Pothole . This app leverages AWS Rekognition to identify Pothole images . The solution is deployed on AWS Cloud , and is architectured under EC2 instances running Node js under Auto Scaling Group , also uses AWS S3 , AWS Cloudfront , AWS Lambda , and more . All In All it is a highly scalable solution.",tags:["Android","Node js","Mongo","AWS","Cloud Architecture","JWT","REST"],action:{text:"View",link:"/project/PotholeProblem"}},{title:"LC3",description:"A LC-3 Virtual Machine implementation in GO . This is a simple project written to demonstrate LC-3 VM About LC3 is a fictional VM used to teach graduate students about assembly.forms basis to understand the working of a Virtual Machine. This VM is originally based on article written by @justinmeiners and @rpendleton.",tags:["Virtual Machine","Golang","Assembly"],action:{text:"View",link:"https://github.com/harshitshah4/lc3-go",external:true}},{title:"And more...",description:"Checkout my Github Profile to see some of my other projects.",tags:["Github"],action:{text:"View",link:"https://github.com/harshitshah4",external:true}}]}

    }


    render(){
        return(
            <div style={{width:"100%",height:"100%"}}>

                <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"row",overflow:"hidden",overflowX:"scroll"}}>
                {
                    this.state.projects.map((project)=>{
                        return <Project title={project.title} description={project.description} action={project.action} tags={project.tags}/>
                    })
                }
                </div>

                
 
            </div>
        );

    }

}

export default Projects;