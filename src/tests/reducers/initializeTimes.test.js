import { initializeTimes } from "../../reducers/bookingReducer";
import { fetchAPI } from "../../api/fetchAPI";

jest.mock("../../api/fetchAPI", () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00", "19:00"]),
}));

describe("initializeTimes", () => {
  it("should return available times from fetchAPI", () => {
    const result = initializeTimes();
    expect(fetchAPI).toHaveBeenCalled();
    expect(result).toEqual(["17:00", "18:00", "19:00"]);
  });
});
