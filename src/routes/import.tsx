import clsx from "clsx";


export default function Import() {
    const divStyle = "flex h-full w-full border-black border-2 p-4 ";
    const buttonStyle = "w-32 h-12 border-black border-2 mx-auto rounded-md";
    return (
        
        <div className="flex h-full justify-evenly  ">
            <div className= {`${divStyle}`} >
                <button className={buttonStyle}>
                    + Notes
                </button>
            </div>
                <div className={`${divStyle}`} >
                test
            </div>
            <div className={`${divStyle}`}>
                test
            </div>
        </div>
    );
}