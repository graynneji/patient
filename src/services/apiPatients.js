import axios from "axios";

export async function getPatients() {
  try {
    const response = await axios.get(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        headers: {
          authorization: "Basic " + btoa("coalition:skills-test"),
        },
      }
    );
    return response.data || [];
  } catch (error) {
    if (error.response) throw new Error(`Error occured ${error.message}`);
  }
}
