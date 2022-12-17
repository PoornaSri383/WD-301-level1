
 /* eslint-disable no-undef */
const todoList = require("../index");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todo List Test Suite", () => {
  beforeAll(() => {
    const dateToday = new Date();
    
    [{
        title: "submitting the task",
        completed: false,
        dueDate: new Date().toLocaleDateString(
          "en-CA"
        ),
      },
      {
        title: "reading book",
        completed: false,
        dueDate:new Date().toLocaleDateString(
            "en-CA"
        ),
      },
    ].forEach(add);
  });
  test("Should add new todo", () => {
    let totalItemsCount = all.length;
    expect(all.length).toEqual(2);
    add({
      title: "Go Buy milk",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toEqual(totalItemsCount + 1);
  });

  test("should mark a todo as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });

  test("should check list of overdue items", () => {
    expect(overdue().length).toEqual(0);
  });

  test("should check list of due today items", () => {
    expect(dueToday().length).toEqual(3);
  });

  test("should check list of due later items", () => {
    expect(dueLater().length).toEqual(0);
  });
});