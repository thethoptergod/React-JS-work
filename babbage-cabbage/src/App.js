import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header name="Babbage Cabbage" event="50 for 50" date="January 7th-9th from 9:00 am to 3:00 pm" />
      <Item title="Charcoal Grill" desc="$197.00" img="https://i5.walmartimages.com/asr/eb186e36-0a07-4678-8234-aa87df59f122_1.e8d8132630c46132efe67d2ec4c4cad3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"/>
      <Item title="Fruit Platter" desc="$12.88" img="https://cdn11.bigcommerce.com/s-88ghculnic/images/stencil/2048x2048/products/236/1042/Fresh-Fruit-Platter__01566.1572902607.jpg?c=2" />
      <Item title="Gourmet Cupcakes 6 Count" desc="$19.99" img="https://cdn11.bigcommerce.com/s-l5dryyv/images/stencil/1280x1280/products/10272/6582/BXX00096-main1__28674.1596744857.jpg?c=2" />
      <Item title="Charcuterie Board" desc="$29.87" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFB-OPunLeDnjYzY5WpDA-bCVxenFJXGwtvA&usqp=CAU" />
      <Item title="Organic Avocados" desc="$4.24" img="https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/avocado.jpg?h=23e79702&itok=V-RSvLPH" />
      <Item title="Kitchen Knife Set" desc="$63.59" img="https://i5.walmartimages.com/asr/ea13d01a-d6de-4262-9cf0-593e67b1d67c_1.3adf22e229f67e57f3065c1a4e9b3196.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" />
      <Item title="Cabbage" desc="$3.75" img="https://cdn-prod.medicalnewstoday.com/content/images/articles/284/284823/one-big-cabbage.jpg" />
      <Footer hours="9am - 9pm, Tuesday-Sunday" location="123 Babbage Street, Beverly Hills CA 90210" phone="101-101-1010" />
    </div>
  );
}

export default App;
