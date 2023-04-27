import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

const ButtonPage = () => {
  return (
    <>
      <div>
        <Button primary>
          <GoBell /> Primary
        </Button>
      </div>
      <div>
        <Button secondary>Secondary</Button>
      </div>
      <div>
        <Button success>Success</Button>
      </div>
      <div>
        <Button danger>
          <GoCloudDownload /> Danger
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase /> Warning
        </Button>
      </div>
      <div className="my-4"></div>
      <div>
        <Button secondary outline>
          Secondary Outline!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Primary Rounded
        </Button>
      </div>
    </>
  );
};

export default ButtonPage;
