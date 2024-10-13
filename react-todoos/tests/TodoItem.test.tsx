import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "../src/components/TodoItem";
import { useTodos } from "../src/states/TodoContext";
import { Todo } from "../src/types";

jest.mock("../src/states/TodoContext", () => ({
  useTodos: jest.fn(),
}));

describe("TodoItem Component", () => {
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();

  const todo: Todo = {
    id: 1,
    title: "Test Todo",
    content: "This is a test todo content",
    done: false,
  };

  beforeEach(() => {
    (useTodos as jest.Mock).mockReturnValue({
      toggleTodo: mockToggleTodo,
      deleteTodo: mockDeleteTodo,
    });
  });

  test("should render the todo item with correct content", () => {
    render(<TodoItem todo={todo} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
    expect(screen.getByText("This is a test todo content")).toBeInTheDocument();
  });

  test("should call toggleTodo when checkbox is clicked", () => {
    render(<TodoItem todo={todo} />);
    const checkbox = screen.getByTestId("checkbox");
    fireEvent.click(checkbox);
    expect(mockToggleTodo).toHaveBeenCalledWith(todo.id);
  });

  test("should call deleteTodo when delete button is clicked", () => {
    render(<TodoItem todo={todo} />);
    const deleteButton = screen.getByRole("button", { name: "X" });
    fireEvent.click(deleteButton);
    expect(mockDeleteTodo).toHaveBeenCalledWith(todo.id);
  });

  test("should display inner-filled div when todo is marked as done", () => {
    render(<TodoItem todo={{ ...todo, done: true }} />);
    const innerFilled = screen.getByTestId("inner-filled");
    expect(innerFilled).toBeInTheDocument();
  });
});
