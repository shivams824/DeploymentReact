
import axios from "axios";
import trash from "../../../assets/trash.png";
import "./Trash.css";
import 'react-toastify/dist/ReactToastify.css';

interface TrashProps {
  data: any[]; 
  reloadTable: () => void; 
}


const Trash: React.FC<TrashProps> = (props: any) => {

  const deleteVal = () => {
    const itemId = props.data.id;
    const entityType = props.data.type;


    axios
      .delete(`http://localhost:5104/api/${entityType}/${itemId}`)
      .then((response) => {
        console.log("Item deleted successfully");
        alert("Error deleting the asset");
        console.log(response);
        // reloadTable();
      })
      .catch((error) => {
        alert("Asset deleted successfully");
        console.error("Error deleting item", error);
      });
      console.log(itemId);
      console.log(entityType);
  };

  return (
    <img src={trash} alt="trash" className="trash-img" onClick={deleteVal} />
  );
};

export default Trash;

