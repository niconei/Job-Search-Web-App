import React from 'react'
import Typography from '@material-ui/core/Typography';

import Job from './Job';


export default function Jobs({jobs}) {
    return (
        <div className={'jobs'}>
            <Typography variant="h4">
                Entry Level Software Jobs
            </Typography>
            {
                jobs.map(
                    job => <Job job = {job} />
                )
            }
        </div>
    )
}