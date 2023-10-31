import { CheckboxButton } from "../../components/page/CategoryCheckbox";
import Button from "../../components/common/Button";
import TopBar from "../../components/common/TopBar";
import useLoadingButton from "../../hooks/useLoadingButton";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { withAsync } from "../../helpers/withAsync";
import { addPage } from "../../api/PageApi";
import useToken from "../../hooks/useToken";
import {
  PageInitialState,
  resetPageInfo,
} from "../../store/reducer/page.reducer";
import { AxiosError } from "axios";
import { useDispatch } from "react-redux";

const AddPageStep3: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, startLoading, endLoading] = useLoadingButton();
  const token = useToken();
  const dispatch = useDispatch<AppDispatch>();

  const page: PageInitialState = useSelector<RootState>(
    (state) => state.teratany_page
  ) as PageInitialState;

  let categories: Array<string> = [];

  const getCheckValue = (e: any, isChecked: boolean) => {
    if (!isChecked) {
      categories.push(e.target.dataset.type);
    } else {
      categories = categories.filter((cat) => cat !== e.target.dataset.type);
    }
  };

  const addPageLastStep = async () => {
    startLoading();

    const { error } = await withAsync(() =>
      addPage(
        token,
        page.name,
        page.category,
        page.coordonates,
        page.pageType,
        page.address,
        page.email,
        page.phoneNumber,
        page.website,
        page.description,
        page.country,
        page.deviantWalletID
      )
    );

    if (error instanceof AxiosError) {
      endLoading();
      const error_message: string =
        error?.response?.data.description ?? error.message;
      toast.error(error_message);
    } else {
      endLoading();
      toast.success("Page added successfully");
      setTimeout(() => {
        navigate("/user");
        dispatch(resetPageInfo());
      }, 2000);
    }
  };

  return (
    <>
      <TopBar text="Select your categories" />

      <div className=" mt-16 0 flex items-center p-4 w-full flex-col">
        <div className="flex flex-wrap mb-8">
          <CheckboxButton value="b" onClick={getCheckValue} text="No poverty" />
          <CheckboxButton
            value="c"
            onClick={getCheckValue}
            text="Zero hunger"
          />
          <CheckboxButton
            value="d"
            onClick={getCheckValue}
            text="Good health and well-being"
          />
          <CheckboxButton
            value="e"
            onClick={getCheckValue}
            text="Quality education"
          />
          <CheckboxButton
            value="f"
            onClick={getCheckValue}
            text="Gender equality"
          />
          <CheckboxButton
            value="g"
            onClick={getCheckValue}
            text="Clear water and sanitation"
          />
          <CheckboxButton
            value="h"
            onClick={getCheckValue}
            text="Affordable and clean energy"
          />
          <CheckboxButton
            value="i"
            onClick={getCheckValue}
            text="Decent work and growth"
          />
          <CheckboxButton
            value="j"
            onClick={getCheckValue}
            text="Industry, innovation and infrastructure"
          />
          <CheckboxButton
            value="k"
            onClick={getCheckValue}
            text="Reduce inequalities"
          />
          <CheckboxButton
            value="l"
            onClick={getCheckValue}
            text="Sustainable cities and communities"
          />
          <CheckboxButton
            value="m"
            onClick={getCheckValue}
            text="Responsable consumption and production"
          />
          <CheckboxButton
            value="n"
            onClick={getCheckValue}
            text="Climate action"
          />
          <CheckboxButton
            value="o"
            onClick={getCheckValue}
            text="Life below water"
          />
          <CheckboxButton
            value="p"
            onClick={getCheckValue}
            text="Life on land"
          />
          <CheckboxButton
            value="q"
            onClick={getCheckValue}
            text="Peace, justice"
          />
          <CheckboxButton
            value="a"
            onClick={getCheckValue}
            text="Partenerships for other goals"
          />
        </div>
        <Button
          isLoading={isLoading}
          width="w-[90%]"
          height="py-3"
          className="mb-4"
          name="Finish"
          onClick={addPageLastStep}
        />
      </div>
    </>
  );
};

export default AddPageStep3;
