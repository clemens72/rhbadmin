'use client';

import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box, Paper } from '@mui/material';
import AudioPlayer from '@/app/components/AudioPlayer';

const rows: GridRowsProp = [
  { id: 1, title: 'Woof!', link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/6606c6659073d93ac8573a45/1711720047223/01+Woof%21.mp3/original/01+Woof%21.mp3', comments: 'finished' },
  { id: 2, title: 'Blue Sky', link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/63adee8aea860264bad9ca3f/1672343184794/Blue+Sky+audio.mp3/original/Blue+Sky+audio.mp3', comments: 'live in studio' },
];

export default function SongsPage() {
  const [selectedSong, setSelectedSong] = React.useState(rows[0]);

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Song', width: 150 },
    { field: 'link', headerName: 'File', width: 150 },
    { field: 'comments', headerName: 'Comments', width: 200 },
  ];

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <AudioPlayer 
          url={selectedSong.link}
          title={selectedSong.title}
        />
      </Paper>
      
      <DataGrid 
        rows={rows} 
        columns={columns}
        sx={{ 
          flexGrow: 1,
          '& .MuiDataGrid-row': {
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
            '&.Mui-selected': {
              backgroundColor: 'primary.light',
            }
          }
        }}
        onRowClick={(params) => setSelectedSong(params.row)}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  );
}