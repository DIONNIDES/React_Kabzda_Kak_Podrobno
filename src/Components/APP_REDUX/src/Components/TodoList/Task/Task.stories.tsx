import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Task, TaskType} from './Task';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {AppRootStateType, store} from '../../../redux/store';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Task',
    component: Task,
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const TaskWithRedux = () => {
    const task = useSelector<AppRootStateType, TaskType>(state => state.tasks['todolistID1'][0])
    return < Task todolistID={'todolistID1'} task={task}/>
}

const Template: ComponentStory<typeof TaskWithRedux> = (args) => <Provider store={store}><TaskWithRedux /></Provider>;

export const TaskWithReduxStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

