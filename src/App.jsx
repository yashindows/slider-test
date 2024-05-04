import "./App.css"
import Slider from "./Slider"

function App() {
  const images = [
    "https://sun9-14.userapi.com/impg/qzFzI1cuQs3019Tkr44GB3KR0Hh4txi-1q5aCA/nD9NRYocUG4.jpg?size=736x782&quality=95&sign=f57a8b124f098ac58c2e5529dbad52f1&type=album",
    "https://sun9-11.userapi.com/impg/DFUN2ALp-b-aFO_bgg5JlOE1vDQa-YQx7sOC6g/OMsNpqkW0dk.jpg?size=741x1080&quality=95&sign=410aee76836cd3d873ca82b749e1cd37&type=album",
    "https://sun9-4.userapi.com/impg/EHAdgosldQLsiOEkonMP5-xOix_BrwXftYhznA/Kw4pD5fjqJs.jpg?size=810x1080&quality=95&sign=bdccf68f7bcaf12a1d2e20387e092f97&type=album",
    "https://sun9-2.userapi.com/impg/4GZj6tDA1-8oy0vgLOyJc3OwkG_oq3JUAXSB_g/SNypiYaDmro.jpg?size=1280x853&quality=95&sign=3ceff4abde428671464c43c70c4a374a&type=album",
    "https://sun9-77.userapi.com/impg/A83wn_ICy0-QHekx4ubQlr_u3byGX3QFYH7Paw/6uN_9o1uH60.jpg?size=810x1080&quality=95&sign=e1dc371bbbb83424a3a9b5f3f9d5470e&type=album",
    "https://sun9-10.userapi.com/impg/E7ZHF8koT1mlOsY7Y_0NuCc5LcahS4YvvG03aA/1WS5GrIKjvM.jpg?size=810x1080&quality=95&sign=c68751441f568c71a981e8a33bcdf061&type=album",
    "https://sun9-29.userapi.com/impg/FrSHHA0NEHgdr9h6uZsW0g30gtGo-nZpvIsHqg/4rtCkJ_l21g.jpg?size=1280x960&quality=95&sign=a5deadfd3fefa0d0360db843833d9fb6&type=album",
  ]

  return (
    <>
      <h1>Slider Component</h1>
      <Slider images={images} />
    </>
  )
}

export default App
