import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Markdown } from "../Markdown";

type FactBoxProps = {
  boxTitle: string;
  boxContent: string;
  id: string;
};

export const FactBox: React.FC<FactBoxProps> = ({
  boxTitle,
  boxContent,
  id,
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const handleChange = () => setExpanded((state) => !state);
  return (
    <div>
      <Accordion
        sx={{
          fontFamily: "Open Sans",
          fontWeight: "600",
          color: "#033F85",
          boxShadow: 1,
          ":hover": {
            border: "2px solid #6CACE4",
            boxShadow: 1,
            transform: "none",
          },
        }}
        expanded={expanded}
        onChange={() => handleChange()}
      >
        <AccordionSummary
          sx={{
            backgroundColor: "#E6EEF8",
          }}
          expandIcon={<ExpandMoreIcon htmlColor="#033F85" fontSize="large" />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          {boxTitle}
        </AccordionSummary>
        <AccordionDetails>
          <Markdown lang="no">{boxContent}</Markdown>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
