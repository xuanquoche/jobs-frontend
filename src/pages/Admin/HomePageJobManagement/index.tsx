import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchJob } from "../../../api/fetchJob";
import Button from "../../../components/common/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ButtonIcon from "../../../components/common/ButtonIcon";
import { StyledTableCell } from "./style";
import { Tag } from "../../../components/common/Tag";
import Skeleton from "react-loading-skeleton"; // Import Skeleton nếu bạn đang dùng
import { JobReqBody, JobStatus } from "../../../types/jobs.type";
import { updateJob as updateJobAPI } from "../../../api/Job/updateJob";
import { toast, ToastContainer } from "react-toastify";
import { useNotificationStore } from "../../../hook/store";
import TablePagination from "@mui/material/TablePagination";
import { deleteJob } from "../../../api/Job/deleteJob";

export const AdminJobManagement = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const { addNotification } = useNotificationStore();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["jobs", page, limit],
    queryFn: fetchJob,
  });

  const jobApprove = useMutation({
    mutationFn: ({ job, id }: { job: JobReqBody; id: string }) => {
      return updateJobAPI(job, id);
    },
    onSuccess: () => {
      toast.success("Approve !!!");
      refetch();
    },
    onError: (error) => {
      toast.error("An error occurred while approving the job.");
      console.error(error);
    },
  });

  const jobDelete = useMutation({
    mutationFn: ({ id }: { id: string }) => {
      return deleteJob(id);
    },
    onSuccess: () => {
      toast.success("Job deleted successfully!", { autoClose: 1000 });
      refetch();
    },
    onError: (error) => {
      toast.error("An error occurred while delete the job.");
      console.error(error);
    },
  });

  const handleApprove = (row: JobReqBody) => {
    const { user, _id, ...restRow } = row;
    const skillUpdate = restRow.skills.map((skill: any) => skill.name);

    const updatedJob: JobReqBody = {
      ...restRow,
      skills: skillUpdate,
      status: JobStatus.ACTIVE,
    };

    jobApprove.mutate({ job: updatedJob, id: row._id as string });
    addNotification(`Your Project${row.name} is approve by admin`, "success");
  };

  const handleDeleteJob = (row: JobReqBody) => {
    jobDelete.mutate({ id: row._id as string });
    addNotification(`Your Project${row.name} is reject by admin`, "error");
  };

  const getColor = (status: string) => {
    switch (status) {
      case "INACTIVE":
        return "error";
      case "ACTIVE":
        return "success";
      default:
        return "error";
    }
  };

  if (isLoading) {
    return <Skeleton count={3} />;
  }

  return (
    <TableContainer component={Paper} style={{ overflowY: "scroll" }}>
      <ToastContainer />
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Client Name</StyledTableCell>
            <StyledTableCell align="left">
              <span className="text-xl">Job Name</span>
            </StyledTableCell>
            <StyledTableCell align="left">
              <span className="text-xl">Salary</span>
            </StyledTableCell>
            <StyledTableCell align="left">
              <span className="text-xl">Status</span>
            </StyledTableCell>
            <StyledTableCell align="left">
              <span className="text-xl ml-[42px]">Action</span>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data.jobs.map((row) => (
            <TableRow
              key={row._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.user?.fullname}
              </StyledTableCell>
              <StyledTableCell align="left">{row.name}</StyledTableCell>
              <StyledTableCell align="left">{row.salary}$/h</StyledTableCell>
              <StyledTableCell align="right">
                <Tag
                  text={row.status}
                  variant="contained"
                  color={getColor(row.status)}
                />
              </StyledTableCell>
              <StyledTableCell align="left">
                <div className="btnAction flex justify-evenly">
                  <Button
                    text="Approve"
                    variant="contained"
                    kind="success"
                    onClick={() => handleApprove(row)}
                  />
                  <Button text="View" variant="contained" />
                  <ButtonIcon
                    variant="outlined"
                    color="warning"
                    onClick={() => handleDeleteJob(row)}
                  >
                    <DeleteIcon />
                  </ButtonIcon>
                </div>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={limit}
          rowsPerPage={page}
          page={page}
          onPageChange={(event, value) => setPage(value)}
          className={data?.data.total_page == 1 ? "block" : "hidden"}
        />
      </Table>
    </TableContainer>
  );
};
