import { RxDotFilled } from "react-icons/rx";

type StatusBadgeProps = {
  status: string;
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <div
      className={`
    flex px-3 py-1 justify-center items-center gap-1 text-[12px] w-fit rounded-[20px] mb-[20px] ${
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
      <RxDotFilled className="text-xl" />
      <span>
        {status === "todo"
          ? "To do"
          : status === "inprogress"
          ? "In progress"
          : status === "inreview"
          ? "In Review"
          : "Completed"}
      </span>
    </div>
  );
};

export default StatusBadge;
