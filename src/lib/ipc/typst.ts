import { invoke } from "@tauri-apps/api";

export const compile = (path: string, content: string): Promise<TypstRenderResponse> =>
  invoke<TypstRenderResponse>("typst_compile", { path, content });

export const render = (page: number, scale: number, nonce: number): Promise<TypstRenderResponse> =>
  invoke<TypstRenderResponse>("typst_render", { page, scale, nonce });

export const compileBlock = (blockpath: string) => {
  invoke("compile_block")
}