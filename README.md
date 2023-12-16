# Todo List App ReadMe

## Project Overview

Welcome to the Todo List application! This frontend-only app is designed to help users efficiently manage their tasks. It allows users to perform actions such as adding new tasks, editing existing ones, removing tasks, and marking tasks as completed. The application also handles different task states and provides a user-friendly interface for an optimal user experience.

## Key Features and User Interactions

### Task Addition
- Users can easily add new tasks (todos).
- Each task requires a mandatory title (text input), an optional description (text input), and an optional deadline (date input).

### Task Editing
- Users have the flexibility to edit the details of existing tasks, including the title, description, and deadline.

### Task Deletion
- Users can remove tasks as needed.
- Removed tasks are moved to a 'Trash' section where users can still view them.

### Task Status Management
- Each task can be in one of three states:
  - Pending: The default state when a task is created.
  - Completed: Users can mark tasks as complete.
  - Overdue: Tasks are automatically marked as overdue if the deadline has passed. Overdue tasks cannot be marked as completed.
  - Removed: Set when users commit deletion.

## User Interface

- The application features an intuitive and responsive user interface.
- The UI components adhere to Ant Design for a modern and consistent look and feel.

## Technical Specifications

### Framework and Libraries

- React is used for building the user interface.
- State management is handled with Redux, utilizing Redux Toolkit (RTK).

### Form Handling

- Efficient form state management is achieved using Formik.
- Form validation is implemented using Yup.

### Language

- The application is written in TypeScript for a more robust and type-safe codebase.

### Responsive Design

- The application is designed to be responsive, ensuring optimal performance on both desktop and mobile devices.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Run the application using `npm start` or `yarn start`.
4. Access the app in your web browser at the provided address.

Feel free to explore the codebase, and don't hesitate to reach out if you have any questions or feedback. Happy task managing!
