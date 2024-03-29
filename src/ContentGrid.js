import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import InboxView from './Inbox';
import CustomerCard from './CustomerCard';
import Divider from '@mui/material/Divider';
import TabPanel from './TabPanel';
import { Stack } from '@mui/system';
import SupportTicketChart from './SupportTicketChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ContentGrid() {
  return (
    <div>
      <Grid container spacing={.0}>
        <Grid xs sx={{ marginRight: '1px' }}>
          <Item sx={{ height: '100%', paddingLeft: '30px' }}>
            <Stack spacing={3}>
              <InboxView></InboxView>
              <Divider></Divider>
              <SupportTicketChart></SupportTicketChart>
            </Stack>
          </Item>
        </Grid>
        <Grid xs={6} sx={{ marginRight: '1px' }}>
          <Item sx={{ height: '100%' }}>
            <TabPanel></TabPanel>
          </Item>
        </Grid>
        <Grid xs>
          <Item sx={{ height: '100%', paddingLeft: '40px' }}>
            <CustomerCard></CustomerCard>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContentGrid;