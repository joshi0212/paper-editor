import { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

export default function WriteRoute() {
    let [activeBlock, setActiveBlock] = useState("test");
    
    function updateBuffer(value: String) {
        
    }

    return (<div className='w-full flex flex-row overflow-visible'>
        <AceEditor
        mode="typst"
        theme="github"
        onChange={value => {setActiveBlock(value)}}
        editorProps={{ $blockScrolling: true }}
        style={{height: "500px"}}
        height="100%"
        width="50%"
        fontSize={16}
        lineHeight={30}/>

        <code>{activeBlock}</code>
    </div>);
}
