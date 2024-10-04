import './Logo.css';

export const Logo: React.FunctionComponent = () => {
    return (
        <div className="text-center justify-center flex flex-col gap-5">
            <img src="to-do-list.png" alt="Notebook with a pen" width={200} />
            <p>To Do List</p>
        </div>
    );
}