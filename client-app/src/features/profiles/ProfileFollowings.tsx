import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../app/stores/store';
import { Card, Grid, GridColumn, Header, Tab } from 'semantic-ui-react';
import ProfileCard from './ProfileCard';

export default observer(function ProfileFollowings(){
    const {profileStore} = useStore();
    const {profile, followings, loadingFollowings,activeTab} = profileStore;

    return (
        <Tab.Pane loading={loadingFollowings}>
            <Grid>
                <Grid.Column width={16}>
                    <Header floated='left'
                    icon='user' 
                    content={ activeTab === 3 ? `People following ${profile?.displayName}` : `People ${profile?.displayName} is following`}/>
                </Grid.Column>
                <GridColumn width={16}>{followings.length ? (
                    <Card.Group itemsPerRow={4}>
                        {followings.map(profile=>(
                            <ProfileCard key={profile.username} profile={profile}/>
                        ))}
                    </Card.Group>
                    ) : (
                    activeTab === 3 ? <span style={{whiteSpace: 'pre-wrap', color:'grey'}}>{profile?.displayName} is not followed but anybody at this time. You can be the first one!</span> : <span style={{whiteSpace: 'pre-wrap', color:'grey'}}>{profile?.displayName} is not following anybody!</span>
                    )}
                    
                </GridColumn>
            </Grid>
        </Tab.Pane>
    )
})