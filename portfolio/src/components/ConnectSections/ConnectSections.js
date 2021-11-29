import { connectSectionData } from "./connectSectionData";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const ConnectSections = (props) => {
  const dataLength = connectSectionData.length;

  return (
    <Timeline>
      {connectSectionData.map(({ id, section }) => (
        <TimelineItem key={id}>
          <TimelineSeparator>
            <TimelineDot />
            {id !== dataLength && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{section}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ConnectSections;
