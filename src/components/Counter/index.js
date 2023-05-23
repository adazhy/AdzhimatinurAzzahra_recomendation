import { useEffect, useState } from "react";

function Counter() {
    //useState mengembalikan sepasang value(array)
    const [angka, setAngka] = useState(0);

    function addAngka() {
        setAngka(angka + 1);
    }

    // useEffect
    function updateDOM() {
        console.log("Lifecycle: Dimount");

        document.title = "Hasil: ${angka}";
    }

    useEffect(updateDOM, [angka]);

    console.log("Lifecycle: Dirender");

    return (
        <div>
            <p>Hasil: {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;