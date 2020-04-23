import Utilities from "./utils";

describe("Utilities tests", () => {
  it("Returns the sum pf two numbers", () => {
    expect(Utilities.sum(1, 2)).toEqual(3);

    try {
      expect(Utilities.sum("0", -2)).toThrowError();
    } catch (error) {}
  });

  // Given an array of strings, eturn a single string in the format "last, first".
  it("Concatenate First and Last Name into One String", () => {
    expect(Utilities.concatenate(["jesus", "ortiz"])).toEqual("jesus, ortiz");
  });

  // Create the function that takes an array with objects and returns the sum of people's budgets.
  it("Sum bubgets", () => {
    const budgets = [
      { name: "Rolf", budget: "2300" },
      { name: "Peter", budget: 4000 },
      { name: "Felix", budget: 2700 }
    ];

    expect(Utilities.sumBudgets(budgets)).toEqual(9000);
  });

  // Create a function that takes an array of items, removes all duplicate items and returns a new array
  it("Remove duplicates", () => {
    const values = ["the", "red", "house", "over", "the", "mountain"];
    const correctValues = ["the", "red", "house", "over", "mountain"];
    expect(Utilities.removeDuplicates(values)).toEqual(correctValues);
  });

  it("Get all the names from different sources in a single Array and all lowercase", () => {
    const names = [
      {
        source1: {
          names: ["jOe", "jamEs", "PABLO", "pedro"]
        }
      },
      {
        source2: {
          names: ["Mary", "elI", "laUra", "Pam"]
        }
      },
      {
        source3: {
          names: ["helEn", "ANA", "Mike", "cesar"]
        }
      }
    ];
    const correctNames = [
      "joe",
      "james",
      "pablo",
      "pedro",
      "mary",
      "eli",
      "laura",
      "pam",
      "helen",
      "ana",
      "mike",
      "cesar"
    ];
    // expect(names).toEqual(correctNames);
  });

  it("Spy", () => {
    function helloWorld(fn) {
      return fn("world");
    }

    const geetirngFn = name => `Hello, ${name}!`;
    const mock = jest.fn(geetirngFn);
    const value = helloWorld(mock);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith("world");
    expect(value).toBe("Hello, world!");
  });

  it("It should respond with an array of students", async () => {
    const response = await fetch(
      "https://api.chucknorris.io/jokes/search?query=amazing"
    ).then(response => {
      return response;
    });
    expect(response.ok).toBeTruthy();
    expect(response.body).toBe();
  });
});
