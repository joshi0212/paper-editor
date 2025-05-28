export default function Import() {
    const divStyle = "flex h-full w-full border-black border-2 p-4 ";
    const buttonStyle = "w-32 h-12 border-black border-2 mx-auto rounded-md";
    const blockStyle = "w-full h-10 rounded-md my-1 border-1 hover:bg-black hover:text-white";
    return (
        <div className="flex h-full justify-evenly  ">
            <div className={`${divStyle}`} >
                <button className={buttonStyle}>
                    + Notes
                </button>
            </div>
            <div className={`${divStyle}`} >
                <button className={buttonStyle}>
                    + Literature
                </button>
            </div>
            <div className={`${divStyle}`}>
                <div className="flex flex-col w-full">
                    <button className={blockStyle}>Block 1</button>
                    <button className={blockStyle}>Block 2</button>
                    <button className={blockStyle} >Block 3</button>
                    <button className={blockStyle}>Block 4</button>
                </div>
            </div>
        </div>
    );
}