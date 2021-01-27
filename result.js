let input = prompt("What would you like to do?")
const todos = ['Collect Chicken Eggs', 'Clean Litter Box']

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("***********")
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`)
    }
    console.log("***********")
  } else if (input === "new") {
    const newTodo = prompt("OK.What is the new todo?")
    todos.push(newTodo)
    console.log(`${newTodo} added to the list.`)
  } else if (input === "delete") {
    const index = parseInt(prompt("OK.Enter an index to delete."))
    if (!Number.isNaN(index)) {
      const deletes = todos.splice(index, 1)
      console.log(`OK.Deleted ${deletes}`)
    } else {
      console.log("Unknown index.")
    }
  }
  input = prompt("What would you like to do?")
}
console.log("OK,QUIT THIS APP.")