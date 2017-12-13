var React=require('react');
var Navbar=React.createClass({
    render: function(){
        return(

            <div className="container-fluid">
        <div className="row">
        <div className="col-md-12">
            <nav className="navbar navbar-fixed-top navbar-inverse" role="navigation">
                <div className="navbar-header">

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                         <span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                    </button> <a className="navbar-brand" href="#"> HACKER NEWS APP </a>
                </div>

             

            </nav>
        </div>
    </div>
</div>

        );
    }
});

module.exports=Navbar;
