import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App bg-gray-100 flex flex-col h-screen justify-between">
      <Navbar />
      <Editor />
    </div>
  );
}

export default App;
