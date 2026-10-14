---
layout: default
title: "Vandaag"
parent_folder: agenda
show_submenu: true
---
<style>

#todo-add,
#todo-form {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
}

#todo-choice,
#todo-input {
    flex: 1;
    min-width: 0;
}

#todo-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
}

#todo-list li {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    margin-bottom: 0.7rem;
}

.todo-done {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-size: 1rem;
    flex-shrink: 0;
}

#todo-clear {
    margin-top: 0.5rem;
}


#todo-add,
#todo-form {
    display: flex;
    gap: 0.4rem;
    margin-bottom: 0.6rem;
    align-items: stretch;
}

#todo-choice,
#todo-input {
    flex: 1;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
    font: inherit;
    font-size: 0.85rem;
    padding: 0.35rem 0.45rem;
    color: #333;
    background: #f5f5f5;
    border: none;
    border-radius: 0;
}

#todo-choice {
    cursor: pointer;
}

#todo-choice:focus,
#todo-input:focus {
    outline: 1px solid rgb(154, 210, 76);
}

#todo-add-stock,
#todo-form button,
#todo-clear {
    font: inherit;
    font-size: 0.8rem;
    padding: 0.35rem 0.55rem;
    color: #222;
    background: rgb(154, 210, 76);
    border: none;
    border-radius: 0;
    cursor: pointer;
}

#todo-add-stock:hover,
#todo-form button:hover,
#todo-clear:hover {
    color: #fff;
    background: #333;
}

#todo-list {
    list-style: none;
    padding: 0;
    margin: 0.8rem 0;
}

#todo-list li {
    display: flex;
    align-items: baseline;
    gap: 0rem;
    margin-bottom: 0rem;
}

.todo-done {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    font-size: 1rem;
    flex-shrink: 0;
}

#todo-clear {
    margin-top: 0.3rem;
    visibility: hidden;
}

</style>

<main>

 <div class="left">

<h4>Mijn to-do lijstje</h4>

<div id="todo-add">
            <select id="todo-choice">
                <option value="">Kies een klus uit de voorraad...</option>
            </select>
            <button type="button" id="todo-add-stock">
                Toevoegen
            </button>
        </div>

<form id="todo-form">
            <input
                type="text"
                id="todo-input"
                placeholder="Of bedenk zelf een klusje..."
                autocomplete="off"
            >
            <button type="submit">Toevoegen</button>
        </form>

<ul id="todo-list"></ul>

<button type="button" id="todo-clear">
            Leeg mijn lijstje
        </button>

</div>

<script src="{{ '/js/todo.js' | relative_url }}"></script>

</main>
