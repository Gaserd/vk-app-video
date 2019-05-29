import React from 'react';
import { Panel, PanelHeader, Search, Div, Button, Group, List, Cell, Header } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


class Videos extends React.Component {

    getObjectUrl(url) {
        let search = url.replace('https://vk.com/video_ext.php?','')
        let object_url = ( search === "") ? null : search.split("&").reduce(function(prev, curr, i, arr) {
            let p = curr.split("=");
            prev[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
            return prev;
        }, {});
        return object_url
    }

    getStringHref(url) {
        if (url.indexOf('youtube.com') !== -1) {
            return url
        } else {
            let obj = this.getObjectUrl(url)
            return `https://vk.com/video${obj.oid}_${obj.id}`
        }
    }



	render() {

        this.getObjectUrl('https://vk.com/video_ext.php?oid=-9099896&id=456239279&hash=1b355cbe6355a5dd&__ref=vk.api&api_hash=15543777299b9470af795f99b5cd_GM4TKNJQHE3TG')

        console.log(this.props)

		return (
			<Panel id="videos">
                <PanelHeader></PanelHeader>
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
                </Group>
                <Group>
                    <List>
                        {
                            this.props.videos.map((video, index) => (
                                <Cell 
                                    key={index}
                                >
                                    <Header>{video.title}</Header>
                                    <Div
                                        style={{ textAlign : 'center' }}
                                    >
                                        <a 
                                            href={this.getStringHref(video.player)}>
                                            <img 
                                                style={{ maxWidth : 320 }}
                                                alt=""
                                                src={(typeof video.photo_800 == 'undefined') ? video.photo_640 : video.photo_800}> 
                                            </img>
                                        </a>
                                    </Div>
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
