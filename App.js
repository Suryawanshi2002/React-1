// const heading = React.createElement('h1', {id:"heading"},"Hellow dosto mera naam hai doremon");

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

/*
    <div id = "parent">
        <div id = "child">
            <h1> I am an heading </h1>
        </div>
    </div>


*/

const parent = React.createElement(
    'div',
    {id:"parent"},
    React.createElement(
        'div',{id:"child"}, 
        React.createElement(
            'h1',{}, "I am an heading")
    )
    );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);