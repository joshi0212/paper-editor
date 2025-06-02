class Block {
    constructor() {
        
    }
    notes : String[] = [];
    content : String = "";

}

class Project {
    title: String;
    blocks: Block[] = [];

    constructor(title: String) {
        this.title = title;
    }
    
}