import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Videos from './panels/Videos';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'videos',
			token: null,
			search : '',
			videos : []
		};

		this.onChange = this.onChange.bind(this)
		this.onButtonHandler = this.onButtonHandler.bind(this)
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppAccessTokenReceived':
					this.setState({ token : e.detail.data.access_token });
					this.getVideos(0)
					break;
				case 'VKWebAppCallAPIMethodResult':
					if (e.detail.data.request_id === "videos") {
						this.setState({
							videos : e.detail.data.response.items
						})
					}
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send("VKWebAppGetAuthToken", {"app_id": 6923699, "scope": "video"})
	}

	getVideos(offset) {
		let searchString = this.state.search
		connect.send("VKWebAppCallAPIMethod", 
			{
				"method" : "video.search", 
				"request_id" : "videos", 
				"params" : {
					"q" : searchString,
					"adult" : 1,
					"v":"5.92", 
					"offset" : offset,
					"access_token": this.state.token,
					"count" : 100
				}
			}
		);
	}

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	onChange (search) { this.setState({ search }); }

	onButtonHandler() { 
		this.getVideos(0)
	}

	render() {
		return (
			<View activePanel={this.state.activePanel}>
				<Videos 
					id="videos" 
					videos={this.state.videos}
					search={this.state.search}
					onChange={this.onChange}
					onButtonHandler={this.onButtonHandler}
				/>
			</View>
		);
	}
}

export default App;
