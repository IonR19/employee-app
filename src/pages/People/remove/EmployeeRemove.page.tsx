import React from "react";
import { Button, Modal } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useRouteMatch } from "react-router";
import { deleteEmployeeById, RootState, selectEmployeeById } from "../../../store";

interface Props {}

const EmployeeRemove: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const {
    params: { id },
  } = useRouteMatch<{ id: string }>();
  const { t } = useTranslation();
  const employee = useSelector((state: RootState) => selectEmployeeById(state, id));

  const handleAcceptDelete = () => {
    dispatch(
      deleteEmployeeById({
        id,
        cb() {
          push("/");
        },
      })
    );
  };

  const loading = useSelector((state: RootState) => state.employees.loading.deleting)

  return (
    <Modal show showClose={false}>
      <Modal.Card className="rtl">
        <Modal.Card.Header>
          <Modal.Card.Title className="has-text-centered">{t("remove_emp")}</Modal.Card.Title>
        </Modal.Card.Header>
        <Modal.Card.Body>
          <p>
            <b>{t("name")}: </b>
            {employee.name}
          </p>
          <p>
            <b>{t("civil_id")}: </b>
            {employee.civil_id}
          </p>
          <p>
            <b>{t("file_no")}: </b>
            {employee.file_no}
          </p>
          <p>
            <b>{t("section")}: </b>
            {employee.section}
          </p>
        </Modal.Card.Body>
        <Modal.Card.Footer>
          <Button loading={loading} onClick={handleAcceptDelete}>{t("yes")}</Button>
          <Button onClick={() => push("/")}>{t("no")}</Button>
        </Modal.Card.Footer>
      </Modal.Card>
    </Modal>
  );
};

export default EmployeeRemove;
