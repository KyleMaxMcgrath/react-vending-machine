import { BrowserRouter, Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import Chips from "./Chips";
import Donuts from "./Donuts";
import Gum from "./Gum";
import NavBar from "./NavBar"

const VendingMachine = () => {
    return (
        <BrowserRouter>
        <Route exact path='/'>
            <h1>I'm a vending machine!</h1>
            <h2>What would you like to eat?</h2>
            <NavBar/>
        </Route>
        <Route exact path='/donuts'>
            <Link to='/'><h1>Back</h1></Link>
            <Donuts />
        </Route>
        <Route exact path='/chips'>
            <Link to='/'><h1>Back</h1></Link>
            <Chips />
        </Route>
        <Route exact path='/gum'>
            <Link to='/'><h1>Back</h1></Link>
            <Gum />
        </Route>
        </BrowserRouter>
    );
};

export default VendingMachine;