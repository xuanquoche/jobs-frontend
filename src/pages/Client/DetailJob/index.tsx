import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getJobById } from "../../../api/Job/getJobById";
import NavBar from "../../../components/modules/Navbar";

const DetailJob = () => {
  let { jobId } = useParams();

  const { data } = useQuery({
    queryKey: ["jobDetail", jobId as string],
    queryFn: getJobById,
  });

  useEffect(() => {
    console.log("Job details: ", data);
  }, [data]);

  return (
    <>
      <div className="jobDetailContainer max-w-[90%] p-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left column for job details */}
        <div className="md:col-span-2">
          <div className="bg-white p-6 shadow-md rounded-md">
            {/* Job Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <div>
                <h1 className="text-2xl font-bold">Job Description</h1>
                <p className="text-gray-600 ml-28">
                  <b className="text-xl">{data?.user?.fullname}</b> -{" "}
                  {data?.location} - {data?.type}
                </p>
              </div>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Apply
              </button>
            </div>

            {/* Job Description */}
          </div>
        </div>

        {/* content */}
        <div className="bg-white p-10 shadow-md rounded-md grid grid-cols-3 gap-6">
          <div className="left-cols col-span-2 flex flex-col text-left border-r-2 p-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700 mb-4">{data?.description}</p>

              {/* Responsibilities */}
              <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                {/* {data?.responsibilities?.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))} */}
              </ul>

              {/* Who You Are */}
              <h3 className="text-lg font-semibold mb-2">Who You Are</h3>
              <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>
                  You get energy from people and building the ideal work
                  environment
                </li>
                <li>
                  You have a sense for beautiful spaces and office experiences
                </li>
                <li>
                  You are a confident office manager, ready for added
                  responsibilities
                </li>
                <li>You're detail-oriented and creative</li>
                <li>You're a growth marketer and know how to run campaigns</li>
              </ul>

              {/* Nice-To-Haves */}
              <h3 className="text-lg font-semibold mb-2">Nice-To-Haves</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Fluent in English</li>
                <li>Project management skills</li>
                <li>Senior levels</li>
              </ul>
            </div>
          </div>
          <div className="right-cols col-span-1 flex flex-col text-left">
            <h2 className="text-lg font-semibold mb-4">About this role</h2>
            <div className="mb-4">
              <p className="text-gray-600 flex justify-between">
                <strong className="mr-10">Apply Before:</strong>{" "}
                <span className="text-right">{data?.start_date}</span>
              </p>
              <p className="text-gray-600 flex justify-between">
                <strong className="mr-10">Job Posted On:</strong>{" "}
                <span className="text-right">{data?.end_date}</span>
              </p>
              <p className="text-gray-600 flex justify-between">
                <strong className="mr-10">Job Type:</strong>
                <span className="text-right">{data?.type}</span>
              </p>
              <p className="text-gray-600 flex justify-between">
                <strong className="mr-10">Salary:</strong>
                <span className="text-right">{data?.salary}$</span>
              </p>
            </div>

            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <div className="flex gap-2 flex-wrap mb-4">
              {/* {data?.categories?.map((category: string, index: number) => (
                        <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 text-sm text-gray-800 rounded-full"
                        >
                        {category}
                        </span>
                    ))} */}

              <span className="px-3 py-1 bg-gray-200 text-sm text-gray-800 rounded-full">
                Website
              </span>
              <span className="px-3 py-1 bg-gray-200 text-sm text-gray-800 rounded-full">
                Tech Skill
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2">Required Skills</h3>
            <div className="flex gap-2 flex-wrap">
              {data?.skills?.map((skill: any, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Perks & Benefits Section */}
        <div className="bg-white shadow-md rounded-md my-8 mx-auto ">
          <h2 className="text-xl font-semibold mb-4">Perks & Benefits</h2>
          <p className="text-gray-600 mb-6">
            This job comes with several perks and benefits
          </p>
          <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
            {/* List of Perks */}
            <div className="flex flex-col text-left items-start gap-4">
              <span className="text-blue-500 text-2xl">🩺</span>
              <div>
                <h3 className="font-semibold">Full Healthcare</h3>
                <p className="text-gray-600">
                  We believe in thriving communities and that starts with our
                  team being happy and healthy.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-left items-start gap-4">
              <span className="text-blue-500 text-2xl">🌴</span>
              <div>
                <h3 className="font-semibold">Unlimited Vacation</h3>
                <p className="text-gray-600">
                  We believe you should have a flexible schedule that makes
                  space for family, wellness, and fun.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-left items-start gap-4">
              <span className="text-blue-500 text-2xl">📚</span>
              <div>
                <h3 className="font-semibold">Skill Development</h3>
                <p className="text-gray-600">
                  We believe in always learning and leveling up our skills.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-left items-start gap-4">
              <span className="text-blue-500 text-2xl">🗓️</span>
              <div>
                <h3 className="font-semibold">Team Summits</h3>
                <p className="text-gray-600">
                  Every 6 months we have a full team summit where we have fun,
                  reflect, and plan for the upcoming quarter.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-left items-start gap-4">
              <span className="text-blue-500 text-2xl">🏡</span>
              <div>
                <h3 className="font-semibold">Remote Working</h3>
                <p className="text-gray-600">
                  You know how you perform your best. Work from home, coffee
                  shop, or anywhere when you feel like it.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-left items-start gap-4">
              <span className="text-blue-500 text-2xl">🚍</span>
              <div>
                <h3 className="font-semibold">Commuter Benefits</h3>
                <p className="text-gray-600">
                  We're grateful for all the time and energy each team member
                  puts into getting to work every day.
                </p>
              </div>
            </div>

            <div className="flex flex-col text-left items-start gap-4">
              <span className="text-blue-500 text-2xl">❤️</span>
              <div>
                <h3 className="font-semibold">We Give Back</h3>
                <p className="text-gray-600">
                  We anonymously match any donation our employees make (up to
                  $/€600) so they can support the organizations they care about.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailJob;
