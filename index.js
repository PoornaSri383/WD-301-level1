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
  
  module.exports = todoList;
  