import React from 'react';


class ReadStory extends React.Component{


constructor(props){
    super(props);
    this.state={
     
    top20Comments:[],
    showDescription:false,
   }
}

                                                 // to Check if other story from leftMenu is clicked
componentWillReceiveProps(){
    this.setState({showDescription:false});
}

componentDidMount(){

this.getComments(this.props.selectedStory.storyId); // getting comments based on story ID


}

getComments(storyId){
   var url="https://hn.algolia.com/api/v1/search?tags=comment,"+storyId;
     $.ajax({
        url:url,
        type:"GET",
        dataType:"JSON",
        success:function(data){
            console.log(data);
            var arry=[];
        for(let i=0;i<data.hits.length;i++){
                let obj={
                        author:data.hits[i].author,
                        comment_text:data.hits[i].comment_text,
                        };
                arry.push(obj);

                }

            this.setState({top20Comments:arry});
        }.bind(this),
        error:function(err){
            console.log(err);
        }.bind(this)
    });
}



    render(){
        console.log("URRRRRRL",this.props.selectedStory.url);
var temp=this.state.top20Comments.map((item,index)=>{
            return (

                    <ul className="commentList">
                        <li>
                           <div >
                             </div>
                <div className="commentText">
                    <p className="">{item.author}</p> <span className="date sub-text">{item.comment_text}}</span>
                </div>
            </li>
        </ul>

        )});

        return(
<div>
        {!this.state.showDescription?<div className="detailBox col-lg-12 col-sm-12 col-md-12">
    <div className="titleBox">
      <label>Comment Box</label>
         <p className="taskDescription">{this.props.selectedStory.title}</p>
    </div>
    <div className="commentBox">
        
       
        {temp}
    </div>
    <div className="actionBox">
        
        
            <div className="clearfix">
                 <button className="btn btn-default pull-left" onClick={()=>{this.props.goBack();}}>Goto Add Stories</button>
                 <button className="btn btn-default pull-right " onClick={()=>{this.setState({showDescription:true});}}>Read More</button>
            </div>
        
    </div>
</div>:<div><br></br><br></br><br></br><br></br>
            <iframe height="300px" width="100%" src={this.props.selectedStory.url} name="iframe_a"></iframe>
            <button className="btn btn-default pull-right " onClick={()=>{this.setState({showDescription:false});}}>Go Back</button></div>}
</div>
        );
    }
};

module.exports=ReadStory;
