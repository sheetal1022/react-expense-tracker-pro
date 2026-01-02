import { useState } from "react";
import type { Expense } from "../types/expense";

interface Props {
    onAddExpense: (expense: Expense) => void;
}

export default function ExpenseForm({ onAddExpense }: Props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !amount || !category || !date) return;

        onAddExpense({
            id: Date.now().toString(),
            title,
            amount: +amount,
            category,
            date,
        });

        setTitle("");
        setAmount("");
        setCategory("");
        setDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
            <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
            <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            <button>Add Expense</button>
        </form>
    );
}
