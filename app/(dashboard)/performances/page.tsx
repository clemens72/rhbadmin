import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const rows: GridRowsProp = [
  { id: 1, title: 'Pendulum', link: 'https://drive.google.com/file/d/1ue8G9vyrYuw1zQjNczJnnx8BSvWdfoLk/view?usp=drive_link', comments: 'finished' },
  { id: 2, title: 'New Leaf', link: 'https://drive.google.com/file/d/1afLKNIHardPtviDyZwBtOGbZjHMHp1TW/view?usp=drive_link', comments: 'live from rehearsal' },
  { id: 3, title: 'Cruise', link: 'https://drive.google.com/file/d/1gE-PWj9VGWrcjyOzV8BjCZg5xltcHJc0/view?usp=drive_link', comments: 'finished, .wav' },
  { id: 4, title: 'Holes', link: 'https://drive.google.com/file/d/1voB67_gacFC-rl_liOFznAAMC4cw5EFy/view?usp=drive_link', comments: 'home demo' },
];

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Song', width: 150 },
  { field: 'link', headerName: 'File', width: 150 },
  { field: 'comments', headerName: 'Comments', width: 200 },
];
export default async function PerformancesPage() {
  

  return (
      <div style={{ height: '100%', width: '100%' }}>
        <DatePicker />
        <DataGrid rows={rows} columns={columns} />
      </div>
  );
}
