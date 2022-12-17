
const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      function isOverDue(item) {
        return item.dueDate < today && item.completed == false;
      }
  
      return all.filter(isOverDue);
    };
  
    const dueToday = () => {
      function isDueToday(item) {
        return item.dueDate == today;
      }
  
      return all.filter(isDueToday);
    };
  
    const dueLater = () => {
      function isDueLater(item) {
        return item.dueDate > today;
      }
  
      return all.filter(isDueLater);
    };
  
    const toDisplayableList = (list) => {
      var displayableList = list
        .map((task) =>
           `${task.completed ? "[x]" : "[ ]"} ${task.title} ${
              task.dueDate !== today ? task.dueDate : " "
            }`
        )
        .join("\n");
  
      return displayableList;
    };
  
    return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
  };

  
const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
todos.add({ title: "Pay rent", dueDate: today, completed: true });
todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });


  
  module.exports = todoList;
  
