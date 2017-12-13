																//Main Component -Parent Component 

import React from "react";
import ReactDom from "react-dom";
import Navbar from "./components/Navbar.js";
import AddStory from "./components/AddStoryComponent.js";
import LeftMenu from "./components/LeftMenuComponent.js";
import ReadStory from "./components/ReadStoryComponent.js";   


class Main extends React.Component{
constructor(){
	super();
	this.state={
     
    top20Story:[],
    AddStoryArry:[],
    pageNo:0,
    selectedStory:{},
	ReadStoryFlag:false,
  

	}
}

componentDidMount(){

this.getStories(this.state.pageNo);          				//getting top Stories
	
}

															// Function to get Stories based  on Page No
getStories(pageNo){
	var url="http://hn.algolia.com/api/v1/search?tags=story&page="+pageNo+"&query=";
	 $.ajax({
		url:url,
		type:"GET",
		dataType:"JSON",
		success:function(data){
			console.log(data);
			var arry=[];

for(let i=0;i<data.hits.length;i++){
	let obj={
	 title:data.hits[i].title,
     author:data.hits[i].author,
     num_comments:data.hits[i].num_comments,
     storyId:data.hits[i]._tags[2],
     createdAt:data.hits[i].created_at,
     url:data.hits[i].url,
     button_text:"ADD",
	};
	arry.push(obj);

}

			this.setState({top20Story:arry,pageNo:pageNo});    
		}.bind(this),
		error:function(err){
			console.log(err);
		}.bind(this)
	});
}
																//Add Stories to Read Later
AddStory(arr){
this.setState({AddStoryArry:arr});
}

												                //Function to change Page Number 
changePageNo(inc){

	 var currentpageNo=this.state.pageNo+inc;
	 this.getStories(currentpageNo);            				// geting stories of current Page
}

																// Function to Get Selected Story from LeftMenuComponent
selectedStory(story){
console.log(story);
this.setState({selectedStory:story,ReadStoryFlag:true});
}

	render(){
		
return(

<div className="container">
  <Navbar />
  <div className="modal-body row">
     <div className="col-md-3 col-lg-3 col-sm-4" >
            <LeftMenu allSelectedStories={this.state.AddStoryArry} 
            		  openStory={this.selectedStory.bind(this)} />
      </div>
     <div className="col-md-9 col-lg-9 col-sm-8">
             {!this.state.ReadStoryFlag?<AddStory AddStoryfun={this.AddStory.bind(this)} 
             		   top20Story={this.state.top20Story} 
             		   pageNo={this.state.pageNo} 
             		   pageChange={this.changePageNo.bind(this)}
               />:
               <ReadStory selectedStory={this.state.selectedStory} 
                          goBack={()=>{this.setState({ReadStoryFlag:false})}}/>}
      </div>
 </div>

 
</div>
);}
}

ReactDom.render(<Main />,document.getElementById("app"));