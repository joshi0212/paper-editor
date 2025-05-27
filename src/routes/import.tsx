import clsx from "clsx";


export default function Import() {
    const divStyle = "flex h-full w-full border-black border-2";
    return (
        
        <div className="flex h-full justify-evenly">
            <div className= {`${divStyle}`} >
                test
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