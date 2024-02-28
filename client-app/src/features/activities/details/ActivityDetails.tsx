import React, { useEffect } from "react";
import { useStore } from "../../../app/stores/store";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import {useParams } from "react-router-dom";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import { Grid } from "semantic-ui-react";


export default observer(function ActivityDetails(){
const {activityStore} = useStore();
const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
const {id} = useParams();

useEffect(() => {
    if(id) loadActivity(id);
}, [id, loadActivity])

if (loadingInitial || !activity) return <LoadingComponent/>;

    return(
        <Grid>
            <Grid.Column width={10}>
                <ActivityDetailedHeader activity={activity}/>
                <ActivityDetailedInfo activity={activity}/>
                <ActivityDetailedChat/>
            </Grid.Column>
            <Grid.Column width={6}>
                <ActivityDetailedSidebar/>
            </Grid.Column>
        </Grid>
    )
})