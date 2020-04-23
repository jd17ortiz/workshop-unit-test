export default {
  sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Both arguments must be numbers");
    }
    return a + b;
  },
  flattern(values) {
    return values.flatMap((val, index) => {
      return val["source" + (index + 1)].names.map(name => name.toLowerCase());
    });
  },
  concatenate(names) {
    return names.join(", ");
  },
  sumBudgets(data) {
    return data.reduce((accu, item) => accu + Number(item.budget), 0);
  },
  removeDuplicates(values) {
    return values.filter(val => values.indexOf(val));
  }
};
