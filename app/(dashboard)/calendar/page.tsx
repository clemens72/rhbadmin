'use client';

import * as React from 'react';
import { Box, Paper, Tab, Tabs } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import ViewDayIcon from '@mui/icons-material/ViewDay';

// Sample events data
const events = [
  { date: '2025-02-25', title: 'Band Practice' },
  { date: '2025-02-28', title: 'Live Show' },
  { date: '2025-02-01', title: 'Recording Session' },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`calendar-tabpanel-${index}`}
      aria-labelledby={`calendar-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function ServerDay(props: PickersDayProps<Dayjs> & { highlightedDays?: string[] }) {
  const { highlightedDays = [], day, ...other } = props;

  const isSelected = highlightedDays.includes(day.format('YYYY-MM-DD'));

  return (
    <PickersDay 
      {...other} 
      day={day}
      sx={isSelected ? {
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      } : undefined}
    />
  );
}

export default function CalendarPage() {
  const [value, setValue] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(dayjs());

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const highlightedDays = events.map(event => event.date);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          aria-label="calendar views"
          centered
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            icon={<CalendarMonthIcon />} 
            label="Month" 
            id="calendar-tab-0"
            aria-controls="calendar-tabpanel-0"
          />
          <Tab 
            icon={<ViewWeekIcon />} 
            label="Week" 
            id="calendar-tab-1"
            aria-controls="calendar-tabpanel-1"
          />
          <Tab 
            icon={<ViewDayIcon />} 
            label="Day" 
            id="calendar-tab-2"
            aria-controls="calendar-tabpanel-2"
          />
        </Tabs>

        <TabPanel value={value} index={0}>
          <DateCalendar 
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            slots={{
              day: ServerDay
            }}
            slotProps={{
              day: {
                highlightedDays
              } as any
            }}
          />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <DateCalendar 
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            displayWeekNumber
            showDaysOutsideCurrentMonth
            slots={{
              day: ServerDay
            }}
            slotProps={{
              day: {
                highlightedDays
              } as any
            }}
          />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <StaticDateTimePicker
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            orientation="landscape"
            slots={{
              day: ServerDay
            }}
            slotProps={{
              day: {
                highlightedDays
              } as any
            }}
          />
        </TabPanel>
      </Paper>
    </LocalizationProvider>
  );
}