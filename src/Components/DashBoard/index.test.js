import "@testing-library/jest-dom";

let testArray = [
  { episode_id: "1", title: "The Phantom Menace" },
  { episode_id: "4", title: "A New Hope" },
  { episode_id: "3", title: "Revenge of the Sith" },
  { episode_id: "2", title: "Attack of the Clones" },
];

let sortedArray = [
  { episode_id: "1", title: "The Phantom Menace" },
  { episode_id: "2", title: "Attack of the Clones" },
  { episode_id: "3", title: "Revenge of the Sith" },
  { episode_id: "4", title: "A New Hope" },
];

// Test Case 1: sorting array

describe("Sorting", () => {
  it("Array should be sortedby episode id", () => {
    const component = testArray.sort((a, b) => {
      if (a.episode_id < b.episode_id) {
        return -1;
      }
    });
    expect(component).toEqual(sortedArray);
  });
});


// Test Case 2: search in array

let searchQuery = 'phantom';

let searchArray = [
  { episode_id: "1", title: "The Phantom Menace" },
];

describe("Searching", () => {
  it("Array should be search by query string", () => {
     const newData = [...testArray].filter(({ title }) => {
       return title.toLowerCase().includes(searchQuery.toLowerCase());
     })
    expect(newData).toEqual(searchArray);
  });
});
