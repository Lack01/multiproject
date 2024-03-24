import React, { useEffect, useState } from "react";

const IMAGES = [
    "https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/gitlab-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/python-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/android-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/apple-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/facebook-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/go-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/nodejs-original.svg?size=128&color=currentColor",
    "https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor"

].flatMap((image) => [`a|${image}`, `b|${image}`])
 .sort(() => Math.random() - 0.5);


export default function Memotest() {
    const [guessed, setGuessed] = useState<string[]>([]);
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        if(selected.length == 2) {
            if (selected[0].split("|")[1] == selected[1].split("|")[1]) {
                setGuessed((guessed) => guessed.concat(selected));
            }
            setTimeout(() => setSelected([]), 1000);
        }
    }, [selected]);
    
    useEffect(() => {
        if (guessed.length == IMAGES.length) {
            alert("You Win!");
            location.reload();
        }
    }, [guessed]);

    return (
        <ul style={{
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', 
            gap: 24 }}>

            {IMAGES.map((image) => {
                const [, url] = image.split("|");
                return(
                    <li 
                    key={image}
                    style={{cursor: "pointer", padding: 12, border: "1px solid #666", borderRadius: 12}} 
                    onClick={()=> selected.length < 2 && setSelected ((selected) => selected.concat(image))} 
                    >
                        
    
                    {selected.includes(image) || guessed.includes(image) ? (
                        <img  
                        alt="icon" 
                        src={url}
                        /> 
                    ) : (
                        <img
                        alt="icon" 
                        src="https://icongr.am/clarity/help.svg?size=128&color=currentColor"
                        />     
                    )}
                </li>
                )
            })}          
        </ul>
    );  
}   