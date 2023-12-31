import { Button } from "./ui/button";

type AddNewProps = {
  status: string;
};

const AddNew = ({ status }: AddNewProps) => {
  return (
    <Button
      className={`w-full xl:w-[270px] h-8 hover:bg-none] mt-[24px]
  ${
    status === "todo"
      ? "bg-[#EBEEFC] text-[#3659E2]"
      : status === "inprogress"
      ? "bg-[#FDF2FA] text-[#EE46BC]"
      : status === "inreview"
      ? "bg-[#ECF6FC] text-[#3FA1E3]"
      : "bg-[#E7F8E9] text-[#12BB23]"
  }
  `}
    >
      + Add new
    </Button>
  );
};

export default AddNew;
