import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Button from "../../../components/common/Button";
import { Modal } from "../../../components/common/Modal";
import Input from "../../../components/common/Input";
import { JobReqBody } from "../../../types/jobs.type";
import { Levels, JobTypes } from "../../../constant/enum";
import Select from "../../../components/common/Select";
import { SKILLS, LEVELS } from "../../../constant/constant";
import Date from "../../../components/common/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import Chip from "@mui/material/Chip";
import { postJob } from "../../../api/Client/postJob";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid } from "@mui/material";
import Card from "../../../components/common/Card";
import { fetchJob } from "../../../api/fetchJob";
import Skeleton from "react-loading-skeleton";
import { JobStatus } from "../../../constant/enum";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const initialJob: JobReqBody = {
  name: "",
  location: "",
  salary: 0,
  quantity: 0,
  level: Levels.FRESHER,
  status: JobStatus.INACTIVE,
  thumbnail: "",
  type: JobTypes.PARTTIME,
  description: "",
  skills: [],
  start_date: dayjs().toISOString(),
  end_date: dayjs().toISOString(),
};

export const HomePageClient = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [job, setJob] = useState<JobReqBody>(initialJob);
  const [skillTag, setSkillTag] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [isOpen]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setJob((prevUser: JobReqBody) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === "skills") {
      if (!skillTag.includes(value)) {
        setSkillTag((prev) => [...prev, value]);
        setJob((prevJob: JobReqBody) => ({
          ...prevJob,
          skills: [...(prevJob.skills || []), value],
        }));
      }
    } else if (name === "level") {
      setJob((prevJob: JobReqBody) => ({
        ...prevJob,
        level: value as Levels,
      }));
    }
  };

  const handleDateChange = (name: keyof JobReqBody, newValue: Dayjs | null) => {
    if (newValue) {
      setJob((prevJob: JobReqBody) => ({
        ...prevJob,
        [name]: newValue.toDate(),
      }));
    }
  };

  const handleDelete = (skillToDelete: string) => {
    setSkillTag((prevSkillTag) =>
      prevSkillTag.filter((skill) => skill !== skillToDelete)
    );
    setJob((prevJob) => ({
      ...prevJob,
      skills: prevJob.skills.filter((skill) => skill !== skillToDelete),
    }));
  };

  const { mutate } = useMutation({
    mutationFn: (job: JobReqBody) => {
      return postJob(job);
    },
    onSuccess: (data) => {
      handleCloseModal();
      setJob(initialJob);
      setSkillTag([]);
      toast.success("Success Notification !");
    },
  });

  const { data, isLoading } = useQuery({
    queryKey: ["jobs", page, limit],
    queryFn: fetchJob,
  });

  return (
    <div className="wrapHomePageClient">
      <div
        className="actionCreate"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          margin: "20px 20px 20px 0",
        }}
      >
        <Button text="Create Job" onClick={handleOpenModal} />
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <div className="modalContent">
            <div style={{ margin: "10px 0" }} className="jobName">
              <Input
                value={job.name}
                onChange={handleInputChange}
                type="text"
                label="Job Name"
                name="name"
                position={true}
              />
            </div>
            <div style={{ margin: "10px 0" }} className="location">
              <Input
                value={job.location}
                onChange={handleInputChange}
                type="text"
                label="Location"
                name="location"
                position={true}
              />
            </div>
            <div style={{ margin: "10px 0" }} className="salary">
              <Input
                value={job.salary}
                onChange={handleInputChange}
                type="number"
                label="Salary"
                name="salary"
                position={true}
              />
            </div>
            <div style={{ margin: "10px 0" }} className="quantity">
              <Input
                value={job.quantity}
                onChange={handleInputChange}
                type="number"
                label="Quantity"
                name="quantity"
                position={true}
              />
            </div>

            <div style={{ margin: "10px 0" }} className="type">
              <Input
                value={job.type}
                onChange={handleInputChange}
                type="text"
                label="Type"
                name="type"
                position={true}
              />
            </div>
            <div style={{ margin: "10px 0" }} className="description">
              <Input
                value={job.description}
                onChange={handleInputChange}
                type="text"
                label="Detail"
                name="description"
                position={true}
              />
            </div>

            <div style={{ margin: "10px 0" }} className="start_date flex">
              <label className="min-w-20 font-bold mr-1.5">Start Date</label>
              <Date
                value={dayjs(job.start_date)}
                onChange={(newValue: any) =>
                  handleDateChange("start_date", newValue)
                }
              />
            </div>

            <div style={{ margin: "10px 0" }} className="end_date flex">
              <label className="min-w-20 font-bold mr-1.5">End Date</label>
              <Date
                value={dayjs(job.end_date)}
                onChange={(newValue: any) =>
                  handleDateChange("end_date", newValue)
                }
              />
            </div>
            <div style={{ margin: "10px 0" }} className="level flex">
              <label
                className="min-w-20 flex justify-start items-center font-bold mr-1.5"
                htmlFor="level"
              >
                Level
              </label>
              <Select
                options={LEVELS}
                name="level"
                value={job.level}
                onChange={handleSelectChange}
              />
            </div>
            <div style={{ margin: "10px 0" }} className="skills flex flex-col">
              <div className="tagAction flex gap-5">
                {skillTag &&
                  skillTag.map((_skill, index) => (
                    <div className="chipDetail">
                      <Chip
                        label={_skill}
                        onDelete={() => handleDelete(_skill)}
                      />
                    </div>
                  ))}
              </div>
              <div className="selectBtn flex">
                {" "}
                <label
                  className="min-w-20 flex justify-start items-center font-bold mr-1.5"
                  htmlFor="skill"
                >
                  Skill
                </label>
                <Select
                  name="skills"
                  options={SKILLS}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
            <div className="actionBtnGroup flex justify-end gap-5 mt-10">
              <Button text="Cancel" variant="outlined" />
              <Button text="Save" onClick={() => mutate(job)} />
            </div>
          </div>
        </Modal>
        <ToastContainer />
      </div>
      <div className="contentJob" style={{ maxWidth: "90%", margin: "0 auto" }}>
        {isLoading ? (
          <Skeleton count={3} />
        ) : (
          <Grid container spacing={3}>
            {data?.data.jobs.map((job: JobReqBody, index) => (
              <Grid item xs={4}>
                <Card
                  key={index}
                  skills={job.skills}
                  status={job.status}
                  jobName={job.name}
                  description={job.description}
                  salary={job.salary}
                  type={job.type}
                />
              </Grid>
            ))}
          </Grid>
        )}
        {data?.data.jobs.length == 0 ? (
          ""
        ) : (
          <Stack
            spacing={limit}
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            <Pagination
              count={data?.data.total_page}
              shape="rounded"
              page={page}
              onChange={(event, value) => setPage(value)}
            />
          </Stack>
        )}
      </div>
    </div>
  );
};
