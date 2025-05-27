use std::future::Future;
use std::path::Path;
use std::boxed::Box;
use std::sync::Mutex;
use tauri::State;
use glob::glob;
use std::path::PathBuf;


pub struct Project {
    name: String,
    id: String,
    base_path: PathBuf
}

#[tauri::command]
pub async fn compile_project(state: State<'_, Mutex<Project>>) -> Result<(), ()> {
    let state = state.lock().unwrap();

    let files = glob( state.base_path.join("blocks/*.typ").to_str().unwrap()).expect("No blocks found");
    Ok(())

}

#[tauri::command]
pub async fn load_project(state: State<'_, Mutex<Project>>, id: &str ) -> Result<(), ()> {
    let mut state = state.lock().unwrap();
    *state = read_project_data(id).await.unwrap();
    Ok(())
}

async fn read_project_data(id: &str) -> Result<Project, anyhow::Error> {
    Ok(Project {
        name: "Test".to_string(),
        id: id.to_string(),
        base_path: "/".into()
    })

}

