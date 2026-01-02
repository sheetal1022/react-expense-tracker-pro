import type { Expense } from "../types/expense";

interface Props {
    expenses: Expense[];
}

export default function ExpenseList({ expenses }: Props) {
    if (expenses.length === 0) return <p>No expenses added yet.</p>;

    return (
        <ul>
            {expenses.map(exp => (
                <li key={exp.id}>
                    {exp.title} - ₹{exp.amount} ({exp.category})
                </li>
            ))}
        </ul>
    );
}
