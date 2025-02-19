import * as React from 'react';
import Typography from '@mui/material/Typography';
import { auth } from '../../auth';

export default async function HomePage() {
  const session = await auth();

  return (    
      <div>
        <h1>Roadmap</h1>
        <Typography>
          Woof, {session?.user?.name || 'User'}!
        </Typography>
        <Typography>
          This is a roadmap for the development of the project.
        </Typography>
        <Typography>
          The project is still in development.
        </Typography>
        <h2>
          <strong>Songs</strong><br/>
        </h2>
        <Typography>
          I think we could make an actually good music player.
        </Typography>
        <h2>
          <strong>Calendar</strong><br/>
        </h2>
        <Typography>
          Very much a work in progress.
        </Typography>
        <h3>Performances<br/>
          Rehearsals
        </h3>
      </div>
  );
}
