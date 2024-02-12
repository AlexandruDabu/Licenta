import React from "react";
import { Button, Card, CardContent, CardDescription, CardHeader, CardMeta, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props{
    activity: Activity
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;

}

export default function ActivityDetails({activity, cancelSelectActivity,openForm}:Props){
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
                    <Button onClick={()=>openForm(activity.id)}basic color = 'blue' content='Edit'/>
                    <Button onClick={cancelSelectActivity} basic color = 'grey' content='Cancel'/>
                </Button.Group>
            </CardContent>
        </Card>
    )
}