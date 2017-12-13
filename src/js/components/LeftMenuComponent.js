import React from "react";

var readStoryArray=[];
class LeftMenu extends React.Component{

                                                   // Changing style to get Selected Item
changeStyle(item){
for(let i=0;i<this.props.allSelectedStories.length;i++)
{
	var ID=i+"_ID";

	if(this.props.allSelectedStories[i]==item){
         document.getElementById(ID).style.background="#c66363";
	}
	else
		document.getElementById(ID).style.background="#f5f5f5";
}
}

	render(){
		
if(this.props.allSelectedStories.length!=0){
		var temp=this.props.allSelectedStories.map((item,index)=>{
		var	id=index+"_ID";
			return (
                 
				    <div key={index} className="panel panel-default">
                       <div  id={id} className="panel-heading">{item.title}</div>
                           <div className="panel-body">
                                 <span className="pull-right">Comments: {item.num_comments}</span> 
                                 <span className="pull-left">Author: {item.author}</span> 
                                 <button id={index} onClick={()=>{this.changeStyle(item,id);this.props.openStory(item)}} className="pull-right">Open</button>
                           </div>
                    
                    </div>
		)});
	
		return(
				<div>
			
				<br></br><br></br><br></br><br></br>

					{temp}
				
				
				</div>			
				);
	
}
else 
return(
<div>
<div>
<br></br><br></br><br></br><br></br>
 <div className="panel panel-default">
                       <div className="panel-heading">ADD STORIES HERE</div>
                           <div className="panel-body">
                                 <span className="pull-right">Click On ADD button to Add Stories</span> 
                                 
                           </div>
                    </div>
</div>			
</div>
);
}
}

module.exports=LeftMenu;