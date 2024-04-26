import React from 'react';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import FollowButton from './FollowButton';

interface Props {
    profile: Profile;
}

function truncate(str: string | undefined){
    if(str) {
        return str.length > 40 ? str.substring(0,37) + '...' : str;
    }
}

export default observer(function ProfileCard({profile} : Props){
    return(
        <Card as={Link} to={`/profiles/${profile.username}`}>
            <Image src={profile.image || '/assets/user.png'}/>
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>{profile.bio ? truncate(profile.bio) : `There is nothing listed about ${profile.displayName}`}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user'/>
                {profile.followersCount} followers
            </Card.Content>
            <FollowButton profile={profile}/>
        </Card>
    )
})