import React from "react";
import { Pagination } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import OptionInputField from "../../../components/FormElements/OptionInputField";
import {
  RootState,
  selectFilteredEmployees,
  setElementPerPage,
  setPage,
  useTypedSelector,
} from "../../../store";
interface Props {}

const EmployeePagination = (props: Props) => {
  const { t } = useTranslation();
  let pageOptions = [
    { value: "10" },
    { value: "20" },
    { value: "30" },
    { title: "all", value: "999999" },
  ];

  const dispatch = useDispatch();
  const { currentPage, rowsPerPage } = useTypedSelector((state) => state.employees.pagination);
  const { length } = useSelector(selectFilteredEmployees);

  let total = rowsPerPage >= length ? 0 : Math.ceil(length / rowsPerPage);

  return (
    <>
      <OptionInputField
        label="Rows per page"
        name="rpg"
        onChange={(e) => dispatch(setElementPerPage(+e.target.value))}
        options={pageOptions}
        value={rowsPerPage.toString()}
      />
      <Pagination
        disabled={false}
        current={currentPage}
        showFirstLast
        total={total}
        autoHide={false}
        size="small"
        delta={1}
        align="center"
        onChange={(e) => dispatch(setPage(e))}
        next={t("next")}
        previous={t("previous")}
      />
    </>
  );
};

export default EmployeePagination;
