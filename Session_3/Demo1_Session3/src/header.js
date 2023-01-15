
import "./style.css";
import ReactDOM from "react-dom/client";

function Header() {
    return (
      <div className="header">
        
          <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvAoOOgHtZloYXgy0AFzd9SuxDlVw8s0sVg&usqp=CAU" alt="Logo" />
       
        <div className="search">
          <input
            type="text"
            placeholder="Search your item here"
            className="search"
          />
        </div>
        
        <img className="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlM5sSdOrNTrSbpoJ5QFbKuTEExoNVmGvp8_X35FU&s" ></img>
        
        
      </div>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Header />);