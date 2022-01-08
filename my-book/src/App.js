import './App.css';
import Header from './components/Header';
import Book from './components/Book';
function App() {
  return (
    <div className="App">
      <Header title="Book App" item1="Home" item2="Books" item3="About" />
      <Book  name="The Fountainhead" description="Reque putent singulis ne pri, eos cu fabulas inciderint. Vidit tritani singulis eos ea, ut sit nobis aliquip quaerendum." image="https://images.penguinrandomhouse.com/cover/9780452286757" />
      <Book  name='Fanged Noumena' description="His ex error diceret, nam minim prodesset no. Ius doming eligendi facilisis eu. Ad nam odio complectitur, has ne suscipit prodesset." image="https://mitpress.mit.edu/sites/default/files/styles/large_book_cover/http/mitp-content-server.mit.edu%3A18180/books/covers/cover/%3Fcollid%3Dbooks_covers_0%26isbn%3D9780955308789%26type%3D.jpg?itok=rC_JISIo"  />
    </div>
  );
}

export default App;
