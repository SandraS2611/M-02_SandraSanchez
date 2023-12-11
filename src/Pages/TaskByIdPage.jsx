// import { TaskItem } from "../components/TaskItem";
// import { useTask } from "../hooks/useTask";

// export const TaskByIdPage = () => {

//   const {task} = useTask()

//   return (
//     <div>
//       {task?.title ? (
//         <TaskItem
//           key={task.id}
//           title={task.title}
//           description={"Lorem ipsum dolor sit amet"}
//           done={task.completed}
//         />
//       ) : (
//         <p>Cargando...</p>
//       )}
//     </div>
//   );
// };




  <nav className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
     <a className="navbar-brand" href="#">
       Navbar
      </a>
       <button */}
       className="navbar-toggler"
       type="button"
       data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
       aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav">
       <Link className="nav-link active" to="/">Home</Link>
         <Link className="nav-link" to="/perfil">Perfil</Link>
         <Link className="nav-link active" to="/tareas">Tareas</Link>
       </div>
     </div>
   </div>
 </nav>  
