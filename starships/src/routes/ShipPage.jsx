function ShipPage({ship}){
    return (
            <div id="ship" style={{justify: "center"}}>
            <h1 id="name">{ship.name}</h1>
            <table id="info">
                <tbody>
                <tr><th>Manufacturer</th><td>{ship.manufacturer}</td></tr>
                <tr><th>Cost in Credits</th><td>{ship.cost_in_credits}</td></tr>
                <tr><th>Length</th><td>{ship.length}</td></tr>
                <tr><th>Max Atmospheric Manuvering Speed</th><td>{ship.max_atmosphering_speed}</td></tr>
                <tr><th>Crew</th><td>{ship.crew}</td></tr>
                <tr><th>Passenger Capacity</th><td>{ship.passengers}</td></tr>
                <tr><th>Cargo Capacity</th><td>{ship.cargo_capacity}</td></tr>
                <tr><th>Life Support Time</th><td>{ship.consumables}</td></tr>
                <tr><th>Hyperdrive Rating</th><td>{ship.hyperdrive_rating}</td></tr>
                <tr><th>Ship Class</th><td>{ship.ship_class}</td></tr>
                </tbody>
            </table>
            </div>
    )
}
export default ShipPage;