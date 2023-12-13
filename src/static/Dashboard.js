import React from 'react';
import deshboardicon1 from '../assets/image/icons/pt_contact.png';
import deshboardicon2 from '../assets/image/icons/pt_schedule.png';
import deshboardicon3 from '../assets/image/icons/pt_chart.png';
import deshboardicon4 from '../assets/image/icons/pt_visit.png';

 const homeDashboard = [
    {
        cardDetail: 'Patient contact in last few days',
        cardItem: 'Over 510',
        exact: true,
        imgIcon: deshboardicon1,
        className:'cardbxbackground1'
    },
    {
        cardDetail: 'Patient Scheduled in last few days',
        cardItem: 'Over 235',
        exact: true,
        imgIcon: deshboardicon2,
        className:'cardbxbackground2',
    },
    {
        cardDetail: 'Charts Prepared in last few days',
        cardItem: 'Over 345',
        exact: true,
        imgIcon: deshboardicon3,
        className:'cardbxbackground3'
    },
    {
        cardDetail: 'How may people pre visit to the center',
        cardItem: '90%',
        exact: true,
        imgIcon: deshboardicon4,
        className:'cardbxbackground4',
    },
   
];
export default homeDashboard;