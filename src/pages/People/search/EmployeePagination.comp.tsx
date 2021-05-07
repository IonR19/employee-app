import React from "react";
import { Pagination } from "react-bulma-components";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import OptionInputField from "../../../components/FormElements/OptionInputField";
import { RootState, setElementPerPage, setPage } from "../../../store";
interface Props {}

const EmployeePagination = (props: Props) => {
  const dispatch = useDispatch();
  const goToPage = (page: number) => {
    dispatch(setPage(page));
  };
  const { currentPage, rowsPerPage, length } = useSelector((state: RootState) => {
    return state.employees.pagination;
  });

  const { t } = useTranslation();

  return (
    <>
      <OptionInputField
        label="Rows per page"
        name="rpg"
        onChange={(e) => dispatch(setElementPerPage(+e.target.value))}
        options={[{ value: "10" }, { value: "20" }, { value: "30" }, { title: "all", value: "999999" }]}
        value={rowsPerPage.toString()}
      />
      <Pagination
        disabled={false}
        current={currentPage}
        showFirstLast
        total={rowsPerPage >= length ? 0 : Math.ceil(length / rowsPerPage)}
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
