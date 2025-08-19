import { Link } from "react-router";
import { Button } from "../components/ui/Button";
import { Heading } from "../components/ui/Heading";
import { Input } from "../components/ui/Input";
import { Radio } from "../components/ui/Radio";

export const Signup = () => {
  return (
    <div className="px-[24px] py-[44px] h-full flex flex-col justify-between">
      <div className="flex flex-col gap-[24px]">
        <Heading content="Create your PopX Account" />
        <Input
          label="Full Name"
          placeholder="Enter your Full Name"
          type="text"
          required={true}
        />
        <Input
          label="Phone Number"
          placeholder="Enter your Phone number"
          type="number"
          required={true}
        />
        <Input
          label="Email Address"
          placeholder="Enter your Email"
          type="email"
          required={true}
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          required={true}
        />
        <Input
          label="Company Name"
          placeholder="Enter your Company Name"
          type="text"
        />

        <Radio
          name="agency"
          values={["Yes", "No"]}
          label="Are you an Agency?"
        />
      </div>
      <Link to={"/account"}>
        <Button variant="primary" text="Create Account" />
      </Link>
    </div>
  );
};
