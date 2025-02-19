'use client';

import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Box, Paper } from '@mui/material';
import AudioPlayer from '@/app/components/AudioPlayer';

const rows: GridRowsProp = [
  { id: 1, title: 'Holes',
    date: '12-13-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e34599f46606fe0dca70/1739973453664/Pockets+%28ver4%29.mp3/original/Pockets+%28ver4%29.mp3',
    comments: 'southern rock and slide geetar' },

  { id: 2, title: 'Sea Shanty 3', 
    date: '11-10-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e38670c8ea7214ed0776/1739973513576/Sea+Shanty+3+Nylon+Guitars.mp3/original/Sea+Shanty+3+Nylon+Guitars.mp3',
    comments: 'inspired by runescape\'s sea shanty 2' },
  
  { id: 3, title: 'James Blue', 
    date: '11-02-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e5f97429bd6fc3add67c/1739974142297/James+Blue.mp3/original/James+Blue.mp3',
    comments: 'double the speed for james brown mode' },
  
  { id: 4, title: 'Kangarucifer', 
    date: '11-02-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e60a70c8ea7214ed808c/1739974159748/Kangarucifer+first-cut.mp3/original/Kangarucifer+first-cut.mp3',
    comments: 'twitch prompt: hard rock song about a kangaroo' },
  
  { id: 5, title: 'GOTE', 
    date: '10-31-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e62a9d494b45843f7364/1739974190280/GOTE+Intro.mp3/original/GOTE+Intro.mp3',
    comments: 'goals, obstacles, tactics and expectations jam' },

  { id: 6, title: 'Lighter', 
    date: '10-22-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e6427dc2e63cf48d0053/1739974214731/Lighter+%28sketch%29.mp3/original/Lighter+%28sketch%29.mp3',
    comments: 'a weight has been lifted' },

  { id: 7, title: 'Magnificent Disguising', 
    date: '04-24-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e66a12bc591136a1934f/1739974255648/Mag+Dis+v2.mp3/original/Mag+Dis+v2.mp3',
    comments: 'the bad man in the mirror' },

  { id: 8, title: 'Cashmere Promenade', 
    date: '07-12-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e71a2fce5871fcab019c/1739974431683/Cashmere+Promenade+v1.mp3/original/Cashmere+Promenade+v1.mp3',
    comments: 'come one come all, step right up' },

  { id: 9, title: 'Keep it the Same', 
    date: '07-12-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e7b27dc2e63cf48d555a/1739974580046/Do+it+the+Same+1.m4a/original/Do+it+the+Same+1.m4a',
    comments: 'voice memo with potential' },

  { id: 10, title: 'Toto the Komodo', 
    date: '07-12-2024',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e7cb0001e73942d55fa5/1739974610467/Toto+Day+1.mp3/original/Toto+Day+1.mp3',
    comments: 'twitch prompt: world music about a komodo dragon' },

  { id: 11, title: 'Bob the Frog', 
    date: '04-27-2022',
    link: 'https://static1.squarespace.com/static/5aceb3075ffd20be26cc1d42/t/67b5e7e312bc591136a1cf45/1739974635232/Bob+the+Frog.mp3/original/Bob+the+Frog.mp3',
    comments: 'twitch prompt: country song about a frog' },
];

export default function SongsPage() {
  const [selectedSong, setSelectedSong] = React.useState(rows[0]);

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Song', width: 125 },
    { field: 'date', headerName: 'Date', width: 100 },
    { field: 'comments', headerName: 'Comments', width: 200 },
  ];

  return (
    <Box sx={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', gap: 3, p: 2 }}>
      <Paper elevation={2} sx={{ p: 2 }}>
        <AudioPlayer 
          url={selectedSong.link}
          title={selectedSong.title}
          comments={selectedSong.comments}
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
              backgroundColor: 'primary.dark',
            }
          }
        }}
        onRowClick={(params) => setSelectedSong(params.row)}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 11 },
          },
        }}
        pageSizeOptions={[11]}
      />
    </Box>
  );
}