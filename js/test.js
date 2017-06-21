//http://www.tuicool.com/articles/mqqAJ37
var Test = React.createClass({
	getInitialState:function(){
		return{
			stated:0
		};
	},
	handleClick:function(event){
		this.setState({stated:this.state.stated+1});
	},
	render: function() {
		alert(datas);
		return (
			 <div>
            {datas.map((e, key) => {
                    return (
                        <p onClick={this.handleClick} key={this.state.stated}>{e}</p>
                    )
                })
            }
        	</div>
		)

	}
});
ReactDOM.render( 
	<Test one = {datas}/>,
	document.getElementById("test")
)