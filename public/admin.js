
// Your Code Here


 // retrieve a list of books

 async function main(){
    let getBookList = await fetch(`http://localhost:3001/listBooks`)
    let dataList = await getBookList.json()
    dataList.forEach(displayBook)
    console.log(dataList)
 }

 function displayBook(book) {
    const root = document.getElementById("root")
    const li = document.createElement("li")
    li.textContent = book.title
    root.append(li)

    const input = document.createElement("input")
    input.value = book.quantity
    

    const button = document.createElement("button")
    button.textContent = "Save"
    li.append(input, button)
    
    button.addEventListener("click", async ()=>{
        await fetch(`http://localhost:3001/updateBook`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({
                id: book.id,
                quantity: input.value
            })
        })
    })
 }

 main()