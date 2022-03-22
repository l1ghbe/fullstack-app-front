import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";

const GoalForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createGoal({ text }));
        setText();
    };
    return (
        <section className="heading">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text"></label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <button className="btn btn-block:submit">Add goal</button>
            </form>
        </section>
    );
};

export default GoalForm;
