import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { GraduationCap, BookText } from 'lucide-react';

interface TimelineItemData {
  year: string;
  school: string;
  graduate: boolean;
}

interface TimelineProps {
  items: TimelineItemData[];
}

export default function TimelineStudy({ items }: TimelineProps) {
    return (
        <Timeline
        sx={{
            [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
            },
        }}
        >
        {items.map((item, idx) => (
            <TimelineItem key={idx}>
            <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'warning.main' }} />
                <TimelineDot color={item.graduate ? "success" : "primary"}>
                {item.graduate ? <GraduationCap/> : <BookText/> }
                </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
                <div className="font-bold">{item.year}</div>
                <div>{item.school}</div>
                <div className={item.graduate ? "text-green-600" : "text-yellow-600"}>
                </div>
            </TimelineContent>
            </TimelineItem>
        ))}
        </Timeline>
    );
}