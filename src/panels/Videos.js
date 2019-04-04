import React from 'react';
import { Panel, PanelHeader, Search, Div, Button, Group, List, Cell, Header } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

class Videos extends React.Component {
	render() {
		return (
			<Panel id="videos">
                <PanelHeader>VKUI</PanelHeader>
                <Search 
                    value={this.props.search} 
                    onChange={this.props.onChange}
                />
                <Div>
                    <Button 
                        size="xl" 
                        level="secondary"
                        onClick={this.props.onButtonHandler}
                    >Искать</Button>
                </Div>
                <Group>
                    <List>
                        {
                            this.props.videos.map((video, index) => (
                                <Cell 
                                    key={index}
                                >
                                    <Header>{video.title}</Header>
                                    <iframe src={video.player} width="607" height="360" frameborder="0"></iframe>
                                </Cell>
                            ))
                        }
                    </List>
                </Group>
            </Panel>
		);
	}
}

export default Videos;
