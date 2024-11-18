import Content from './Content';
import Figure from './Figure';
import '../center.css';

function Center() {
    return (
        <>
        <div className="center_container">
            <div className="child_container">
        <Content/>
        <Figure />
        </div>
        </div>
        </>
    )
}

export default Center;