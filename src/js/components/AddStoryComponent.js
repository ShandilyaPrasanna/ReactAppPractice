import React from "react";

var readStoryArray=[];
class AddStoryComponent extends React.Component{


													//function to add story in the leftMenu
addStory(item){
	if(item.button_text=="REMOVE"){
		item.button_text="ADD";
		var index = readStoryArray.indexOf(item);
		if (index > -1) 
    		readStoryArray.splice(index, 1);
	}
	else{
	item.button_text="REMOVE";
    readStoryArray.push(item);

   
}
   this.props.AddStoryfun(readStoryArray);        //passing array to parent function
}
	render(){

		var temp=this.props.top20Story.map((item,index)=>{
			return (

				     <div key={item.storyId} className="panel panel-default">
                       <div className="panel-heading ">
                         <div className="clearfix">
                             <h3 pull-left>{item.title}</h3>
        					 <button className="btn btn-default pull-right " id={item.storyId} onClick={()=>{this.addStory(item)}}>{item.button_text}</button>
            
        				 </div>
                       </div> 

                           <div className="panel-body">
                                 <span className="pull-right">Comments: {item.num_comments}</span> 
                                 <span className="pull-left">Author: {item.author}</span> 
                                 
                           </div>
                    </div>
		)});
	
		return(
				<div>
			
				<br></br><br></br><br></br><br></br>

					{temp}
				
				<button type="button" className="btn btn-lg btn-danger pull-right" onClick={()=>{this.props.pageChange(1);}}>Next</button>	
				{this.props.pageNo!=0?<button type="button" className="btn btn-lg btn-danger pull-left" onClick={()=>{this.props.pageChange(-1);}}>Prev</button>:null}	
				</div>			
				);
	
}

}

module.exports=AddStoryComponent;