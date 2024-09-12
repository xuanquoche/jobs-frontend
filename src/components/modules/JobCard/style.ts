import { styled } from "@mui/material/styles";

import { Box, Card, Button } from "@mui/material";

// Styled components for layout
export const JobCard = styled(Card)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

export const JobInfo = styled(Box)({
  flexGrow: 1,
  marginLeft: "20px",
});

export const ApplyButton = styled(Button)({
  minWidth: "100px",
});

export const JobTags = styled(Box)({
  display: "flex",
  gap: "8px",
  marginTop: "8px",
});
