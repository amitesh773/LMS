const bookForm = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

loadBooks();

async function loadBooks() {

const response = await fetch(
    "http://localhost:3000/book/allbooks"
);

const data = await response.json();

bookList.innerHTML = "";

data.books.forEach(book => {

    bookList.innerHTML += 
        <div class="book-card">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <p>Available: ${book.availableCopies}</p>

            <button
                class="delete-btn"
                onclick="deleteBook('${book._id}')"
            >
                Delete
            </button>
        </div>
    ;
});

}

bookForm.addEventListener("submit", async (e) => {

e.preventDefault();

const token = localStorage.getItem("token");

const bookData = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    isbn: document.getElementById("isbn").value,
    category: document.getElementById("category").value,
    totalCopies: document.getElementById("totalCopies").value,
    availableCopies: document.getElementById("availableCopies").value,
    description: document.getElementById("description").value
};

const response = await fetch(
    "http://localhost:3000/book/add",
    {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(bookData)
    }
);

const data = await response.json();

alert(data.message);

loadBooks();

});

async function deleteBook(id){

const token = localStorage.getItem("token");

const response = await fetch(
    `http://localhost:3000/book/delete/${id}`,
    {
        method:"DELETE",
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
);

const data = await response.json();

alert(data.message);

loadBooks();

}
