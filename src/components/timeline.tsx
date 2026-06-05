"use client";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { GraduationCap, BookText } from "lucide-react";

interface TimelineItemData {
  year: string;
  school: string;
  graduate: boolean;
}

interface TimelineProps {
  items: TimelineItemData[];
}

export default function TimelineStudy({ items }: TimelineProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
            <TimelineConnector sx={{ bgcolor: "cyan.600" }} />
            <TimelineDot color={item.graduate ? "success" : "primary"} sx={{ border: "2px solid rgba(255,255,255,0.1)" }}>
              {item.graduate ? <GraduationCap className="text-white" /> : <BookText className="text-white" />}
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent className="pb-6">
            <div className="font-extrabold text-xl text-white">{item.year}</div>
            <div className="text-white/80 text-lg font-medium">{item.school}</div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
