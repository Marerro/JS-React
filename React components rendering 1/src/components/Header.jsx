import '../header.css'

function Header() {
  const data = new Date();
    return (
        <>
        <div className="container">
          <div className="container-child">
            <div className="text">
          <h1>Welcome to 30 Days of React</h1>
          <h3>Getting Started React</h3>
          <h4>JavaScript Library</h4>
          <h5>Instructor: Asabeneh Yetayeh</h5>
          <p>Date: {data.getFullYear()}-{data.getMonth() + 1}-{data.getDate()} </p>
            </div>
          </div>
        </div>
        </>
    )
}

export default Header;