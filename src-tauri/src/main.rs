#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod engine;
mod project;

use project::Project;

use env_logger::Env;
use log::info;
use std::sync::{Arc, Mutex};
use tauri::{Manager};

#[tokio::main]
async fn main() {
    env_logger::init_from_env(Env::default().default_filter_or("info"));

    tauri::Builder::default()
        .setup(|app| {
            let default_project : Option<Project> = None;
            app.manage(Mutex::new(default_project));
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![

        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
