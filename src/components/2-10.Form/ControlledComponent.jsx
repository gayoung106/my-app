import React, {useState} from 'react';

export default function ControlledComponent() {

    const [name, setName] = useState("");
    const [flavor, setFlavor] = useState("coconut");
    const [essay, setEssay] = useState("please write an essay about your favorite");

    function handleChange(event) {
        const name = event.target.name;
        if (name === "name") {
            setName(event.target.value);
        }
        if (name === "essay") {
            setEssay(event.target.value);
        }
        if (name === "flavor") {
            setFlavor(event.target.value);
        }
    }

    function handleSubmit(event) {
        alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <textarea name="name" type="text" value={name} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
                Essay:
                <input name="essay" type="text" value={essay} onChange={handleChange} />
            </label>
            <br />
            <br />
            <label>
                Pick your favorite flavor:
                <select name="flavor" value={flavor} onChange={handleChange}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>

            <input type="submit" value="Submit" />
        </form>
    );
}