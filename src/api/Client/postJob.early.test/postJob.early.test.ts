// Unit tests for: postJob

import {
  JobReqBody,
  JobStatus,
  JobTypes,
  Levels,
} from "../../../types/jobs.type";

import http from "../../../utils/http";

import { getAccessToken } from "../../../utils/tokenStorage";

import { postJob } from "../postJob";

jest.mock("../../../utils/http");
jest.mock("../../../utils/tokenStorage");

describe("postJob() postJob method", () => {
  const mockJob: JobReqBody = {
    name: "Software Engineer",
    location: "New York",
    salary: 100000,
    quantity: 1,
    level: Levels.JUNIOR,
    status: JobStatus.Active,
    thumbnail: "thumbnail.png",
    type: JobTypes.FULLTIME,
    description: "Job description",
    skills: ["JavaScript", "TypeScript"],
    start_date: "2023-01-01",
    end_date: "2023-12-31",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy Path Tests
  describe("Happy Path", () => {
    it("should post a job successfully with valid data", async () => {
      // Arrange
      const mockAccessToken = "mockAccessToken";
      (getAccessToken as jest.Mock).mockReturnValue(mockAccessToken);
      (http.post as jest.Mock).mockResolvedValue({ data: mockJob });

      // Act
      const result = await postJob(mockJob);

      // Assert
      expect(getAccessToken).toHaveBeenCalled();
      expect(http.post).toHaveBeenCalledWith("/jobs/create", mockJob, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${mockAccessToken}`,
        },
      });
      expect(result).toEqual(mockJob);
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should throw an error if the access token is missing", async () => {
      // Arrange
      (getAccessToken as jest.Mock).mockReturnValue(null);

      // Act & Assert
      await expect(postJob(mockJob)).rejects.toThrow();
      expect(getAccessToken).toHaveBeenCalled();
      expect(http.post).not.toHaveBeenCalled();
    });

    it("should handle HTTP post errors gracefully", async () => {
      // Arrange
      const mockAccessToken = "mockAccessToken";
      const mockError = new Error("Network Error");
      (getAccessToken as jest.Mock).mockReturnValue(mockAccessToken);
      (http.post as jest.Mock).mockRejectedValue(mockError);

      // Act & Assert
      await expect(postJob(mockJob)).rejects.toThrow("Network Error");
      expect(getAccessToken).toHaveBeenCalled();
      expect(http.post).toHaveBeenCalledWith("/jobs/create", mockJob, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${mockAccessToken}`,
        },
      });
    });

    it("should handle invalid job data gracefully", async () => {
      // Arrange
      const mockAccessToken = "mockAccessToken";
      const invalidJob = { ...mockJob, salary: -1000 }; // Invalid salary
      (getAccessToken as jest.Mock).mockReturnValue(mockAccessToken);
      (http.post as jest.Mock).mockResolvedValue({ data: invalidJob });

      // Act & Assert
      await expect(postJob(invalidJob)).resolves.toEqual(invalidJob);
      expect(getAccessToken).toHaveBeenCalled();
      expect(http.post).toHaveBeenCalledWith("/jobs/create", invalidJob, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${mockAccessToken}`,
        },
      });
    });
  });
});

// End of unit tests for: postJob
