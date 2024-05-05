import { addDoc, collection } from "firebase/firestore"
import "./App.css"
import Slider from "./Slider"
import db from "./firebase"

function App() {
  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = {
      url: formData.get("url"),
    }

    try {
      await addDoc(collection(db, "images"), data)
      console.log("data added")
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <>
      <h1>Самовары для Oleg</h1>
      <Slider />
      <form onSubmit={handleSubmit}>
        <input name="url" type="text" placeholder="Вставьте URL картинки" />
        <input type="submit" value="добавить самовар" className="btn" />
      </form>
    </>
  )
}

export default App
