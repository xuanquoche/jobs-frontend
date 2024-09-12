import {
  Box,
  CardActions,
  Grid,
  Typography,
  Chip,
  LinearProgress,
  Divider,
  Stack,
  Pagination,
  Avatar,
} from "@mui/material";
import { JobCard, JobInfo, ApplyButton, JobTags } from "./style";
import { useQuery } from "@tanstack/react-query";
import { fetchJob } from "../../../api/fetchJob";
import { useEffect, useState } from "react";
import { deepOrange } from "@mui/material/colors";

const CardJob = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data } = useQuery({
    queryKey: ["fetchJobCreator", page, limit],
    queryFn: fetchJob,
  });

  const getColor = (type: string) => {
    switch (type) {
      case "PARTTIME":
        return "success";
      case "FULLTIME":
        return "secondary";
      case "SQL":
        return "error";
      case "PHP":
        return "warning";
      case "NextJs":
        return "secondary";
      default:
        return "error"; // Fallback color
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography className="text-left" variant="h5" gutterBottom>
        All Jobs
      </Typography>
      <Typography
        className="text-left"
        variant="subtitle2"
        color="textSecondary"
      >
        Showing {data?.data.jobs.length} results
      </Typography>
      <Divider sx={{ marginBottom: 2 }} />
      <Grid container spacing={2}>
        {data?.data.jobs.map((job, index) => (
          <Grid item xs={12} key={index}>
            <JobCard>
              <Box>
                <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                  N
                </Avatar>
              </Box>
              <JobInfo>
                <Typography variant="h4" className="text-left">
                  {job.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="text-left"
                >
                  Necscat • {job.location}
                </Typography>
                <JobTags>
                  <div className="jobType">
                    {
                      <Chip
                        key={index}
                        label={job.type}
                        color={getColor(job.type)}
                        size="small"
                      />
                    }
                  </div>
                  <div className="line border"></div>
                  <div className="jobSkills">
                    {job.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill.name}
                        color={getColor(skill.name)}
                        size="small"
                        className="ml-2"
                      />
                    ))}
                  </div>
                </JobTags>
              </JobInfo>
              <CardActions className="flex flex-col">
                <ApplyButton variant="contained" color="primary">
                  Apply
                </ApplyButton>
                <Box sx={{ marginTop: 1 }}>
                  <Typography variant="caption">
                    2 applied of {job.quantity} capacity
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={(2 / job.quantity) * 100}
                    sx={{ marginTop: 0.5 }}
                  />
                </Box>
              </CardActions>
            </JobCard>
          </Grid>
        ))}
      </Grid>
      <Stack spacing={limit} style={{ marginTop: "20px", textAlign: "center" }}>
        <Pagination
          count={data?.data.total_page}
          shape="rounded"
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </Stack>
    </Box>
  );
};

export default CardJob;
