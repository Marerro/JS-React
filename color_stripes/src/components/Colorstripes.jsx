function Colorstripes ({ hexaColor }) {

    let colors = [];

    for(let i = 0; i <= 5; i++) {
        colors.push(hexaColor());
    }

return (
    <>
    <div className="container"></div>
    <div className="container_body">
        <h1 className="text-center">Color stripes</h1>
        <div className="w-1/2 m-auto background">
        {colors.map((color, index) => {
        return (
            <div
            className="h-16 border-2 flex justify-center items-center text-white"
            key={index}
            style={{backgroundColor: `${color}`}}>{color}</div>
        )
    })}
        </div>
    </div>
    </>
)

}

export default Colorstripes;