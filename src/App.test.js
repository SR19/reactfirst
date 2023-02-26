import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

// Test Case 1: mock fetch

async function withFetch() {
  const res = await fetch("https://swapi.dev/api/films/?format=json");
  const json = await res.json();

  return json;
}

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("API data fetching", () => {
  test("should render api data", async () => {
    const json = await withFetch();
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(0);
  });
});

afterEach(() => {
  cleanup();
});

// Test Case 2: UI Rendering

test("App Rendering", () => {
  render(<App />);
  const navbar = screen.getByTestId("navbar");
  const dashboard = screen.getByTestId("dashboard");
  expect(dashboard).toBeInTheDocument();
  expect(navbar).toBeInTheDocument();
});
