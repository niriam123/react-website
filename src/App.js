import $ from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heropanel from "./components/Heropanel";
import './fonts/font.css'
import './components/index.css'
import Wanttostand from './components/Wanttostand';

function App() {
  return (
    <>
    <Heropanel />
    <Wanttostand />
    </>
  );
}

export default App;
