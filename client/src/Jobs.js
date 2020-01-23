import React from 'react'
import Typography from '@material-ui/core/Typography';

import Job from './Job';

//mobile stepper progress
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import JobModal from './JobModal';

export default function Jobs({jobs}) {

    //modal
    const [open, setOpen] = React.useState(false);
    //empty object is default state for React
    const [selectedJob, selectJob] = React.useState({})
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    //pagination
    const [activeStep, setActiveStep] = React.useState(0);
    //step ==0, show 0-49
    //step ==1, show 50-99
    const numberOfJobs = jobs.length;
    const numberOfPages = Math.ceil(numberOfJobs/50);
    const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50 + 50));
    
    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
      };
    
      const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
      };

    

    return (
        
        <div className={'jobs'}>
            <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
            <Typography variant="h4" component="h1">
                Entry Level Software Jobs
            </Typography>
            
            <div>
                <Typography variant='h6'>Found {numberOfJobs} jobs</Typography>
            </div>
            {
                jobsOnPage.map(
                    (job, i) => <Job key={i} job={job} onClick={ () => 
                        {
                            console.log({job})
                            handleClickOpen();
                            selectJob(job)
                        }
                     } />
                )
            }
            <div>
                <Typography variant='caption'>Page {activeStep + 1} of {numberOfPages}</Typography>
            </div>
            <MobileStepper
                variant="progress"
                steps={numberOfPages}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === numberOfPages - 1}>
                    Next
                    <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    <KeyboardArrowLeft />
                    Back
                    </Button>
                }
            />

        </div>
    )
}