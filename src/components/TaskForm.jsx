import { useState ,useContext } from "react";
import {TaskContext} from '../context/TaskCotext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {  // u forma ejectar el clic
    e.preventDefault();

    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4' >
        <h1 className="text-2xl text-white font-bold m-3">Crea Tu Tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}  /// valor del imput
          autoFocus // se posiciona en ese lugar
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcioon de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-400 px-3 py-1 text-white rounded-md hover:bg-slate-400">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
