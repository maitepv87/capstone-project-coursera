import { updateTimes } from "../../reducers/bookingReducer";
import { fetchAPI } from "../../api/fetchAPI";

jest.mock("../../api/fetchAPI", () => ({
  fetchAPI: jest.fn(() => ["18:00", "19:00"]),
}));

describe("updateTimes", () => {
  it("should update times based on selected date", () => {
    const state = ["17:00"];
    const action = { type: "UPDATE_TIMES", payload: new Date("2025-08-10") };
    const result = updateTimes(state, action);
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-08-10"));
    expect(result).toEqual(["18:00", "19:00"]);
  });
});
