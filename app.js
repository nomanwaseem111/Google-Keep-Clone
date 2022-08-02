const addBtn = document.getElementById('btn');


const updateLSData = () =>{

    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note) =>{
        return notes.push(note.value);    
    })

    localStorage.setItem('notes', JSON.stringify(notes))
}


const addNewNote = (text = '') => {


    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `<div class="operation">
    <span><i class="fas fa-edit"></i></span>
    <span><i class="fas fa-trash-alt"></i></span>
</div>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea class="${text ? "hidden" : ""}" cols="30" rows="10"></textarea>`

   
    note.insertAdjacentHTML('afterbegin',htmlData);

    // console.log(note);

    const editBtn = note.querySelector('.fa-edit');
    const delBtn = note.querySelector('.fa-trash-alt');
    const mainDiv = note.querySelector('.main');
    const textArea = note.querySelector('textarea');


    delBtn.addEventListener('click', () =>{
        note.remove();
        updateLSData();

    })


    //toggle Btn

    textArea.value = text;
    mainDiv.innerHTML = text;

    editBtn.addEventListener('click', () =>{
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })


    textArea.addEventListener('change', (event) =>{
        const value = event.target.value;
        mainDiv.innerHTML = value;

        updateLSData();
    })

     document.body.appendChild(note);


}


const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){ notes.forEach((note) =>  addNewNote(note))}

addBtn.addEventListener('click', () => addNewNote());