//Book constructor
function Book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;

}

//Ui constructor
function UI(){}
//add book .list
UI.prototype.addBookToList=function(book){
const list=document.getElementById('book-list');
const row=document.createElement('tr');

//insert cols
row.innerHTML=`
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
`;
    list.appendChild(row);
}

UI.prototype.clearFielsds=function(){
    document.getElementById('title').value='';
    document.getElementById('author').value='';
    document.getElementById('isbn').value='';
}

UI.prototype.showAlert=function(msg,classname){
    const div=document.createElement('div');
    div.className=`alert ${classname}`;

    div.appendChild(document.createTextNode(msg));

    const container=document.querySelector('.container');
    const form=document.querySelector('#book-form');
    container.insertBefore(div,form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);
}

UI.prototype.deleteBook=function(target){
    if(target.className==='delete'){
        target.parentElement.parentElement.remove();

    }
}
//event litioners
document.getElementById('book-form').addEventListener('submit',function(e){
    //get form values
    const title=document.getElementById('title').value,
        author=document.getElementById('author').value,
        isbn=document.getElementById('isbn').value;

//create book object
        const book=new Book(title,author,isbn);
//create UI object

const ui=new UI();
if(title===''||author===''||isbn===''){
    ui.showAlert('Please fill in all fields','error');
}else{
    // add book to the list 

ui.addBookToList(book);
ui.showAlert('Book added ','success')
ui.clearFielsds();
}




  
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click',function(e){

    const ui=new UI();
    if(e.target.className==='delete'){
        ui.deleteBook(e.target);
        ui.showAlert('Book Removed','success');   
    }
   
    e.preventDefault();
})