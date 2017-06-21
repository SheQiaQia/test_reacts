//参考:http://www.tuicool.com/articles/mqqAJ37
//
//var Menu = React.createClass({
//	getInitialState:function(){
//		return(
//			{
//				linke:this.props.children
//			}
//		)
//	},
//	hendleClick:function(event){ 
//		alert(this.state.linke);
//		this.setState({
//			linke:this.props.children
//		})
//	},
//	render: function() {
//		return (
//			<li onClick={this.hendleClick}>
//				<a href={this.props.link}>{this.props.children}</a>
//			</li>
//			
//		)
//	}
//});
//
//var Menus = React.createClass({
//	render: function() {
//		var menus = this.props.items.map(function(item) { //这里遍历.map
//			return ( 
//				<Menu link = {item.link} > {item.text} </Menu>
//				)
//		});
//		return ( 
//			<ul> {menus} </ul>
//			)
//	}
//});
//ReactDOM.render( 
//	<div className='head'>		
//		<Menus items = {[
//				{
//					text: '首页',
//					link: 'javascript:;'
//				},
//
//				{
//					text: '测试1',
//					link: 'javascript:;'
//				},
//
//				{
//					text: '测试2',
//					link: 'javascript:;'
//				},
//
//				{
//					text: '测试3',
//					link: 'javascript:;'
//				}
//
//			]}>
//		< /Menus>
//	</div>,
//	document.getElementById("test")
//)
var Title = React.createClass({
	render:function(){
		return(
			<li onClick={this.hendleClick}>
				<a href={this.props.link}>{this.props.children}</a>
			</li>
		)
	}
})
var Text = React.createClass({
	render:function(){
		return(
			<div>
				{this.props.txt}
			</div>
		)
	}
})
var Titleul = React.createClass({
	render:function(){
		var menus = this.props.items.map(function(item) { //这里遍历.map
			return ( 
				<Title link = {item.link} > {item.text} </Title>
				)
		});
		return ( 
			<ul> {menus} </ul>
			)
	}
})
var Content = React.createClass({
	render:function(){
		return(
			<div className="head">	
			<Titleul items = {[
				{
					text: '首页',
					link: 'javascript:;'
				},

				{
					text: '测试1',
					link: 'javascript:;'
				},

				{
					text: '测试2',
					link: 'javascript:;'
				},

				{
					text: '测试3',
					link: 'javascript:;'
				}

			]}>
		< /Titleul>
		</div>
		
		)
	}
})
var Body = React.createClass({
	render:function(){
		<Content />
	}
})
ReactDOM.render(
	<Content/>,
	document.getElementById("test")
)
