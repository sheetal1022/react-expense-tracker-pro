import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Expense } from "../types/expense";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";

export default function Dashboard() {
    const [expenses, setExpenses] = useLocalStorage<Expense[]>("expenses", []);

    const addExpense = (expense: Expense) => {
        setExpenses([...expenses, expense]);
    };

    return (
        <div>
            <h1>Expense Tracker Pro</h1>
            <ExpenseForm onAddExpense={addExpense} />
            <ExpenseList expenses={expenses} />
        </div>
    );
}
