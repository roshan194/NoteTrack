import React from "react";

function Note() {
    const title = "This is the note tile";
    const content = "This is the note content";
    return (
        <div>
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    );
}

export default Note;