// src/services/api.js
const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

export { fetchData };
