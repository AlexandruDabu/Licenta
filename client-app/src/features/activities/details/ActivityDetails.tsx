import React, { useEffect } from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import { NavLink, useParams } from "react-router-dom";


export default observer(function ActivityDetails(){
const {activityStore} = useStore();
const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
const {id} = useParams();

useEffect(() => {
    if(id) loadActivity(id);
}, [id, loadActivity])

if (loadingInitial || !activity) return <LoadingComponent/>;

    return(
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`}></Image>
            <CardContent>
                <CardHeader>{activity.title}</CardHeader>
                <CardMeta>
                    <span>{activity.date}</span>
                </CardMeta>
                <CardDescription>
                    {activity.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button.Group widths='2'>
                    <Button as={NavLink} to={`/manage/${activity.id}`} basic color = 'blue' content='Edit'/>
                    <Button as={NavLink} to='/activities' basic color = 'grey' content='Cancel'/>
                </Button.Group>
            </CardContent>
        </Card>
    )
})