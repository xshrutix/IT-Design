import Vertical from "./Layer1";
import Vertical2 from "./Layer2";
import Sticky from 'react-sticky-el';
import Vertical3 from "./Layer3";
import Vertical4 from "./Layer4";
import Vertical5 from "./Layer5";
import Vertical6 from "./Layer6";

const Stack = () => {
    return (
        <div className="relative"> {/* Added relative positioning */}
            <Sticky bottomOffset={200} zIndex={50}> {/* Added zIndex */}
                <Vertical />
            </Sticky>
            <Sticky zIndex={50}> {/* Added topOffset and zIndex */}
                <Vertical2 />
            </Sticky>
            <Sticky zIndex={50}> {/* Added topOffset and zIndex */}
                <Vertical3 />
            </Sticky>
            <Sticky zIndex={50}> {/* Added topOffset and zIndex */}
                <Vertical4 />
            </Sticky>
            <Sticky zIndex={50}> {/* Added topOffset and zIndex */}
                <Vertical5 />
            </Sticky>
            <Sticky   > {/* Added topOffset and zIndex */}
                <Vertical6 />
            </Sticky>
        </div>
    )
}

export default Stack;
