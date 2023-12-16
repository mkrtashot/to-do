import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, DatePicker, Form, Input, Modal } from "antd";
import useStoreDispatch from "../hooks/use-store-dispatch";
import { TaskType } from "../helpers/types";
import dayjs, { Dayjs } from "dayjs";

import "./ModalTask.css";

type FieldType = {
  title: string;
  description?: string;
  dueDate?: string;
  status: string;
};

const validationSchema = yup.object().shape({
  title: yup.string().required("This field is mandatory"),
  description: yup.string(),
  dueDate: yup.string(),
  status: yup.string(),
});

function ModalTask({
  closeNewTaskContainer,
  task,
}: {
  closeNewTaskContainer: () => void;
  task: TaskType;
}) {
  const filteredTask = {
    ...task,
    dueDate: task.dueDate ? dayjs(task.dueDate) : undefined,
  };
  const { addOrUpdateTask } = useStoreDispatch();
  return (
    <Modal open footer={null} onCancel={closeNewTaskContainer}>
      <Formik
        initialValues={filteredTask}
        validationSchema={validationSchema}
        onSubmit={(value) => {
          const result = { ...value };
          console.log(result.dueDate);
          console.log(typeof result.dueDate);
          console.log(typeof result.dueDate !== "string");
          if (result.dueDate && typeof result.dueDate !== "string") {
            result.dueDate = task.dueDate as unknown as Dayjs;
          }
          addOrUpdateTask(result as unknown as TaskType);
          closeNewTaskContainer();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting,
        }) => {
          return (
            <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              onFinish={handleSubmit}
              initialValues={filteredTask}
            >
              <Form.Item<FieldType>
                label="Title"
                name="title"
                hasFeedback={!!errors.title}
                validateStatus={errors.title && "error"}
                help={errors.title}
              >
                <Input value={values.title} onChange={handleChange} />
              </Form.Item>

              <Form.Item<FieldType> label="Description" name="description">
                <Input value={values.description} onChange={handleChange} />
              </Form.Item>

              <Form.Item<FieldType> label="Due Date" name="dueDate">
                <DatePicker
                  value={values.dueDate}
                  onChange={(_, dateString) =>
                    setFieldValue("dueDate", dateString)
                  }
                />
              </Form.Item>

              <div className="buttons-container">
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button onClick={closeNewTaskContainer}>Cancel</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
}

export default ModalTask;
