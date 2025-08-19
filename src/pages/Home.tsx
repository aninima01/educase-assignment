import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Paragraph } from "../components/ui/Paragraph";
import { Link } from "react-router";
export const Home = () => {
  return (
    <div className="px-[24px] py-[56px] flex flex-col justify-end h-full gap-[16px]">
      <div className="flex flex-col justify-start gap-[8px] ">
        <Heading content="Welcome to PopX" />
        <Paragraph content="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
      </div>
      <div className="flex flex-col gap-[16px]">
        <Link to={"/signup"}>
          <Button variant="primary" text="Create Account" />
        </Link>
        <Link to={"/login"}>
          <Button variant="secondary" text="Already Registered? Login" />
        </Link>
      </div>
    </div>
  );
};
