export const tabs = {
  entrees: { title: "Entrees", content: "Entrees" },
  mains: { title: "Mains", content: "Mains" },
  desserts: { title: "Desserts", content: "Desserts" },
};

// Uncomment everything below after implementing the first iteration

const formByTab = {
  entrees: [
    { id: "oysters", type: "checkbox" },
    { id: "scallops", type: "checkbox" },
    { id: "tuna", type: "checkbox" },
  ],
  mains: [
    { id: "beef", type: "checkbox" },
    { id: "chicken", type: "checkbox" },
    { id: "pasta", type: "checkbox" },
  ],
  desserts: [
    { id: "cake", type: "checkbox" },
    { id: "gelato", type: "checkbox" },
    { id: "pudding", type: "checkbox" },
  ],
};

export async function fetchData(tabId) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(formByTab[tabId]), 1000)
  );
}
