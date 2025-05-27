import Editor from "@monaco-editor/react";

export default function WriteRoute() {
  return (
    <div>
      <Editor
        className="w-1/2"
        defaultLanguage="typst"
        defaultValue="// some comment"
      />
      ;
    </div>
  );
}
